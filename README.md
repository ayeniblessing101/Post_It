# Post_It

PostIt is a simple web application that allows friends and colleagues create groups for notifications. This way one person can post notifications to everyone by sending a message once. The application allows people create accounts, create groups and add registered users to the groups, and then send messages out to these groups whenever they want.


#### Templates
For this version, all html files and stylesheets, images, bootstrap are stored into the template directory


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
* [Signup](http://localhost:3000/api/user/signup) - The web framework used
* [Signin](http://localhost:3000/api/user/signin) - The ORM used
* [Create Group](http://localhost:3000/api/group) - Database Used
* [Add User to Group](http://localhost:3000/api/group/<group id>/user) - Dependency Management
* [Post Message to a Group](http://localhost:3000/api/group/<group id>/message) - Javascript Library for Building User Interfaces used.
* [Get Messages](http://localhost:3000/api/group/<group id>/messages) - For State, Data and Store Management and Action Dispatchions.

## Versioning

I used [Git](https://git-scm.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ayeniblessing101/PostIt).

## Authors

* **Ayeni Blessing** - *Initial work* - [ayeniblessing101](https://github.com/ayeniblessing101/PostIt)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Font Awesome
* Bootstrap
* 
