import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to Our Online Store</h1>
      <div className="row">
        <div className="col-6">
          <Link to="/men" className="btn btn-primary btn-lg">Shop Men</Link>
        </div>
        <div className="col-6">
          <Link to="/women" className="btn btn-primary btn-lg">Shop Women</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
