import { lazy } from "react";

const routes = [
  {
    path: "detail",
    component: lazy(() => import("../PostDetail/PostDetail")),
    exact: true,
  },
  {
    path: "profile",
    component: lazy(() => import("../Profile/Profile")),
    exact: true,
  },
  {
    path: "checkout",
    component: lazy(() => import("../Checkout/index")),
    exact: true,
  },
];

export default routes;
