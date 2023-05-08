import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'


const LogoutButton = () => {
  return (
    <button className='NavbarButtons'>
      <FontAwesomeIcon icon={faRightFromBracket} data-testid="fa-right-from-bracket-icon"/>
    </button>
  )
}

export default LogoutButton


