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
  <div className="bg-green-500">
  {/* <div className="max-w-7xl py-3 px-3 sm:px-6 lg:px-8"> */}
  <div className="">
    <div className="flex flex-wrap items-center">
      <div className="flex flex-1 wd-0 items-center">
        <span className="ml-10 items-center">
          <SuseLogoWhite></SuseLogoWhite>
        </span>
      </div>
      <div className="items-center flex mr-10 flex-wrap space-x-4 justify-between">
        <a className="font-medium items-center text-white" href="https://en.opensuse.org/images/6/62/OpenALT2022-AdaptableLinuxPlatform.pdf">Community</a>
        <a className="font-medium items-center text-white" href="https://documentation.suse.com/alp/all/single-html/alp/index.html">Docs!</a>
        <a href="https://suse.com" className="flex my-4 items-center justify-center rounded-md border border-transparent bg-white px-10 py-2 text-sm font-medium text-sans text-sm shadow-sm hover:bg-indigo-50">SUSE</a>
      </div>
    </div>
  </div>
</div>

  )
}
