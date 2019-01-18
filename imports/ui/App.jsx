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
        <div className="addStudent" onClick={() => this.addModal()}>Add</div>
        <List {...this.props}/>
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


/*import Form from './Form';
import List from './List';
import { Students } from '../api/students';


const App = () => (
  <div>
    <h1>Student List</h1>
    <Form />
    <List />
  </div>
);

export default App;
<pre>DB Stuff: {JSON.stringify(this.props, null, ' ')} </pre>*/
