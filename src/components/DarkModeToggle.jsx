import { useDarkMode } from '../hooks/useDarkMode'

const DarkModeToggle = () => {
  const [isDark, toggleDarkMode] = useDarkMode()

  return (
    <button
      onClick={toggleDarkMode}
      className='flex items-center justify-center w-10 h-10 rounded-lg hover:bg-primary/10 transition-colors duration-200'
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo oscuro' : 'Modo claro'}
    >
      {isDark ? (
        <span className='material-symbols-outlined text-yellow-400 text-xl'>
          light_mode
        </span>
      ) : (
        <span className='material-symbols-outlined text-gray-600 text-xl'>
          dark_mode
        </span>
      )}
    </button>
  )
}

export default DarkModeToggle
