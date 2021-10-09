import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";

import CircularProgress from "@mui/material/CircularProgress";

const SignUp = lazy(() => import("./components/SignUp/SignUp"));
const SignIn = lazy(() => import("./components/SignIn/SignIn"));
const Home = lazy(() => import("./components/Home/Home"));
const NavBar = lazy(() => import("./components/NavBar/NavBar"));

function App() {
  const isAuth = false;

  return (
    <div className="App">
      <Suspense fallback={<CircularProgress />}>
        <Route path="/" component={NavBar} />
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute
            path="/signin"
            component={SignIn}
            isAuthenticated={isAuth}
          />
          <PublicRoute
            path="/signup"
            component={SignUp}
            isAuthenticated={isAuth}
          />
          <PrivateRoute component={ProtectedRoutes} isAuthenticated={isAuth} />
          <Route path="*" component={CircularProgress} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
