"use client";

import { appContext } from "@/context/AppContext";
import { editUser } from "@/services/apiLogin";
import { useInvitation } from "@/services/customHook";
import { Button, Empty, Input, Row, Upload } from "antd";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { BsClipboard, BsClipboardFill } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";
import { HiEnvelopeOpen, HiOutlineEnvelope } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { IoClose, IoPricetags, IoPricetagsOutline } from "react-icons/io5";
import {
  MdAdminPanelSettings,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { RiUserStarFill, RiUserStarLine } from "react-icons/ri";
import { RcFile } from "antd/es/upload";
import { UploadRequestOption } from "rc-upload/lib/interface";
// import { UploadFile } from "antd";
import { message } from "antd";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { generateImagesName } from "@/helpers/functions";
import { storage } from "@/firebase/firebase";
import styles from "./Header.module.css";

type Props = {
  position: string;
  isVisible: boolean;
};

export const HeaderBuild = ({ position, isVisible }: Props) => {
  const context = useContext(appContext);

  if (!context) {
    return null; // o un fallback
  }
  const { logged, logout, user, login } = context;

  const { response, loading, error, operation } = useInvitation();
  const [isScrollTop, setIsScrollTop] = useState(false);
  const [role, setRole] = useState("Owner");
  const [superUser, setSuperUser] = useState(false);
  const [enterpriseName, setEnterpriseName] = useState<string | null>(null);
  const [enterpriseLogo, setEnterpriseLogo] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const getFirstLetterUpperCase = (str: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase();
  };

  useEffect(() => {
    if (position === "land-page") {
      const handleScroll = () => {
        if (window.scrollY >= 0 && window.scrollY <= 100) {
          setIsScrollTop(false);
        } else {
          setIsScrollTop(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }

    if (user) {
      setRole(user.role);
      if (user.enterprise) {
        setEnterpriseName(user.enterprise.name);
        setEnterpriseLogo(user.enterprise.logo);
      }
    }
  }, []);

  const navItems = [
    {
      name: "Explora",
      icon: HiOutlineEnvelope,
      selected: HiEnvelopeOpen,
      path: "/discover",
      position: "discover",
    },
    {
      name: "Conoce",
      icon: IoPricetagsOutline,
      selected: IoPricetags,
      path: "/pricing",
      position: "pricing",
    },
    {
      name: "Tablero",
      icon: BsClipboard,
      selected: BsClipboardFill,
      path: "/invitations",
      position: "invitations",
    },
    {
      name: "Empresa",
      icon: RiUserStarLine,
      selected: RiUserStarFill,
      path: "",
      position: "distributor",
    },
    {
      name: "Admin",
      icon: MdOutlineAdminPanelSettings,
      selected: MdAdminPanelSettings,
      path: "/admin",
      position: "admin",
    },
  ];

  const handleURL = (downloadURL: string) => {
    if (enterpriseName) {
      editUser(operation, user.uid, enterpriseName, downloadURL);
      setEnterpriseLogo(downloadURL);
      const newUser = {
        name: user.name,
        uid: user.uid,
        role: user.role,
        enterprise: {
          name: enterpriseName,
          logo: downloadURL,
          discount: user.enterprise.discount,
          color: user.enterprise.discount,
        },
      };
      login(newUser);
    }
    //Edit user and add url
  };

  const saveAndClose = () => {
    if (enterpriseName && enterpriseLogo) {
      //Edit user and add url
      editUser(operation, user.uid, enterpriseName, enterpriseLogo);
      const newUser = {
        name: user.name,
        uid: user.uid,
        role: user.role,
        enterprise: {
          name: enterpriseName,
          logo: enterpriseLogo,
          discount: user.enterprise.discount,
          color: user.enterprise.discount,
        },
      };
      login(newUser);
      setSuperUser(false);
    }
  };

  const handleCustomRequest = ({ file }: UploadRequestOption) => {
    // Ant Design usa RcFile internamente, así que lo casteamos si es necesario
    const realFile = file as RcFile;
    if (!realFile) return;

    // Verificar si el archivo es menor a 5MB
    const isLt5M = realFile.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error("El archivo debe ser menor a 5MB.");
      return;
    }

    const storageRef = ref(
      storage,
      `superUsers/${user.uid}/${generateImagesName()}`
    );

    const uploadTask = uploadBytesResumable(storageRef, realFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // setProgress(progress); ← descomenta si usas un estado
      },
      (error) => {
        console.error("Upload error:", error);
        message.error("Hubo un error al subir la imagen.");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          handleURL(downloadURL);
        });
      }
    );
  };

  const removeImageDB = () => {
    //Edit user and remove logo
    if (enterpriseName) {
      editUser(operation, user.uid, enterpriseName, null);
      setEnterpriseLogo(null);
      const newUser = {
        name: user.name,
        uid: user.uid,
        role: user.role,
        enterprise: {
          name: enterpriseName,
          logo: null,
          discount: user.enterprise.discount,
          color: user.enterprise.discount,
        },
      };
      // deleteImageFB(url)
      login(newUser);
    }
  };

  const deleteImageFB = async (url: string) => {
    const filePath = extractFilePathFromURL(url);
    const imageRef = ref(storage, filePath);

    try {
      await deleteObject(imageRef);
      removeImageDB();
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const extractFilePathFromURL = (url: string) => {
    const regex =
      /https:\/\/firebasestorage\.googleapis\.com\/v0\/b\/([^/]+)\/o\/(.+)\?alt=media&token=.+/;
    const match = url.match(regex);
    if (!match) {
      throw new Error("URL does not match Firebase Storage base URL.");
    }
    const filePath = decodeURIComponent(match[2]);
    return filePath;
  };

  return (
    <>
      <div className={styles["header-main-container web-opt"]}>
        <Row className={styles["header-container"]}>
          <img
            src="/images/_iattend_logo.svg"
            style={{
              width: "120px",
              objectFit: "cover",
            }}
          />
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              position: "relative",
            }}
          >
            <Row
              style={{
                width: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "row",
                gap: "12px",
              }}
            >
              {navItems.map((item, index) => {
                // Condiciones para ocultar el elemento 'Admin'
                if (item.name === "Admin" && (!logged || role !== "Admin")) {
                  return null; // No renderiza nada
                }

                if (item.name === "Empresa" && (!logged || role === "Owner")) {
                  return null; // No renderiza nada
                }

                return (
                  <Link href={item.path} key={item.name}>
                    <div
                      onClick={
                        item.name === "Empresa"
                          ? () => setSuperUser(true)
                          : () => {}
                      }
                      className={
                        styles[
                          `nav-item-col ${
                            item.position === position ? "--selected" : ""
                          }`
                        ]
                      }
                    >
                      {item.position === position ? (
                        <item.selected className={styles["nav-item-icon"]} />
                      ) : (
                        <item.icon className={styles["nav-item-icon"]} />
                      )}
                      <span className={styles["nav-item-label"]}>
                        {item.name}
                      </span>
                    </div>
                  </Link>
                );
              })}

              <Link
                href={`https://wa.me/6145338500?text=${encodeURIComponent(
                  "Hola, estoy interesado en las invitaciones digitales"
                )}`}
                target="_blank"
                style={{}}
              >
                <Button id={styles["contact-us"]}>
                  {logged ? "¿Necesitas ayuda?" : "CONTÁCTANOS"}
                </Button>
              </Link>

              {logged && (
                <Button
                  onClick={logout}
                  id={
                    styles[
                      role === "Admin" ? "on-logged-admin" : "on-logged-circle"
                    ]
                  }
                >
                  {user ? getFirstLetterUpperCase(user.name) : "A"}
                </Button>
              )}
            </Row>

            <div
              className={styles["distributor-card"]}
              style={{
                display: superUser ? "flex" : "none",
                gap: "12px",
              }}
            >
              <Row
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginBottom: "10px",
                  paddingBottom: "20px",
                  borderBottom: "1px solid #d9d9d980",
                }}
              >
                <span className={styles["distributor-card-title"]}>
                  Perfil de empresa
                </span>
                <Button
                  type="default"
                  id={styles["gc-cta-buttons-static"]}
                  onClick={saveAndClose}
                  // onClick={onTry ? () => message.warning('No puedes eliminar imágenes en simulador') : () => deleteImageFB(photo)}
                  icon={<IoClose size={20} />}
                  // style={{ position: 'absolute', top: '5px', right: '5px', }}
                />
              </Row>

              <div className={styles["dist-img-btn-cnt"]}>
                <div className={styles["dist-card-col-label"]}>
                  <span className={styles["gc-content-label"]}>Nombre</span>

                  <Input
                    placeholder={"Nombre"}
                    value={enterpriseName ?? ""}
                    onChange={(e) => setEnterpriseName(e.target.value)}
                    className={styles["gc-input-text"]}
                  />
                </div>

                <div className={styles["dist-card-col-label"]}>
                  <span className={styles["gc-content-label"]}>Descuento</span>
                  <span className={styles["gc-content-label"]}>30%</span>
                </div>
              </div>

              <span className={styles["gc-content-label"]}>Logo</span>

              <div className={styles["dist-img-btn-cnt"]}>
                <div
                  className={styles["distributor-card-image-container"]}
                  style={{ position: "relative" }}
                >
                  {enterpriseLogo ? (
                    <>
                      <img
                        src={enterpriseLogo}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </>
                  ) : (
                    <Empty description={false} />
                  )}
                </div>
                <div className={styles["upload-btn-ctn"]}>
                  {enterpriseLogo ? (
                    <Button
                      // type='ghost'
                      id={styles["gc-cta-buttons-static"]}
                      onClick={() => deleteImageFB(enterpriseLogo)}
                      style={{ border: "1px solid #d9d9d9" }}
                      // onClick={onTry ? () => message.warning('No puedes eliminar imágenes en simulador') : () => deleteImageFB(photo)}
                      icon={<FaRegTrashCan size={20} />}
                      // style={{ position: 'absolute', top: '5px', right: '5px', }}
                    />
                  ) : (
                    <Upload
                      customRequest={handleCustomRequest}
                      showUploadList={false} // Oculta la lista de archivos subidos
                      beforeUpload={() => false} // Evita la carga automática de archivos

                      // style={{ width: '200px' }}
                    >
                      <Button
                        style={{ border: "1px solid #d9d9d9" }}
                        id={styles["gc-cta-buttons-static"]}
                        icon={<IoMdAdd size={20} />}
                      ></Button>
                    </Upload>
                  )}
                </div>
              </div>
            </div>
          </Row>
        </Row>
      </div>

      <div
        style={{
          opacity: !isVisible ? 1 : 0,
        }}
        className={styles["header-main-container mobile-opt"]}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "90%",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/_iattend_logo.svg"
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <Button
            onClick={() => setOpenMenu(true)}
            type="default"
            icon={<HiOutlineMenu size={36} />}
          />
        </div>

        <div
          style={{
            right: !openMenu ? "-100vw" : "0px",
          }}
          className={styles["mobile-menu-container"]}
        >
          <div className={styles["header-main-container"]}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                flexDirection: "row",
                width: "90%",
                position: "relative",
              }}
            >
              {/* <span className="mobile-menu-label">Menú</span> */}
              <Button
                onClick={() => setOpenMenu(false)}
                type="default"
                icon={<IoClose size={36} />}
              />
            </div>
          </div>

          <div className={styles["mobile-menu-routes"]}>
            {navItems.map((item, index) => {
              // Condiciones para ocultar el elemento 'Admin'
              if (item.name === "Admin" && (!logged || role !== "Admin")) {
                return null; // No renderiza nada
              }

              if (item.name === "Empresa" && (!logged || role === "Owner")) {
                return null; // No renderiza nada
              }

              if (item.name === "Tablero") {
                return null; // No renderiza nada
              }

              return (
                <Link
                  style={{ textDecoration: "none" }}
                  href={item.path}
                  key={item.name}
                >
                  <span
                    style={{
                      color:
                        item.position === position
                          ? "var(--brand-color-500)"
                          : "var(--text-color)",
                    }}
                    className={styles["mobile-nav-item"]}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}

            <Link
              target="_blank"
              style={{ textDecoration: "none" }}
              href="https://wa.me/6145338500"
            >
              <span className={styles["mobile-nav-item"]}>Contacto</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
