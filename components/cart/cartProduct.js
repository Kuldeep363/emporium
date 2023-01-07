import React from 'react'
import { CartState } from '../../pages/_app';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { toast} from 'react-toastify';

function CartProduct({id, title, price, img, quantity}) {

    const {dispatch} = CartState()
    const changeQuantity = (value)=>{
        dispatch({
            type:'CHANGE_QUANTITY',
            payload:{
                id,
                quantity: value
            }
        })
    }
    const removeProduct = ()=>{ 
        dispatch({
            type:'REMOVE_FROM_CART',
            payload:{
                id
            }
        })
        toast.error('Removed from cart')
    }
  return (
    <div className='cart__product'>
        <div className="thumbnail">
            <img src={img} alt={title} />
        </div>
        <div className="cart__product__details">
            <p><strong>{title}</strong></p>
            <small>${price* quantity}</small>
            <div className="quantity__btns">
                {
                    quantity>1?
                    <div className="quantity__btn" onClick={()=>changeQuantity(quantity-1)} >-</div>
                    :
                    <div className="quantity__btn remove" onClick={()=>removeProduct()}><DeleteOutlineOutlinedIcon/></div>
                }
                <small>{quantity}</small>
                <div className="quantity__btn" onClick={()=>changeQuantity(quantity+1)} >+</div>
            </div>
        </div>
        {
            quantity>1?
                <div className="remove__btn remove" onClick={()=>removeProduct()}>
                    <DeleteOutlineOutlinedIcon/>
                </div>
                :
                null

        }
    </div>
  )
}

export default CartProduct