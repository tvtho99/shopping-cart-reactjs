import React from 'react';
import ProductType from '../../types/ProductType';

const ProductItem: React.FC<{
  product: ProductType;
  onSelectProduct: (id: string) => void;
}> = ({ product, onSelectProduct }) => {
  return (
    <div className='bg-white flex gap-2 rounded-lg px-2 py-3 shadow-lg'>
      <div className='w-1/3 p-5'>
        <img
          src={product.imageUrl}
          alt=''
          className='h-full w-full object-contain'
        />
      </div>
      <div className='w-2/3 flex flex-col justify-center p-2'>
        <h4 className='text-lg font-semibold'>{product?.productName}</h4>

        <p className='font-light mb-6 pr-6'>{product?.description}</p>
        <div className='flex justify-between items-center'>
          <p className='text-2xl font-bold'>${product?.price}</p>
          <p
            className='text-lg text-blue-500 cursor-pointer'
            onClick={onSelectProduct.bind(null, product.productId)}
          >
            Details
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
