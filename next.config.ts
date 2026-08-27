import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/servicios.html", destination: "/servicios", permanent: true },
      { source: "/curriculum.html", destination: "/curriculum", permanent: true },
      { source: "/proyectos.html", destination: "/proyectos", permanent: true },
      { source: "/contacto.html", destination: "/contacto", permanent: true },
    ];
  },
};

export default nextConfig;
