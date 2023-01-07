import React, { useState } from 'react'
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import { CartState } from '../../pages/_app';

const LoginForm = () => {
    const [formData, setFormData] = useState({username:'kminchelle',password:'0lelplR'})
    const [btnTxt, setBtnTxt] = useState('Login')

    const {dispatch} = CartState();

    const handleChange = (id,value)=>{
        setFormData({...formData, [id]:value})
    }

    const login = async()=>{
        const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          })
        const data = await res.json()
        if(data.message){
            setBtnTxt('Login')
            alert('Login error!')
        }else{
            dispatch({
                type:'LOGIN',
                payload:data
            })
        }
    }

    const handleSubmit = (e)=>{
        setBtnTxt('Checking credentials...')
        e.preventDefault();
        login()

    }

  return (
    <div id='login__form'>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="form-group">
                <input type="text" id='username' placeholder='Username' value={formData.username} onChange={(e)=>handleChange(e.target.id, e.target.value)} />
                <AccountBoxRoundedIcon/>
            </div>
            <div className="form-group">
                <input type="password" id='password' placeholder='Password' value={formData.password} onChange={(e)=>handleChange(e.target.id, e.target.value)} />
                <KeyRoundedIcon/>
            </div>
            <button>{btnTxt}</button>
            <small>Use these credentials for testing</small>
        </form>
    </div>
  )
}

export default LoginForm