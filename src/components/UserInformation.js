const UserInformation = ({ userAge }) => {

  if (!userAge) return null;

  return (
    <div>
      {userAge < 18 ? (
        <span style={{ color: "red" }}>
          You are too young to be our employee
        </span>
      ) : (
        <span>You are old enough :)</span>
      )}
    </div>
  );
};

export default UserInformation;
