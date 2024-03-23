import React from 'react';
import { useState } from 'react';

export default function AddUserForm({ addUser }) {
  const initialFormState = {id: null, name: '', surname: ''};
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value});
  }

  return (
    <div className='bg-[#0F182A] rounded-[15px] px-[10px] py-[32px] text-lime-50'>
      <h2>Add User</h2>
    <form onSubmit={
      (event) => {
        event.preventDefault();
        if (!user.name || !user.surname) return;
        
        addUser(user);
        setUser(initialFormState);
      }
    }>
      <div className='flex flex-col text-left gap-[16px]'>
        <label htmlFor='name' >Name</label>
        <input type='text' name='name' className='h-[32px] text-[#0F182A]' value={user.name} onChange={handleInputChange}/>
        <label htmlFor='surname'>Surname</label>
        <input type='text' name='surname'  className='h-[32px] text-[#0F182A]' value={user.surname} onChange={handleInputChange}/>

        <div className='text-right'>
          <button className='bg-[#5046E5] rounded w-[120px] h-[32px]'>Add new user</button>
        </div>
      </div>
    </form>
  </div>
  )
}
