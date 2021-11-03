import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { TYPES } from "../../types/types";
const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  console.log(TYPES);
  const handleLogin = () => {
    dispatch({ type: TYPES.login, payload: { name: "elias" } });
    history.replace("/marvel");
  };
  return (
    <div>
      <h1>Login</h1>
      <hr />
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
