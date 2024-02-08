import React, { useContext, useEffect, useState } from 'react';
import apiServiceUser from '../../../services/apiServiceUser';
import LoggedInUserContext from '../../../context-global/LoggedInUserContext';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper } from '@mui/material';

const ProductOrderHistory = () => {
  const [ordersList, setOrderList] = useState([]);
  // fetch Order History
  const { loggedInUser } = useContext(LoggedInUserContext);

  async function getOrderHistory() {
    const response = await apiServiceUser.fetchOrderHistory(loggedInUser._id);
    setOrderList(response.reverse());
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  useEffect(() => {
    getOrderHistory();
  }, []); // Make sure to provide an empty dependency array to useEffect to run only once

  return (
    <div style={{ padding: '16px', width:'70%', margin: 'auto' }}>
      <Typography variant="h4">Order History</Typography>
      {ordersList.map((order, index) => (
        <TableContainer key={index} component={Paper} style={{ marginBottom: '16px', borderRadius: '8px', overflow: 'hidden' }}>
          <Table>
            {/* <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>ISBN</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Image</TableCell>
              </TableRow>
            </TableHead> */}
            <TableBody>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>{formatDate(order.date)}</TableCell>
                <TableCell colSpan={3}></TableCell>
              </TableRow>
              {order.cart.map((item) => (
                <TableRow key={item._id}>
                  <TableCell style={{ width: '20%' }} >id: {item._id}</TableCell>
                  <TableCell style={{ width: '20%' }} >{item.title}</TableCell>
                  <TableCell style={{ width: '20%' }} >{item.isbn}</TableCell>
                  <TableCell style={{ width: '20%' }} >${item.price * item.count}</TableCell>
                  <TableCell style={{ width: '10%' }} >
                    <img src={item.image} alt={item.title} style={{ maxWidth: '80px', maxHeight: '80px', objectFit: 'fill' }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </div>
  );
};


export default ProductOrderHistory;
