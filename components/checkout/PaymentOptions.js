import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { CartState } from '../../App';
import PaymentGIF from '../../assets/images/payment.gif';

const PaymentOptions = ({toggleDialog,firstName, lastName, amount,email}) => {
    const [action, setAction] = useState(false);
    const [success, setSuccess] = useState(true);
    const navigate = useNavigate()

    const {dispatch} = CartState();

    const handleAction = (i)=>{
        setAction(true)
        if(i){
            setSuccess(true)
            setTimeout(()=>{
                dispatch({
                    type:'EMPTY_CART'
                })
                navigate('/')
                document.getElementById('dialog').click()
            },5000)
        }else{
            setSuccess(false)
            setTimeout(()=>{
                document.getElementById('dialog').click()
            },2000)
        }
    }
    const closeDialog = (e)=>{
        e.stopPropagation()
        if(e.target.id === 'dialog'){
            toggleDialog()
        }
    }
  return (
    <div className={`d-flex justify-center align-center delete__dialog ${action?'action':''}`} id='dialog' onClick={(e)=>closeDialog(e)}>
        <div className={`wrapper ${success?'payment__success':'payment__fail'}`}>
            {
                action?
                (
                    
                        success?
                        <div className="text__center">
                            <img src={PaymentGIF} alt='payment successfull' width='150px'/>
                        </div>
                        :
                        <> Payment rejected! Try again</>
                    
                )
                :

                <div>
                    <h3>Payment</h3>
                    <small>{firstName +' ' + lastName}</small> <br />
                    <small>{email}</small>
                    <p>Amount: ${amount}</p>
                    <br />

                    <div className="d-flex" >
                        <button id='remove' className='remove' onClick={()=>handleAction(false)}>Reject </button>
                        <button className='success' onClick={()=>handleAction(true)} >Pay </button>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default PaymentOptions
