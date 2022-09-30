import React from 'react';

import CartItemType from '../../types/CartItemType';
import { cartActions } from '../../features/cart/cartSlice';
import { useAppDispatch } from '../../app/hooks';

const CartItem: React.FC<{ cartItem: CartItemType }> = ({ cartItem }) => {
  const dispatch = useAppDispatch();

  const handleDeleteItem = () => {
    dispatch(cartActions.deleteFromCart(cartItem.productId));
  };

  const handleRemoveItem = () => {
    dispatch(cartActions.removeFromCart(cartItem.productId));
  };

  const handleAddItem = () => {
    dispatch(cartActions.addToCart({ ...cartItem, quantity: 1 }));
  };

  return (
    <div className='bg-white flex gap-2 rounded-lg px-2 py-3 shadow-lg'>
      <div className='w-1/3 p-5'>
        <img
          src={cartItem.imageUrl}
          alt=''
          className='h-full w-full object-cover'
        />
      </div>
      <div className='w-2/3 flex flex-col justify-center gap-2 p-4'>
        <div className='flex justify-between'>
          <h4 className='text-lg font-semibold'>{cartItem.productName}</h4>
          <button className='text-red-500' onClick={handleDeleteItem}>
            <i className='fa-solid fa-trash-can'></i>
          </button>
        </div>
        <p className='font-light pr-6'>{cartItem.description}</p>
        <div className='flex justify-between items-center'>
          <div className='flex justify-between items-center bg-gray-200 gap-6 px-5 py-2 rounded-lg'>
            <button
              className='text-orange-500 text-xl disabled:opacity-50 disabled:text-gray-300'
              disabled={cartItem.quantity === 0}
              onClick={handleRemoveItem}
            >
              <i className='fa-solid fa-minus' />
            </button>
            <p className='font-semibold text-xl'>{cartItem.quantity}</p>
            <button className='text-orange-500 text-xl' onClick={handleAddItem}>
              <i className='fa-solid fa-plus' />
            </button>
          </div>
          <p className='text-3xl font-bold'>
            ${cartItem.totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
