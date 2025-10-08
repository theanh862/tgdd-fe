import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import axios from "axios";

function CrudProducts() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    image: null,
    description: '',
    category_id: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      console.log('Products:', res.data);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleShowModal = () => {
    setFormData({
      name: '',
      price: '',
      stock: '',
      image: null,
      description: '',
      category_id: ''
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('FormData before submit:', formData);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }
      await axios.get('http://localhost:8000/sanctum/csrf-cookie');
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      }
      console.log('FormData to send:', ...formDataToSend);
      await axios.post('http://localhost:8000/api/products', formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      fetchProducts();
      handleCloseModal();
    } catch (err) {
      console.error("Error posting products:", err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:8000/api/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        fetchProducts();
      } catch (err) {
        console.error("Error deleting product:", err.response?.data || err.message);
      }
    }
  };

  return (
    <div className="container">
      <h1>Products</h1>
      <button className="btn btn-primary mb-3" onClick={handleShowModal}>Add Product</button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category ID</th>
            <th>Description</th>
            <th>Image</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category_id}</td>
              <td>{product.description}</td>
              <td>
                {product.image ? (
                  <img
                    src={`http://localhost:8000/storage/${product.image}`}
                    alt={product.name}
                    width="100"
                    height="60"
                    style={{objectFit: 'contain'}}
                    onError={(e) => console.error(`Failed to load image: ${product.image}`, e)}
                  />
                ) : (
                  "No image"
                )}
              </td>
              <td>{product.stock}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Product</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Stock</label>
                    <input
                      type="number"
                      className="form-control"
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                      type="file"
                      className="form-control"
                      name="image"
                      onChange={handleChange}
                      accept="image/*"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Category ID</label>
                    <input
                      type="number"
                      className="form-control"
                      name="category_id"
                      value={formData.category_id}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CrudProducts;