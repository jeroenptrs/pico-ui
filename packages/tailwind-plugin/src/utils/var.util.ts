import { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

export function createVarFn(api: PluginAPI) {
  api.helper = function (name: string): string {
    const { [name]: helper } = api.theme(`vars.helpers`); // NOTE: theme does not play nice fetching functions
    return helper(api);
  };

  api.var = function (name: string): CSSRuleObject {
    return api.theme(`vars.${name}`);
  };

  return api;
}
