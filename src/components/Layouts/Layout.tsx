import React, { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const cartQuantity = useAppSelector(state => state.cart.cartQuantity);

  return (
    <div>
      <header className='bg-white shadow-md fixed top-0 left-0 w-full'>
        <nav>
          <div className='container mx-auto flex justify-between items-center py-2'>
            <ul className='w-1/3 flex items-center list-none gap-9 text-lg text-gray-500 '>
              <li>
                <NavLink
                  to='/'
                  exact
                  className='hover:text-black relative'
                  activeClassName='font-bold text-black active-link'
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/products'
                  className='hover:text-black relative'
                  activeClassName='font-bold text-black active-link'
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/reviews'
                  className='hover:text-black relative'
                  activeClassName='font-bold text-black active-link'
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <h2 className='w-1/3 text-2xl text-blue-500 font-bold text-center'>
              Beauty.bd
            </h2>
            <div className='w-1/3'>
              <div className='flex items-center justify-end'>
                <Link
                  to='/checkout'
                  className='rounded-full flex items-center justify-center text-2xl w-10 h-10 text-blue-500 cursor-pointer relative'
                >
                  {cartQuantity ? (
                    <span className='h-6 w-6 rounded-full absolute -right-1 -top-1 text-xs bg-red-500 text-white flex items-center justify-center'>
                      {cartQuantity}
                    </span>
                  ) : null}
                  <i className='fa-solid fa-cart-shopping' />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className='bg-gray-200 h-full min-h-screen pt-16 pb-5'>
        {children}
      </main>
    </div>
  );
};

export default Layout;
