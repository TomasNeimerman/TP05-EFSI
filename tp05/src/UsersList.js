import { useEffect, useState } from "react";
import "./UsersList.css";

const UsersList = () => {
  const urlApi = "https://randomuser.me/api/?results=5";
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch(urlApi)
     .then(response => response.json())
     .then(data => setUsers(data.results))
     .catch(error => console.log('Hubo un error ', error));
  }, []);

  return (
    <div className="user-list-container">
      <h1>Listado:</h1>
      <div className="user-grid">
        {users.map((user, index) => (
          <div key={index} className="user-card" onClick={() => setSelectedUser(user)}>
            <img src={user.picture.large} alt={user.name.first} className="user-image" />
            <h2>{user.name.first} {user.name.last}</h2>
          </div>
        ))}
      </div>
      {selectedUser && (
        <Modal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

const Modal = ({ user, onClose }) => (
  <div className="modal">
    <h2>{user.name.first} {user.name.last}</h2>
    <img src={user.picture.large} alt={user.name.first} className="user-image" />
    <p>{user.email}</p>
    <p>{user.phone}</p>
    <button onClick={onClose}>Close</button>
  </div>
);

export default UsersList;