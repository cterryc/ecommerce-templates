# MartelDev - E-commerce Template

Template profesional para tiendas online optimizado para emprendedores que venden por TikTok, Instagram y WhatsApp.

## 🚀 Stack Tecnológico

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **React**: 18.3.1
- **Estilos**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Fuente**: Google Fonts (Manrope)
- **Iconos**: Material Symbols Outlined

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🌐 URLs

- **Desarrollo**: http://localhost:3000
- **Producción**: Deploy en Vercel, Netlify o tu hosting preferido

## ✨ Características

### Diseño Moderno
- ✅ Hero section con gradientes y animaciones
- ✅ Sección de beneficios con 6 tarjetas interactivas
- ✅ Demo section con preview animado
- ✅ Precios con 3 planes detallados
- ✅ Testimonios con ratings de estrellas
- ✅ CTA impactante con gradientes
- ✅ Footer completo con 3 columnas

### Funcionalidades
- 🌓 Dark mode con persistencia
- 📱 100% responsive
- ⚡ Optimización automática de Next.js
- 🎨 Animaciones suaves con Tailwind
- 🔍 SEO optimizado

## 📁 Estructura del Proyecto

```
web-ecommerce/
├── app/
│   ├── components/        # Componentes React
│   ├── hooks/            # Hooks personalizados
│   ├── globals.css       # Estilos globales
│   ├── layout.jsx        # Layout principal
│   └── page.jsx          # Página de inicio
├── public/               # Archivos estáticos
├── tailwind.config.js    # Configuración de Tailwind
├── next.config.js        # Configuración de Next.js
└── package.json          # Dependencias
```

## 🚢 Deploy

### Vercel (Recomendado)
1. Push tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Deploy automático

### Otros Hosting
```bash
npm run build
npm start
```

## 📝 Personalización

### Colores
Edita `tailwind.config.js` para cambiar los colores de marca:
```javascript
colors: {
  primary: '#ff007a',
  secondary: '#34d399',
  // ...
}
```

### Contenido
Los componentes principales están en `app/components/MartelDev.jsx`

### Metadata SEO
Edita `app/layout.jsx` para cambiar título, descripción y keywords

## 📚 Documentación

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MIGRATION.md](./MIGRATION.md) - Detalles de la migración de Vite a Next.js

## 📄 Licencia

Este proyecto es privado y está destinado para uso comercial.

---

**Desarrollado con ❤️ para emprendedores digitales**
