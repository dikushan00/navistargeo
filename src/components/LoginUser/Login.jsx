import React from 'react'
import loginImg from '../../media/img/loginImg.jpg'

export default function Login() {
  
return <div className="login">
  <div className="container login_container">
    <div className="login_modal col-md-9">
      <h1 className="login_title">Good Morning!</h1>
      <p className="login_desc">This day will be great.</p>
      <img src={loginImg} alt="PHOTO" className="login_img" />
      <form className="col-sm-9">
        <div className="row row_input">
          <div className="input-field col s6 input_field_added">
            <span className="login_icon_bg">
              <i className="fas fa-user-alt login_icon" />
            </span>
            <input id="icon_prefix" className="login_input" type="text" />
            <label htmlFor="icon_prefix" className="login_label">Username</label>
          </div>
        </div>
        <div className="row row_input">
          <div className="input-field col s6 input_field_added">
            <span className="login_icon_bg">
              <i className="fas fa-lock login_icon" />
            </span>
            <input id="icon_telephone" className="login_input" type="tel" />
            <label htmlFor="icon_telephone" className="login_label">Password</label>
          </div>
        </div>
        <div className="row">
          <p style={{margin: '0 0.75rem'}}>
            <label>
              <input type="checkbox" className="filled-in" defaultChecked="checked" />
              <span style={{color: '#fff', fontWeight: 'normal'}}>Remember Me</span>
            </label>
          </p>
        </div>
        <div className="row">
          <a className="waves-effect waves-light btn-small orange login_btn" style={{color: "#fff"}}>Login</a>
          <a href="#" className="login_btn_forget">Forgot Password?</a>
        </div>
      </form>
    </div>
  </div>
</div>
}