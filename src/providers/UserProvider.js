import React from "react";

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state = {
    username: "abigailM4",
    firstName: "Abigail",
    lastName: "Mitchell",
    email: "test@test.com"
  };
    
  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}

export default UserProvider;