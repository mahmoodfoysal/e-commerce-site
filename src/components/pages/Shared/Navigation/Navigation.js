import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/category')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">e-comm</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/dashBoard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {
              categories.map(category => <li><Link className="dropdown-item" to="#">{category.categoryName}</Link></li>)
            }
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/register">
          <button>Login</button>
          </Link>
        </li>
        </ul>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navigation;