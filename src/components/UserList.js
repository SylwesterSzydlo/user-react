import React, { Component } from 'react';


class UserList extends Component {
  
  removeUser = (key) => {
    
    this.props.delete(key);
  }
  
  
  
  
  render() {
    const listItems = this.props.users.map((user, i)=>{
      return <li onClick={()=>this.removeUser(i)} key={i}>{user}</li>
    });

    console.log(listItems);
    return (
        <ul className="users-list">
            {listItems}
        </ul>
        
    );
  }
}

export default UserList;
