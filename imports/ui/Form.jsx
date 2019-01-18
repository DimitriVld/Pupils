import React, { Component } from 'react';
import students from '../api/students';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    add = (event) => {
        event.preventDefault();

        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const emailStudent = event.target.email.value;
        const githubStudent = event.target.github.value;

        students.insert({
            firstName: firstName,
            lastName: lastName,
            emailStudent: emailStudent,
            githubStudent: githubStudent
        })
        event.target.firstName.value = "";
        event.target.lastName.value = "";
        event.target.email.value = "";
        event.target.github.value = "";

        const modalForm = document.getElementById("form");

        modalForm.style.display = "none";
    }

    render() {
        return (
            <div id="form">
                <form id="formAdd" onSubmit={this.add}>
                    <label className="name">Prénom</label>
                    <input type="text" name="firstName" placeholder="Ex: Helena"/>

                    <label className="name">Nom</label>
                    <input type="text" name="lastName" placeholder="Ex: Bills"/>

                    <label className="email">Email</label>
                    <input type="text" name="email" placeholder="Ex: @Hbills"/>

                    <label className="name">Github</label>
                    <input type="text" name="github" placeholder="Ex: Helena.bills@gmail.com"/>

                    <button type="submit" className="buttonForm">Save</button>
                </form>
            </div>
        )
    }
};

export default Form;

/*
<div className="selectForm">
                        <select className="selectFemme">
                        </select>
                        <select className="selectHomme">
                        </select>
                    </div>
                    <div>
                        <input type="radio" id="femme" name="sexe" value="femme" checked />
                        <label for="femme">Femme</label>
                    </div>

                    <div>
                        <input type="radio" id="homme" name="sexe" value="homme" />
                        <label for="homme">Homme</label>
                    </div>
                    */