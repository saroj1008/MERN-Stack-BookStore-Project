import React, { useContext, useEffect, useState } from 'react'
import UserHeader from './UserHeader';
import { Outlet } from 'react-router-dom';
import withAuthRole from '../../../hoc_protecedRoutes_components/withAuthRole';
import apiServiceUser from '../../../services/apiServiceUser';
import LoggedInUserContext from '../../../context-global/LoggedInUserContext';


const UserDashboard = () => {
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    fetchCartItems();
},[]);

// fetch cart items when mounts:
async function fetchCartItems() {
    const response = await apiServiceUser.fetchCart(loggedInUser._id);
  setCartLength(response.length);
}

  return (
    <div>

        <UserHeader data ={{cartLength, setCartLength}} />
        <Outlet context = {{cartLength, setCartLength}} />
   
    </div>
  )
}

export default withAuthRole(UserDashboard, 'user');

