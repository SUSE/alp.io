import { BranchSVG, DocumentationSVG } from '@/assets/images'
import { PROJECT_CONFIGURATION } from '@/db/project-info'
import { motion } from 'framer-motion'
import React from 'react'

export const CtaBox = ({ title, children }) => {
  const { projectRepoURL, projectDocumentationURL } = PROJECT_CONFIGURATION
  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0,
      }}
      animate={{ x: 0, opacity: 1 }}
      className='grid grid-gap-4 bg-blue-500 text-white '>
      <div className='p-8'>
        <h1 className='text-2xl font-bold mb-2'>{title}</h1>
        <p>{children}</p>
      </div>

      <div className='grid grid-flow-col place-content-between bg-secondary-dark p-8'>
        {projectRepoURL && (
          <a href={projectRepoURL} target='_blank' rel='noreferrer'>
            <span className='flex justify-center'>
              <BranchSVG className='w-6 h-6 fill-current text-primary' />
            </span>
            <span className='text-xs'>Repository</span>
          </a>
        )}
        {projectDocumentationURL && (
          <a href={projectRepoURL} target='_blank' rel='noreferrer'>
            <span className='flex justify-center'>
              <DocumentationSVG className='w-6 h-6 fill-current text-primary' />
            </span>
            <span className='text-xs'>Documentation</span>
          </a>
        )}
      </div>
    </motion.div>
  )
}
