import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { getOrders, updateOrderStatus } from '@/services/api';

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((response) => setOrders(response.data)).catch((error) => console.log(error));
  }, []);

  const handleUpdateStatus = (orderId, status) => {
    updateOrderStatus(orderId, status).then(() => {
      setOrders(orders.map(order => order.id === orderId ? { ...order, status } : order));
    });
  };

  return (
    <Container>
      <Typography variant="h4">Lịch sử đơn hàng</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Mã đơn</TableCell>
            <TableCell>Trạng thái</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                <Button onClick={() => handleUpdateStatus(order.id, 'Đã giao')}>Cập nhật</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default OrderHistory;