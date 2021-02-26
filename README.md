# Benchmark for DOM mounting / displaying with React and Next.js

This repo contains several solutions with a page having 100 000 `<span>` elements, and 2 other small pages.

## Objective

The goal is to test and compare several methods for:
1. loading a big page
1. clicking on a link
1. using the browser back button to display the first big page again, the fastest possible

There are several solutions tested here:
* Plain html without javascript (used for reference)
* React with the big component loaded in a state that is never changed
* Next.js with next's page routing
* A CSS solution with React and `overflow: hidden; height: 0px;` on the big component to hide it

The static build of all solutions is hosted [on the github pages of this repo](https://mkrtchian.github.io/react-nextjs-dom-benchmark/) (the pages take several seconds to load on a normal computer, so maybe avoid clicking on them if on mobile or so).

The idea comes initially from [a stackoverflow question](https://stackoverflow.com/questions/66248219/react-single-page-apps-and-the-browsers-back-button/) and some discussion around. My results and interpretation is described there.

There is some CSS to make the elements small enough to see all of them on the screen, and compare how would the browser update the display.

## Build and deploy the apps

Except the plain HTML that is already a build version, all other apps take 20/30 minutes each to build on a recent basic computer.

* `yarn clean` will remove all the builds
* `yarn build` will build all the apps, and move them to `/build` directory
* `yarn deploy` will send the `/build` directory to github pages, see next section to use it yourself

### Build and deploy the apps locally or to somewhere else

Except the plain HTML, other apps built version needs to be served by some sort of server. Displaying simply the local files on the browser will not work because of the absolute links of the assets and the routing.

#### For the React app using state, and the CSS solution built in a React app

You need to change (or remove if your app will be served from the root path) the "homepage" in the `package.json` of these apps, because it is specific to this github repository.

#### For the Next.js app

You probably need to change (or remove if your app will be served from the root path) the `assetPrefix` and `basePath` settings in the `next.config.js` file.

## Contributing

Feel free to give your results as feedback, or suggest other solutions through pull requests.
