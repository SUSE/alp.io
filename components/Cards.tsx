import { motionListItems } from '@/assets/animations'
import { CheckMarkSVG, DecorationLineSVG } from '@/assets/images'
import { motion } from 'framer-motion'

export const BulletPointCard = ({ item }) => {
  return (
    <motion.div variants={motionListItems} key={item} className='relative grid items-center p-4 bg-secondary-dark text-white font-bold'>
      <span className='flex gap-2 justify-start'>
        <span className='mt-1'>
          <CheckMarkSVG className='w-6 h-6 fill-current text-secondary-light' />
        </span>
        <span>{item}</span>
      </span>
      <div className='absolute w-full bottom-0'>
        <DecorationLineSVG className='max-w-full h-1' />
      </div>
    </motion.div>
  )
}

interface GetStartedDownloadCardT {
  index: number
  title: string
  description?: string
  action?: {
    isEnable: boolean
    title: string
    url: string
  }
}

export const GetStartedDownloadCard = ({ index, title, action, description }: GetStartedDownloadCardT) => {
  return (
    <div className='flex flex-row justify-start gap-1' key={index}>
      <span className='text-secondary-light font-bold text-2xl -mt-1'>{index}</span>
      <div className='grid grid-flow-row place-content-start justify-items-start gap-2'>
        <span className='text-lg font-bold'>{title}</span>

        <p className='text-secondary-light'>{description}</p>
        {action && action.isEnable && (
          <a className='p-2 bg-primary self-start text-xs font-bold' href={action.url} target='_blank' rel='noreferrer'>
            {action.title}
          </a>
        )}
      </div>
    </div>
  )
}
