# Post_It
[![Build Status](https://travis-ci.org/ayeniblessing101/Post_It.svg?branch=development)](https://travis-ci.org/ayeniblessing101/Post_It)
[![Coverage Status](https://coveralls.io/repos/github/ayeniblessing101/Post_It/badge.svg?branch=feedback)](https://coveralls.io/github/ayeniblessing101/Post_It?branch=feedback)
[![Code Climate](https://codeclimate.com/github/ayeniblessing101/Post_It/badges/gpa.svg)](https://codeclimate.com/github/ayeniblessing101/Post_It)
[![codecov](https://codecov.io/gh/ayeniblessing101/Post_It/branch/development/graph/badge.svg)](https://codecov.io/gh/ayeniblessing101/Post_It)

## introduction
* **`PostIt`** is a simple web application that allows friends and colleagues create groups for notifications. 
* It has the following features;
  * Users can sign up and sign in with a unique username and email
  * Users can create groups
  * Users can add other registered users to a goup
  * Users can search for other registered users in the appliction
  * Users can reset password
  * Users can post message(s) to a group
  * Search result is paginated 
* A demo of the app can be accessed on heroku via [here](https://blessing-post-it.herokuapp.com)  

## Dependencies

### Development Dependencies
* The following depencies are required by the app during developmment
  *  **[Babel-register](https://www.npmjs.com/package/babel-register)** - This framework helps to compile from es6 to es5
  *  **[css-loader](https://www.npmjs.com/package/css-loader)** - The  css-loader is used with webpack and it interprets @import and url() like import/require()
  *  **[eslint](https://www.npmjs.com/package/eslint)** - This is a javascript syntax highlighter used to highligh syntax error during the development of this app
  *  **[babel-cli](https://www.npmjs.com/package/babel-cli)** - It enables the app scripts to be tested with babel from the command line
  *  **[babel-core](https://www.npmjs.com/package/babel-core)** - It compiles es6 used in the app to es5
  *  **[babel-eslint](https://www.npmjs.com/package/babel-eslint)** - Used with ESlint to lint syntax errors
  *  **[babel-loader](https://www.npmjs.com/package/babel-loader)** - Used with Webpack to transpile javascript codes
  *  **[babel-plugin-react-html-attrs](https://www.npmjs.com/package/babel-plugin-react-html-attrs)** - It help convert JSX `class` attribute into `className` 

### Dependencies
*  **[axios](https://www.npmjs.com/package/axios)** - Used to make GET and POST requests to external API's
*  **[bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs)** - Used to hash user's password before saving to the database
*  **[body-parser](https://www.npmjs.com/package/body-parser)** - Enables the app to get params from request body
*  **[url-loader](https://www.npmjs.com/package/url-loader)** - It enables the app to use background images in the scss files
*  **[chai](https://www.npmjs.com/package/chai)** - Asscertion library used for the backend testing
*  **[chai-http](https://www.npmjs.com/package/chai-http)** - Used to make server request during testing
*  **[coveralls](https://www.npmjs.com/package/coveralls)** - Display test coverage
*  **[express](https://www.npmjs.com/package/express)** - Used as the web server for this application
*  **[extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin)** - Moves the app's css into a separate file
*  **[file-loader](https://www.npmjs.com/package/file-loader)** - It enables the app to load files directly into scripts
*  **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)** - Enables the app to implement JWT authentication.
*  **[lodash](https://www.npmjs.com/package/lodash)** - Used to perform filter on objects
*  **[pg](https://www.npmjs.com/package/pg)**, **[pg-hstore](https://www.npmjs.com/package/pg-hstore)**, **[sequelize](https://www.npmjs.com/package/sequelize)** - Used to create database models and for performing database operations
*  **[react](https://www.npmjs.com/package/react)** - Used with **[react-dom](https://www.npmjs.com/package/react-dom)** enables the app to use the React architecture
*  **[react-paginate](https://www.npmjs.com/package/react-paginate)** - Used to implement pagination on documents and usesr's page
*  **[react-redux](https://www.npmjs.com/package/react-redux)** - Enables the app to implement the redux architecture in the react way
*  **[react-router-dom](https://www.npmjs.com/package/react-router-dom)** - Used to perform app routing
*  **[redux](https://www.npmjs.com/package/redux)** - The architecture library that the app is build on
*  **[redux-thunk](https://www.npmjs.com/package/redux-thunk)** - Enables the app to make axios request using the redux implementation
*  **[validator](https://www.npmjs.com/package/validator)** - Used to validate user input during server request
*  **[webpack](https://www.npmjs.com/package/react-router-dom)** - Used to bundle the app's js and scss files for usage in the browser
*  **[query-string](https://www.npmjs.com/package/query-string)** - Used to get query params from props created by react-router-dom

## Front End Dependencies
*  **[Materialize CSS](http://materializecss.com/)** - All part of the app was styled with this css framework.
*  **[Material Icons](https://material.io/icons/)** - Iconic font provided by Google.


## API Routes

* [Signup] - http://blessing-post-it.herokuapp.com/api/user/signup
* [Signin] - http://blessing-post-it.herokuapp.com/api/user/signin
* [Create Group] - http://blessing-post-it.herokuapp.com/api/group
* [Add User to Group] - http://blessing-post-it.herokuapp.com/api/group/group_id/user
* [Post Message to a Group] - http://blessing-post-it.herokuapp.com/api/group/group_id/message
* [Get Messages]  - http://blessing-post-it.herokuapp.com/api/group/group_id/messages


## Getting Started
*  Navigate to a directory of choice using the `terminal`.
* Clone this repository.
  * Using HTTP
  >`https://github.com/ayeniblessing101/Post_It.git`
*  Navigate to the repo's directory on your computer
  *  `cd POST_IT`
* Install all dependencies needed for the app to work
  * `npm install`
* Setup database
  * `sequelize db:migrate`
* Run application
  * `npm start`
* Type `localhost:3000` in browser to access application on your local machine

## Tests
* The server side test are witten with mocha and chai backed with supertest and chai-http
* They are run using the **`coverage`** tool in order to generate test coverage reports.
* To run the tests, navigate to the project's root folder
* Run the following commands.
  * `npm test`

## Authors
* **Ayeni Blessing** - *Initial work* - [ayeniblessing101](https://github.com/ayeniblessing101/PostIt)

## Limitations
* Users cannot update their profile
* You cannot delete a group
* You cannot edit group details
* You cannot remove a user from a group
* Members in a group are not notificed when a user(s) is/are added to the group
* You cannot delete a message once it has been sent
* You cannot edit a message once it has been seen
* You cannot use emoji 


### FAQ
Click **[here](https://github.com/ayeniblessing101/Post_It/wiki/Frequently-Asked-Questions)** to read through our FAQ.

## Contribute to the project
To contribute to this project:

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* IbukunOluwa Daniel Bamidele
* Mazi Mary
* Esther Falayi
* Celestine
* Innocent Amadi
