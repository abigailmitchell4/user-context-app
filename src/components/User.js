import React from "react";
import { UserConsumer, } from "../providers/UserProvider";
import { Card, } from "semantic-ui-react";

const User = () => (
  <UserConsumer>
    { value => (
      <Card>
        <Card.Content>
          <Card.Header>{value.username}</Card.Header>
          <Card.Meta>
            {value.email}
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <p>{value.firstName}  {value.lastName}</p>
        </Card.Content>
      </Card>
    )}
  </UserConsumer>
)

export default User;