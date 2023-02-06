import { RancherLogoSVG, SuseLogoWhite } from '@/assets/images'
import EpinioLogo from '@/assets/products-logos/icon-epinio.svg'
import HarvesterLogo from '@/assets/products-logos/icon-harvester.svg'
import KubewardenLogo from '@/assets/products-logos/icon-kubewarden.svg'
import OpniLogo from '@/assets/products-logos/icon-opni.svg'
import useStore, { ThemeI } from '@/store/main.store'
import Image from 'next/image'
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
    // Persist the theme in localStorage
    const persistedTheme = localStorage.getItem('theme') as ThemeI

    if (persistedTheme) {
      updateTheme(persistedTheme)
      document.getElementsByTagName('html')[0].setAttribute('class', persistedTheme)
    } else {
      document.getElementsByTagName('html')[0].setAttribute('class', theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme, updateTheme])

  return (
    <nav className='flex flex-wrap justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-green-500'>
      <SuseLogoWhite></SuseLogoWhite>
      <p className='text-white text-sm'>Docs</p>
      <p>Get Involved!</p>
      <p></p>
    </nav>
  )
}
