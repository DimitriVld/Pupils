import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import { withTracker } from 'meteor/react-meteor-data';
import students from "../api/students";

class Home extends Component {
  

  addModal = () => {
    const modalForm = document.getElementById("form");

    modalForm.style.display = "initial";
  }

  render() {
    return (
      <section id="home">
        <h1>.PUPILS</h1>
        <Form />
        <div className="add-list">
          <div className="addStudent" onClick={() => this.addModal()}>
            <img src="../../assets/img/add.png" alt="**"/>
            <p>Add new Pupil</p>
          </div>
          <List {...this.props}/>
        </div>
      </section>
    );
  }
}

const App = withTracker(() => {
  return {
    students: students.find({}). fetch()
  }
})(Home);

export default App;
