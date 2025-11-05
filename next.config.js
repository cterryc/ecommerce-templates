/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Añade aquí dominios de imágenes externas si las usas
  },
  // Configuración para optimización
  swcMinify: true,
}

module.exports = nextConfig
