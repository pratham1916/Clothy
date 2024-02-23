import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../style/Register.css'
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../Redux/action";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "",phoneNumber:"",image:"",type:"user" });
  const register = useSelector(state=>state.register);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(register);
    if(register.success){
      navigate('/login')
    }
    else if (register.isError || register.isData){
      navigate('/register'); 
    }
  },[register])

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(RegisterUser(form))
  }

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
    return file;
  };

  return (
    <div className="register-body">
      <div className="register-container">
        <div className="card-preview-container">
          <div className="photo-preview" style={{ backgroundImage: backgroundImage }}>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span>Full Name</span>
            <input type="text" name="name" className="input-field"  value={form.name} onChange={(e)=>{setForm({...form, name : e.target.value })}} required/>
          </div>
          <div className="input-group">
            <span>Email</span>
            <input type="email" className="input-field"  name="email" value={form.email} onChange={(e)=>{setForm({...form, email : e.target.value })}} required/>
          </div>
          <div className="input-group">
            <span>Password</span>
            <input type="password" className="input-field" name="password" value= {form.password} onChange={(e)=>{setForm({...form, password : e.target.value })}}/>
          </div>
          <div className="input-group">
            <span>Phone Number</span>
            <input type="tel" className="input-field" name="phoneNumber" value= {form.phoneNumber} onChange={(e)=>{setForm({...form, phoneNumber : e.target.value })}}/>
          </div>
          <div className="input-group">
            <span>Upload Photo</span>
            <input type="file" accept="image/*" name="image" value= {form.image} onChange={handleFileUpload} />
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
