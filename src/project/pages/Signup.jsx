import './Signup.css';
function Signup(){
    return(
        <div>
        <section>
    <div className="login-box">
        <form action="">
      <h2>Sign up</h2>
        <div className="input-box">
        <span className="icon"><ion-icon name="mail"></ion-icon></span>
        <input type="email" required />
        <label>Email</label>
      </div>
      <div className="input-box">
        <span className="icon"><ion-icon name="lock"></ion-icon></span>
        <input type="password" required/>
        <label>Password</label>
      </div>
      <div className="remember-forgot">
        <label><input type="checkbox"/>Remember me</label>
        </div>
      <button type="submit">Sign up</button>
      <div className="register-link">
        <p>Don't have an account?
        <a href="">sing up</a></p>
      </div>
    </form> 
    </div>
</section>
    <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    </div>
    )
}
export default Signup