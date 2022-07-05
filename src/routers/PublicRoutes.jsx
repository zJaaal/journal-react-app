import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children, loggedIn }) => {
  return !loggedIn ? children : <Navigate to={-1} />;
};

export default PublicRoutes;
