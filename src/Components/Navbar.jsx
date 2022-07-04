import React from "react";
import {  useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
const Navbar = () => {
  const navigate=useNavigate()
  const auth = useSelector((state) => state.authreducer.data.isAuth);
const handle=()=>{
if(!auth)
navigate("/login")
}
  return (
    <div>
      <div data-cy="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        {!auth?  <button data-cy="navbar-login-button" onClick={handle}>LOGIN</button>:""}
      </div>
    </div>
  );
};

export default Navbar;
