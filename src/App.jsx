import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./component/Login";
import Profile from "./component/Profile";

const App = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route
        path="/"
        element={token ? <Navigate to="/profile" replace /> : <Login />}
      />
      <Route
        path="/profile"
        element={token ? <Profile /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
};

export default App;
