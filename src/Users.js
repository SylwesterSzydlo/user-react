import React, { Component } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

class Users extends Component {

    constructor() {
        super();
        this.state = {
            users: ['Adam', 'Ola', 'Karol']
        }
    }
  
    updateUsersList = (name) => {
        this.setState((prevState)=>{
            return ({users: prevState.users.concat(name)});
        }); 

    }


    deleteUser = (keyValue) => {
        console.log('usun uzytkownika z indexem ' + keyValue);

        let updatedUsersList = this.state.users.filter((user)=> {
            return this.state.users.indexOf(user) !== keyValue;
        });



        this.setState({
            users: updatedUsersList
        });    
    }
  
    render() {
        console.log(this.state.users);

        return (
            <div className="users">
                <h1>User's list</h1>
                <UserForm update={this.updateUsersList} />
                <UserList users={this.state.users} delete={this.deleteUser}/>
            </div>
        );
    }
}

export default Users;
