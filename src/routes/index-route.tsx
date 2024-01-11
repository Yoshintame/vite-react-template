import { Route } from "@tanstack/router";

import { rootRoute } from "./root-route";

import Home from "@/pages/home";

export const IndexRoute = new Route({
  getParentRoute: (): typeof rootRoute => rootRoute,
  path: "/",
  component: Home,
});
