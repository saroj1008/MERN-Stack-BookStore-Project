import React from 'react'
import AdminHeader from './AdminHeader';
import { Outlet } from 'react-router-dom';
import {ProductContextProvider} from './ProductContext';
import withAuthRole from '../../../hoc_protecedRoutes_components/withAuthRole';


const AdminDashboard = () => {
  return (
    <div>AdminDashboard
      <ProductContextProvider>
      <AdminHeader />
      <Outlet />
      </ProductContextProvider>
    </div>
  )
}

export default withAuthRole(AdminDashboard, 'admin');
