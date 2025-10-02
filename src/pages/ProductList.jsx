import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/services/api';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response.data)).catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Typography variant="h4">Danh sách sản phẩm</Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductList;