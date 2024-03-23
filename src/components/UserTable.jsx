import React from 'react'

export default function UserTable({ usersList, editRow, deleteUser }) {
  return (
    <div className='bg-[#0F182A] rounded-[15px] px-[10px] py-[32px] text-lime-50'>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {usersList.length > 0 ? (
          usersList.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>
                <button className='bg-[#5046E5] rounded w-[80px] h-[32px]' onClick={() => editRow(user)}>Edit</button>
                <button className='bg-[#FF4B4B] rounded w-[80px] h-[32px]' onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  )
}
