import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
} from "@mui/material";
import { getOrders } from "@/services/api";

const orderStatuses = [
  { label: "Tất cả", value: "all" },
  { label: "Chờ xử lý", value: "pending" },
  { label: "Đã xác nhận", value: "confirmed" },
  { label: "Đang chuyển hàng", value: "shipping" },
  { label: "Đang giao hàng", value: "delivering" },
  { label: "Đã hủy", value: "canceled" },
  { label: "Thành công", value: "completed" },
];

function Orders() {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("all");
  const [loading, setLoading] = useState(true);


  const fetchOrders = async (s = "all") => {
    setLoading(true);
    try {
      const res = await getOrders({ status: s }); // gọi API với filter
      setOrders(res.data);
    } catch (err) {
      console.error("Lỗi khi lấy orders:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders(status);
  }, [status]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login"; // reset trang
  };

  return (
    <Container maxWidth="lg" sx={{ display: "flex", mt: 3 }}>
      {/* Sidebar */}
      <Box sx={{ width: 250, mr: 3 }}>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Button fullWidth variant="outlined">
            Đơn hàng đã mua
          </Button>
          <Button fullWidth sx={{ mt: 1 }}>
            Thông tin và số địa chỉ
          </Button>
          <Button
            fullWidth
            color="error"
            sx={{ mt: 2 }}
            variant="contained"
            onClick={handleLogout}
          >
            Đăng Xuất
          </Button>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle1">Tổng điểm tích lũy: 0 điểm</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Tải app để tích điểm và nhận quà tặng!
          </Typography>
        </Paper>
      </Box>

      {/* Main content */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Đơn hàng đã mua
        </Typography>

        {/* Tabs trạng thái */}
        <Tabs
          value={status}
          onChange={(e, newVal) => setStatus(newVal)}
          textColor="primary"
          indicatorColor="primary"
          sx={{ mb: 2 }}
        >
          {orderStatuses.map((s) => (
            <Tab key={s.value} label={s.label} value={s.value} />
          ))}
        </Tabs>

        {/* Loading */}
        {loading ? (
          <CircularProgress />
        ) : orders.length === 0 ? (
          <Paper sx={{ p: 4, textAlign: "center" }}>
            <Typography>
              Rất tiếc, không tìm thấy đơn hàng nào phù hợp
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Vẫn còn rất nhiều sản phẩm đang chờ bạn
            </Typography>
          </Paper>
        ) : (
          <Paper>
            <List>
              {orders.map((order) => (
                <React.Fragment key={order.id}>
                  <ListItem>
                    <ListItemText
                      primary={`Đơn hàng #${order.id} - ${order.status}`}
                      secondary={`Ngày: ${order.created_at}`}
                    />

                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        )}
      </Box>
    </Container>
  );
}

export default Orders;
