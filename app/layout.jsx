import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata = {
  title: 'MartelDev - Templates E-commerce',
  description: 'Templates profesionales para emprendedores que venden por TikTok, Instagram y WhatsApp',
  keywords: ['ecommerce', 'template', 'tiktok', 'instagram', 'whatsapp', 'tienda online'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const savedTheme = localStorage.getItem('marteldev-theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  console.log('Error al cargar tema:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${manrope.variable} font-display antialiased`}>
        {children}
      </body>
    </html>
  )
}
