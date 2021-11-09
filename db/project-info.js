import { CloudSVG, TorchSVG, ContainerSVG } from '@/assets/images'

export const PROJECT_CONFIGURATION = {
  projectTitle: 'Project Name',
  projectSubtitle: 'Short project description, it will be used on the header',
  projectVideo: {
    isEnable: false,
    youtubeUrl: ''
  },
  projectCta: {
    title: 'About Project Name',
    description: 'In-memory image reduces upgrade overhead  (minimized system upgrade impact) easy installer wizard for persistent disk and other tooling.'
  },
  projectBulletPoints: [
    'Building, running, pushing, and pulling containers',
    'Running your choice of Kubernetes versions',
    'Local application development in Kubernetes'
  ],
  projectRepoURL: 'URL',
  projectDocumentationURL: 'URL',
  projectWhy: [
    {
      icon: <CloudSVG />,
      title: `Kubernetes Made Simple`,
      description: `Getting started with Kubernetes on your desktop can be a project. Especially if you want to match the version of Kubernetes you run locally to the one you run in production. Rancher Desktop makes it as easy as setting a preference.`,
    },
    {
      icon: <TorchSVG />,
      title: `Built On Proven Projects`,
      description: `Getting started with Kubernetes on your desktop can be a project. Especially if you want to match the version of Kubernetes you run locally to the one you run in production. Rancher Desktop makes it as easy as setting a preference.`,
    },
    {
      icon: <ContainerSVG />,
      title: `Coupled Container Management`,
      description: `Getting started with Kubernetes on your desktop can be a project. Especially if you want to match the version of Kubernetes you run locally to the one you run in production. Rancher Desktop makes it as easy as setting a preference.`,
    }
  ],
  projectHow: {
    description: 'Rancher Desktop is an electron based application that wraps other tools while itself providing the user experience to create a simple experience. On MacOS Rancher Desktop leverages a virtual machine to run containerd and Kubernetes. Windows Subsystem for Linux v2 is leveraged for Windows systems. All you need to do is download and run the application.'
  },
  projectFooterLinks: [
    {
      title: 'Carrera',
      href: 'www.google.com',
    },
    {
      title: 'Legal',
      href: 'www.google.com',
    },
    {
      title: 'Feedback',
      href: 'www.google.com',
    },
  ]
}
