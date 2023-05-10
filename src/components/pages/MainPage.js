import React from 'react'
import "../../styles/pages/main-page.css"
import "../../styles/shirt-card.css"
import ShirtCard from '../ShirtCard'

const mainPage = () => {
  return (
    <div className='wrapper'>
        <div className="profile-block">
            <div className='profile-tile'>profile tile</div>
            <div className=''></div>
        </div>

        <div className='latest-shirts-block'>
            <ShirtCard/>
            <ShirtCard/>
            <ShirtCard/>
        </div>
    </div>
  )
}

export default mainPage