import { navItems } from "@/types/app";
import { BsClipboard, BsClipboardFill } from "react-icons/bs";
import { HiEnvelopeOpen, HiOutlineEnvelope } from "react-icons/hi2";
import { IoPricetags, IoPricetagsOutline } from "react-icons/io5";
import { MdAdminPanelSettings, MdOutlineAdminPanelSettings } from "react-icons/md";
import { RiUserStarFill, RiUserStarLine } from "react-icons/ri";

export const NavItems: navItems[] = [
  {
    name: "Explora",
    icon: HiOutlineEnvelope,
    selected: HiEnvelopeOpen,
    path: "/home",
    position: "home",
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
