import React, { Component }from 'react';
import students from '../api/students';

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            github: ''
        }
    }
    
    addModal = () => {
        const modalForm = document.getElementById("form");
    
        modalForm.style.display = "initial";
      }

    updateUser = (user) => {

        const modalForm = document.getElementById("form2");
        modalForm.style.display = "initial";

        this.setState({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.emailStudent,
            github: user.githubStudent,
        })
    }

    edit = (event) => {

        event.preventDefault();

        students.update({_id: this.state.id},{
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailStudent: this.state.email,
            githubStudent: this.state.github,
        });

        const modalForm = document.getElementById("form2");
        modalForm.style.display = "none";


    }

    delete = (studentId) => {
        students.remove({_id: studentId});
    }

    render() {
        return (
            <div id="list">
                <div id="form2">
                    <form name="updateForm" id="formAdd2" onSubmit={ this.edit }>
                        <label className="name">Prénom</label>
                        <input type="text" name="firstName" value={ this.state.firstName } onChange={(event) => this.setState({ firstName: event.target.value })}/>

                        <label className="name">Nom</label>
                        <input type="text" name="lastName" value={ this.state.lastName } onChange={(event) => this.setState({ lastName: event.target.value })}/>

                        <label className="email">Email</label>
                        <input type="text" name="email" value={ this.state.email } onChange={(event) => this.setState({ email: event.target.value })}/>

                        <label className="name">Github</label>
                        <input type="text" name="github" value={ this.state.github } onChange={(event) => this.setState({ github: event.target.value })}/>

                        <button type="submit" className="buttonForm">Save</button>
                    </form>
                </div>
                <ul>
                    <li>
                        <div className="addStudent" onClick={() => this.addModal()}>
                            <img src="/assets/img/add.png" alt="**"/>
                            <p>Add new Pupil</p>
                        </div>
                    </li>
                    {this.props.students.length ? this.props.students.map((students) => (
                        <li className="student" key={students._id}>
                            <div className="button-delete" onClick={() => this.delete(students._id)}>
                                <img src="../../assets/img/delete.png" alt="**"/>
                            </div>
                            <p className="name">{students.firstName} {students.lastName}</p>
                            <p>
                                <a href="mailto:{students.emailStudent}"><img src="./../../assets/img/email.png" alt="**"/></a>
                                <a href={students.githubStudent} target="_blank"><img src="./../../assets/img/github.png" alt="**"/></a>
                            </p>
                            <button type="button" data-toggle="modal" className="button-edit"onClick={() => this.updateUser(students)}>Edit</button>
                        </li>
                    )): <p></p>}
                </ul>
            </div>
        )
    }
};

export default List;