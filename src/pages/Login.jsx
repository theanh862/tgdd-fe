import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Alert } from '@mui/material';
import { login } from '@/services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/';
    } catch (err) {
  console.error("Login error:", err);
  setError('Đăng nhập thất bại. Kiểm tra email hoặc mật khẩu!');
}

  };

  return (
    <Container>
      <Typography variant="h4">Đăng nhập</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth sx={{ my: 2 }} />
      <TextField label="Mật khẩu" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth sx={{ my: 2 }} />
      <Button variant="contained" onClick={handleLogin}>Đăng nhập</Button>
    </Container>
  );
}

export default Login;