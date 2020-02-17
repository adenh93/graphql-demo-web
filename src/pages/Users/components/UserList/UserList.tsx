import React, { SFC } from "react";
import UserComponent from "../User";
import { User } from "../../../../graphql/_generated/types";

interface Props {
  users: User[];
}

const UserList: SFC<Props> = ({ users }) => (
  <div>
    {!users.length ? (
      <p>No users to display.</p>
    ) : (
      <ul>
        {users.map(({ id, ...user }) => (
          <li key={id}>
            <UserComponent {...user} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default UserList;
