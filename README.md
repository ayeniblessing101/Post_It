# Post_It
[![Build Status](https://travis-ci.org/ayeniblessing101/Post_It.svg?branch=development)](https://travis-ci.org/ayeniblessing101/Post_It)
[![Test Coverage](https://codeclimate.com/github/ayeniblessing101/Post_It/badges/coverage.svg)](https://codeclimate.com/github/ayeniblessing101/Post_It/coverage)
[![Code Climate](https://codeclimate.com/github/ayeniblessing101/Post_It/badges/gpa.svg)](https://codeclimate.com/github/ayeniblessing101/Post_It)

PostIt is a simple web application that allows friends and colleagues create groups for notifications. This way one person can post notifications to everyone by sending a message once. The application allows people create accounts, create groups and add registered users to the groups, and then send messages out to these groups whenever they want.


#### Templates
For this version, all html files and stylesheets, images, bootstrap are stored into the template directory

#### Client


#### Server
This directory holds all routes, controllers, middleware, migrations


## Deployment


## Built With

* [ExpressJs](https://expressjs.com/) - The web framework used
* [Sequelize](http://docs.sequelizejs.com/) - The ORM used
* [Postgres](https://www.postgresql.org/) - Database Used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [ReactJS](https://facebook.github.io/react/) - Javascript Library for Building User Interfaces used.
* [Redux](http://redux.js.org/) - For State, Data and Store Management and Action Dispatchions.

## API Routes

* [Signup] - http://localhost:3000/api/user/signup
* [Signin] - http://localhost:3000/api/user/signin
* [Create Group] - http://localhost:3000/api/group
* [Add User to Group] - http://localhost:3000/api/group/group_id/user
* [Post Message to a Group] - http://localhost:3000/api/group/group_id/message
* [Get Messages]  - http://localhost:3000/api/group/group_id/messages

## Versioning

I used [Git](https://git-scm.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ayeniblessing101/PostIt).

## Getting Started

* git clone https://github.com/ayeniblessing101/Post_It.git
* Run `npm install` to install all packages
* Run `sequelize db:migrate` to run pending migrations
* Run `npm start` to start application
* type localhost:3000 in browser to access application

## Folder Structure

After creation, your project should look like this:

```
Post_It/
  app/
    client/
      post_it/
        actions/
          flashMessages.js
          signupActions.js
          types.js
        assets/
          font/
          style/
        components/
          common/
            TextFieldGroup.js
          flash/
            FlashMessage.js
            FlashMessageList.js
          login/
            LoginForm.js
            LoginPage.js
          signup
            SignupForm.js
            SignupPage.js
          AddGroup.js
          AddUser.js
          Dashboard.js
          Header.js
          MessageBoard.js
          PostMessage.js
          Routes.js
          Sidebar.js
        images/
        reducers/
    node_modules/
    server/
    templates/
    .babelrc
    .eslintrc.js
    .gitignore
    .sequelizerc
    package.json
    webpack.config.js
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.


## Authors

* **Ayeni Blessing** - *Initial work* - [ayeniblessing101](https://github.com/ayeniblessing101/PostIt)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Font Awesome
* Bootstrap
* Redux
* React
* Materialize css
