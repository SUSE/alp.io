import { DecorationLineSVG, GithubSVG, SlackSVG } from '@/assets/images'
import ProjectLogo from '@/assets/logo.svg'
import { PROJECT_CONFIGURATION } from '@/db/project-info'
import { motion } from 'framer-motion'
export const Header = () => {
  const { projectTitle, projectSubtitle, projectNavigation } = PROJECT_CONFIGURATION

  return (
    <div className='relative bg-white py-6'>
      {/* Header content */}

      <div className='grid grid-flow-row md:grid-flow-row mx-auto w-5/6 2xl:w-3/6  items-center'>
        {/* Main Header */}
        <div className='grid grid-row-2 md:grid-cols-2 gap-8 justify-between align-middle'>
          <div className='grid gap-4'>
            <div className='flex items-center align-middle gap-4'>
              {/*eslint-disable-next-line @next/next/no-img-element */}
              <img className='self-center' width='60px' height='60px' src={ProjectLogo.src} alt={`${projectTitle} logo`} />
              <h1 className='text-5xl font-bold text-secondary-light'>{projectTitle}</h1>
            </div>
          </div>

          <div className='place-self-start md:place-self-end self-center flex gap-2 px-4 py-4' >
            <a className='place-self-start md:place-self-end self-center flex gap-2 px-4 py-2 font-medium border-2 border-gray-900 text-gray-900' href='https://join.slack.com/t/aquaristlabs/shared_invite/zt-nphn0jhg-QYKw__It8JPMkUR_sArOug' target='_blank' rel="noreferrer">
              <SlackSVG className='fill-current text-gray-900 w-6' />
              Join Slack</a>

            <a className=' place-self-start md:place-self-end self-center flex gap-2 px-4 py-2 font-medium border-2 border-primary bg-primary text-white' href='https://github.com/aquarist-labs/aquarium' target='_blank' rel="noreferrer">
              <GithubSVG className='fill-current text-white w-6' />
              Repository</a>
          </div>
        </div>
      </div>
    </div>
  )
}
