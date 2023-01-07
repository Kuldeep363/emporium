import React from 'react';
import { CartState } from '../../pages/_app';
import Modal from './Modal';

const DeleteDialog = ({toggleDialog}) => {
    const {dispatch} = CartState();

    const closeDialog = (e)=>{
        e.stopPropagation()
        if(e.target.id === 'dialog' || e.target.id === 'cancel__btn'){
            toggleDialog()
        }
    }

    const logout = (e)=>{
        e.stopPropagation()
        dispatch({
          type:'LOGOUT',
        })
        toggleDialog()
      }
    
    

  return (
    <Modal>
        <div className='d-flex justify-center align-center delete__dialog' id='dialog' onClick={(e)=>closeDialog(e)}>
            <div className="wrapper">
                <h3>Do you really want to logout?</h3>
                <div className="d-flex">
                    <button id='cancel__btn'>Cancel</button>
                    <button className='remove' onClick={(e)=>logout(e)}>Logout</button>
                </div>
            </div>
        </div>
    </Modal>
  )
}

export default DeleteDialog