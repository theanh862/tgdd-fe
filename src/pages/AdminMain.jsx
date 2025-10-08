// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import SlideBar from './AdminDashBoard/SlideBar';
import Dashboard from './AdminDashBoard/DashBoard';
// API Base URL (update to your Laravel API URL)
const API_BASE_URL = 'http://localhost:8000/api';
import CrudProducts from './AdminDashBoard/CRUDProduct';
// Main App Component
function AdminDashBoard() {
  return (
      <div className="d-flex">
        <SlideBar />
        <div className="flex-grow-1 p-3">
          <Dashboard />
          <CrudProducts />
        </div>
      </div>
  );
}


// Orders Page (View and Approve)
function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get(`${API_BASE_URL}/orders`)
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  };

  const handleApprove = (id) => {
    axios.patch(`${API_BASE_URL}/orders/${id}`, { status: 'approved' })
      .then(() => fetchOrders())
      .catch(error => console.error('Error approving order:', error));
  };

  return (
    <div className="container">
      <h1>Orders</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user_id}</td>
              <td>${order.total}</td>
              <td>{order.status}</td>
              <td>
                {order.status !== 'approved' && (
                  <button className="btn btn-success" onClick={() => handleApprove(order.id)}>Approve</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashBoard;