import React from 'react';
import ProductType from '../../types/ProductType';
import ProductItem from './ProductItem';

const ProductList: React.FC<{
  products: ProductType[];
  onSelectProduct: (id: string) => void;
}> = ({ products, onSelectProduct }) => {
  return (
    <div className='col-span-5 overflow-auto flex flex-col gap-3 rounded-lg shadow-lg'>
      {products.map(product => (
        <ProductItem
          key={product.productId}
          product={product}
          onSelectProduct={onSelectProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
