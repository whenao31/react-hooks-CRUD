import React, { useState } from 'react';
// Importar componente UserTable
import UserTable from './components/UserTable'
// Importar Paquete para generacion de ids unicos
import { v4 as uuidv4} from 'uuid'

function App() {

  // Array para el inicializar el State
  const userData = [
    { id: uuidv4(), name: 'John', username: 'blackmirror'},
    { id: uuidv4(), name: 'Jane', username: 'blindspot'},
    { id: uuidv4(), name: 'Picollo', username: 'seahorse'},
  ];

  // Declarar State para manipular los datos de los usuarios en UserTable
  const [users, setUsers] = useState(userData);

  // Plantilla HTML principal.
  return (
    <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add User</h2>
        </div>
        <div className='flex-large'>
          <h2>View Users</h2>
          {/* Enviar datos de usuarios a componente por medio de props. */}
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
