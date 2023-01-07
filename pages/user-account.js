import React from 'react'
import LoginForm from '../components/login/loginForm'
import UserData from '../components/userData/UserData'
import Auth from '../store/Authenticate'

const UserAccount = () => {
    
    const isAuthenticated = Auth()

  return (
    <div className='mt padding '>
            {
                isAuthenticated?
                <div className="d-flex justify-center ">
                    <div className="myContainer">
                        <UserData/>
                    </div>
                </div> 
                :
                <div >
                    <h3 className='text__center'>Login to continue</h3>
                    <div className='d-flex justify-center'>
                        <LoginForm/>
                    </div>
                </div>
            }
    </div>
  )
}

export default UserAccount