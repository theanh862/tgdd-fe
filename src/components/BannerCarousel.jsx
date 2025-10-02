import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Typography, Button, Box } from '@mui/material';

function BannerCarousel() {
  const banners = [
    { 
      url: 'https://via.placeholder.com/1400x400/FFD700/FFFFFF?text=Xiaomi+15+Series+-+Ưu+đãi+đặc+biệt', 
      title: 'Xiaomi 15 Series', 
      subtitle: 'Giá từ 2.990.000đ', 
      link: '/products?category=1' 
    },
    { 
      url: 'https://via.placeholder.com/1400x400/000/FFFFFF?text=iPhone+16+-+Mới+nhất', 
      title: 'iPhone 16 Series', 
      subtitle: 'Công nghệ đỉnh cao', 
      link: '/products?category=1' 
    },
  ];

  return (
    <Box sx={{ position: 'relative', mb: 4 }}>
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false}
        interval={5000}
        sx={{ borderRadius: 2, overflow: 'hidden' }}
      >
        {banners.map((banner, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            <img 
              src={banner.url} 
              alt={banner.title} 
              style={{ width: '100%', height: 'auto', minHeight: '400px', objectFit: 'cover' }} 
            />
            <Box 
              sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '5%', 
                transform: 'translateY(-50%)', 
                backgroundColor: 'rgba(0,0,0,0.5)', 
                color: '#fff', 
                p: 3, 
                borderRadius: 2,
                maxWidth: '400px'
              }}
            >
              <Typography variant="h3" sx={{ mb: 1, fontWeight: 'bold' }}>{banner.title}</Typography>
              <Typography variant="h5" sx={{ mb: 2 }}>{banner.subtitle}</Typography>
              <Button 
                variant="contained" 
                size="large" 
                href={banner.link}
                sx={{ 
                  backgroundColor: '#FFD700', 
                  color: '#000', 
                  px: 4, 
                  py: 1, 
                  fontSize: '1.1rem',
                  '&:hover': { backgroundColor: '#e6b800' }
                }}
              >
                Mua ngay
              </Button>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default BannerCarousel;