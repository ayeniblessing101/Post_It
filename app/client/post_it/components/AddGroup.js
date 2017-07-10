import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Sidebar from "./Sidebar";


class AddGroup extends React.Component{
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
                  <div className="col s12 m4 l2"></div>
                  <div className="col s12 m4 l8 large-cards">
                    <h4>Add Group</h4>
                    <form>
                      <div className="input-field">
                        <input classID="icon_prefix" type="text" className="validate" />
                        <label htmlFor="icon_prefix">Group Name</label>
                      </div>
                      <div className="input-field ">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Create
                        </button>
                      </div>
                      <br/><br/>
                    </form>
                  </div>
                  <div className="col s12 m4 l2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddGroup
