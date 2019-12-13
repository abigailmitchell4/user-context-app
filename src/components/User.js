import React, { useContext, } from "react";
// import { UserConsumer, } from "../providers/UserProvider";
import { UserContext, } from "../providers/UserProvider";
import { Card, } from "semantic-ui-react";

const User = () => {
  const user = useContext(UserContext)
  return (
    <Card>
      <Card.Content>
        <Card.Header>{user.username}</Card.Header>
        <Card.Meta>
          {user.email}
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>{user.firstName}  {user.lastName}</p>
      </Card.Content>
    </Card>
  )
}

export default User;