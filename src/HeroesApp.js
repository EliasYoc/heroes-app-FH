import AuthProvider from "./auth/AuthContext";
import AppRouter from "./routers/AppRouter";

const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default HeroesApp;
