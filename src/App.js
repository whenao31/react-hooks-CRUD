import React, { useState } from 'react';
// Importar componente UserTable
import UserTable from './components/UserTable'
// Importar Paquete para generacion de ids unicos
import { v4 as uuidv4} from 'uuid'
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {

  // Array para el inicializar el State
  const userData = [
    { id: uuidv4(), name: 'John', username: 'blackmirror'},
    { id: uuidv4(), name: 'Jane', username: 'blindspot'},
    { id: uuidv4(), name: 'Picollo', username: 'seahorse'},
  ];

  // Declarar State para manipular los datos de los usuarios en UserTable
  const [users, setUsers] = useState(userData);

  // Funcion para adicionar usuario
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([
      ...users,
      user
    ]);
  }

  // Funcion Eliminar usuario
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  }

  // Funcion Editar usuario
  const [editing, setEditing] = useState(false);

  // Inicializar estado del usuario actual a editar
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username:''
  });

  // Funcion para cambiar el state de editar usuario
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    });
  }

  // Funcion para guardar usuario con informacion editada
  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map((user) => ((user.id === id) ? updatedUser : user)));
  };

  // Plantilla HTML principal.
  return (
    <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {
            editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm
                  currentUser={currentUser}
                  updateUser={updateUser} 
                />
              </div>
            ):(
              <div>
                <h2>Add User</h2>
                <AddUserForm addUser={addUser}/>
            </div>
            )
          }
        </div>
        <div className='flex-large'>
          <h2>View Users</h2>
          {/* Enviar datos de usuarios a componente por medio de props. */}
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
