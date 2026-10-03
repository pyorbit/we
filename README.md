# PyOrbit Website

The public website for [PyOrbit](https://github.com/pyorbit), an open-source project for learning Python. This repository introduces the project, explains its current state and direction, and points people to the learning platform. The [platform and curriculum](https://github.com/pyorbit/pyorbit) are maintained in a separate repository.

The site is an Astro static build. It has no backend, account system, tracking scripts, or runtime dependency on the platform repository. The illustrated lesson and code windows on the homepage are presentation only.

## Preview

Add a screenshot here after the first public deployment. The social preview is `public/og-preview.png`, generated from the editable `public/og-preview.svg` source.

## Stack

- Astro and TypeScript for static pages and typed configuration
- Tailwind CSS 4 via the Vite plugin, with semantic design tokens in `src/styles/global.css`
- Minimal browser JavaScript for the light, dark, and system theme switcher

Use Node.js 22.22.3 or a compatible newer release. The project is built and checked in CI with Node.js 22.22.3.

## Local development

```sh
npm install
npm run dev
```

The development server prints its local URL. `npm run preview` serves a completed production build.

## Configuration

Copy `.env.example` to `.env` if you need a live platform link locally:

```sh
cp .env.example .env
```

Set `PUBLIC_PLATFORM_URL` to the public URL of the running learning platform. This is a public URL, not a secret. Until it is set, **Open PyOrbit links to the [platform source repository](https://github.com/pyorbit/pyorbit)**, and the page explains that fallback. The URL is read centrally in `src/config/site.ts`; all platform CTAs use the same value. The repository, contribution, documentation, and issue URLs are also centralized there.

The production workflow reads the GitHub Actions repository variable `PUBLIC_PLATFORM_URL`. Add it under **Settings → Secrets and variables → Actions → Variables** once the platform has a real public URL, then rerun the workflow. Avoid putting a private token in a `PUBLIC_*` variable.

The default Astro settings target the project Pages address `https://pyorbit.github.io/we/`:

```text
SITE_URL=https://pyorbit.github.io
SITE_BASE=/we/
```

These values are defaults in `astro.config.mjs`; you do not need to set them for project Pages. Internal links and asset references use Astro's base path. `SITE_URL` and `SITE_BASE` are build-time settings for a different deployment target.

## Checks and production build

```sh
npm run check
npm run lint
npm run format:check
npm run build
npm run preview
```

The static files are written to `dist/`, which is ignored by Git. `npm run format` formats source and configuration files. A fresh clone can use `npm ci` once the committed lockfile is present.

## GitHub Pages

`.github/workflows/deploy-pages.yml` builds and deploys on pushes to `main` and can be run manually. It runs `npm ci`, the quality checks, the static build, and the official Pages upload/deploy actions. The expected project Pages URL is **https://pyorbit.github.io/we/**.

One-time repository setup in GitHub:

1. Open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
2. Ensure Actions are enabled for the repository. Push the site and lockfile to `main`, or run **Deploy website to GitHub Pages** from the Actions tab.
3. When the live platform URL is known, set the `PUBLIC_PLATFORM_URL` Actions variable and rerun the workflow.

No `CNAME` file is included because no project domain is confirmed.

### Moving to a custom domain

Configure the domain in **Settings → Pages** and add the DNS records GitHub provides. Set the GitHub Actions variables `SITE_URL=https://your-domain.example` and `SITE_BASE=/`; the deployment workflow passes them to the build. Keep `PUBLIC_PLATFORM_URL` pointed at the learning platform, which may be a different domain. Confirm the generated canonical, sitemap, image, and asset URLs after switching. Add a `CNAME` file only once the domain is owned and configured; do not guess one.

## Contributing and license

See the platform's [contribution guide](https://github.com/pyorbit/pyorbit/blob/master/CONTRIBUTING.md) for project and curriculum contributions. Website issues and pull requests belong in [pyorbit/we](https://github.com/pyorbit/we). The website is licensed under the [MIT License](LICENSE).

The official two-form snake logo has not been found in either repository. The site currently uses a typographic wordmark and an abstract orbit motif. Replace `src/components/Brand.astro`, `public/favicon.svg`, and the social preview artwork with approved logo artwork when its source asset becomes available; keep the asset inside this repository.
