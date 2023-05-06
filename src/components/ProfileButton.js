import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "../styles/navbar-buttons.css"


const ProfileButton = () => {
  return (
    <button className='NavbarButtons'>
        <FontAwesomeIcon icon={faUser} data-testid="fa-user-icon" />
    </button>
  )
}

export default ProfileButton