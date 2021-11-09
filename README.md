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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Build for production

You can serve the applications a Server-Side render with `npm start`. This will build the Production Ready application.

If you want to generate static files to serve as Static Site on Github Pages for example you should run `npm run static`. This will generate an `/out` folder with all the static files.
