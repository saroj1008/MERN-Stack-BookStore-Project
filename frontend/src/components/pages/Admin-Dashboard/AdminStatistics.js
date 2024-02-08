import React, { useContext, useEffect, useState } from 'react';
import LoggedInUserContext from '../../../context-global/LoggedInUserContext';
import { ProductContext } from './ProductContext';
import { Card, CardContent, Typography } from '@mui/material';

const cardStyle = {
  width: 300,
  margin: 20,
  padding: 10,
};

const AdminStatistics = () => {
  const [productCount, setProductCount] = useState(0);
  const { state, dispatch, setMode, setFormData, formData } = useContext(ProductContext);

  useEffect(() => {
    setProductCount(state.products.length);
    getOutOfStockBooks();
  }, [state.products.length]);

function getOutOfStockBooks() {
  return state.products.filter(item=> item.quantity < 1);
}
  // You can replace these with the actual data, its dummy data.
  const upcomingBooks = 5;


  return (
    <div style={{ marginTop: '200px', display: 'flex', justifyContent: 'center' }}>
      <Card style={cardStyle}>
        <CardContent>
          <Typography variant="h5" >Total Products</Typography>
          <Typography variant="h3" style={{ color: 'green' }}>{productCount}</Typography>
        </CardContent>
      </Card>
      <Card style={cardStyle}>
        <CardContent>
          <Typography variant="h5">Upcoming New Books</Typography>
          <Typography variant="h3">{upcomingBooks}</Typography>
        </CardContent>
      </Card>
      <Card style={cardStyle}>
        <CardContent>
          <Typography variant="h5">Out of Stock Books</Typography>
          <Typography variant="h3" style={{ color: 'red' }} >{getOutOfStockBooks().length}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminStatistics;
