import React from 'react';
import PropTypes from 'prop-types';

//const avatar2 = require("../images/avatar2.png");
//const avatar3 = require("../images/friend-group2.jpg");

class MessageForm extends React.Component{
  render(){
    return (
      <div>
        <div className="col s12 m4 l8 message-cards">
          <h4><i className="fa fa-plus"></i>
          </h4>
          <hr/><br/>
          <b>blessing3823</b><span className="right">12:00</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at laoreet turpis.
            Maecenas rhoncus gravida mattis.Curabitur semper sed mauris sed scelerisque.</p>
          <hr/><br/>
          <b>taiwo690</b><span className="right">13:00</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at laoreet turpis.
            Maecenas rhoncus gravida mattis.Curabitur semper sed mauris sed scelerisque.</p>
            <hr/><br/>
            <b>mazimary</b><span className="right">14:00</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at laoreet turpis.
              Maecenas rhoncus gravida mattis.Curabitur semper sed mauris sed scelerisque.</p>
              <hr/><br/>
              <b>ewa</b><span className="right">14:05</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at laoreet turpis.
                Maecenas rhoncus gravida mattis.Curabitur semper sed mauris sed scelerisque.</p>
            <footer className="page-footer">
              <form>
                <div className="input-field col s12">
                  <input classID="message" type="text" placeholder="click here to type ypur message" className="validate" />

                </div>
              </form>
            </footer>
        </div>
      </div>
    );
  }
}

export default MessageForm;
