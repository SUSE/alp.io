## Important!

💥 This is a POC and it's not ready for production.

---

## Getting Started

For development, please run the following commands:

```bash
# This will create an env file with all the things needed for local development (rewrites paths, etc.)
cp .template.env .env.development.local
```

\*Requieres [Node](https://nodejs.org/en/) installed.

```bash
npm install
# then:
npm run dev
# or
yarn dev
```

Project configuration can be found under `/db/project-info.js`. You'll need to fill it with your information and the changes would be reflected (live reload) at http://localhost:3000

---

## Build for production

### Self hosted

You can serve the applications a Server-Side render with `npm start`. This will build the Production Ready application.

*NOTE:*: You'll need to edit `next.config.js` and comment out `assetPrefix & basePath`, this configuration is intended for GithubPages.


### Github Pages

If you want to generate static files to serve as Static Site on Github Pages for example you should run `npm run static`. This will generate an `/out` folder with all the static files.

*NOTE:*: You'll need to edit `next.config.js` and add replace the default `project-template` name with your repository name for `assetPrefix & basePath`, this configuration is needed to correctly render and set paths in Github Pages.


## Preview

<img style="float: right;" src="./preview.png">
