# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## GitHub Pages (Jekyll)

A minimal Jekyll site lives in `docs/` for publishing with GitHub Pages.

Local preview:
1. Install Ruby and Bundler (`gem install bundler`).
2. `cd docs`
3. `bundle install`
4. `bundle exec jekyll serve --livereload`

Publish:
- Push the `docs/` folder to GitHub.
- In your repository settings, set Pages source to `/docs`.
- For a project site, set `baseurl` in `docs/_config.yml` to `"/mzlmachines"` (or your repository name). Leave it blank for a user/organization site.
