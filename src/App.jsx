import { useState } from 'react'
import './App.css'
import AddUserForm from './components/AddUserForm'
import UserTable from './components/UserTable'
import EditUserForm from './components/EditUserForm'

function App() {
// form initial state
const initialFormState = { id: null, name: '', surname: '' }

// users data here
const users = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
  },
  {
    id: 2,
    name: 'Peter',
    surname: 'Doe',
  },
  {
    id: 3,
    name: 'Paul',
    surname: 'Doe',
  },
]
// app state
  const [usersList, setUsersList] = useState(users);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = usersList.length + 1
    setUsersList([...usersList, user]);
  }

  const deleteUser = (id) => {
    setEditing(false);
    setUsersList(usersList.filter((user) => user.id !== id));
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsersList(usersList.map((user) => (user.id === id ? updatedUser : user)));
  }

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, surname: user.surname });
  }

  return (
   <main>
    <div className='flex flex-col gap-[16px]'>
      <div className='bg-[#0F182A] rounded-[15px] px-[10px] py-[32px]'>
        <h1 className='text-[#fff] text-[32px]'>User Crud APP</h1>
      </div>
      {editing ? (
        <EditUserForm 
          editing={editing} 
          setEditing={setEditing} 
          currentUser={currentUser} 
          updateUser={updateUser}
        />
      ) : (
        <AddUserForm addUser={addUser} />
      )}
      <UserTable 
        usersList={usersList} 
        editRow={editRow} 
        deleteUser={deleteUser} 
      />
    </div>
   </main>
  );
}

export default App
