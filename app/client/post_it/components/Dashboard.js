import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
const avatar1 = require("../images/avatar1.png");
const avatar2 = require("../images/avatar2.png");
const avatar3 = require("../images/friend-group2.jpg");
import Sidebar from "./Sidebar";



class Dashboard extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <div className="mycontainer" >
          <div className="row">
            <Sidebar />
            <div className="col s12 m10 l10 col-md-10 no-float">
              <div className="mycontainer">
                <div className="row ">
                  <h4>All Groups</h4><br />
                    <div className="col s12 m5 l3 small-cards"><br/>
                      <img src={avatar1} />
                      <h5><b>My Family</b></h5>
                      6 users in the Group<br/><br/><br/>
                      <a href="#" className="btn btn-primary"><i className="fa fa-plus"></i> Add New User</a><br/><br/>
                    </div>
                    <div className="col s12 m5 l3 small-cards"><br/>
                      <img src={avatar2} />
                      <h5><b>BootCamp Cycle 23</b></h5>
                      24 users in the Group<br/><br/><br/>
                      <a href="#" className="btn btn-primary"><i className="fa fa-plus"></i> Add New User</a><br/><br/>
                    </div>
                    <div className="col s12 m5 l3 small-cards"><br/>
                      <img src={avatar3} />
                      <h5><b>Close Friends</b></h5>
                      4 users in the Group<br/><br/><br/>
                      <a href="#" className="btn btn-primary"><i className="fa fa-plus"></i> Add New User</a><br/><br/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard
