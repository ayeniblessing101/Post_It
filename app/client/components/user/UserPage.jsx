import React from 'react';
import UserList from './UserList';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Sidebar from '../common/Sidebar';

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
      <Footer />
    </div>
  )
);

export default UserPage;
