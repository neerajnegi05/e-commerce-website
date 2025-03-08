import "./Cart.css";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import { Link } from "react-router-dom";
function Cart( {cartdata}){
    
      return (
        
<div className="row w-100">
  <div className="col-lg-4 col-md-6 text-center col-12">
  <img className="img" src={cartdata.url}/>
  </div>
  <div className="card-body col-lg-8 col-md-6 col-12 text-md-start text-center">
      <h5 className="card-title text-card">{cartdata.name}</h5>
      <p className="card-text">{cartdata.mrp} | Price: {cartdata.price}</p>
        <p><b>Rating:</b> {cartdata.ratings}</p>
      <p>{cartdata.off}</p>
    
      <Link to="" className="btn btn-add"><FaShoppingBag /> ADD TO BAG</Link><Link to="" className="btn btn-wish"><FaRegHeart /> WISHLIST</Link>
      <p><b>packaging:</b> {cartdata.packaging}</p>
      <p><b>Quality:</b> {cartdata.quality}</p>
      <p>{cartdata.text}</p>
      <p>{cartdata.text1}</p>
      <p>{cartdata.text2}</p>
      <p><b>Description:</b> {cartdata.product_description}</p>
  </div>
</div>
     
    )
   
}
export default Cart