import React from "react";
import { Form, } from "semantic-ui-react";
import { UserConsumer, } from "../providers/UserProvider";

class UserForm extends React.Component {
  state = { 
    username: this.props.username, 
    firstName: this.props.firstName, 
    lastName: this.props.lastName, 
    email: this.props.email 
  };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    const { username, firstName, lastName, email } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Input
          label="First Name"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      { value => (
        <UserForm 
          { ...props }
          username={value.username}
          firstName={this.props.firstName }
          lastName={this.props.lastName}
          email={this.props.email} 
        />
      )}
    </UserConsumer>
  )
}

export default ConnectedUserForm;