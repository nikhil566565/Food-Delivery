import Menu from './Pages/Menu/menu'
import Contact from './Components/Contact/contact'
import AboutUs from './Pages/AboutUs/AboutUs'
import Error from './Components/Error'
import Home from './Pages/home'
import Navbar from './Components/Navbar/navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shopingcart from './Pages/ShopingCart/shopingcart';
import Login from './Components/Login/login';
import Footer from './Components/Footer/footer'
import Signup from './Components/Login/Signup';
import ForgotPassword from './Components/Login/forgotPassword'
import DisplayCart from './Components/Fooditem/displayCart';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <><Home /></> },
    { path: '/menu', element: <><Menu /></> },
    { path: '/aboutus', element: <><AboutUs /></> },
    { path: '/contact', element: <><Contact /></> },
    { path: '/*', element: <><Error /> </> },
    { path: '/shoppingCart', element: <> <Shopingcart /> </> },
    { path: '/login', element: <> <Navbar /><Login /><Footer /> </> },
    { path: '/signup', element: <> <Navbar /><Signup /><Footer /> </> },
    { path: '/forgotpassword', element: <> <Navbar /><ForgotPassword /><Footer /> </> },
    { path: '/display', element: <> <DisplayCart /> </> }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
