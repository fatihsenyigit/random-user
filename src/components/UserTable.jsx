import "../sass/userTable.scss";

const UserTable = ({ userInfoTable, setUserInfoTable }) => {
  console.log(userInfoTable);
  return (
    <div className="tableContainer">
      <table className="userTable">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
        </tr>
        {userInfoTable.length ? (
          userInfoTable.map((user, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{user.userName}</td>
              <td>{user.userMail}</td>
              <td>{user.userPhone}</td>
              <td>{user.userAge}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td></td>
            <td></td>
            <td>there is no user added...</td>
            <td></td>
            <td></td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default UserTable;
