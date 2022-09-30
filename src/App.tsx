import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppSelector } from './app/hooks';

import Layout from './components/Layouts/Layout';
import LoadingModal from './components/UI/Loading/LoadingModal';
import { CheckoutPage, HomePage, ProductsPage, ReviewsPage } from './pages';

function App() {
  const { isRedirecting, isLoading } = useAppSelector(state => state.loading);
  return (
    <div className='bg-gray-200 font-fira-sans'>
      {isLoading && <LoadingModal />}
      <Switch>
        <Layout>
          <ToastContainer
            enableMultiContainer
            toastStyle={{
              backgroundColor: '#10B981',
              color: '#fff',
              fontWeight: '500',
              width: '15rem',
            }}
            position='bottom-left'
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            containerId={'addToCartToast'}
          />
          <ToastContainer
            enableMultiContainer
            toastStyle={{
              backgroundColor: '#1ABA85',
              color: '#fff',
              fontWeight: '500',
            }}
            position='top-center'
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            containerId={'submitCartToast'}
          />
          {isRedirecting ? <Redirect to='/products' /> : null}
          <Route path='/' exact component={HomePage} />
          <Route path='/products' component={ProductsPage} />
          <Route path='/reviews' component={ReviewsPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route path='*'>
            <Redirect to='/products' />
          </Route>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
