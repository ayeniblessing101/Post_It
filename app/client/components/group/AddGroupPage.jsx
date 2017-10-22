import React from 'react';
import AddGroupForm from './AddGroupForm';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

/**
 * Renders AddGroup Page Component
 * @class AddGroupPage
 * @extends {React.Component}
 */
class AddGroupPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="mycontainer" >
          <div className="row">
            <Sidebar />
            <AddGroupForm />
          </div>
        </div>
      </div>
    );
  }
}


export default AddGroupPage;
