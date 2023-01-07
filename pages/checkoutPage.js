import React from 'react'
import { CartState } from '../App';
import Checkout from '../components/checkout/Checkout';
import NoProducts from '../components/extraComponents/NoProducts';
import LoginForm from '../components/login/loginForm';
import Auth from '../store/Authenticate'

const CheckoutPage = () => {
    const isAuthenticated = Auth();
    const {state} = CartState();
  return (
    <div className='mt padding' id='checkout__page'>
        {
            isAuthenticated?
            (
                state.cart.totalPrice===0?
                <NoProducts searchPage={false}/>
                :
                <>
                    <Checkout state={state} />
                </>
            )
            :
            <>
                <h3 className="text__center">Login to check out</h3>
                <div className="d-flex justify-center">
                    <LoginForm/>
                </div>
            </>
        }
    </div>
  )
}

export default CheckoutPage