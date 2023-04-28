import { memo } from "react";

const UserList = ({ users }) => {

  if (users.length === 0) return <></>;

  return (
    <div style={{ background: "yellow", marginTop: 5 }}>
      <h4 style={{ margin: 0, marginBottom: 20, textDecoration: "underline" }}>
        List of users
      </h4>
      <div>
        {users.map((user, index) => (
          <Name user={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export const Name = memo(({ user }) => {
  return <li>{user.name}</li>;
});

export default UserList