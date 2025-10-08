import { getStats } from "@/services/api";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Dashboard() {
const [stats, setStats] = useState({ total_orders: 0, total_users: 0 });

  // useEffect(() => {
  //   axios.get(`${API_BASE_URL}/admin/stats`)
  //     .then(response => setStats(response.data))
  //     .catch(error => console.error('Error fetching stats:', error));
  // }, []);

    const fetchStats = async () => {
      try {
        const res = await getStats();
        setStats(res.data)
      } catch (err) {
        console.error("Lỗi khi lấy thông tin", err);
      }
    }

    useEffect(() => {
      fetchStats()
    }, []) 


  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Orders</h5>
              <p className="card-text">{stats.total_orders}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text">{stats.total_users}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard