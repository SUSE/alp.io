## General

TypeScript base with Next.js as React Framework, Tailwind CSS as Style Framework, and Zustand for State Management.

Features:

- Enabled JIT for Tailwind
- Absolute Imports and Module path aliases for Next.js
- Initial state example for Zustand

Other depedencies:

- Zustand: https://github.com/pmndrs/zustand
- Tailwind CSS: https://tailwindcss.com/

## Getting Started

First, run the development server:

```bash
npm install
# then:
npm run dev
# or
yarn dev
```

## Build for production

You can serve the applications a Server-Side render with `npm start`. This will build the Production Ready application.

If you want to generate static files to serve as Static Site on Github Pages for example you should run `npm run static`. This will generate an `/out` folder with all the static files.

## Preview

<img style="float: right;" src="./preview.png">
