import { DocumentationSVG, GithubSVG } from '@/assets/images'

export const DocAndGitLinks = () => {
  return (
    <>
      <a className='flex align-middle self-center gap-2 px-4 font-medium underline' href='https://join.slack.com/t/aquaristlabs/shared_invite/zt-nphn0jhg-QYKw__It8JPMkUR_sArOug' target='_blank' rel='noreferrer'>
        <DocumentationSVG className='fill-current w-6' />
        <span className='self-center'>Docs</span>
      </a>

      <a className='flex self-center gap-2 px-4 font-medium underline' href='https://github.com/aquarist-labs/aquarium' target='_blank' rel='noreferrer'>
        <GithubSVG className='fill-current w-6' />
        <span className='self-center'> GitHub</span>
      </a>
    </>
  )
}
