import React, { Component } from 'react';
import AddGroupForm from './AddGroupForm';
import Header from "../Header";
import Sidebar from "../Sidebar";


class AddGroupPage extends React.Component{
  render(){
    return(
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
