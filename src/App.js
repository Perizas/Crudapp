import UserTable from './componets/UserTable';
import AddUserForm from './componets/AddUserForm';
import EditUserForm from './componets/EditUserForm';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  // Array
  const usersData = [
    { id: uuidv4(), name: 'Gregorio', username: 'Ramirez', sex: 'Hombre' },
    { id: uuidv4(), name: 'Carlos', username: 'Robledo', sex:'Hombre' },
    { id: uuidv4(), name: 'Maria', username: 'Gonzalez', sex: 'Mujer' },
  ]

  // Eliminar
   const deleteUser = (id) => {
    console.log(id)
    setUsers(users.filter(user => user.id !== id));
}
  const [users, setUsers] = useState(usersData)
 // Agregar
  const addUser = (user) => {
    user.id= uuidv4()
    console.log(user)
    setUsers([
      ...users,
      user
    ])
  }

  // Editar
  const[editing, setEditing] = useState(false);
  const[newuser, setnewuser] = useState({
    id: null, name: '', username: ''
  });
  const editnow = (user) => {
    setEditing (true);
    setnewuser({
      id: user.id, name: user.name, username: user.username, sex: user.sex
    })
  }

  const updatedUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  return (
    <div className="container">
      <h1>CRUD Aplicación de Desarrollo </h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
              <h2>Editar Usuarios</h2>
              <EditUserForm
              newuser ={newuser}
              updatedUser={updatedUser}/>
              </div>
            ) : (
              <div>
              <h2>Agregar Usuarios</h2>
              <AddUserForm addUser={addUser}/></div>
            )
          }

        </div>
        <div className="flex-large">
          <h2>Usuarios Registrados</h2>
          <UserTable
          users={users}
          deleteUser = {deleteUser}
           editnow = {editnow}
           />
        </div>
      </div>
    </div>
  )
}

export default App;
