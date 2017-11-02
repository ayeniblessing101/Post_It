import React from 'react';
import UserList from './UserList';
import Header from '../common/Header';
import Footer from '../common/Footer';


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
          <UserList />
        </div>
      </div>
      <Footer />
    </div>
  )
);

export default UserPage;
