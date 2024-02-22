import React from 'react';
import { Input } from '@chakra-ui/react';
import "../style/Login.css";

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="card-container">
                    <div className="front"></div>
                </div>

                <form action="">
                    <div className="inputBox">
                        <span>Username</span>
                        <input type="text" className="card-number-input" />
                    </div>
                    <div className="inputBox">
                        <span>Password</span>
                        <input type="text" className="card-holder-input" />
                    </div>

                    <div>
                        <p className="register">
                            Don't have an account?
                            <a href="#"><b>Register</b></a>
                        </p>
                    </div>
                    <input type="submit" value="Login" className="submit-btn" id="submit" />
                </form>
            </div>

            <div className="toast success hiddentoast">
                <div className="toast-message">
                    <span className="toast-text"></span>
                    <button className="toast-close">X</button>
                </div>
            </div>
        </>
    );
}

export default Login;
