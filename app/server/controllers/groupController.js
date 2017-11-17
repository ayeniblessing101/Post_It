const { validateAddGroupInput } = require('../validations/validation');
const isEmpty = require('lodash/isEmpty');
const User = require('../models').User;
const Group = require('../models').Group;
const Message = require('../models').Message;
const GroupUser = require('../models').GroupUser;

/**
   * Creates a new group.
   * @param {Object} request - request.
   * @param {Object} response - response.
   *
   *
   * @returns {groupData} - returns data of the group created.
*/
exports.createGroup = (request, response) => {
  const { errors, isValid } = validateAddGroupInput(request.body);
  if (!isValid) {
    response.status(400).send(errors);
  } else {
    const userId = request.decoded.id || '';
    Group.findOne({
      where: {
        group_name: request.body.groupname,
      },
    }).then((group) => {
      if (group) {
        errors.groupname = 'This Group already exists';
      }
      if (!isEmpty(errors)) {
        response.status(409).send(errors);
      } else {
        const groupData = {
          group_name: request.body.groupname,
          image: request.body.image,
          user_id: userId,
        };
        Group.create(groupData)
          .then((groupNew) => {
            GroupUser.create({
              group_id: groupNew.id,
              user_id: userId,
            }).then(() => {});
            return response.status(201).send({
              status: true,
              message: 'Successful',
              data: groupNew,
            });
          })
          .catch(error => response.status(500).send(error));
      }
    });
  }
};

/**
  * Gets all groups
  * @param {Object} request - request.
  * @param {Object} response - response.
  *
  * @returns {allGroups} - returns all groups.
 */

// get Group
exports.getGroups = (request, response) => {
  const userId = request.decoded.id;
  // get groups created by the loggedin userId
  GroupUser.findAll({
    where: {
      user_id: userId,
    },
    attributes: ['group_id'],
    raw: true,
  })
    .then((groups) => {
      let limit = parseInt(request.query.limit, 10);
      let offset = parseInt(request.query.offset, 10);
      const page =
        Math.ceil(request.query.offset / request.query.limit + 1) || 1;
      limit = Number(limit) || 10;
      offset = Number(offset) || 0;
      const userBelongsTo = groups.map(group => group.group_id);
      Group.findAndCountAll({
        where: {
          $or: {
            user_id: userId,
            id: {
              $in: userBelongsTo,
            },
          },
        },
        attributes: [['group_name', 'groupName'], 'user_id', 'id', 'image'],
        raw: true,
        offset,
        limit,
      })
        .then((allGroups) => {
          const pageCount = Math.ceil(allGroups.count / limit);
          const pageSize = limit;
          const totalCount = allGroups.count;
          response.status(200).send({
            allGroups: allGroups.rows,
            page,
            pageCount,
            pageSize,
            totalCount,
          });
        })
        .catch((err) => {
          response.status(500).send(err, 'An error occurred, try again');
        });
    })
    .catch((err) => {
      response.status(500).send(err, 'An error occurred, try again');
    });
};

/**
  * Adds a user to a group
  * @param {Object} request - request.
  * @param {Object} response - response.
  *
  * @returns {Usergroup} - returns data of the user added.
 */
// Method to add user to a group
exports.addUser = (request, response) => {
  if (request.body.username || request.body.email) {
    User.findOne({
      where: {
        $or: [
          { username: request.body.username },
          { email: request.body.email },
        ],
      },
      attributes: ['id', 'username', 'email'],
    }).then((user) => {
      if (user) {
        const groupId = parseInt(request.params.id, 10);
        const userId = parseInt(request.user.id, 10);
        GroupUser.findOrCreate({
          where: {
            $and: [{ user_id: userId }, { group_id: groupId }],
          },
          defaults: {
            user_id: parseInt(user.id, 0),
            group_id: parseInt(request.params.id, 10),
          },
        }).spread((Usergroup, created) => {
          if (created) {
            response.status(200).send({
              status: true,
              message: 'User has been successfully added to group',
              data: Usergroup,
            });
          } else {
            response.status(409).send({
              status: true,
              message: 'User has already been added to this group',
            });
          }
        });
      } else {
        response.status(404).send({ message: 'User does not exist' });
      }
    });
  } else {
    response.status(400).send({ message: 'username or email is required' });
  }
};

/**
  * Get all users in a group
  * @param {Object} request - request.
  * @param {Object} response - response.
  *
  * @returns {users} - returns all users in a group.
 */
// Method to get all users in a group
exports.getUsers = (request, response) => {
  Group.findOne({
    where: {
      id: parseInt(request.params.id, 0),
    },
    attributes: ['id'],
    include: [
      {
        model: User,
        as: 'members',
        attributes: ['id', 'username'],
        through: {
          attributes: [],
        },
      },
    ],
  }).then((users) => {
    response.status(200).send({
      status: true,
      message: 'Successful',
      data: users,
    });
  });
};

/**
  * Get a group
  * @param {Object} request - request.
  * @param {Object} response - response.
  *
  * @returns {users} - returns a group.
 */
// Method to get a group
exports.getGroup = (request, response) => {
  Group.findOne({
    where: {
      id: parseInt(request.params.id, 0),
    },
    attributes: ['id', ['group_name', 'groupName']],
    include: [
      {
        model: User,
        as: 'members',
        attributes: ['id', 'username'],
        through: {
          attributes: [],
        },
      },
      {
        model: Message,
        attributes: [
          'id',
          'message_body',
          'priority_level',
          'group_id',
          'createdAt',
        ],
        include: [
          {
            model: User,
            attributes: ['id', 'username', 'email'],
          },
        ],
      },
    ],
  }).then((group) => {
    response.status(200).send({
      status: true,
      message: 'Successful',
      data: group,
    });
  });
};
