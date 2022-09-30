import { useHistory } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { cartActions } from '../../features/cart/cartSlice';
import CartList from '../../components/Cart/CartList';

const CheckoutPage = () => {
  let totalPrice = 0;

  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.cartItems);

  cartItems?.forEach(cartItem => {
    totalPrice += cartItem.totalPrice;
  });

  const history = useHistory();

  const handleSubmitCart = () => {
    if (window.confirm('Do you want to purchase ?')) {
      const productsInOrder = cartItems.map(item => {
        return {
          productId: item.productId,
          quantity: item.quantity,
        };
      });
      dispatch(cartActions.submitCart({ paySuccess: true, productsInOrder }));
    }
  };

  return (
    <div className='container xl:px-48 mx-auto' style={{ height: 'auto' }}>
      <div className='grid lg:grid-cols-12 pt-5 auto-rows-min gap-3 h-full'>
        <div className='lg:col-span-12'>
          <div className='p-3 bg-white shadow-lg w-full rounded-lg'>
            <div className='w-full text-center font-semibold'>
              My Shopping Cart
            </div>
          </div>
        </div>

        <CartList cartItems={cartItems} />

        <div className='lg:col-span-4 flex flex-col gap-5'>
          <div className='flex flex-col gap-3 bg-gray-100 rounded-lg p-4'>
            <p className='text-xl font-semibold'>Order Info</p>
            <div>
              <div className='flex justify-between text-xl'>
                <p className='font-light '>Subtotal:</p>
                <p className='font-medium'>${totalPrice.toFixed(2)}</p>
              </div>
              <div className='flex justify-between text-xl'>
                <p className='font-light'>Shipping Cost:</p>
                <p className='font-medium'>
                  ${cartItems.length === 0 ? 0 : 10}
                </p>
              </div>
            </div>
            <div className='flex justify-between'>
              <p className='text-3xl font-bold'>Total:</p>
              <p className='text-3xl font-bold'>
                $
                {cartItems.length === 0
                  ? totalPrice.toFixed(2)
                  : (totalPrice + 10).toFixed(2)}
              </p>
            </div>
          </div>

          <button
            className='rounded-lg text-lg text-white bg-blue-500 px-4 py-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed'
            onClick={handleSubmitCart}
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
          <button
            className='rounded-lg border border-blue-500 text-blue-500 px-4 py-2 shadow-lg'
            onClick={() => {
              history.push('/products');
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
