import { motionListItems } from '@/assets/animations'
import { CheckMarkSVG, DecorationLineSVG } from '@/assets/images'
import { motion } from 'framer-motion'

export const BulletPointCard = ({ item }) => {
  return (
    <motion.div variants={motionListItems} key={item} className='relative grid items-center p-4 bg-secondary-dark text-white font-bold'>
      <span className='flex gap-2 justify-start'>
        <span className='mt-1'>
          <CheckMarkSVG />
        </span>
        <span>{item}</span>
      </span>
      <div className='absolute w-full bottom-0'>
        <DecorationLineSVG className='max-w-full h-1' />
      </div>
    </motion.div>
  )
}
