/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/plataforma-antecipacao", // nome do seu repositório
  assetPrefix: "/plataforma-antecipacao/",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
