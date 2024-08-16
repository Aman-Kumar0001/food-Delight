import React from 'react'

const Cart = () => {
  return (
    <>

      <div class="container">
        <div class="empty-cart">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Empty Cart"/>
            <h3>Your cart is empty</h3>
            <p>You can go to the home page to view more restaurants</p>
            <button class="btn btn-custom">SEE RESTAURANTS NEAR YOU</button>
        </div>
      </div>
      
    </>
  )
}

export default Cart