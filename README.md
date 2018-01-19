# simple-redux-app
Simple base app with react, redux, react-router v4, hot-reload &amp; sass.

## What is this
This is a base project that you can use to jumpstart your react & redux apps.
It includes the last react & redux spec as of today 19/01/2018, and uses react-router v4 to handle routes.
Style is handles by sass/scss.
nb: this is just front end, you can use whatever backend language you are most confortable with.

## How to install
You can use both npm or yarn, the version I used to create this project are:

```
$ node -v ; npm -v ; yarn -v
v8.8.1
5.4.2
1.2.1
```
If you just freshly installed yarn/npm you are good to go, else you might need to upgrade, for npm I use `n`

```
npm install -g n
```
to install it and after that select at least the stable version (what I used).

```
n stable
```

and now you have the latest stable version of node&npm.


`npm i -g simple-redux-app` to install this package globally, from there you will be able to jumpstart as many boilerplates as you wish.


`simple-redux-app folderName` to create a react boilerplate on the `folderName` folder. By default all dependencies are already installed, just `cd folderName` and start hacking.


`yarn start`/`npm start` to start dev server with hot reload, it's live on `localhost:3000`.


`yarn run build`/`npm run build` to build prod bundle, it includes both treeshaking and uglify to optimize the code as much as possible.


`yarn test`/`npm test` run the tests with Jest and Enzyme, by default the test included only check for the correct render of base components & routes, all are passing.


## Tests

The testing environment is written in Jest and Enzyme.
The included tests are basic and only check the proper render of base components (snapshot), routes and redux actions + reducer.
While still fairly simple, the default tests are easy to manage and expand, providing a smoother curve into testing with JavaScript, React, and Redux. If you haven't used snapshot testing before, I'd suggest to read the [Jest documentation about them](https://facebook.github.io/jest/docs/snapshot-testing.html).


## Eslint

This project uses AirBnB Javascript specs so you can write error-free react and javasctipt code, if you use Visual Studio Code, you can install eslint from the extension tab to activate this function, other editors just google _name of the editor + eslint_ you will find how to enable it for your editor.

## How to contribute

I wrote a [small guide](https://medium.com/@francesco.agnoletto/how-to-not-f-up-your-local-files-with-git-part-1-e0756c88fd3c) on how to contribute and the common etiquette to follow.

