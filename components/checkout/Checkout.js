import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaymentOptions from './PaymentOptions';
const Checkout = ({state}) => {
    const [dialog, setDialog] = useState(false);
    const toggleDialog = ()=>{
        setDialog(dialog=>!dialog)
    }

    const handleClick = (e)=>{
        e.stopPropagation();
        alert('No APIs available, can\'t do any action for now!' )
    }
    
    useEffect(()=>{
        const btns = document.querySelectorAll('.dummy__btn');
        btns.forEach(e=>{
            e.addEventListener('click',(event)=>handleClick(event));
        })
    },[])
  return (
    <div className='d-flex justify-center' style={{height:'100%'}}>
        <div className="myContainer" id='checkout__user__data'>
            <div>
                <div className="d-flex justify-between border__bottom" id='checkout__heading'>
                    <h3>Checkout</h3>
                    <p>${state.cart.totalPrice}</p>
                </div>
                <div id="user__details">
                    <p>{state.user.firstName} {state.user.lastName}</p>
                    <p>{state.user.email}</p>
                    <p>7824965266</p>
                    <div id="user__addresses">
                        <div>
                            <input type="radio" name="address" id="address_1" className='address__input' />
                            <div className='user__address'>
                                <div className='address__btns'>
                                    <div className="quantity__btn edit dummy__btn" onClick={(e)=>handleClick(e)}>
                                        <EditIcon fontSize='smaller'/>
                                    </div>
                                    <div className=" quantity__btn remove dummy__btn">
                                        <DeleteOutlineIcon fontSize='smaller' />
                                    </div>
                                </div>
                                <label htmlFor="address_1" className=' d-flex justify-between'>
                                    <p>
                                        Plot no. 13, Defence colony,<br />
                                        Central Delhi,<br />
                                        New Delhi, India (110014)
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div>
                            <input type="radio" name="address" id="address_2" className='address__input' defaultChecked />
                            <div className='user__address'>
                                <div className='address__btns'>
                                    <div className="quantity__btn edit dummy__btn">
                                        <EditIcon fontSize='smaller'/>
                                    </div>
                                    <div className=" quantity__btn remove dummy__btn">
                                        <DeleteOutlineIcon fontSize='smaller' />
                                    </div>
                                </div>
                                <label htmlFor="address_2" className=' d-flex justify-between'>
                                    <p>
                                        Plot no. 13, Defence colony,<br />
                                        Central Delhi,<br />
                                        New Delhi, India (110014)
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div>
                            <input type="radio" name="address" id="address_3" className='address__input' />
                            <div className='user__address'>
                                <div className='address__btns'>
                                    <div className="quantity__btn edit dummy__btn">
                                        <EditIcon fontSize='smaller'/>
                                    </div>
                                    <div className=" quantity__btn remove dummy__btn">
                                        <DeleteOutlineIcon fontSize='smaller' />
                                    </div>
                                </div>
                                <label htmlFor="address_3" className=' d-flex justify-between'>
                                    <p>
                                        Plot no. 13, Defence colony,<br />
                                        Central Delhi,<br />
                                        New Delhi, India (110014)
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="add__to__cart dummy__btn">
                        Add delivery address
                    </div>
                </div>
            </div>
            <div className="add__to__cart" id='rzp-button1' onClick={()=>setDialog(true)}>
                <AttachMoneyIcon/>
                Proceed to payment
            </div>
        </div>{
            dialog &&
            <PaymentOptions toggleDialog={toggleDialog} firstName={state.user.firstName} lastName={state.user.lastName} amount={state.cart.totalPrice} email={state.user.email}  />
        }
    </div>
  )
}

export default Checkout