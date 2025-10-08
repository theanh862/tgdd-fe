import "bootstrap/dist/css/bootstrap.min.css";


function SlideBar () {


  const handleLogout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href('/login')
    }

  return (
    <div className="bg-dark text-white vh-100" style={{ width: '250px' }}>
      <nav className="navbar navbar-dark flex-column">
        <a className="navbar-brand">Admin Dashboard</a>
        <nav className="nav flex-column">
          <a className="nav-link" href="#">Dashboard</a>
          <a className="nav-link" href="/products">Products</a>
          <a className="nav-link" href="/orders">Orders</a>
          <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
        </nav>
      </nav>
    </div>
  );
  
}

export default SlideBar