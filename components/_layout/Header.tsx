import { DecorationLineSVG } from '@/assets/images'
import ProjectLogo from '@/assets/logo.svg'
import { PROJECT_CONFIGURATION } from '@/db/project-info'
import { motion } from 'framer-motion'
export const Header = () => {
  const { projectTitle, projectSubtitle, projectNavigation } = PROJECT_CONFIGURATION

  return (
    <div className='relative bg-secondary-dark text-white py-6'>
      {/* Header content */}

      <div className='grid grid-flow-row md:grid-flow-row mx-auto w-5/6 2xl:w-3/6 pb-6  items-center'>
        {/* Main Header */}
        <div className='flex justify-end gap-3 items-center'>
          <div className='flex text-base font-bold gap-2'>
            {projectNavigation.links.map((link) => (
              <a key={link.title} className='hover:underline' href={link.href} target='_blank' rel='noreferrer'>
                {link.title}
              </a>
            ))}
          </div>
          <div className='flex gap-2'>
            {projectNavigation.social.map((socialMedia, i) => (
              <a key={i} href={socialMedia.url} target='_blank' rel='noreferrer'>
                {<socialMedia.icon className='w-5 h-5 fill-current' />}
              </a>
            ))}
          </div>
        </div>
        <div className='grid grid-row-2 md:grid-cols-2 gap-8 justify-between'>
          <div className='grid gap-4'>
            <div className='flex items-center gap-4'>
              {/*eslint-disable-next-line @next/next/no-img-element */}
              <img width='60px' height='60px' src={ProjectLogo.src} alt={`${projectTitle} logo`} />
              <h1 className='text-5xl font-bold'>{projectTitle}</h1>
            </div>
            <span className='text-xl font-body text-secondary-light'>{projectSubtitle}</span>
          </div>
        </div>
      </div>
      <div className='absolute w-full bottom-0'>
        <motion.div
          initial={{
            x: -200,
            opacity: 1,
          }}
          animate={{ x: 0, opacity: 1 }}
        >
          <DecorationLineSVG className='max-w-full h-2' />
        </motion.div>
      </div>
    </div>
  )
}
