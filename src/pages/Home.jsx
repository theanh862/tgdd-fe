import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/services/api';
import BannerCarousel from '@/components/BannerCarousel';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        // API trả về mảng trực tiếp
        const productList = Array.isArray(response.data) ? response.data : [];
        // Chuyển price từ string sang number và định dạng
        const formattedProducts = productList.map(product => ({
          ...product,
          price: parseFloat(product.price), // Chuyển sang number
          categoryName: product.category?.name || 'Chưa phân loại', // Lấy tên danh mục
          imagePath: product.image ? `/storage/${product.image}` : '/images/default-product.jpg' // Đường dẫn đầy đủ cho Laravel storage
        }));
        setProducts(formattedProducts);
      })
      .catch((error) => console.log('Lỗi tải sản phẩm:', error));
  }, []);

  return (
    <Container maxWidth={false} disableGutters>
      <BannerCarousel />
      <Typography variant="h5" sx={{ my: 3, color: '#FFD700', fontWeight: 'bold' }}>Danh mục nổi bật</Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          { name: 'Điện thoại', image: '/images/phone-icon.jpg' },
          { name: 'Laptop', image: '/images/laptop-icon.jpg' },
          { name: 'Tablet', image: '/images/tablet-icon.jpg' },
          { name: 'Phụ kiện', image: '/images/accessory-icon.jpg' }
        ].map((cat, index) => (
          <Grid 
            item 
            xs={6} 
            sm={3} 
            key={index}
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              p: 1 
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 1 }}>
              <img 
                src={cat.image} 
                alt={cat.name} 
                style={{ width: '60px', height: '60px', borderRadius: '50%' }} 
                onError={(e) => { e.target.src = '/images/default-icon.jpg'; }} // Fallback nếu ảnh lỗi
              />
              <Typography variant="body2" sx={{ mt: 1, fontWeight: '500' }}>{cat.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" sx={{ my: 3, color: '#FFD700', fontWeight: 'bold' }}>Sản phẩm nổi bật</Typography>
      <Grid container spacing={3}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              lg={3} 
              key={product.id}
              sx={{ 
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Box sx={{ width: '100%', textAlign: 'center', py: 4 }}>
            <Typography variant="h6">Đang tải sản phẩm...</Typography>
          </Box>
        )}
      </Grid>
    </Container>
  );
}

export default Home;