import React from "react";

export const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state = {
    username: "abigailM4",
    firstName: "Abigail",
    lastName: "Mitchell",
    email: "test@test.com",
    updateUser: (user) => this.updateUser(user)
  };
    
  updateUser = (user) => {
    this.setState({ ...user, });
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}

export default UserProvider;