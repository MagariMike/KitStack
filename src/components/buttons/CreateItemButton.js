import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const CreateItemButton = () => {
  return (
    <button className='NavbarButtons'>
        <FontAwesomeIcon icon={faPlus} data-testid="fa-plus-icon" />
    </button>
  )
}

export default CreateItemButton;