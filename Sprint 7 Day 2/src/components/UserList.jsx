export default function UserList(props) {
  const { users } = props;

  return (
    <>
      {users.map((user, index) => {
        return (
          <div key={index} className="user-item">
            {user.adSoyad}
          </div>
        );
      })}
    </>
  );
}
