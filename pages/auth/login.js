import React from 'react'
import { useRouter } from 'next/router'
import LoginForm from '../../components/login/loginForm';
import Auth from '../../store/Authenticate';

const Login = () => {
    const isAuthenticated = Auth()
    const navigation = useRouter();
    if(isAuthenticated){
        navigation.push('/')
    }else{
  return (
    <div className='login mt padding'>
        <h3 className='login__h3'>Login</h3>
        <div className="d-flex justify-center">
            <LoginForm/>
        </div>
    </div>
  )
    }
}

export default Login