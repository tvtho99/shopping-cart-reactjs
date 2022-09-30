import React from 'react';

import CartItem from './CartItem';
// import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CartItemType from '../../types/CartItemType';

const CartList: React.FC<{ cartItems: CartItemType[] }> = ({ cartItems }) => {
  return (
    <div className='lg:col-span-8 overflow-auto flex flex-col gap-4'>
      {cartItems.length !== 0 ? (
        cartItems?.map(cartItem => (
          <CartItem key={cartItem.productId} cartItem={cartItem} />
        ))
      ) : (
        <p className='text-center text-xl font-bold pt-12'>
          You have no products in cart
        </p>
      )}
    </div>
  );
};

export default CartList;
