import React, { useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const handleError = useErrorHandler();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        handleError(error); 
      }
    };

    fetchUsers();
  }, [handleError]);

  return (
    <div>
      <h4>User List</h4>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;