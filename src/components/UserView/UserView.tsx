import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as goRestService from '../../services/GoRestService';
import { User } from '../../models/User';
import { Button } from 'react-bootstrap';

interface UserProps {}

const UserView: React.FC<UserProps> = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    gender: '',
    status: '',
  });
  const getUserInfo = async (id: number) => {
    const response = await goRestService.getUser(id);
    setUser(response.data);
  };
  const handleDelete = async () => {
    await goRestService.deleteUser(parseInt(id ?? ''));
  };
  const handleUpdate = async () => {
    setUser({ ...user, status: 'updated' });
    const res = await goRestService.updateUser(parseInt(id ?? ''), user);
    console.log(res);
  };
  useEffect(() => {
    getUserInfo(parseInt(id ?? ''));
  }, []);
  return (
    <div className='container'>
      <h1>Usuario {id}</h1>
      <Link to='/connections' className='text-primary'>
        Regresar
      </Link>
      <h5>Nombre: {user?.name || ''}</h5>
      <h5>Email: {user?.email || ''}</h5>
      <h5>Gender: {user?.gender || ''}</h5>
      <h5>Status: {user?.status || ''}</h5>
      <Button variant='danger' onClick={handleDelete}>
        Eliminar
      </Button>
      <Button variant='primary' onClick={handleUpdate}>
        Actualizar
      </Button>
    </div>
  );
};

export default UserView;
