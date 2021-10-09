import { lazy } from "react";

const routes = [
  {
    path: "",
    component: lazy(() => import("../Home/Home")),
    exact: true,
  },
  {
    path: "profile",
    component: lazy(() => import("../Profile/Profile")),
    exact: true,
  },
];

export default routes;
