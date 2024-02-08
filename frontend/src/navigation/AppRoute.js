import React, { useContext } from 'react'
import AdminDashboard from "../components/pages/Admin-Dashboard/AdminDashboard";
import UserDashboard from "../components/pages/User-Dashboard/UserDashboard";
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ProductListAdmin from '../components/pages/Admin-Dashboard/ProductList';
import ProductDetails from '../components/pages/User-Dashboard/ProductDetails';
import ModifyProductForm from '../components/pages/Admin-Dashboard/ModifyProductForm';
import SignInForm from '../components/pages/auth-pages/SignInForm';
import BookCart from '../components/pages/User-Dashboard/BookCart';
import ProductListUser from '../components/pages/User-Dashboard/ProductList';
import PaymentCheckout from '../components/pages/User-Dashboard/PaymentCheckout';
import SignUpForm from '../components/pages/auth-pages/SignUpForm';
import LoggedInUserContext from '../context-global/LoggedInUserContext';
// import Language from '../components/pages/User-Dashboard/Language';
import ErrorPage from '../components/pages/Common/ErrorPage';
import AdminStatistics from '../components/pages/Admin-Dashboard/AdminStatistics';

function DefaultRoute() {
  // Destructure the loggedInUser and setLoggedInUser variables from the context
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
  
  // Define the getDefaultRoute function
  function getDefaultRoute() {
  
    if (loggedInUser === null || typeof loggedInUser !== 'object') {
      console.log("test",loggedInUser);
      return '/signin';
    } else {
      if (loggedInUser.role === "user") {
            return '/user';
          }
          if (loggedInUser.role === "admin") {
            return '/admin';
          }
    }
    // If the user has the role of 'admin' or 'user', return their respective role
    // if (['admin', 'user'].includes(loggedInUser.role)) return loggedInUser.role;  ('/admin or /signin')
    // If the user is not an admin or a user, return the signin route
    return '/signin'
  }
  // Return a Navigate component that redirects the user to their default route
  return <Navigate to={getDefaultRoute()} />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultRoute />,
    // redirectTo: 'signin'
  },
  {
    path: '/signin',
    element: <SignInForm />
  },
  {
    path: '/signup',
    // Redirect to the admin page
    element: <SignUpForm />
  },
  {
    path: '/admin',
    element: <AdminDashboard />,
    children: [
      {
        path: '',
        element: <AdminStatistics />
      },
      {
        path: 'books',
        element: <ProductListAdmin />
      },
      {
        path: 'books/add',
        element: <ModifyProductForm />
      },
      {
        path: 'books/edit/:bookId',
        element: <ModifyProductForm />
      },
      {
        path: 'books/:bookId',
        element: <ProductDetails />
      },
      {
        path: 'payment',
        element: <PaymentCheckout />
      },
    ]
  },
  // User starts here

  {
    path: '/user',
    // Redirect to the admin page
    element: <UserDashboard />,
    children: [
      {
        path: '',
        element: <ProductListUser />
      },
      {
        path: 'cart',
        element: <BookCart />
      },
      {
        path: 'product/details/:productId',
        element: <ProductDetails />
      },
      {
        path: 'payment',
        element: <PaymentCheckout />
      },
  
    ]
  },
  // User starts here

  {
    path: '*',
    // Render a 404 error page for any unknown paths
    element: <ErrorPage />,
  },

]);




const AppRoute = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default AppRoute