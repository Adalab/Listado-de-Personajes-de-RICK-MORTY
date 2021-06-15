import React from "react";
import User from "./User";

const UserList = (props) => {
  const userElement = props.users.map((user) => {
    return <User key={user.id} user={user} />;
  });
  return (
    <section>
      <ul className="cards">{userElement}</ul>
    </section>
  );
};
export default UserList;
