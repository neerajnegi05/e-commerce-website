import { Link } from "react-router-dom"
import './Header.css';
function Header(){
    return(
       
      <nav className="navbar navbar-expand-lg container-fluid bg-light py-2">
      <a className="navbar-brand" href="#"><img className="logo" src="./images/logo2.png"/>JustShopping</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
             <Link to="/" className="nav-link active" >HOME</Link>
            </li>
            <li className="nav-item">
            <Link to="/men" className="nav-link active" >MEN</Link>
            </li>
            <li className="nav-item">
            <Link to="/women" className="nav-link active" >WOMEN</Link>
            </li>
            <li className="nav-item">
            <Link to="/login" className="nav-link active" >LOGIN</Link>
             </li>
            <li className="nav-item">
            <Link to="/signup" className="nav-link active" >SIGNUP</Link>
            </li>
                     </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products"
              aria-label="Search"
            />
            <button className="btn" type="submit">Search</button>
          </form>
        </div>
     </nav>
    )
}
export default Header