const mockData = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImJsZXNzaW5nIiwiZW1haWwiOiJibGVzc2luZy5heWVuaUBhbmRlbGEuY29tIiwicGhvbmUiOiI4MDY0NDc2NjgzIiwicGFzc3dvcmQiOiIkMmEkMTAkQUNiMHJQeE55SGpCenpwbnNtMnBVZWE0Nkx5cFFkOFRaOVNkT2ZVZEpIQ3pKc1ZOcjFIa08iLCJjb25maXJtX3Bhc3N3b3JkIjpudWxsLCJjcmVhdGVkQXQiOiIyMDE3LTA4LTMwVDE3OjQ4OjUxLjQzNloiLCJ1cGRhdGVkQXQiOiIyMDE3LTA4LTMwVDE3OjQ4OjUxLjQzNloifSwiaWF0IjoxNTA0NDYwNjgyLCJleHAiOjE1MDQ0NjIxMjJ9.YNmCDj4v_LaS8QblTnz7KihDXQ5l_0ZNFKtmNwg7Yro',
  decodedToken: {
    data: {
      confirm_password: null,
      createdAt: '2017-08-30T17:48:51.436Z',
      email: 'blessing.ayeni@andela.com',
      id: 1,
      password: '$2a$10$ACb0rPxNyHjBzzpnsm2pUea46LypQd8TZ9SdOfUdJHCzJsVNr1HkO',
      phone: '8064476683',
      updatedAt: '2017-08-30T17:48:51.436Z',
      username: 'blessing',
    },
    exp: 1504462122,
    iat: 1504460682,
  },
  user: {
    username: 'blessing',
    password: '1234',
  },
  flashMessageResponse: {
    id: 'BJ9DwReCZ',
    type: 'error',
    text: 'User does not exist',
  },
  email: 'db@gmail.com',
  successMessages: [
    'Password updated succesfully',
    {
      status: true,
      message: 'Succesful',
    },
    'Token Found!',
    'User has been add to Group Successfully',
  ],
  password: '2345',
  userData: {
    username: 'blessing',
    email: 'blessing.ayeni@andela.com',
  },
  searchParams: {
    q: 'blessing',
    offset: 0,
    limit: 5,
  },
  groupUsers: [
    {
      id: 1,
      username: 'blessing',
    },
    {
      id: 2,
      username: 'tomi',
    },
    {
      id: 3,
      username: 'funsho',
    },
  ],
  groups: [
    {
      id: 1,
      group_name: 'Andela',
      user_i: 1,
      createdAt: '2017-10-02T16:10:00.955Z',
      updatedAt: '2017-10-02T16:10:00.955Z',
    },
    {
      id: 2,
      group_name: 'test',
      user_id: 1,
      createdAt: '2017-10-16T12:00:44.405Z',
      updatedAt: '2017-10-16T12:00:44.405Z',
    },
  ],
  fetchGroupsResponse: {
    status: true,
    message: 'Successful',
    data: {
      id: 1,
      members: [
        {
          id: 1,
          username: 'blessing',
        },
      ],
    },
  },
  addUserToGroupResponse: {
    status: true,
    message: 'User has been successfully added to group',
    data: {
      user_id: 5,
      group_id: 2,
      updatedAt: '2017-10-27T11:04:45.607Z',
      createdAt: '2017-10-27T11:04:45.607Z',
      id: 16,
    },
  },
  fetchGroupUserResponse: {
    status: true,
    message: 'Successful',
    data: {
      id: 1,
      members: [
        {
          id: 1,
          username: 'blessing',
        },
      ],
    },
  },
  createGroupResonse: {
    status: true,
    message: 'Successful',
    data: {
      id: 8,
      group_name: 'Phoenix',
      user_id: 1,
      updatedAt: '2017-10-25T18:23:20.105Z',
      createdAt: '2017-10-25T18:23:20.105Z',
    },
  },
  postMessageResponse: {
    data: {
      data: {
        message_body: 'Wassup Boy',
        priority_level: 'Normal',
      },
    },
  },
  allMessages: [
    {
      id: 1,
      message_body: 'YUU',
      priority_level: 'Normal',
      group_id: 1,
      createdAt: '2017-10-16T11:13:27.265Z',
      User: {
        id: 1,
        username: 'blessing',
        email: 'blessing.ayeni@andela.com',
      },
    },
    {
      id: 2,
      message_body: 'Hello Man',
      priority_level: 'Normal',
      group_id: 1,
      createdAt: '2017-10-16T11:13:27.265Z',
      User: {
        id: 1,
        username: 'blessing',
        email: 'blessing.ayeni@andela.com',
      },
    },
  ],
  createUserResponse: {
    status: true,
    message: 'Signup was successful',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSw',
  },
  userData2: {
    username: 'bamidele',
    email: 'db@gmail.com',
    phoneNo: '2348064476683',
    password: '1234',
    confirm_password: '1234',
  },
  stateCurrentUser: {
    id: 1,
    username: 'blessing',
    email: 'blessing.ayeni@andela.com',
    phone: '8064476683',
    iat: 1509101121,
    exp: 1653545561,
  },
  users: {
    pageNumber: 0,
    pageCount: 0,
    pageSize: 0,
    totalCount: 0,
    users: [
      {
        username: 'Blessing',
        email: 'blesssing.ayeni@andela.com',
      },
    ],
  },
  offset: 0,
  limit: 5,
  groupId: 1,
  user1: 'bamidele',
  status: true,
  message: 'User has been successfully added to group',
  messages: {
    id: 3,
    groupName: 'Bark',
    members: [
      {
        id: 1,
        username: 'blessing',
      },
      {
        id: 7,
        username: 'bimbo',
      },
    ],
    Messages: [
      {
        id: 2,
        message_body: 'Hello',
        priority_level: 'Normal',
        createdAt: '2017-11-15T05:30:12.191Z',
        User: {
          id: 1,
          username: 'blessing',
        },
      },
    ],
  },
  newMessage: {
    id: 2,
    message_body: 'Hello',
    priority_level: 'Normal',
    createdAt: '2017-11-15T05:30:12.191Z',
    User: {
      id: 1,
      username: 'blessing',
    },
  },
  initialState: {
    id: '',
    groupName: '',
    Messages: [],
    members: [],
  },
  allGroupInitialState: {
    allGroups: [],
    pageCount: 0,
    pageSize: 0,
    totalCount: 0,
  },
  allGroups: {
    pageCount: 2,
    pageSize: 5,
    allGroups: [
      {
        groupName: 'Andela',
        user_id: 1,
        id: 1,
        image:
          'https://res.cloudinary.com/blessing/image/upload/v1510719784/bqaoxgb69x0qsjkabtga.png',
      },
      {
        groupName: 'Elrond',
        user_id: 1,
        id: 2,
        image:
          'https://res.cloudinary.com/blessing/image/upload/v1510719813/scdrj8io1xgjze9tawss.png',
      },
      {
        groupName: 'Bark',
        user_id: 1,
        id: 3,
        image:
          'https://res.cloudinary.com/blessing/image/upload/v1510719838/ydwkjrmtpkpjqfkx7pok.png',
      },
      {
        groupName: 'BAYC',
        user_id: 1,
        id: 4,
        image:
          'https://res.cloudinary.com/blessing/image/upload/v1510719858/syemhmzevzejj43p19bl.png',
      },
      {
        groupName: 'Youth',
        user_id: 1,
        id: 5,
        image:
          'https://res.cloudinary.com/blessing/image/upload/v1510719877/eaiziyjfzk1ilmsack92.png',
      },
    ],
    totalCount: 7,
  },
  data: {
    id: 3,
    groupName: 'Bark',
    members: [
      {
        id: 1,
        username: 'blessing',
      },
      {
        id: 7,
        username: 'bimbo',
      },
      {
        id: 2,
        username: 'bamidele',
      },
    ],
    Messages: [
      {
        id: 2,
        message_body: 'Hello',
        priority_level: 'Normal',
        group_id: 3,
        createdAt: '2017-11-15T05:30:12.191Z',
        User: {
          id: 1,
          username: 'blessing',
          email: 'blessing.ayeni@andela.com',
        },
      },
      {
        id: 3,
        message_body: 'OMGG',
        priority_level: 'Critical',
        group_id: 3,
        createdAt: '2017-11-15T05:30:22.050Z',
        User: {
          id: 1,
          username: 'blessing',
          email: 'blessing.ayeni@andela.com',
        },
      },
    ],
  },
  signupPayload: {
    username: 'ade',
    email: 'ade@gmail.com',
    phoneNo: '08064476683',
    password: '1234',
    confirm_password: '1234',
    errors: {},
    isLoading: false,
    invalid: false,
  },
  addGroupData: {
    groupname: 'Add group',
    image: 'something',
  },
};

export default mockData;
