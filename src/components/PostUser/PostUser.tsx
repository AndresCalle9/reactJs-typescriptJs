import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { User } from '../../models/User';
import * as goRestService from '../../services/GoRestService';

interface PostUserProps {
  returnNewUser: (newUser: User) => void;
}

const PostUser: React.FC<PostUserProps> = ({
  returnNewUser,
}: PostUserProps) => {
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState<User>({
    name: '',
    email: '',
    gender: '',
    status: 'active',
  });

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setNewUser({
      name: '',
      email: '',
      gender: '',
      status: 'active',
    });
    setShow(false);
  };
  const saveUser = async () => {
    const res = await goRestService.postUser(newUser);
    setNewUser({
      name: '',
      email: '',
      gender: '',
      status: 'active',
    });
    returnNewUser(res.data);
    handleClose();
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewUser({ ...newUser, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <button className='btn btn-primary' onClick={handleShow}>
        Nuevo Usuario
      </button>
      <br />
      <br />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Nombre
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder='Ingrese el nombre'
              value={newUser.name}
              onChange={onChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='text'
              className='form-control'
              id='email'
              placeholder='Ingrese el email'
              value={newUser.email}
              onChange={onChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='gender' className='form-label'>
              Genero
            </label>
            <select
              id='gender'
              className='form-control'
              value={newUser.gender}
              onChange={onChange}
            >
              <option value='male' defaultChecked>
                Masculino
              </option>
              <option value='female'>Femenino</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant='primary' onClick={saveUser}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostUser;
