import React, { Component } from 'react';
import Form from './Form';
import List from './List';
//import imgAdd from '../../public/assets/img/add.png';
import { withTracker } from 'meteor/react-meteor-data';
import students from "../api/students";

class Home extends Component {

  render() {
    return (
      <section id="home">
        <h1>.PUPILS</h1>
        <Form />
        <div className="add-list">
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
