import React from 'react'
import DarkModeToggle from './DarkModeToggle'

const MartelDev = () => {
  return (
    <div className='relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300'>
      <div className='layout-container'>
        {/* Header actualizado con el botón de modo oscuro */}
        <header className='sticky top-0 z-50 flex items-center justify-center border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm transition-colors duration-300'>
          <div className='flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-3 w-full max-w-6xl'>
            <div className='flex items-center gap-4'>
              <div className='size-6 text-primary'>
                <svg
                  fill='none'
                  viewBox='0 0 48 48'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_6_330)'>
                    <path
                      clipRule='evenodd'
                      d='M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z'
                      fill='currentColor'
                      fillRule='evenodd'
                    ></path>
                  </g>
                  <defs>
                    <clipPath id='clip0_6_330'>
                      <rect fill='white' height='48' width='48'></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className='text-lg font-bold tracking-[-0.015em]'>
                MartelDev
              </h2>
            </div>

            <div className='flex items-center gap-4'>
              <div className='hidden md:flex flex-1 justify-end items-center gap-8'>
                <div className='flex items-center gap-9'>
                  <a
                    className='text-sm font-medium leading-normal hover:text-primary transition-colors'
                    href='#beneficios'
                  >
                    Beneficios
                  </a>
                  <a
                    className='text-sm font-medium leading-normal hover:text-primary transition-colors'
                    href='#precios'
                  >
                    Precios
                  </a>
                  <a
                    className='text-sm font-medium leading-normal hover:text-primary transition-colors'
                    href='#testimonios'
                  >
                    Testimonios
                  </a>
                </div>
                <a
                  className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary-hover transition-colors'
                  href='#contacto'
                >
                  <span className='truncate'>Contacto</span>
                </a>
              </div>

              {/* Botón de modo oscuro */}
              <DarkModeToggle />

              <button className='md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors'>
                <span className='material-symbols-outlined'>menu</span>
              </button>
            </div>
          </div>
        </header>

        {/* El resto del contenido permanece igual */}
        <main className='flex flex-1 justify-center py-5 sm:px-10'>
          <div className='layout-content-container'>
            {/* Hero Section */}
            <section className='py-10 sm:py-20 px-4'>
              <div className='flex flex-col-reverse gap-10 md:flex-row md:items-center'>
                <div className='flex flex-col gap-6 md:gap-8 md:w-1/2'>
                  <div className='flex flex-col gap-4 text-left'>
                    <h1 className='text-4xl font-black leading-tight tracking-tight sm:text-5xl'>
                      Lanza tu tienda online profesional en minutos.
                    </h1>
                    <h2 className='text-base font-normal leading-normal sm:text-lg text-subtext-light dark:text-subtext-dark transition-colors duration-300'>
                      Usa el template e-commerce de MartelDev, optimizado para
                      emprendedores que venden por TikTok.
                    </h2>
                  </div>
                  <div className='flex flex-col sm:flex-row gap-3'>
                    <button className='flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-secondary text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-secondary-hover transition-colors shadow-lg shadow-secondary/30'>
                      <span className='truncate'>💻 Ver demo del template</span>
                    </button>
                    <button className='flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary/10 text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/20 transition-colors'>
                      <span className='truncate'>
                        🧩 Quiero una tienda personalizada
                      </span>
                    </button>
                  </div>
                </div>

                <div className='w-full md:w-1/2'>
                  <div className='relative w-full aspect-video flex items-center justify-center bg-card-light dark:bg-card-dark/50 rounded-xl overflow-hidden p-4 transition-colors duration-300'>
                    <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10'></div>
                    <div className='relative z-10 w-full h-full border-2 border-border-light dark:border-border-dark rounded-lg bg-background-light/50 dark:bg-background-dark/50 shadow-2xl backdrop-blur-sm flex flex-col p-4 transition-colors duration-300'>
                      <div className='flex items-center gap-2 pb-2 border-b border-border-light dark:border-border-dark transition-colors duration-300'>
                        <div className='w-3 h-3 rounded-full bg-red-400'></div>
                        <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
                        <div className='w-3 h-3 rounded-full bg-green-400'></div>
                      </div>
                      <div className='flex-1 flex items-center justify-center gap-4 sm:gap-6 pt-4'>
                        <div className='flex flex-col items-center gap-3 opacity-0 animate-slide-up-1'>
                          <div className='flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-secondary/10 text-secondary rounded-lg text-3xl sm:text-4xl shadow-md animate-float-1 transition-colors duration-300'>
                            <span className='material-symbols-outlined text-3xl sm:text-4xl'>
                              palette
                            </span>
                          </div>
                          <div className='w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors duration-300'></div>
                          <div className='w-10 h-2 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors duration-300'></div>
                        </div>
                        <div className='flex flex-col items-center gap-3 opacity-0 animate-slide-up-2'>
                          <div className='flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 text-primary rounded-lg text-3xl sm:text-4xl shadow-md animate-float-2 transition-colors duration-300'>
                            <span className='material-symbols-outlined text-3xl sm:text-4xl'>
                              shopping_cart
                            </span>
                          </div>
                          <div className='w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors duration-300'></div>
                          <div className='w-10 h-2 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors duration-300'></div>
                        </div>
                        <div className='flex flex-col items-center gap-3 opacity-0 animate-slide-up-3'>
                          <div className='flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-yellow-500/10 text-yellow-500 rounded-lg text-3xl sm:text-4xl shadow-md animate-float-3 transition-colors duration-300'>
                            <span className='material-symbols-outlined text-3xl sm:text-4xl'>
                              rocket_launch
                            </span>
                          </div>
                          <div className='w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors duration-300'></div>
                          <div className='w-10 h-2 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors duration-300'></div>
                        </div>
                      </div>
                      <div className='absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 bg-secondary rounded-full shadow-lg opacity-0 animate-pop-in'>
                        <span className='material-symbols-outlined text-white text-2xl'>
                          done
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <BeneficiosSection />
            <DemoSection />
            <PreciosSection />
            <TestimoniosSection />
            <CTASection />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

// Los componentes restantes se mantienen igual, solo agregando transiciones...

const BeneficiosSection = () => {
  const beneficios = [
    { icon: 'link', title: 'Integración con TikTok, Instagram y WhatsApp' },
    { icon: 'bolt', title: 'Carga rápida y optimizada para móviles' },
    { icon: 'palette', title: 'Personalización sencilla sin código' },
    {
      icon: 'space_dashboard',
      title: 'Panel intuitivo para gestionar tus productos'
    },
    {
      icon: 'shopping_bag',
      title: 'Ideal para marcas personales o pequeños negocios'
    }
  ]

  return (
    <section
      className='flex flex-col gap-10 px-4 py-10 sm:py-20'
      id='beneficios'
    >
      <div className='flex flex-col gap-4 max-w-3xl'>
        <h2 className='text-3xl font-bold leading-tight tracking-tight sm:text-4xl'>
          Diseñado para convertir seguidores en clientes.
        </h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {beneficios.map((beneficio, index) => (
          <div
            key={index}
            className='flex gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-4 flex-col transition-colors duration-300'
          >
            <span className='material-symbols-outlined text-primary text-3xl'>
              {beneficio.icon}
            </span>
            <div className='flex flex-col gap-1'>
              <h3 className='text-base font-bold leading-tight'>
                {beneficio.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const DemoSection = () => (
  <section className='flex flex-col gap-10 px-4 py-10 sm:py-20'>
    <div className='flex flex-col gap-6 items-center text-center'>
      <div className='flex flex-col gap-4 max-w-3xl'>
        <h2 className='text-3xl font-bold leading-tight tracking-tight sm:text-4xl'>
          Mira cómo luce tu próxima tienda.
        </h2>
        <p className='text-base font-normal leading-normal text-subtext-light dark:text-subtext-dark transition-colors duration-300'>
          Explora la versión demo y descubre lo fácil que es tener una tienda
          moderna, lista para vender desde el primer día.
        </p>
      </div>
      <button className='flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary-hover transition-colors'>
        <span className='truncate'>Probar demo</span>
      </button>
    </div>
    <div className='w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300'>
      <span className='text-subtext-light dark:text-subtext-dark transition-colors duration-300'>
        Preview de la tienda demo
      </span>
    </div>
  </section>
)

const PreciosSection = () => {
  const planes = [
    {
      title: 'Template Base',
      description:
        'Ideal si ya tienes conocimientos técnicos. Incluye diseño completo, optimización y documentación.',
      price: 'Desde $XX',
      buttonText: 'Más información',
      recommended: false
    },
    {
      title: 'Template + Instalación Básica',
      description:
        'Perfecto si solo quieres vender sin complicarte. Incluye configuración inicial, branding y publicación.',
      price: 'Desde $XX',
      buttonText: 'Comprar ahora',
      recommended: true
    },
    {
      title: 'Desarrollo Personalizado',
      description:
        'Si buscas algo a medida. Creamos tu tienda desde cero adaptada a tu marca y tus objetivos.',
      price: 'A medida',
      buttonText: 'Cotiza tu proyecto',
      recommended: false
    }
  ]

  return (
    <section className='flex flex-col gap-10 px-4 py-10 sm:py-20' id='precios'>
      <h2 className='text-3xl font-bold leading-tight tracking-tight text-center sm:text-4xl'>
        Elige el plan que mejor se adapte a ti.
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {planes.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col gap-6 rounded-xl border-2 ${
              plan.recommended
                ? 'border-primary'
                : 'border-border-light dark:border-border-dark'
            } bg-card-light dark:bg-card-dark p-6 relative transition-colors duration-300`}
          >
            {plan.recommended && (
              <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full'>
                RECOMENDADO
              </div>
            )}
            <div className='flex flex-col gap-2'>
              <h3 className='text-xl font-bold'>{plan.title}</h3>
              <p className='text-sm text-subtext-light dark:text-subtext-dark transition-colors duration-300'>
                {plan.description}
              </p>
            </div>
            <div className='text-3xl font-bold'>{plan.price}</div>
            <button
              className={`w-full flex justify-center items-center rounded-lg h-10 px-4 ${
                plan.recommended
                  ? 'bg-primary text-white hover:bg-primary-hover'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              } text-sm font-bold transition-colors`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

const TestimoniosSection = () => {
  const testimonios = [
    {
      quote:
        '“Con el template de MartelDev lancé mi tienda en un día y ya estoy vendiendo desde TikTok.”',
      name: 'Andrea',
      role: 'Dueña de LushBags Perú'
    },
    {
      quote:
        '“El proceso fue súper rápido y el soporte increíble. Ahora mi marca se ve mucho más profesional.”',
      name: 'Carlos M.',
      role: 'Fundador de TechGadgets'
    }
  ]

  return (
    <section
      className='flex flex-col gap-10 px-4 py-10 sm:py-20'
      id='testimonios'
    >
      <div className='flex flex-col gap-4 max-w-3xl mx-auto text-center'>
        <h2 className='text-3xl font-bold leading-tight tracking-tight sm:text-4xl'>
          Emprendedores que ya confiaron en MartelDev
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className='flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 transition-colors duration-300'
          >
            <p className='text-lg italic'>{testimonio.quote}</p>
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center transition-colors duration-300'>
                <span className='text-gray-600 dark:text-gray-300 text-lg'>
                  {testimonio.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className='font-bold'>{testimonio.name}</p>
                <p className='text-sm text-subtext-light dark:text-subtext-dark transition-colors duration-300'>
                  {testimonio.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const CTASection = () => (
  <section
    className='flex flex-col gap-8 items-center text-center rounded-xl bg-primary text-white p-10 sm:p-20 my-10 sm:my-20'
    id='contacto'
  >
    <h2 className='text-3xl font-bold leading-tight tracking-tight'>
      Convierte tus seguidores en clientes reales.
    </h2>
    <p className='max-w-2xl'>
      Empieza hoy con MartelDev y crea una tienda que venda por ti.
    </p>
    <div className='flex flex-col sm:flex-row gap-4'>
      <button className='flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white text-primary text-base font-bold hover:bg-gray-200 transition-colors'>
        Comprar template
      </button>
      <button className='flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 border-2 border-white/50 text-white text-base font-bold hover:bg-white/10 transition-colors'>
        Hablar por WhatsApp
      </button>
    </div>
  </section>
)

const Footer = () => (
  <footer className='flex justify-center border-t border-border-light dark:border-border-dark transition-colors duration-300'>
    <div className='w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 px-4 sm:px-10 py-8'>
      <div className='flex flex-col items-center sm:items-start gap-1'>
        <p className='text-sm'>
          © 2025 MartelDev. Todos los derechos reservados.
        </p>
        <a
          className='text-sm text-subtext-light dark:text-subtext-dark hover:text-primary transition-colors duration-300'
          href='mailto:contacto@marteldev.com'
        >
          📧 contacto@marteldev.com
        </a>
      </div>
      <div className='flex items-center gap-4'>
        <span className='text-sm text-subtext-light dark:text-subtext-dark transition-colors duration-300'>
          Redes sociales
        </span>
      </div>
    </div>
  </footer>
)

export default MartelDev
