import AddNewUser from "./components/AddNewUser";
import Header from "./components/Header";
import UserList from "./components/UserList";
import { useState, useEffect } from 'react';
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);

  window.submitForm = (name) => {
    alert("Submiting form for " + name);
    if (users.length > 0) users[users.length - 1].name += " (*)"; // mark the previous employee if there is one
    setUsers(prevUsers => [...prevUsers, { name: name }]);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(userData => setUsers(userData));
  }, []);

  return (
    <div className="App">
      <div>
        <Header users={users} />
      </div>
      <div>
        <AddNewUser />
      </div>
      <div>
        <UserList users={users} />
      </div>
    </div>
  );
}
