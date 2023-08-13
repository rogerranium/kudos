## Welcome to Remix!

- [Remix Docs](https://remix.run/docs)


## Use Remix CLI and create a new Remix Project!

* npx create-remix@latest
  - enter name of application
  - choose juste the basics option
  - choose the cloud provider for deploy app
  - choose typescript
  - choose run npm install


## Development

* start the remix dev server and wrangler
  - npm run dev
  - Open browser on http://127.0.0.1:8788

## Deployment

Cloudflare Pages are currently only deployable through their Git provider integrations.

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages) and after verifying your email address with Cloudflare, go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything).

Configure the "Build command" should be set to `npm run build`, and the "Build output directory" should be set to `public`.

## Install Tailwindcss
* https://tailwindcss.com/docs/guides/remix
 
  - npm install -D tailwindcss postcss autoprefixer concurrently
  - npx tailwindcss init -p
  - in tailwind.config.js modify => content: ['./app/**/*.{js,jsx,ts,tsx}'],
  - in package.json add line =>  "dev:css": "tailwindcss -w -i ./styles/app.css -o app/styles/app.css",
  - in root.tsx add :
        import stylesheet from "./styles/app.css";

        export const links: LinksFunction = () => [
          { rel: "stylesheet", href: stylesheet },
        ];
  - for taildwincss watch execute npm run dev:css and after execute npm run dev 


## Supports

* https://www.youtube.com/watch?v=4tXGRe5CDDg&list=PLn2e1F9Rfr6kPDIAbfkOxgDLf4N3bFiMn&index=1&ab_channel=Prisma
* https://www.youtube.com/watch?v=BbMhVNqiSMo&t=220s&ab_channel=ReactTipswithBrooksLybrand