import "./Home.css";
import { Link } from "react-router-dom";
function Home({homeProduct,addToCart}){
    return(
        <div className="container-fluid">
       <div className="row">      
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img  src="./images/f5.avif" className="d-block w-100 front-img"  alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="./images/f4.avif" className="d-block w-100 front-img"  alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="./images/f1.avif" className="d-block w-100 front-img"  alt="..."/>
          </div>
          </div>
        <button className="carousel-control-prev carousel-button" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden"></span>
        </button>
        <button className="carousel-control-next carousel-button" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden"></span>
        </button>
      </div>
    </div> 
   
    <div class="marquee-container">
    <p class="marquee-text">Medal Worthy Brands To Bag</p>
  </div>
    <div className="row">
  {
    homeProduct.map((productItem, productIndex) =>{
      return (
        
   <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center">
    <div className="card d-flex w-100">
      <div className="card-inner">
        <div className="card-front">
          <img src={productItem.url} className="card-image" />
          <div className="card-title">
            <h3>{productItem.name}</h3>
          </div>
        </div>
        <div className="card-back">
          <div className="card-price">
            <p>{productItem.mrp}  |   {productItem.price}</p>
            <p className="card-btn"><Link to="/cart" className="btn btn-primary" onClick={() => addToCart(productItem)}>Product view</Link></p>
          </div>
        </div>
      </div>
    </div>
    </div>
              
      )
})
  }
</div>
      </div>
    )
}
export default Home