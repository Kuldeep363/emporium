import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EmptyCart = () => {
  const closeCart = ()=>{
    document.getElementById('cart__icon').click()
  }
  return (
    <div id='empty__cart'>
            <Image src='/assets/images/empty-cart.webp' alt="Empty Cart" width='675' height='40' />
            <h3>Your cart is empty</h3>
            <p>Looks like you have not added anything to the cart.</p>
            <Link className='add__to__cart' href='/search' onClick={()=>closeCart()}>
                Search products
            </Link>
    </div>
  )
}

export default EmptyCart