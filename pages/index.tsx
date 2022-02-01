import { motionListItems } from '@/assets/animations'
import HowItWorksSVG from '@/assets/how_it_works.svg'
import { DecorationLineSVG, LibrarySVG } from '@/assets/images'
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

      <main className={'grid grid-flow-row gap-20'}>
        {/** 👀 Call to Action section */}
        <div className='bg-secondary-lighter relative'>
          <div className="grid grid-row-2 content-center align-middle gap-14 md:grid-cols-2 mx-auto w-5/6 2xl:w-3/6 py-20">
            <motion.div initial='hidden' animate='visible' variants={motionListItems} className='self-center' >
              <p className='text-[40px] font-extrabold text-right text-secondary-dark'> {projectSubtitle}</p>
            </motion.div>

            <CtaBox title={`${PROJECT_CONFIGURATION.projectCta.title}`}>{PROJECT_CONFIGURATION.projectCta.description}</CtaBox>

            <div className="md:absolute flex flex-col md:flex-row gap-10 -bottom-24 md:px-20 mx-auto w-5/6 2xl:w-3/6">
              {/** 👀 Bulletpoint section */}
              {PROJECT_CONFIGURATION.projectBulletPoints.map((ele, i) => (
                <BulletPointCard key={i} item={ele} />
              ))}
            </div>
          </div>
          {/** 👀 Call to Action Box */}

        </div>

        {/** 👀 Why section */}
        <div className='grid grid-flow-row gap-6 mx-auto w-5/6 2xl:w-3/6'>
          <p className='text-secondary-light font-bold text-4xl mb-6 mt-20 text-center'>What is {projectTitle}?</p>

          <motion.div className='grid grid-flow-row gap-4' initial='hidden' animate='visible' variants={motionListItems}>
            <p>Aquarium is a SUSE-sponsored Open Source project to build an easy-to-use, rock-solid appliance wrapped around the Ceph project. The project started development in January 2021, and has become a passion project for the storage team at SUSE.</p>

            <p>
              We are investigating the beginnings of a new storage appliance project in an opinionated fashion. The Aquarium project is split into two clearly defined work streams: Gravel (backend) and Glass (frontend).
            </p>
          </motion.div>
        </div>

        {/** 👀 How to section */}
        <div className='bg-gray-200 relative'>
          <div className='grid grid-flow-row gap-6 m-16 mx-auto w-5/6 2xl:w-3/6'>
            <p className='text-secondary-light font-bold text-4xl text-center'>How it works</p>

            <div className='grid grid-flow-row gap-4 2xl:gap-8'>
              {/** 👀 Teplace the image under `assets/how_it_works.svg` */}
              {/*eslint-disable-next-line @next/next/no-img-element */}
              <img className='mx-auto max-w-[600px]' src={HowItWorksSVG.src} alt={`How ${projectHow.title} works`} />
            </div>
          </div>
        </div>

        {/** 👀 Call to action */}
        <div className='grid grid-flow-row gap-6 mx-auto w-5/6 2xl:w-3/6'>
          <p className=' text-secondary-light font-bold text-4xl mb-6 text-center'>Get started</p>

          <p>
            Our Zero-to-Hero guide takes you step by step through the process of setting up a local, VM-based test instance via Vagrant on a Linux system of your choice, including checking out all the required repositories, setting up a local build environment, running your first image build, and starting the resulting cluster.
          </p>

          <p>
            After only about half an hour, you will be able to login to a Ceph cluster managed via Aquarium for the first time!
          </p>
          <a className='flex gap-2 place-self-start px-2 py-2 font-medium bg-primary' href='https://github.com/aquarist-labs/aquarium/blob/main/doc/from-zero-to-hero.md' target='_blank' rel="noreferrer" >
            <LibrarySVG className='w-6 fill-current text-black' />
            Read the From-Zero-to-Hero Guide
          </a>
        </div>
        <div className='bg-secondary-lighter relative'>
          <div className='mx-auto w-5/6 2xl:w-3/6 h-[280px] md:h-[300px]'>
            <div className='-mt-12 grid grid-flow-row md:grid-flow-col gap-4 bg-gray-200 px-6 py-10 text-black '>
              <div className=' flex flex-col gap-2 flex-wrap'>
                {projectGetStarted.map((ele, i) => {
                  return <div key={i} className="flex gap-2">
                    <span className='text-gray-500 flex'>
                      user
                      <span className='md:flex hidden'>@Host ~ </span>
                      %
                    </span>
                    {ele}
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>

        {/** 👀 FAQ Section */}
        {projectFAQ.isEnabled && (
          <div className='grid grid-flow-row gap-6 mb-24 mx-auto w-5/6 2xl:w-3/6 '>
            <p className='text-secondary-light font-bold text-4xl mb-6 text-center'>FAQ</p>
            <Collapse elements={projectFAQ.elements} />
          </div>
        )}

        {/** 👀 Sponsors */}
        {projectSponsors.isEnable && (
          <div className='grid grid-flow-row gap-6 '>
            <p className='text-center text-secondary-light font-bold text-4xl mb-6'>Sponsors</p>
            <SponsorsList sponsors={projectSponsors.elements} />
          </div>
        )}
      </main>
    </div>
  )
}
