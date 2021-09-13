import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import Header from './components/header/Header';
import { Loader } from './components/loader/Loader';
import  { Redirect } from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import AdminProd from './components/Admin/products/Product.jsx'

const Cart = lazy(() => import('./views/cart/Cart'));
const Login = lazy(() => import('./views/Authentication/loginreg'));
const Home = lazy(() => import('./views/homepage/Home'));
const Admin = lazy(() => import('./views/Admin/Admin'));
const ViewProduct = lazy(() => import('./views/product/ViewProduct'));

const Logout=()=>{
  localStorage.removeItem("token");
   document.location='/'
}
function App() {
  return (
    <CartProvider>
      <Router>
        <>
          <Header />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/product/:id" component={ViewProduct} />
              <Route path="/cart" component={Cart} />
              <Route path="/auth" component={Login} />
              <ProtectedRoute exact path="/admin" component={Admin} />
              <ProtectedRoute exact path="/admin/products" component={AdminProd} />
              <ProtectedRoute exact path="/admin/customer" component={Admin} />
              <Route path='/logout' component={Logout}/>
              <Route path="*" component={Home} />
            </Switch>
          </Suspense>
        </>
      </Router>
    </CartProvider>
  );
}

export default App;
