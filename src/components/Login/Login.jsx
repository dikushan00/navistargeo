import React from 'react'
import './Login.css'

export default function Login() {
return <>
    <div style = {{backgroundColor: "#fff"}}>
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <form className="login100-form validate-form flex-sb flex-w">
                        <span className="login100-form-title p-b-51">
                            Login
                        </span>
                        <div className="wrap-input100 validate-input m-b-16" data-validate="Username is required">
                            <input className="input100" type="text" name="username" placeholder="Username" />
                            <span className="focus-input100">
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                            <input className="input100" type="password" name="pass" placeholder="Password" />
                            <span className="focus-input100">
                            </span>
                        </div>
                        <div className="container-login100-form-btn m-t-17">
                            <button className="login100-form-btn">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div id="dropDownSelect1" />
    </div>

</>
}