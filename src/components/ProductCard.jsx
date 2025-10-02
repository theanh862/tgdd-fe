import React from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button, 
  Rating,
  Chip 
} from '@mui/material';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' đ';
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 280, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 2,
        boxShadow: 2,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 3
        }
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={product.imagePath}
        alt={product.name}
        sx={{ 
          objectFit: 'cover',
          backgroundColor: '#f5f5f5'
        }}
        onError={(e) => {
          e.target.src = '/images/default-product.jpg'; // Fallback ảnh
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Chip 
          label={product.categoryName} 
          size="small" 
          sx={{ mb: 1, backgroundColor: '#FFD700', color: '#000' }} 
        />
        <Typography 
          variant="h6" 
          component={Link} 
          to={`/product/${product.id}`} 
          sx={{ 
            textDecoration: 'none', 
            color: '#000', 
            mb: 1, 
            fontWeight: 500,
            '&:hover': { color: '#FFD700' }
          }}
        >
          {product.name}
        </Typography>
        <Typography 
          variant="h5" 
          color="primary" 
          sx={{ mb: 1, fontWeight: 'bold' }}
        >
          {formatPrice(product.price)}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Tồn kho: {product.stock > 0 ? product.stock : 'Hết hàng'}
        </Typography>
        <Rating 
          name="read-only" 
          value={4.5} // Giả định rating, bạn có thể thêm trường rating vào DB
          readOnly 
          precision={0.5}
          size="small"
          sx={{ mb: 1 }}
        />
        {product.description && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '0.875rem' }}>
            {product.description.length > 50 ? `${product.description.substring(0, 50)}...` : product.description}
          </Typography>
        )}
        <Button 
          variant="contained" 
          fullWidth
          component={Link}
          to={`/product/${product.id}`}
          sx={{ 
            mt: 'auto', 
            backgroundColor: '#FFD700', 
            color: '#000',
            fontWeight: 'bold',
            borderRadius: 2,
            textTransform: 'none',
            py: 1,
            '&:hover': { 
              backgroundColor: '#e6b800',
              boxShadow: 1 
            }
          }}
        >
          Xem chi tiết
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;