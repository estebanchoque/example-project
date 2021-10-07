import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";

const Login = lazy(() => import("./components/Authentication/Login"));
const SignUp = lazy(() => import("./components/SignUp/SignUp"));
const SignIn = lazy(() => import("./components/SignIn/SignIn"));
const Home = lazy(() => import("./components/Home/Home"));
const NavBar = lazy(() => import("./components/NavBar/NavBar"));

function App() {
  const isAuthenticated = true;

  return (
    <div className="App">
      <Suspense fallback={<CircularProgress />}>
        <Route path="/" component={NavBar} />
        <Switch>
          <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
            <Login />
          </PublicRoute>
          <PublicRoute path="/signin" isAuthenticated={isAuthenticated}>
            <SignIn />
          </PublicRoute>
          <PublicRoute path="/signup" isAuthenticated={isAuthenticated}>
            <SignUp />
          </PublicRoute>
          <PrivateRoute path="/" isAuthenticated={isAuthenticated}>
            <Home />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
