import React from 'react';
import { toast } from 'react-toastify';

import ProductType from '../../types/ProductType';
import { cartActions } from '../../features/cart/cartSlice';
import { useAppDispatch } from '../../app/hooks';

const ProductDetail: React.FC<{
  selectedProduct: ProductType;
  count: number;
  increment: () => void;
  decrement: () => void;
}> = ({ selectedProduct, count, increment, decrement }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart({ ...selectedProduct, quantity: count }));
    toast.success('Added Successfully', {
      containerId: 'addToCartToast',
      icon: '👏',
    });
  };

  return (
    <div className='col-span-7 overflow-visible flex flex-col gap-y-20 h-full p-8 shadow-lg bg-white rounded-lg'>
      <div
        className='h-3/4 flex justify-center items-center'
        style={{
          backgroundImage: `url(${selectedProduct?.imageUrl})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '50%',
        }}
      ></div>

      <div className='h-1/4 flex flex-col'>
        <h3 className='text-4xl'>{selectedProduct?.productName}</h3>
        <p className='text-md font-light text-gray-700 mt-2 mb-6'>
          {selectedProduct?.description}
        </p>
        <div className='flex justify-between items-center'>
          <div className='flex justify-between items-center bg-gray-200 gap-6 px-5 py-2 rounded-lg'>
            <button
              className='text-orange-500 text-xl disabled:opacity-50 disabled:text-gray-300'
              disabled={count === 1}
              onClick={decrement}
            >
              <i className='fa-solid fa-minus'></i>
            </button>
            <p className='font-semibold text-xl'>{count}</p>
            <button className='text-orange-500 text-xl' onClick={increment}>
              <i className='fa-solid fa-plus'></i>
            </button>
          </div>
          <div className='flex gap-5 items-center'>
            <p className='text-3xl font-bold'>${selectedProduct?.price}</p>
            <button
              className='flex items-center gap-3 px-4 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg'
              onClick={handleAddToCart}
            >
              <i className='fa-solid fa-cart-shopping' />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
