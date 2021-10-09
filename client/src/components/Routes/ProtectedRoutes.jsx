import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import CircularProgress from "@mui/material/CircularProgress";

const ProtectedRoutes = () => {
  return (
    <Switch>
      <Suspense fallback={<CircularProgress />}>
        {routes.map(({ component: Component, path, exact }) => (
          <Route key={path} path={`/${path}`} exact={exact}>
            <Component />
          </Route>
        ))}
      </Suspense>
    </Switch>
  );
};

export default ProtectedRoutes;
