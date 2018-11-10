import React, { Component } from 'react';


class UserForm extends Component {

    addUser = (e) => {
        e.preventDefault();
        this.props.update(this.inputValue.value);

    }


    render() {
        return (
            <form onSubmit={this.addUser}>
                <input type="text" placeholder="NAZWA UZYTKOWNIKA " ref={(data)=>{this.inputValue = data}}></input>
                <input type="submit" value="DODAJ" />
            </form>
        );
    }
}

export default UserForm;
