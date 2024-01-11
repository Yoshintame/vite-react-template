import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = {
  ...import.meta.env,
  ...createEnv({
    runtimeEnv: import.meta.env,
    emptyStringAsUndefined: true,
    clientPrefix: "VITE_",
    client: {
      VITE_APP_ENVIRONMENT: z.union([
        z.literal("development"),
        z.literal("prod"),
      ]),
      VITE_APP_TITLE: z.string().min(1),
    },
  }),
};
