import { render } from "https://deno.land/x/mustache/mod.ts";
import { dasherize } from "./string.utils.ts";
import { TemplateHelpers } from "./template.helpers.ts";
const { args } = Deno;
const encoder = new TextEncoder();

const baseUrl =
  "https://raw.githubusercontent.com/alosaur/cli/main/templates/generate/";

const TEMPLATES = new Map([
  ["area", "area"],
  ["a", "area"],
  ["controller", "controller"],
  ["c", "controller"],
  ["service", "service"],
  ["s", "service"],
  ["hook", "hook"],
  ["h", "hook"],
  ["middleware", "middleware"],
  ["m", "middleware"],
]);

export async function generate() {
  const templateAlias = args[1];
  const name = args[2];

  if (!templateAlias) {
    throw new Error("Template alias not found");
  }

  if (!name) {
    throw new Error(`name argument not found`);
  }

  if (!TEMPLATES.has(templateAlias)) {
    throw new Error(`Template ${templateAlias} not found`);
  }

  const template = TEMPLATES.get(templateAlias);

  const fileOutputName = `${dasherize(name)}.${template}.ts`;

  const body = await fetch(`${baseUrl}${template}.template`).then((r) =>
    r.text()
  );

  const fileContent = await render(body, {
    ...TemplateHelpers,
    name,
  });

  await Deno.writeFile(fileOutputName, encoder.encode(fileContent));
}
