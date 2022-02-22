import React from 'react';

// Declarar componente UserTable que recibe por props los datos 
const UserTable = ({users}) => {
    // console.log(users);
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    // Operador ternario para mostrar datos de usuarios
                    // o "No users" en caso de no recibir datos.
                    users.length > 0 ?
                    // Usar metodo map de arrays para renderizar los items
                    // de la tabla con los usuarios recibidos por props.
                    users.map((user) => {
                        return <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className='button muted-button'>Edit</button>
                                <button className='button muted-button'>Delete</button>
                            </td>
                        </tr>
                    }) : (
                        <tr>
                            <td colspan={3}>No users</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
     );
}

export default UserTable;