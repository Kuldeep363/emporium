import React, { useEffect, useState } from 'react'
import CartProduct from './cartProduct'
import EmptyCart from './emptyCart'
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import Link from 'next/link';
import { CartState } from '../../pages/_app';

function Cart({showCart}) {
    const [subTotal, setSubTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [deliveryCharges, setDeliveryCharges] = useState(0);
    const [total, setTotal] = useState(0);

    const closeCart = ()=>{
        document.getElementById('cart__icon').click()
    }

    const {state,dispatch} = CartState()
    useEffect(()=>{
        let cost = state.cart.products.reduce((prev, curr)=>{
            prev += curr.price *curr.quantity
            return prev
        },0)
        setSubTotal(cost)

        setTax(Math.ceil(0.18*cost))
        cost += Math.ceil(0.18*cost)
        let chargesDel = 40;
        if(cost>0 && cost<500){
            chargesDel = 40
        }else{
            chargesDel = 0
        }
        setDeliveryCharges(chargesDel)
        const total = cost + chargesDel
        setTotal(total)
        dispatch({
            type:'SET_TOTAL',
            payload:{
                price: total
            }
        })
    },[state.cart.products])
  return (
    <div id='cart' style={{right:showCart?'0':'-100vw'}}>
        <h3>Your Cart</h3>
        <div id="cart__items">
            {
                state.cart.products.length===0?
                <EmptyCart/>
                :
                <div className="cart__products">
                    {
                        state.cart.products.map((product)=>{
                            return (
                                <CartProduct key={product.id} id={product.id}  title={product.title} img={product.img} price={product.price} quantity={product.quantity} />
                            )
                        })
                    }
                    <div className="cart__calculation">
                        <div className="product__calculation">
                            <div className="price__title">
                                <small>Sub Total</small>
                            </div>
                            <div>
                                <b>
                                ${subTotal}
                                </b>
                            </div>
                        </div>
                        <div className="product__calculation">
                            <div className="price__title">
                                <small>Delivery Charges</small>
                                <br />
                                {
                                    deliveryCharges!==0?
                                    <small className='very__small green'>(Add ${500-(total-deliveryCharges)} items to avail free delivery)</small>
                                    :null
                                }
                            </div>
                            <div>
                                {
                                    deliveryCharges !== 0?
                                    <b>${deliveryCharges}</b>
                                    :
                                    <>
                                        <b>
                                        $0
                                        </b>
                                        <strike>$40</strike>
                                    </>
                                 }
                            </div>
                        </div>
                        <div className="product__calculation">
                            <div className="price__title">
                                <small>Tax (GST%)</small>
                            </div>
                            <div>
                                <b>
                                ${tax}
                                </b> <small>(18%)</small>
                            </div>
                        </div>
                    </div>
                    <div className="cart__calculation total__price">
                        <div className="product__calculation">
                            <div className="price__title">
                                <small>Total</small>
                            </div>
                            <div>
                                <b>
                                    ${total}
                                </b>
                            </div>
                        </div>

                    </div>
                    <div className="checkout__btn">
                        <Link href='/checkout' onClick={()=>closeCart()}>
                            <div className="add__to__cart">
                                <ShoppingCartCheckoutRoundedIcon/>
                                Proceed to checkout
                            </div>
                        </Link>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Cart