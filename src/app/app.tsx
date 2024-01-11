import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "@tanstack/router";


import { router } from "../routes";
import { TanStackRouterDevelopmentTools } from "../utils/dev-tools/react-router-development-tools";

import type { FunctionComponent } from "../common/types";

const queryClient = new QueryClient();

const App = (): FunctionComponent => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <TanStackRouterDevelopmentTools
        router={router}
        initialIsOpen={false}
        position="bottom-right"
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
