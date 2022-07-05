import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children, loggedIn }) => {
  return loggedIn ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoutes;
