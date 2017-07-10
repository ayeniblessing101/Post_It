import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Sidebar from "./Sidebar";


class MessageBoard extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <div className="mycontainer" >
          <div className="row">
            <Sidebar />
            <div className="col s12 m10 l10 col-md-10">
              <div className="mycontainer">
                <div className="row">
                  <div className="col s12 m4 l3 ">
                    <ul className="collapsible allMessageCard" data-collapsible="accordion">
                      <li>
                        <div className="collapsible-header"><span className="new badge red">4</span>
                        <i className="material-icons">filter_drama</i>Close Friends</div>
                      </li>
                      <li>
                        <div className="collapsible-header"><span className="new badge blue">1</span>
                        <i className="material-icons">place</i>Colleague</div>
                      </li>
                      <li>
                        <div className="collapsible-header"><span className="badge">1</span>
                        <i className="material-icons">filter_drama</i>Boot-camp Friends</div>
                      </li>
                    </ul>
                  </div>
                  <div className="col s12 m4 l8 message-cards">
                    <h4><i className="fa fa-plus"></i> Close Friends</h4>
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
                  <div className="col s12 m4 l1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageBoard
