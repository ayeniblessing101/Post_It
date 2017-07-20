# Post_It

PostIt is a simple web application that allows friends and colleagues create groups for notifications. This way one person can post notifications to everyone by sending a message once. The application allows people create accounts, create groups and add registered users to the groups, and then send messages out to these groups whenever they want.


#### Templates
For this version, all html files and stylesheets, images, bootstrap are stored into the template directory

#### Client


#### Server
This directory holds all routes, controllers, middleware, migrations


## Deployment

This Project is deployed on Heroku

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
* Run `npm install` to get started

## Folder Structure

After creation, your project should look like this:

```
Post_It/
  app/
    client/
      post_it/
        actions/
        assets/
        components/
        containers/
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

## Authors

* **Ayeni Blessing** - *Initial work* - [ayeniblessing101](https://github.com/ayeniblessing101/PostIt)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Font Awesome
* Bootstrap
* 
