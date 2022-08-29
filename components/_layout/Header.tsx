import useStore from '@/store/main.store'
import { useEffect } from 'react'
import { DocAndGitLinks } from '../DocAndGitLinks'

export const Header = () => {
  const { theme, updateTheme } = useStore((state) => state)

  const toggleTheme = () => {
    const toggleTheme = theme === 'dark' ? 'light' : 'dark'
    updateTheme(toggleTheme)
    document.getElementsByTagName('html')[0].setAttribute('class', toggleTheme)
    localStorage.setItem('theme', toggleTheme)
  }

  useEffect(() => {
    const storageTheme = localStorage.getItem('theme')

    if (!storageTheme && theme) {
      localStorage.setItem('theme', theme)
      document.getElementsByTagName('html')[0].setAttribute('class', theme)
    } else {
      document.getElementsByTagName('html')[0].setAttribute('class', theme)
      localStorage.setItem('theme', theme)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='relative bg-primary-light text-white dark:bg-secondary-dark dark:text-white py-2'>
      <div className='grid grid-flow-row md:grid-flow-row mx-auto w-5/6 2xl:w-3/6'>
        {/* Main Header */}
        <div className='flex place-self-start md:place-self-end self-center gap-2 px-4 py-4'>
          <DocAndGitLinks />

          <div className='relative flex self-center md:ml-7 group hover:cursor-pointer'>
            <span className='hidden md:flex'>More from SUSE</span>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='sm:hidden w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
            </svg>

            <ul className='absolute top-6 hidden group-hover:flex flex-col bg-primary-light dark:bg-secondary-dark shadow-sm  p-4 z-10 min-w-full '>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>

          <button onClick={toggleTheme}>
            <span>{theme === 'dark' ? '🌞' : '🌚'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
