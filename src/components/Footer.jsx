import React from 'react';
import { Container, Typography, Link, Grid, Box } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 4, mt: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>Về chúng tôi</Typography>
            <Link href="#">Giới thiệu</Link><br />
            <Link href="#">Tuyển dụng</Link><br />
            <Link href="#">Liên hệ</Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>Hỗ trợ</Typography>
            <Link href="#">Chính sách đổi trả</Link><br />
            <Link href="#">Hướng dẫn mua hàng</Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>Liên hệ</Typography>
            <Typography>Hotline: 1800-xxx-xxx</Typography>
            <Typography>Email: support@tgdd.com</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          © 2025 TGDD Clone. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;