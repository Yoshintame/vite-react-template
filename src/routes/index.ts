import { Router } from "@tanstack/router";

import { IndexRoute } from "./index-route";
import { rootRoute } from "./root-route";

const routeTree = rootRoute.addChildren([IndexRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/router" {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}

export { router };
