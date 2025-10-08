import React, { useEffect, useState } from "react";
import { getOrders, getUser } from "@/services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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
  const [currentView, setCurrentView] = useState("orders");
  const [user, setUser] = useState(null);

  const fetchOrders = async (s = "all") => {
    setLoading(true);
    try {
      const res = await getOrders({ status: s });
      setOrders(res.data);
    } catch (err) {
      console.error("Lỗi khi lấy orders:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUser = async () => {
    try {
      const res = await getUser();
      setUser(res.data);
    } catch (err) {
      console.error("Lỗi khi lấy thông tin user:", err);
    }
  };

  useEffect(() => {
    fetchOrders(status);
    fetchUser();
  }, [status]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  return (
    <div className="container my-4" style={{ maxWidth: "1200px" }}>
      <div className="d-flex">
        {/* Sidebar */}
        <div
          className="p-3 bg-white shadow-sm rounded me-3"
          style={{ width: "260px", height: "fit-content" }}
        >
          <h6 className="fw-bold mb-3 text-secondary">Bạn</h6>
          <button
            className={`btn w-100 text-start mb-2 ${
              currentView === "orders"
                ? "btn-light border-start border-4 border-primary"
                : "btn-outline-light text-dark"
            }`}
            onClick={() => setCurrentView("orders")}
          >
            <i className="bi bi-card-checklist me-2"></i> Đơn hàng đã mua
          </button>
          <button
            className={`btn w-100 text-start mb-2 ${
              currentView === "profile"
                ? "btn-light border-start border-4 border-primary"
                : "btn-outline-light text-dark"
            }`}
            onClick={() => setCurrentView("profile")}
          >
            <i className="bi bi-person-lines-fill me-2"></i> Thông tin và số địa chỉ
          </button>
          <button
            className="btn btn-outline-danger w-100 mt-2 fw-semibold"
            onClick={handleLogout}
          >
            Đăng Xuất
          </button>

          <div className="bg-warning-subtle rounded mt-3 p-3">
            <p className="mb-1 small">
              <strong>Tổng điểm tích lũy:</strong> 0 điểm
            </p>
            <p className="small mb-2">
              Tải app{" "}
              <span role="img" aria-label="gift">
                🎁
              </span>{" "}
              Quà Tặng VIP
            </p>
            <div className="d-flex justify-content-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                width="110"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                width="110"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 bg-white shadow-sm rounded p-3">
          {currentView === "orders" && (
            <>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="fw-bold mb-0">Đơn hàng đã mua</h5>
                <div className="text-muted small">
                  Từ 06/10/2024 - 06/10/2025{" "}
                  <a href="#" className="ms-2 text-decoration-none">
                    <i className="bi bi-pencil-square"></i> Thay đổi
                  </a>
                </div>
              </div>

              {/* Status Tabs */}
              <div className="mb-4">
                {orderStatuses.map((s) => (
                  <button
                    key={s.value}
                    className={`btn btn-sm me-2 ${
                      status === s.value
                        ? "btn-outline-primary active"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => setStatus(s.value)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Orders */}
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" />
                </div>
              ) : orders.length === 0 ? (
                <div className="text-center py-5">
                  <i
                    className="bi bi-bag fs-1 text-primary mb-3 d-block"
                    style={{ opacity: 0.7 }}
                  ></i>
                  <h6>Rất tiếc, không tìm thấy đơn hàng nào phù hợp</h6>
                  <p className="text-muted small">
                    Vẫn còn rất nhiều sản phẩm đang chờ bạn
                  </p>

                  <div className="d-flex justify-content-center flex-wrap gap-2 mt-3">
                    {["Điện thoại", "Laptop", "Tablet", "Phụ kiện", "Smartwatch"].map(
                      (item) => (
                        <button
                          key={item}
                          className="btn btn-outline-primary btn-sm px-3"
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>

                  <div className="mt-4">
                    <a href="/" className="text-decoration-none">
                      <i className="bi bi-chevron-left me-1"></i> Về trang chủ
                    </a>
                  </div>
                </div>
              ) : (
                <div className="card border-0">
                  <ul className="list-group list-group-flush">
                    {orders.map((order) => (
                      <li className="list-group-item" key={order.id}>
                        <strong>
                          Đơn hàng #{order.id} - {order.status}
                        </strong>
                        <br />
                        <small className="text-muted">
                          Ngày: {order.created_at}
                        </small>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {currentView === "profile" && (
            <div className="p-3">
              <h5 className="fw-bold mb-3">Thông tin tài khoản</h5>
              {user ? (
                <>
                  <p>Họ tên: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Số điện thoại: {user.phone ?? "Chưa có"}</p>
                  <p>Địa chỉ giao hàng: {user.address ?? "Chưa có"}</p>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="spinner-border text-primary" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;
