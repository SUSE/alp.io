import { SuseLogoSVG } from '@/assets/images'
import { PROJECT_CONFIGURATION } from '@/db/project-info'

export const Footer = () => {
  const { projectFooterLinks, projectNavigation } = PROJECT_CONFIGURATION
  return (
    <div className=' bg-secondary-dark text-white'>
      <div className='grid grid-flow-row align-middle mx-auto w-5/6 2xl:w-3/6'>
        <div className='grid grid-flow-col gap-4 justify-between items-center'>

          <div className="flex gap-4">
            <div className='flex gap-4'>
              {projectNavigation.social.map((socialMedia, i) => (
                <a key={i} href={socialMedia.url} target='_blank' rel='noreferrer'>
                  {<socialMedia.icon className='w-5 h-5 fill-current' />}
                </a>
              ))}
            </div>
            <div className='flex gap-2 flex-wrap'>
              {projectFooterLinks.map((ele) => (
                <a className='font-bold' key={ele.title} href={ele.href} target='_blank' rel='noreferrer'>
                  {ele.title}
                </a>
              ))}
            </div>

          </div>

          <SuseLogoSVG className='w-40 h-20 fill-current text-white' />
        </div>
      </div>
    </div>
  )
}
