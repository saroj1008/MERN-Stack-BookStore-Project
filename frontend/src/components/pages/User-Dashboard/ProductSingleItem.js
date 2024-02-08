import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import LoggedInUserContext from '../../../context-global/LoggedInUserContext';
import apiServiceUser from '../../../services/apiServiceUser';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductSingleItem = ({ data }) => {
  const { cartLength, setCartLength } = useOutletContext();
  // console.log("tedst", data);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);

  // handle add to Cart
  async function clickAddToCart(product) {
    const response = await apiServiceUser.addProductToCart(loggedInUser._id, product);
  }

  // Show single product details
  const ProductDetails = (data) => {
    navigate(`product/details/${data._id}`);
  }

  console.log("two router", cartLength);

  const handleClickAddToCart = (product) => {
    clickAddToCart({
      "book": product._id,
      "count": 1,
      "image": product.image,
      "isbn": product.isbn,
      "price": product.price,
      "title": product.title
    });
    setCartLength(cartLength + 1);
  }

  return (
    <Card sx={{ maxWidth: 345, "&:hover": { transform: "scale(1.05)" } }}>
      <CardActionArea onClick={() => ProductDetails(data)}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia
            component="img"
            height="250"
            style={{ width: '50%', objectFit: 'cover' }}
            image={data.image}
            alt={data.title}
          />
        </div>
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography gutterBottom variant="h5" component="div">
            {t(data.title)}
            {/* {data.title} */}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {t(data.category)}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ fontWeight: 'bold' }}>
            {t('by')}: {t(data.author)}
          </Typography>
          <Typography variant="body1" color="text.secondary" style={{ fontWeight: 'bold' }}>
            $ {t(data.price)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        {data.quantity <1 ?<Button size="small" color="primary" sx={{ backgroundColor: '#D9381E', color: 'green' }} disabled>
          {t('Out of Stock')}
          {/* {t('Add to Cart')} */}

          {/* Add to Cart */}
        </Button>: <Button size="small" color="primary" sx={{ backgroundColor: 'skyblue' }} onClick={() => handleClickAddToCart(data)}>
          {t('Add to Cart')}

          {/* Add to Cart */}
        </Button>}
      </CardActions>
    </Card>
  )
}

export default ProductSingleItem;
