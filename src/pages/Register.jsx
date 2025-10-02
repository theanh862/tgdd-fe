import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Alert } from '@mui/material';
import { register } from '@/services/api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await register({ name, email, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/';
    } catch (err) {
      console.error("Register error:", err);
      setError('Đăng ký thất bại. Kiểm tra thông tin!');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Đăng ký</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField label="Tên" value={name} onChange={(e) => setName(e.target.value)} fullWidth sx={{ my: 2 }} />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth sx={{ my: 2 }} />
      <TextField label="Mật khẩu" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth sx={{ my: 2 }} />
      <Button variant="contained" onClick={handleRegister}>Đăng ký</Button>
    </Container>
  );
}

export default Register;