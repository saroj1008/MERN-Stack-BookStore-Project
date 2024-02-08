import React, { useEffect, useState } from 'react';
import apiService from '../../../services/apiService';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CircularProgress,
  Paper,
  Button,
} from "@mui/material";
import { useTranslation } from 'react-i18next';

const ProductDetails = () => {
  const params = useParams();
  const { productId } = params;
  const [product, setProduct] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Fetch product details based on the productId
    async function fetchProductDetails() {
      try {
        const response = await apiService.fetchProductById(productId);
        // Assuming the API response returns the product details in the 'data' field
        setProduct(response);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }

    fetchProductDetails();
  }, [productId]);

  // If the product data is not yet fetched, show a loading message or spinner
  if (!product) {
    return <CircularProgress />;
  }

  function handleGoBack() {
    window.history.back();
  }

  // Once the product data is fetched, display the product details
  return (
    <div style={{ margin: '40px' }}>
      <Typography variant="h3" component="h1">
        {t('Product Details')}
      </Typography>
      <Grid container spacing={2}>
        {/* Left side: Product Image */}

        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            <Card>
              <CardMedia
                component="img"
                // {t(data.title)}
                image={product.image} // Replace 'product.image' with the actual URL of the image
                title={product.title}
                style={{ width: "80%", height: "100%", objectFit: 'cover', display: 'block', margin: 'auto' }} // Center the image
              />
            </Card>
          </Paper>
        </Grid>

        {/* Right side: Product Details */}
        <Grid item xs={12} sm={6} md={8} textAlign={'left'} width={30}>
          <Paper>
            <Card>
              <CardContent>
                {/* <Typography variant="h5" component="h1">
    {t("Product Details")}
  </Typography> */}
                <Typography variant="subtitle1" component="p">
                  {t("Product ID")}: {t(productId)}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {t("Title")}: {t(product.title)}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {t("Author")}: {t(product.author)}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {t("Category")}: {t(product.category)}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {t("Description")}: {t(product.description)}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {t("ISBN")}: {t(product.isbn)}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {t("Quantity on Stock")}: {t(product.quantity)}
                </Typography>
                <Typography variant="h6" component="p" style={{ fontWeight: 'bold' }}>
                  {t("Price")}: {t(product.price)} {t("USD")}
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  sx={{ backgroundColor: 'skyblue' }}
                  onClick={handleGoBack}
                >
                  {t("Go Back")}
                </Button>
              </CardContent>

            </Card>
          </Paper>
        </Grid>
      </Grid>

    </div>
  );
};

export default ProductDetails;
