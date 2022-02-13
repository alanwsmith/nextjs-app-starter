# Next.js Starter

## Installation

You have to use a sub directory to load the thing. Use:

```bash
npx create-next-app --example https://github.com/alanwsmith/nextjs-starter.alanwsmith.com/tree/main/site .
```


## Overview

- This is a basic Next.js starter template
- It's setup to run on Netlify
- The site itself is under the `site` subdirectory
- It uses Tailwind
- Some basic styles are applied in `site/styles/globals.css`
- There's a basic photoshop Open Graph (OG) Image template under `site/_assets/og-images/main.psd`
- The OG Image itself is under `site/public/og-images/main.png`
- There's a bunch of example favicons showing the different sizes under `site/public/favicons`
- There's a `site/public/browserconfig.xml` file for Windows favicon pointers
- The OG Image and favicon calls are defined in `site/components/HeadTag.js`
- An example of the HeadTag call with the OG image and details in in the `site/pages/index.js` file
- A global layout is defined in `site/components/LayoutMain.js` and called in `site/pages/_app.js`
- There's a hello world api sample call under `site/pages/api/sample/hello.js`

## Installation

After you clone down the repo, move into the `site` direcotry and run npm install. For example:

```
cd site
npm i
```

That picks up everything from the package.json and package-lock.json files and installs them. 

## Local Dev

If you have the Netlify command line tool, run this inside the `site` directory to preview
the site for local dev.

```
netlify dev
```


