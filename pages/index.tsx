import { motionListItems } from '@/assets/animations'
import HowItWorksSVG from '@/assets/how_it_works.svg'
import { DecorationLineSVG } from '@/assets/images'
import { BulletPointCard, GetStartedDownloadCard } from '@/components/Cards'
import { Collapse } from '@/components/Collapse'
import { CtaBox } from '@/components/CtaBox'
import { SponsorsList } from '@/components/Sponsors'
import { PROJECT_CONFIGURATION } from '@/db/project-info'
import { motion } from 'framer-motion'
import Head from 'next/head'
export default function Home() {
  /** 👀 Texts are generating from `db/project-info.js` file. There you can fill all the information related to the project such as name, description, call to action messages, repository/documentation URL, etc. */
  const { projectTitle, projectSubtitle, projectWhy, projectHow, projectGetStarted, projectFAQ, projectSponsors } = PROJECT_CONFIGURATION

  return (
    <div>
      <Head>
        <title>{projectTitle} </title>
        <meta name='description' content={projectSubtitle} />
        {/** 👀 Replace with your custom favicon.ico */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={'grid grid-flow-row gap-24 m-[22px]'}>
        {/** 👀 Call to Action section */}
        <div className='grid grid-row-2 md:grid-cols-2 gap-14'>
          {/** 👀 Call to Action Box */}
          <CtaBox title={`${PROJECT_CONFIGURATION.projectCta.title}`}>{PROJECT_CONFIGURATION.projectCta.description}</CtaBox>
          <motion.div initial='hidden' animate='visible' variants={motionListItems} className='grid grid-flow-row gap-4'>
            {/** 👀 Bulletpoint section */}
            {PROJECT_CONFIGURATION.projectBulletPoints.map((ele, i) => (
              <BulletPointCard key={i} item={ele} />
            ))}
          </motion.div>
        </div>

        {/** 👀 Why section */}
        <div className='grid grid-flow-row gap-6'>
          <p className='text-center text-secondary-light font-bold text-4xl mb-6'>Why {projectTitle}?</p>

          <motion.div className='grid grid-flow-row md:grid-flow-col gap-4 2xl:gap-20' initial='hidden' animate='visible' variants={motionListItems}>
            {projectWhy.map((ele) => {
              return (
                <motion.div variants={motionListItems} className='grid gap-2' key={ele.title}>
                  {ele.icon}
                  <span className='text-primary font-bold'>{ele.title}</span>
                  <p>{ele.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/** 👀 How to section */}
        <div className='grid grid-flow-row gap-6'>
          <p className='text-center text-secondary-light font-bold text-4xl mb-6'>How it works?</p>

          <div className='grid grid-flow-row gap-4 2xl:gap-8'>
            <p>{projectHow.description}</p>

            <span className='mt-8'>
              {/** 👀 Teplace the image under `assets/how_it_works.svg` */}
              {/*eslint-disable-next-line @next/next/no-img-element */}
              <img src={HowItWorksSVG.src} alt={`How ${projectHow.title} works`} />
            </span>
          </div>
        </div>

        {/** 👀 Call to action */}
        <div className='grid grid-flow-row gap-6'>
          <p className='text-center text-secondary-light font-bold text-4xl mb-6'>Get started</p>

          <div className='relative grid grid-flow-row md:grid-flow-col gap-4 bg-secondary-dark px-6 py-10 text-white '>
            {projectGetStarted.map((ele, i) => (
              <GetStartedDownloadCard key={i} index={i + 1} {...ele} />
            ))}
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
        </div>

        {/** 👀 FAQ Section */}
        {projectFAQ.isEnabled && <div className='grid grid-flow-row gap-6 '>
          <p className='text-center text-secondary-light font-bold text-4xl mb-6'>FAQ</p>
          <Collapse
            elements={projectFAQ.elements}
          />
        </div>}

        {/** 👀 Sponsors */}
        {projectSponsors.isEnable && <div className='grid grid-flow-row gap-6 '>
          <p className='text-center text-secondary-light font-bold text-4xl mb-6'>Sponsors</p>
          <SponsorsList sponsors={projectSponsors.elements} />
        </div>
        }
      </main>
    </div>
  )
}
