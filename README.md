Angular CLI less
==

Clone the repository to have a ready-to-go Angular 10 app including Wepack bundling & hot-reloading + Jest live-testing + CSS/SCSS support.

# Starting Webpack dev server

```bash
$ npm run serve
```

# Building the app into production mode

```bash
$ npm run build
```

# Testing

```bash
# Simple tests launch
$ npm run test

# Tests with watch mode
$ npm run test:watch

# Launch tests and collect coverage
$ npm run test:coverage
```

# Replacing CSS support by SCSS support

In the `js webpack.config.base.js` file, replace "raw-loader" by Webpack loaders for SCSS.
