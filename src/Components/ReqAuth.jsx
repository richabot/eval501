import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

//Create the HOC for protected Routes
const ReqAuth = ({children}) => {
    const auth = useSelector((state) => state.authreducer.data.isAuth);
  const location = useLocation();
  console.log(auth,"authentication")
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace/>;
  }
  return children;
};

export default ReqAuth;
