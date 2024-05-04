import { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

export function createVarUtils(api: PluginAPI) {
  api.pico = {} as PluginAPI["pico"];

  api.pico.helper = function (name: string): string {
    const helper = api.theme(`vars.helpers`)?.[name]; // NOTE: theme does not play nice fetching functions
    return helper(api);
  };

  api.pico.var = function (name: string): CSSRuleObject {
    return api.theme(`vars.${name}`);
  };

  api.pico.vars = function (...names: Array<string>): Array<CSSRuleObject> {
    return names.map(api.pico.var);
  };

  api.pico.theme = function (c: string, v: string) {
    return `${c}-${api.pico.var(`theme.${v}.light`)} dark:${c}-${api.pico.var(`theme.${v}.dark`)}`;
  };

  return api;
}
