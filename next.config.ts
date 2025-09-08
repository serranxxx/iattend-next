import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // opción simple
    domains: ["firebasestorage.googleapis.com"],

    // o, si prefieres ser más estricto:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'www.marthastewart.com',
    //     pathname: '/**', // puedes acotar un prefijo si quieres
    //   },
    // ],
  },
};

export default nextConfig;
