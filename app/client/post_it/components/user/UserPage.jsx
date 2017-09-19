import React from 'react';
import UserList from './UserList';
import Header from '../Header';
import Sidebar from '../Sidebar';

/**
 * @class UserPage
 * @extends {React.Component}
 */
const UserPage = () => (
  (
    <div>
      <Header />
      <div className="mycontainer" >
        <div className="row">
          <Sidebar />
          <UserList />
        </div>
      </div>
    </div>
  )
);

export default UserPage;
