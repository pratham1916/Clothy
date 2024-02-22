import { useState } from "react";
import { Link } from "react-router-dom";
import '../style/Register.css'

const Register = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
  
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setBackgroundImage(`url(${e.target.result})`);
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div className="register-body">
        <div className="register-container">
        <div className="card-preview-container">
          <div className="photo-preview" style={{ backgroundImage: backgroundImage }}>
          </div>
        </div>
  
        <form>
          <div className="input-group">
            <span>Full Name</span>
            <input type="text" className="input-field" />
          </div>
          <div className="input-group">
            <span>Email</span>
            <input type="text" className="input-field" />
          </div>
          <div className="input-group">
            <span>Password</span>
            <input type="password" className="input-field" />
          </div>
          <div className="input-group">
            <span>Upload Photo</span>
            <input type="file" accept="image/*" onChange={handleFileUpload} />
          </div>
  
          <div className="login-link-container">
            <p>
              Already have an account? &nbsp;  
              <Link to="/login"><b>Login</b></Link>
            </p>
          </div>
          <input type="submit" value="Register" className="submit-button" />
        </form>
      </div>
      </div>
    );
  };
  
  export default Register;
