// import { Sidebar } from 'lucide-react'
import Sidebar from '../siderbar/sidebar'
import './addproduct.css'
import React, { useState } from 'react';
import axios from 'axios';
const Addproduct = () => {

  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    image: '',
    rating: '',
    category: '',
    description: ''
  });
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.id]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/foods', product);
      alert("✅ Product added successfully!");
      console.log(res.data);
      // Optional: Reset form
      setProduct({
        id: '',
        name: '',
        price: '',
        image: '',
        rating: '',
        category: '',
        description: ''
      });
    } catch (error) {
      console.error('Error adding product:', error);
      alert("❌ Failed to add product");
    }
  };

  return (
    <>
      <Sidebar />
      <div className="AddProduct-container">
        <form id="addProductForm" onSubmit={handleSubmit}>
          <div className="AddProduct-grid">
            <div>
              <label htmlFor="id" className="AddProduct-label">Id</label>
              <input type="number" id="id" className="AddProduct-input" value={product.id} onChange={handleChange} placeholder="17" required />
            </div>
            <div>
              <label htmlFor="name" className="AddProduct-label">Product Name</label>
              <input type="text" id="name" className="AddProduct-input" value={product.name} onChange={handleChange} placeholder="The Gramercy Tavern Burger-4 Pack" required />
            </div>
            <div>
              <label htmlFor="price" className="AddProduct-label">Price</label>
              <input type="text" id="price" className="AddProduct-input" value={product.price} onChange={handleChange} placeholder="149.99" required />
            </div>

            <div>
              <label htmlFor="image" className="AddProduct-label">Image URL</label>
              <input type="url" id="image" className="AddProduct-input" value={product.image} onChange={handleChange} placeholder="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000" required />
            </div>

            <div >
              <label htmlFor="rating" className="AddProduct-label">Rating</label>
              <input type="text" id="rating" className="AddProduct-input" value={product.rating} onChange={handleChange} placeholder="4.7" required />
            </div>
          </div>
          <div className="AddProduct-field-group">
            <label htmlFor="category" className="AddProduct-label">Category</label>
            <input type="text" id="category" className="AddProduct-input" value={product.category} placeholder="burger" onChange={handleChange} required />
          </div>
          <div className="AddProduct-field-group">
            <label htmlFor="description" className="AddProduct-label" >Description</label>
            <textarea
              id="description"
              className="AddProduct-input"
              placeholder="Enter product description"
              rows="4"
              value={product.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="AddProduct-button">Add Product</button>
        </form>
      </div>
    </>
  )
}

export default Addproduct
