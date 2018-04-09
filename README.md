
**Note:** Node v6+ is required for this project.

Recommended using [yarn](https://code.facebook.com/posts/1840075619545360) to manage dependencies. To begin using yarn, install globally with `npm install -g yarn`.

Then simply clone the repository and install using the `yarn` command.

```
yarn
```

To build the dev environment with hot reloading of JS and CSS, type:

`npm run browser`

To build for production w/ server rendering, type:

`npm run server`

By default, the site is available at http://localhost:3000

The repo includes :

- React
- Redux 
- React Router (routing)
- webpack 
- Sass-loader (processing of CSS)
- Stylelint and eslint 
- Babel 
- husky 

### Responsive Design

The breakpoints for responsive design are taken similar as Netflix web-app i.e. 500px, 800px, 1100px & 1400px. In between these breakpoints, the app is fluid. After the smallest breakpoint, the sizes are frozen to avoid making things too small.

The nav menu converts to a dropdown in smaller size window, again similar to netflix, to avoid overlaps and/or small text. 

### VelocityJS

Velocity is used for horizontal scroll on homePage, although the scroll can be done with a touchpad as well. 

Velocity JS might interfere with the node installation if you try to install this repo. This is because of no 'window' definition available for Velocity in node. 

### Pages

For the sample purpose, Homepage, Bio and Gallery - 3 pages are designed, which share the same components. 