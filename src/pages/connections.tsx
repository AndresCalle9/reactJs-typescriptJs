import { useEffect, useState } from 'react';
import * as goRestService from '../services/GoRestService';
import { User } from '../models/User';
import PostUser from '../components/PostUser/PostUser';
import { Link } from 'react-router-dom';

const Connections = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    document.title = 'Connections';
    getUsersInfo();
  }, []);

  const getUsersInfo = async () => {
    const response = await goRestService.getUsers();
    setUsers(response.data);
  };

  return (
    <div>
      <h1>Connections</h1>
      <div className='container p-4'>
        <PostUser
          returnNewUser={(newUser) =>
            setUsers((current) => [newUser, ...current])
          }
        />
        <h2>Lista de usuarios</h2>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Gender</th>
              <th scope='col'>Status</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={(index + 1).toString()}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
                <td>
                  <Link to={`/user/${user.id}`} className='text-primary'>
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Connections;
