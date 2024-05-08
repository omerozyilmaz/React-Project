import UserList from './UserList';

export default function SideBar(props) {
  const { users } = props;
  return (
    <div className="side-container">
      <h2>Users</h2>
      <UserList users={users}/>
    </div>
  );
}
