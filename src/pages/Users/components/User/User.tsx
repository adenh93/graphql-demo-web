import React, { SFC } from "react";
import { Name } from "./Styles";

interface Props {
  name: string;
  username: string;
  email: string;
}

const User: SFC<Props> = ({ name, username, email }) => (
  <div>
    <Name>{name}</Name>
    <p>{username}</p>
    <p>{email}</p>
  </div>
);

export default User;
