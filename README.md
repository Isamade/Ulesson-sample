# Ulesson-sample Common setup

cd my-app

npm install

npm start

This is a demonstrative app which shows the steps that have to be taken in order to continue app development.
'my-app/src/components' contains react components that will be transformed to html pages. 'my-app/src/App.js' is the
app starting point. The app contains actions for interacting with the store in 'my-app/src/actions'.

React router is used for pages navigation. Redux is used for state management(Please see 'my-app/src/store.js' and 'my-app/src/reducers'). Http requests are made with Axios.

# Production

Webpack builds an optimized version of app in 'my-app/build' for production. To create production build:

cd my-app

npm run build

Link to netlify production app: https://boring-lumiere-45cbd0.netlify.app/

