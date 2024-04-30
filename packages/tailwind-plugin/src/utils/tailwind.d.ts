import { PluginAPI as OriginalPluginAPI } from "tailwindcss/types/config";
import { _var } from "./var.util";

declare module "tailwindcss/types/config" {
  export interface PluginAPI extends OriginalPluginAPI {
    var: typeof _var;
  }
}
