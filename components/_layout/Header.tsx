import { DocumentationSVG, GithubSVG } from '@/assets/images'
import useStore from '@/store/main.store'
import { useEffect } from 'react'

export const Header = () => {
  const { theme, updateTheme } = useStore((state) => state)

  const toggleTheme = () => {
    const storageTheme = localStorage.getItem('theme')

    if(!storageTheme && theme) {
      localStorage.setItem('theme', theme)
      document.getElementsByTagName('html')[0].setAttribute('class', theme)
    } else {
      console.log('🚀 ~ file: Header.tsx ~ line 18 ~ toggleTheme ~ theme', theme)
      const toggleTheme = theme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', toggleTheme)
      updateTheme(toggleTheme)
      document.getElementsByTagName('html')[0].setAttribute('class', toggleTheme)
    }
  }


  useEffect(() => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  return (
    <div className='relative bg-primary-light text-white dark:bg-secondary-dark dark:text-white py-2'>
      <div className='grid grid-flow-row md:grid-flow-row mx-auto w-5/6 2xl:w-3/6'>
        {/* Main Header */}
        <div className='flex place-self-start md:place-self-end self-center gap-2 px-4 py-4'>
          <a className='flex gap-2 px-4 font-medium' href='https://join.slack.com/t/aquaristlabs/shared_invite/zt-nphn0jhg-QYKw__It8JPMkUR_sArOug' target='_blank' rel='noreferrer'>
            <DocumentationSVG className='fill-current w-6' />
            Docs
          </a>

          <a className=' flex gap-2 px-4 font-medium' href='https://github.com/aquarist-labs/aquarium' target='_blank' rel='noreferrer'>
            <GithubSVG className='fill-current w-6' />
            GitHub
          </a>

          <div className='relative flex self-center group hover:cursor-pointer'>
            More from SUSE
            <ul className='absolute top-6 hidden group-hover:flex flex-col bg-green-500 p-4 z-10'>
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
