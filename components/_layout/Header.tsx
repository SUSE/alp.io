import { DecorationLineSVG } from '@/assets/images'
import ProjectLogo from '@/assets/logo.svg'
import { PROJECT_CONFIGURATION } from '@/db/project-info'
import { motion } from 'framer-motion'
export const Header = () => {
  const { projectTitle, projectSubtitle } = PROJECT_CONFIGURATION

  return (
    <div className='relative bg-secondary-dark text-white py-14'>
      {/* Header content */}
      <div className='grid grid-flow-row md:grid-flow-row mx-auto w-5/6 2xl:w-3/6 gap-24 items-center justify-between'>
        {/* Main Header */}
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
