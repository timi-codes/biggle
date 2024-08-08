import type { Config } from "tailwindcss";
import sharedConfig from "@biggle/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  presets: [sharedConfig],
};

export default config;