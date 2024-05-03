import { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

import { apply } from "@utils/apply.util";

export function createVarFn(api: PluginAPI) {
  api.helper = function (name: string): string {
    const { [name]: helper } = api.theme(`vars.helpers`); // NOTE: theme does not play nice fetching functions
    return helper(api);
  };

  api.var = function (name: string): CSSRuleObject {
    const themeValue = api.theme(`vars.${name}`);

    if (typeof themeValue === "string") {
      return apply(themeValue);
    }

    return themeValue;
  };

  return api;
}
