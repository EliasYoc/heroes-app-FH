import { createContext, useEffect, useReducer } from "react";
import authReducer, { initialAuth } from "./authReducer";

export const AuthContext = createContext();
const init = (a) => {
  // console.log("init", a);
  return (
    JSON.parse(localStorage.getItem("user-fer")) || {
      logged: false,
    }
  );
};
const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, initialAuth, init);
  useEffect(() => {
    localStorage.setItem("user-fer", JSON.stringify(user));
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
