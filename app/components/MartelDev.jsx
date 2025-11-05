'use client'

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
            <section className='py-10 sm:py-20 px-4 relative'>
              {/* Gradient background */}
              <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl'></div>
              
              <div className='flex flex-col-reverse gap-10 md:flex-row md:items-center relative z-10'>
                <div className='flex flex-col gap-6 md:gap-8 md:w-1/2'>
                  {/* Badge */}
                  <div className='inline-flex items-center gap-2 self-start bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full border border-primary/20'>
                    <span className='text-xs font-bold text-primary'>🚀 NUEVO</span>
                    <span className='text-xs text-subtext-light dark:text-subtext-dark'>Optimizado para TikTok Shop</span>
                  </div>

                  <div className='flex flex-col gap-4 text-left'>
                    <h1 className='text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-text-light to-text-light/70 dark:from-text-dark dark:to-text-dark/70 bg-clip-text'>
                      Lanza tu tienda online profesional en minutos.
                    </h1>
                    <h2 className='text-base font-normal leading-relaxed sm:text-xl text-subtext-light dark:text-subtext-dark transition-colors duration-300'>
                      Usa el template e-commerce de MartelDev, optimizado para
                      emprendedores que venden por TikTok.
                    </h2>
                  </div>

                  <div className='flex flex-col sm:flex-row gap-3'>
                    <button className='group flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-gradient-to-r from-secondary to-secondary-hover text-white text-base font-bold leading-normal tracking-[0.015em] hover:shadow-xl hover:shadow-secondary/30 hover:scale-105 transition-all duration-300'>
                      <span className='truncate'>💻 Ver demo del template</span>
                      <span className='material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform'>arrow_forward</span>
                    </button>
                    <button className='group flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-primary/10 text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/20 hover:shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300'>
                      <span className='truncate'>🧩 Tienda personalizada</span>
                    </button>
                  </div>

                  {/* Stats */}
                  <div className='flex items-center gap-6 pt-4'>
                    <div className='flex flex-col'>
                      <span className='text-2xl font-bold text-primary'>100+</span>
                      <span className='text-xs text-subtext-light dark:text-subtext-dark'>Tiendas creadas</span>
                    </div>
                    <div className='w-px h-10 bg-border-light dark:bg-border-dark'></div>
                    <div className='flex flex-col'>
                      <span className='text-2xl font-bold text-secondary'>4.9/5</span>
                      <span className='text-xs text-subtext-light dark:text-subtext-dark'>Satisfacción</span>
                    </div>
                    <div className='w-px h-10 bg-border-light dark:bg-border-dark'></div>
                    <div className='flex flex-col'>
                      <span className='text-2xl font-bold text-yellow-500'>24h</span>
                      <span className='text-xs text-subtext-light dark:text-subtext-dark'>Entrega rápida</span>
                    </div>
                  </div>
                </div>

                <div className='w-full md:w-1/2'>
                  <div className='relative w-full aspect-video flex items-center justify-center bg-gradient-to-br from-card-light to-background-light dark:from-card-dark dark:to-background-dark rounded-2xl overflow-hidden p-4 transition-colors duration-300 shadow-2xl border border-border-light dark:border-border-dark'>
                    <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10'></div>
                    <div className='absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl'></div>
                    <div className='absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl'></div>
                    
                    <div className='relative z-10 w-full h-full border-2 border-border-light dark:border-border-dark rounded-xl bg-background-light/80 dark:bg-background-dark/80 shadow-2xl backdrop-blur-sm flex flex-col p-4 transition-colors duration-300'>
                      <div className='flex items-center gap-2 pb-2 border-b border-border-light dark:border-border-dark transition-colors duration-300'>
                        <div className='w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer'></div>
                        <div className='w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer'></div>
                        <div className='w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer'></div>
                        <div className='ml-auto flex items-center gap-1 px-2 py-1 rounded bg-secondary/10 text-secondary text-xs font-bold'>
                          <span className='w-2 h-2 bg-secondary rounded-full animate-pulse'></span>
                          LIVE
                        </div>
                      </div>
                      <div className='flex-1 flex items-center justify-center gap-4 sm:gap-6 pt-4'>
                        <div className='flex flex-col items-center gap-3 opacity-0 animate-slide-up-1'>
                          <div className='group flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 text-secondary rounded-xl text-3xl sm:text-4xl shadow-lg hover:shadow-xl animate-float-1 transition-all duration-300 cursor-pointer hover:scale-110'>
                            <span className='material-symbols-outlined text-3xl sm:text-4xl group-hover:scale-110 transition-transform'>
                              palette
                            </span>
                          </div>
                          <div className='w-16 h-2 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full transition-colors duration-300'></div>
                          <div className='w-10 h-2 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full transition-colors duration-300'></div>
                        </div>
                        <div className='flex flex-col items-center gap-3 opacity-0 animate-slide-up-2'>
                          <div className='group flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/20 to-primary/10 text-primary rounded-xl text-3xl sm:text-4xl shadow-lg hover:shadow-xl animate-float-2 transition-all duration-300 cursor-pointer hover:scale-110'>
                            <span className='material-symbols-outlined text-3xl sm:text-4xl group-hover:scale-110 transition-transform'>
                              shopping_cart
                            </span>
                          </div>
                          <div className='w-16 h-2 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full transition-colors duration-300'></div>
                          <div className='w-10 h-2 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full transition-colors duration-300'></div>
                        </div>
                        <div className='flex flex-col items-center gap-3 opacity-0 animate-slide-up-3'>
                          <div className='group flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 text-yellow-500 rounded-xl text-3xl sm:text-4xl shadow-lg hover:shadow-xl animate-float-3 transition-all duration-300 cursor-pointer hover:scale-110'>
                            <span className='material-symbols-outlined text-3xl sm:text-4xl group-hover:scale-110 transition-transform'>
                              rocket_launch
                            </span>
                          </div>
                          <div className='w-16 h-2 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full transition-colors duration-300'></div>
                          <div className='w-10 h-2 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full transition-colors duration-300'></div>
                        </div>
                      </div>
                      <div className='absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-secondary to-secondary-hover rounded-full shadow-lg opacity-0 animate-pop-in hover:scale-110 transition-transform cursor-pointer'>
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
    { 
      icon: 'link', 
      title: 'Integración con TikTok, Instagram y WhatsApp',
      description: 'Conecta tus redes sociales y WhatsApp Business en un solo lugar',
      gradient: 'from-pink-500/10 to-purple-500/10'
    },
    { 
      icon: 'bolt', 
      title: 'Carga rápida y optimizada para móviles',
      description: 'Velocidad de carga < 2 segundos para mejor conversión',
      gradient: 'from-yellow-500/10 to-orange-500/10'
    },
    { 
      icon: 'palette', 
      title: 'Personalización sencilla sin código',
      description: 'Cambia colores, fuentes y diseño sin tocar código',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: 'space_dashboard',
      title: 'Panel intuitivo para gestionar tus productos',
      description: 'Administra inventario, pedidos y clientes fácilmente',
      gradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: 'shopping_bag',
      title: 'Ideal para marcas personales o pequeños negocios',
      description: 'Diseñado específicamente para emprendedores digitales',
      gradient: 'from-primary/10 to-secondary/10'
    },
    {
      icon: 'payments',
      title: 'Pasarelas de pago integradas',
      description: 'Acepta tarjetas, Yape, Plin y más métodos de pago',
      gradient: 'from-indigo-500/10 to-purple-500/10'
    }
  ]

  return (
    <section
      className='flex flex-col gap-10 px-4 py-10 sm:py-20'
      id='beneficios'
    >
      <div className='flex flex-col gap-4 max-w-3xl'>
        <span className='text-sm font-bold text-primary uppercase tracking-wider'>¿Por qué elegirnos?</span>
        <h2 className='text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl'>
          Diseñado para convertir seguidores en clientes.
        </h2>
        <p className='text-lg text-subtext-light dark:text-subtext-dark'>
          Todo lo que necesitas para vender online de forma profesional
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {beneficios.map((beneficio, index) => (
          <div
            key={index}
            className='group flex gap-4 rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 flex-col transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:scale-105 hover:-translate-y-1 cursor-pointer'
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${beneficio.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <span className='material-symbols-outlined text-primary text-2xl'>
                {beneficio.icon}
              </span>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-base font-bold leading-tight group-hover:text-primary transition-colors'>
                {beneficio.title}
              </h3>
              <p className='text-sm text-subtext-light dark:text-subtext-dark leading-relaxed'>
                {beneficio.description}
              </p>
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
        <span className='text-sm font-bold text-secondary uppercase tracking-wider'>Demo en vivo</span>
        <h2 className='text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl'>
          Mira cómo luce tu próxima tienda.
        </h2>
        <p className='text-lg font-normal leading-relaxed text-subtext-light dark:text-subtext-dark transition-colors duration-300'>
          Explora la versión demo y descubre lo fácil que es tener una tienda
          moderna, lista para vender desde el primer día.
        </p>
      </div>
      <button className='group flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-gradient-to-r from-primary to-primary-hover text-white text-base font-bold leading-normal tracking-[0.015em] hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300'>
        <span className='truncate'>Probar demo</span>
        <span className='material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform'>arrow_forward</span>
      </button>
    </div>
    <div className='relative w-full bg-center bg-no-repeat aspect-video bg-cover rounded-2xl overflow-hidden group cursor-pointer shadow-2xl border border-border-light dark:border-border-dark'>
      <div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-gray-200 dark:via-gray-700 to-secondary/20 transition-colors duration-300'></div>
      
      {/* Play button overlay */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='w-20 h-20 rounded-full bg-white/90 dark:bg-gray-800/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl'>
          <span className='material-symbols-outlined text-primary text-5xl ml-1'>play_arrow</span>
        </div>
      </div>

      {/* Grid overlay for tech feel */}
      <div className='absolute inset-0 opacity-10'>
        <div className='w-full h-full' style={{
          backgroundImage: 'linear-gradient(rgba(255,0,122,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,122,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <span className='absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-bold text-text-light dark:text-text-dark bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-full backdrop-blur-sm transition-colors duration-300'>
        🎬 Preview de la tienda demo
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
      price: '$49',
      features: [
        '✓ Código fuente completo',
        '✓ Documentación técnica',
        '✓ Actualizaciones gratuitas',
        '✓ Soporte por email'
      ],
      buttonText: 'Más información',
      recommended: false
    },
    {
      title: 'Template + Instalación',
      description:
        'Perfecto si solo quieres vender sin complicarte. Incluye configuración inicial, branding y publicación.',
      price: '$149',
      features: [
        '✓ Todo del plan Base',
        '✓ Instalación completa',
        '✓ Personalización de marca',
        '✓ Soporte prioritario 24/7',
        '✓ Capacitación incluida'
      ],
      buttonText: 'Comprar ahora',
      recommended: true
    },
    {
      title: 'Desarrollo Personalizado',
      description:
        'Si buscas algo a medida. Creamos tu tienda desde cero adaptada a tu marca y tus objetivos.',
      price: 'A medida',
      features: [
        '✓ Diseño 100% personalizado',
        '✓ Funciones a medida',
        '✓ Integraciones avanzadas',
        '✓ Mantenimiento incluido',
        '✓ Consultoría estratégica'
      ],
      buttonText: 'Cotiza tu proyecto',
      recommended: false
    }
  ]

  return (
    <section className='flex flex-col gap-10 px-4 py-10 sm:py-20' id='precios'>
      <div className='text-center'>
        <span className='text-sm font-bold text-primary uppercase tracking-wider'>Precios transparentes</span>
        <h2 className='text-3xl font-bold leading-tight tracking-tight mt-4 sm:text-4xl lg:text-5xl'>
          Elige el plan que mejor se adapte a ti.
        </h2>
        <p className='text-lg text-subtext-light dark:text-subtext-dark mt-4'>
          Sin costos ocultos, cancela cuando quieras
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full'>
        {planes.map((plan, index) => (
          <div
            key={index}
            className={`group flex flex-col gap-6 rounded-2xl border-2 ${
              plan.recommended
                ? 'border-primary shadow-xl shadow-primary/10 scale-105'
                : 'border-border-light dark:border-border-dark'
            } bg-card-light dark:bg-card-dark p-8 relative transition-all duration-300 hover:shadow-2xl ${
              !plan.recommended && 'hover:scale-105'
            }`}
          >
            {plan.recommended && (
              <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg'>
                ⭐ RECOMENDADO
              </div>
            )}
            <div className='flex flex-col gap-3'>
              <h3 className='text-2xl font-bold'>{plan.title}</h3>
              <p className='text-sm text-subtext-light dark:text-subtext-dark leading-relaxed'>
                {plan.description}
              </p>
            </div>
            <div className='flex items-baseline gap-2'>
              <span className='text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>{plan.price}</span>
              {plan.price !== 'A medida' && <span className='text-sm text-subtext-light dark:text-subtext-dark'>USD</span>}
            </div>
            
            <div className='flex flex-col gap-3 py-4'>
              {plan.features.map((feature, i) => (
                <div key={i} className='flex items-start gap-2'>
                  <span className='text-secondary text-sm'>{feature}</span>
                </div>
              ))}
            </div>

            <button
              className={`group/btn w-full flex justify-center items-center rounded-xl h-12 px-4 ${
                plan.recommended
                  ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30'
                  : 'bg-primary/10 text-primary hover:bg-primary/20 border-2 border-primary/20'
              } text-sm font-bold transition-all duration-300 hover:scale-105`}
            >
              <span>{plan.buttonText}</span>
              <span className='material-symbols-outlined ml-2 group-hover/btn:translate-x-1 transition-transform text-lg'>arrow_forward</span>
            </button>
          </div>
        ))}
      </div>
      
      {/* Trust badges */}
      <div className='flex flex-wrap items-center justify-center gap-8 pt-10 opacity-60'>
        <div className='flex items-center gap-2'>
          <span className='material-symbols-outlined text-secondary'>verified</span>
          <span className='text-sm font-medium'>Pago seguro</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='material-symbols-outlined text-secondary'>support_agent</span>
          <span className='text-sm font-medium'>Soporte 24/7</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='material-symbols-outlined text-secondary'>update</span>
          <span className='text-sm font-medium'>Actualizaciones gratis</span>
        </div>
      </div>
    </section>
  )
}

const TestimoniosSection = () => {
  const testimonios = [
    {
      quote:
        '"Con el template de MartelDev lancé mi tienda en un día y ya estoy vendiendo desde TikTok. El ROI fue inmediato."',
      name: 'Andrea García',
      role: 'Dueña de LushBags Perú',
      rating: 5
    },
    {
      quote:
        '"El proceso fue súper rápido y el soporte increíble. Ahora mi marca se ve mucho más profesional y las ventas aumentaron 3x."',
      name: 'Carlos Mendoza',
      role: 'Fundador de TechGadgets',
      rating: 5
    },
    {
      quote:
        '"Exactamente lo que necesitaba para mi emprendimiento. Fácil de usar y con todo lo necesario para vender online."',
      name: 'María López',
      role: 'Beauty & Skincare',
      rating: 5
    }
  ]

  return (
    <section
      className='flex flex-col gap-10 px-4 py-10 sm:py-20'
      id='testimonios'
    >
      <div className='flex flex-col gap-4 max-w-3xl mx-auto text-center'>
        <span className='text-sm font-bold text-primary uppercase tracking-wider'>Testimonios</span>
        <h2 className='text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl'>
          Emprendedores que ya confiaron en MartelDev
        </h2>
        <p className='text-lg text-subtext-light dark:text-subtext-dark'>
          Únete a más de 100 negocios que ya están vendiendo con nuestras soluciones
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className='group flex flex-col gap-4 rounded-2xl border border-border-light dark:border-border-dark bg-gradient-to-br from-card-light to-background-light dark:from-card-dark dark:to-background-dark p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 cursor-pointer'
          >
            <div className='flex gap-1'>
              {[...Array(testimonio.rating)].map((_, i) => (
                <span key={i} className='text-yellow-400'>⭐</span>
              ))}
            </div>
            
            <p className='text-base leading-relaxed italic text-text-light dark:text-text-dark'>
              {testimonio.quote}
            </p>
            
            <div className='flex items-center gap-4 mt-auto pt-4 border-t border-border-light dark:border-border-dark'>
              <div className='w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform'>
                <span className='text-white text-lg font-bold'>
                  {testimonio.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className='font-bold text-text-light dark:text-text-dark'>{testimonio.name}</p>
                <p className='text-sm text-subtext-light dark:text-subtext-dark'>
                  {testimonio.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className='flex flex-col items-center gap-6 pt-10'>
        <div className='flex items-center gap-2 text-subtext-light dark:text-subtext-dark'>
          <span className='material-symbols-outlined text-secondary'>verified</span>
          <span className='text-sm font-medium'>Verificado por Google Reviews</span>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-8'>
          <div className='text-center'>
            <div className='text-3xl font-bold text-primary'>4.9/5</div>
            <div className='text-xs text-subtext-light dark:text-subtext-dark'>Rating promedio</div>
          </div>
          <div className='w-px h-12 bg-border-light dark:bg-border-dark'></div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-secondary'>100+</div>
            <div className='text-xs text-subtext-light dark:text-subtext-dark'>Clientes felices</div>
          </div>
          <div className='w-px h-12 bg-border-light dark:bg-border-dark'></div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-yellow-500'>98%</div>
            <div className='text-xs text-subtext-light dark:text-subtext-dark'>Recomendación</div>
          </div>
        </div>
      </div>
    </section>
  )
}

const CTASection = () => (
  <section
    className='relative flex flex-col gap-8 items-center text-center rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary text-white p-10 sm:p-20 my-10 sm:my-20 shadow-2xl'
    id='contacto'
  >
    {/* Background pattern */}
    <div className='absolute inset-0 opacity-10'>
      <div className='w-full h-full' style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
    </div>
    
    {/* Decorative blobs */}
    <div className='absolute top-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl'></div>
    <div className='absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl'></div>
    
    <div className='relative z-10 flex flex-col gap-8 items-center'>
      <div className='inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm'>
        <span className='text-xs font-bold'>🚀 LANZA TU TIENDA HOY</span>
      </div>
      
      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-3xl'>
        Convierte tus seguidores en clientes reales.
      </h2>
      
      <p className='max-w-2xl text-lg text-white/90 leading-relaxed'>
        Empieza hoy con MartelDev y crea una tienda que venda por ti. Sin complicaciones técnicas, sin costos ocultos.
      </p>
      
      <div className='flex flex-col sm:flex-row gap-4'>
        <button className='group flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-white text-primary text-base font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl'>
          <span className='truncate'>💼 Comprar template</span>
          <span className='material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform'>arrow_forward</span>
        </button>
        <button className='group flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 border-2 border-white text-white text-base font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105'>
          <span className='truncate'>💬 Hablar por WhatsApp</span>
        </button>
      </div>
      
      {/* Trust indicators */}
      <div className='flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-white/80'>
        <div className='flex items-center gap-2'>
          <span className='material-symbols-outlined text-lg'>check_circle</span>
          <span>Entrega inmediata</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='material-symbols-outlined text-lg'>lock</span>
          <span>Pago 100% seguro</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='material-symbols-outlined text-lg'>support</span>
          <span>Soporte incluido</span>
        </div>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className='flex justify-center border-t border-border-light dark:border-border-dark transition-colors duration-300 bg-card-light dark:bg-card-dark'>
    <div className='w-full max-w-6xl flex flex-col gap-8 px-4 sm:px-10 py-12'>
      {/* Main footer content */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Brand column */}
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3'>
            <div className='size-8 text-primary'>
              <svg fill='none' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
                <g clipPath='url(#clip0_6_330)'>
                  <path
                    clipRule='evenodd'
                    d='M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z'
                    fill='currentColor'
                    fillRule='evenodd'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_6_330'>
                    <rect fill='white' height='48' width='48' />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className='text-xl font-bold'>MartelDev</span>
          </div>
          <p className='text-sm text-subtext-light dark:text-subtext-dark leading-relaxed'>
            Templates profesionales para emprendedores que quieren vender más por redes sociales.
          </p>
          {/* Social links */}
          <div className='flex items-center gap-3'>
            <a href='#' className='w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors'>
              <span className='text-primary font-bold'>f</span>
            </a>
            <a href='#' className='w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors'>
              <span className='text-primary font-bold'>in</span>
            </a>
            <a href='#' className='w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors'>
              <span className='text-primary font-bold'>ig</span>
            </a>
          </div>
        </div>
        
        {/* Quick links */}
        <div className='flex flex-col gap-4'>
          <h3 className='font-bold text-text-light dark:text-text-dark'>Enlaces rápidos</h3>
          <nav className='flex flex-col gap-2'>
            <a href='#beneficios' className='text-sm text-subtext-light dark:text-subtext-dark hover:text-primary transition-colors'>Beneficios</a>
            <a href='#precios' className='text-sm text-subtext-light dark:text-subtext-dark hover:text-primary transition-colors'>Precios</a>
            <a href='#testimonios' className='text-sm text-subtext-light dark:text-subtext-dark hover:text-primary transition-colors'>Testimonios</a>
            <a href='#contacto' className='text-sm text-subtext-light dark:text-subtext-dark hover:text-primary transition-colors'>Contacto</a>
          </nav>
        </div>
        
        {/* Contact info */}
        <div className='flex flex-col gap-4'>
          <h3 className='font-bold text-text-light dark:text-text-dark'>Contacto</h3>
          <div className='flex flex-col gap-3'>
            <a href='mailto:contacto@marteldev.com' className='flex items-center gap-2 text-sm text-subtext-light dark:text-subtext-dark hover:text-primary transition-colors'>
              <span className='material-symbols-outlined text-lg'>mail</span>
              contacto@marteldev.com
            </a>
            <a href='#' className='flex items-center gap-2 text-sm text-subtext-light dark:text-subtext-dark hover:text-primary transition-colors'>
              <span className='material-symbols-outlined text-lg'>phone</span>
              +51 999 999 999
            </a>
            <div className='flex items-center gap-2 text-sm text-subtext-light dark:text-subtext-dark'>
              <span className='material-symbols-outlined text-lg'>schedule</span>
              Lun - Vie: 9am - 6pm
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className='pt-6 border-t border-border-light dark:border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4'>
        <p className='text-sm text-subtext-light dark:text-subtext-dark'>
          © 2025 MartelDev. Todos los derechos reservados.
        </p>
        <div className='flex items-center gap-6 text-sm text-subtext-light dark:text-subtext-dark'>
          <a href='#' className='hover:text-primary transition-colors'>Política de Privacidad</a>
          <a href='#' className='hover:text-primary transition-colors'>Términos de Servicio</a>
        </div>
      </div>
    </div>
  </footer>
)

export default MartelDev
