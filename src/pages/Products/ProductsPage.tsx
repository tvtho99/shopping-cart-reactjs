import { useEffect, useState } from 'react';

import ProductDetail from '../../components/Products/ProductDetail';
import ProductList from '../../components/Products/ProductList';

import ProductType from '../../types/ProductType';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setRedirecting } from '../../features/loading/loadingSlice';
import { fetchProducts } from '../../features/products/productsSlice';

const ProductsPage = () => {
  const [count, setCount] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(
    {} as ProductType
  );

  const fetchedProducts = useAppSelector(state => state.products.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setSelectedProduct(fetchedProducts?.[0]);
  }, [fetchedProducts]);

  useEffect(() => {
    dispatch(setRedirecting(false));
    dispatch(fetchProducts({}));
  }, [dispatch]);

  const handleSelectProduct = (productId: string) => {
    setCount(1);
    setSelectedProduct(
      fetchedProducts?.find(product => product.productId === productId)!
    );
  };

  return (
    <div className='container mx-auto h-ctn'>
      <div className='grid grid-cols-12 h-full gap-5'>
        <ProductDetail
          selectedProduct={selectedProduct}
          count={count}
          increment={() => setCount(prev => ++prev)}
          decrement={() => setCount(prev => --prev)}
        />
        <ProductList
          products={fetchedProducts}
          onSelectProduct={handleSelectProduct}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
