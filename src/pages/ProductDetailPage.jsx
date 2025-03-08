import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p><strong>MRP: </strong>₹{product.price * 75}</p> {/* Convert price to INR for example */}
          <p><strong>Ratings: </strong>{product.rating.rate} ({product.rating.count} reviews)</p>
          <button className="btn btn-primary">Buy Now</button>
          <button className="btn btn-secondary">Book Now</button>
          <div>
            <h5>Offers</h5>
            <ul>
              <li>10% off on first purchase</li>
              <li>Free shipping for orders over ₹1000</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
