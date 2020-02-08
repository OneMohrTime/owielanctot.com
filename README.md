# Owie's Website

Powered by
- [Sculpin](http://sculpin.io)
- [Google Domains](https://domains.google.com/)

## Prerequisites

- [Composer](https://getcomposer.org/) `~1.8.x`
- [Yarn](https://yarnpkg.com/en/docs/install) `~1.17.x`
- [Node](https://nodejs.org/) `~10.x`
- [NPM](https://www.npmjs.com/) `~6.13.x`

## Install

```bash
$ cd ~/path/to/owielanctot.com/
$ yarn install
```

This application uses [Symfony's Webpack Encore](https://symfony.com/doc/current/frontend.html) to manage CSS, JavaScript and image assets. Install the JS dependencies:

## Build

First, start Encore to compile and update the assets in `source/assets/` into `source/build/`. The watcher keeps running until you exit it manually:

```bash
$ yarn encore dev --watch
```

In a new console, start the sculpin watcher to have your content updated as soon as you save changes:

```bash
$ vendor/bin/sculpin generate --watch --server
```

The site should now be accessible at `http://localhost:8000/`.

To generate static files, run `dev` for expanded or `prod` for minified builds:

```bash
$ vendor/bin/sculpin generate --env=dev
$ vendor/bin/sculpin generate --env=prod
```

Unfortunately a symlink won't work, so manually copy everything to `/docs` before deploying 👎
