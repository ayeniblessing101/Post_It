import React from 'react';
import AddGroupForm from './AddGroupForm';
import Header from '../common/Header';
import Footer from '../common/Footer';

/**
 * Renders AddGroup Page Component
 * @class AddGroupPage
 * @extends {React.Component}
 */
export class AddGroupPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="mycontainer" >
          <div className="row">
            <AddGroupForm />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default AddGroupPage;
