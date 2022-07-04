import React from "react";
import { getLoginAPI } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { state } = useLocation();

  const email = "eve.holt@reqres.in";
  const password = "cityslicka";

  const handleSubmit = (e) => {
    e.preventDefault();
    // const email = e.target[0].value;
    // const password = e.target[1].value;

    const comingFrom = state?.from?.pathname || "/";
console.log(comingFrom,"coming")
    dispatch(getLoginAPI({ email: email, password: password })).then((r) => {
      if (r.type === "LOGIN_SUCCESS") {
        navigate(comingFrom, { replace: true });
      }
    });
  };

  return (
    <div style={{ width: "300px", margin: "auto", textAlign: "center" }}>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-cy="login-email" defaultValue={email} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-cy="login-password" defaultValue={password} />
        </div>
        <button type="submit" data-cy="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
