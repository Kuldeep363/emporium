import React from 'react'
import { CartState } from '../../App'
import UserAvatar from '../../assets/images/user.jpg';

const UserData = () => {
    const {state:{user}} = CartState();
  return (
    <div className='text__center'>
        <div className="user__img">
        <img src={user.image!==''?user.image:UserAvatar} alt="User avatar" width={'75px'} height={'75px'} />
        </div>
        <h3 >{user.firstName} {user.lastName} </h3>
        <small>({user.username})</small>

        <div id="track__order"></div>
        <div id="order__history"></div>
    </div>
  )
}

export default UserData
