# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Flimpire-GPT 
- create-react-app 
- configured TailwindCSS in the project 
- Header 
- Routing of App 
- Sign In form page
- Sign Up form page
- Form Validation 
- Firebase npm install, and adding firebase to the project
- create and sign in the user on the firebase
- create Redux store and provide it to the app 
- Dispatch the action and update the redux store on sign in and sign out
- Bug fix of sign out and browse page put tht useEffect in Header 
- if the user is not logged in redirect to / if logged in then /browse 
- unsubcribe the onauth when the Header comp is unmounts 
- Added hardcore values in constants.js file 
- Register TMDB API and create an app and get access token
- Get data from TMDB now playing movie List and used a custom Hook 
- Creating browse page starting with the main conatiner 
- create the titl page for the main container 
- Create GPT page and button on the Header 
- Added toggle functionality to the GPT button 
- Added lang button on the GPT page
- Used Redux to to amek the page lanugae dynamic 


# Features of the App 
- Login and Sing Up page 
  - Sign in or Sign Up page 
  - Once singed in redirect to the Browse page 

- Broswer (after the authentication)
  - Header 
    - Main Movie 
      - Trailer in the background
      - Title and description 
      - Movie Suggestions 
        - Movies List 

- Filmpire GPT 
  - search bar 
  - Movie suggestions 