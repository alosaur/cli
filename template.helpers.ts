import { camelize, classify, dasherize } from "./string.utils.ts";

/**
 * Helpers for mustach template renderer
 */
export const TemplateHelpers = {
  classify: () => createMustacheHelper(classify),
  camelize: () => createMustacheHelper(camelize),
  dasherize: () => createMustacheHelper(dasherize),
};

function createMustacheHelper(fun: Function) {
  return function (val: any, render: Function) {
    return fun(render(val) as string);
  };
}
