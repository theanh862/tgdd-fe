import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography, Button } from '@mui/material';
import { getProductById, addToCart } from '@/services/api';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then((response) => setProduct(response.data)).catch((error) => console.log(error));
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product.id).then(() => alert('Đã thêm vào giỏ hàng!'));
    }
  };

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img src={product.image} alt={product.name} style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography>{product.price} đ</Typography>
          <Typography>Tồn kho: {product.stock}</Typography>
          <Button variant="contained" onClick={handleAddToCart}>Thêm vào giỏ</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;