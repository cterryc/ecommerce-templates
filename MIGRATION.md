# MartelDev - E-commerce Template

## 🚀 Migración a Next.js Completada

Este proyecto ha sido migrado exitosamente de **Vite + React** a **Next.js 14** con App Router.

## 📦 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **React**: 18.3.1
- **Estilos**: Tailwind CSS 3.4.18
- **Fuente**: Google Fonts (Manrope)
- **Iconos**: Material Symbols Outlined

## 🛠️ Estructura del Proyecto

```
web-ecommerce/
├── app/
│   ├── components/
│   │   ├── MartelDev.jsx       # Componente principal (Client Component)
│   │   └── DarkModeToggle.jsx  # Toggle de modo oscuro (Client Component)
│   ├── hooks/
│   │   └── useDarkMode.js      # Hook personalizado para dark mode
│   ├── globals.css             # Estilos globales con Tailwind
│   ├── layout.jsx              # Layout principal de Next.js
│   └── page.jsx                # Página de inicio
├── public/                     # Archivos estáticos
├── tailwind.config.js          # Configuración de Tailwind
├── next.config.js              # Configuración de Next.js
├── postcss.config.js           # Configuración de PostCSS
└── package.json                # Dependencias del proyecto
```

## 🚀 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm run start

# Linting
npm run lint
```

## 🌐 URLs

- **Desarrollo**: http://localhost:3000
- **Producción**: Configura en Vercel, Netlify o tu hosting preferido

## ✨ Características

### Mejoras de la Migración

1. **Server-Side Rendering (SSR)**: Mejor SEO y rendimiento inicial
2. **App Router**: Nueva arquitectura de Next.js con layouts anidados
3. **Optimización automática**: Next.js optimiza imágenes, fuentes y código automáticamente
4. **Font Optimization**: Google Fonts se cargan de manera óptima
5. **Dark Mode**: Sistema de dark mode persistente con localStorage

### Componentes Client-Side

Los siguientes componentes usan `'use client'` porque requieren interactividad:
- `MartelDev.jsx` - Componente principal con navegación
- `DarkModeToggle.jsx` - Toggle interactivo
- `useDarkMode.js` - Hook con useState y useEffect

## 🎨 Características de Diseño

- ✅ Hero section con gradientes y animaciones
- ✅ 6 tarjetas de beneficios con efectos hover
- ✅ Demo section con preview animado
- ✅ Sección de precios con 3 planes
- ✅ Testimonios con ratings de estrellas
- ✅ CTA con gradiente y efectos visuales
- ✅ Footer completo con 3 columnas
- ✅ Modo oscuro con persistencia
- ✅ 100% responsive
- ✅ Animaciones suaves con Tailwind

## 📝 Configuración de Tailwind

El proyecto usa un tema personalizado con:
- Colores de marca (primary, secondary)
- Colores para modo claro y oscuro
- Fuente personalizada (Manrope)
- Animaciones personalizadas (slide-up, pop-in, float)

## 🔧 Configuración SEO

El archivo `layout.jsx` incluye metadata básica:
- Título
- Descripción
- Keywords

Puedes extenderla según tus necesidades.

## 📱 Deploy

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Conecta tu repo en [Vercel](https://vercel.com)
3. Deploy automático

### Otros Hosting

```bash
npm run build
npm run start
```

## 🚨 Cambios Importantes

### Archivos Eliminados (Vite)
- ❌ `vite.config.js`
- ❌ `index.html`
- ❌ `eslint.config.js` (de Vite)
- ❌ `src/` (carpeta completa)

### Archivos Nuevos (Next.js)
- ✅ `app/layout.jsx`
- ✅ `app/page.jsx`
- ✅ `app/globals.css`
- ✅ `next.config.js`
- ✅ `.eslintrc.json`

### Cambios de Configuración
- `package.json`: Scripts y dependencias actualizadas
- `tailwind.config.js`: Content paths actualizados
- `postcss.config.js`: Sintaxis CommonJS

## 🐛 Troubleshooting

### El dark mode no persiste
Verifica que el script en `layout.jsx` esté ejecutándose antes del render.

### Estilos no se aplican
Verifica que `globals.css` esté importado en `layout.jsx`.

### Componente no renderiza
Asegúrate de añadir `'use client'` si usa hooks o eventos.

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 👨‍💻 Desarrollo

Para añadir nuevas páginas:
1. Crea archivos en `app/nombre-pagina/page.jsx`
2. Next.js creará automáticamente la ruta

Para componentes compartidos:
1. Añádelos en `app/components/`
2. Importa donde los necesites

---

**¡Proyecto migrado exitosamente a Next.js! 🎉**
