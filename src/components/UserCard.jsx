import React from 'react'
import './styles/userCard.css'

const UserCard = ({user, deleteUserById, setUpdateInfo, setCloseForm}) => {

  const handleEdit = () => {
    setUpdateInfo(user)
  }

return (
  <article className="card">
    <h3 className='card_tittle'>
      {user.first_name} {user.last_name}</h3>
    <ul className='card_body'>
      <li className='card_item'>
        <span className='card_span'>Email</span>{user.email}
      </li>
      <li className='card_item'>
        <span className='card_span'>Birthday</span>{user.birthday}
      </li>
    </ul>
    <footer className='card_footer'>
      <button className='card_btn card_btn_trash' on onClick={() => deleteUserById(user.id)}><i className="fa-solid fa-trash-can"></i></button>
      <button className='card_btn card_btn_edit'  onClick={handleEdit}><i className="fa-solid fa-pen-to-square" ></i></button>
    </footer>
  </article>
)
}

export default UserCard