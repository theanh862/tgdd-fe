import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { getCart } from '@/services/api';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart().then((response) => setCart(response.data)).catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Typography variant="h4">Giỏ hàng</Typography>
      {cart.map((item) => (
        <div key={item.id}>
          <Typography>{item.name} - {item.price} đ x {item.quantity}</Typography>
        </div>
      ))}
      <Button variant="contained">Đặt hàng</Button>
    </Container>
  );
}

export default Cart;