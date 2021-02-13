import { dasherize } from "./string.utils.ts";
import { generateFromUrl, renderAndWrite } from "./render.utils.ts";
const { args } = Deno;

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
  ["path", "path"],
]);

export async function generate() {
  const templateAlias = args[1];

  if (!templateAlias) {
    throw new Error("Template alias not found");
  }

  if (templateAlias === "path") {
    const path = args[2];
    const name = args[3];

    if (!path) {
      throw new Error(`path argument not found`);
    }
    if (!name) {
      throw new Error(`name argument not found`);
    }

    await generateFromUrl(path, "", name);
  } else {


    await generateByTemplate();
  }
}

/**
 * Generate files from templates/generate
 */
async function generateByTemplate() {
  const templateAlias = args[1];
  const name = args[2];

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

  await renderAndWrite(fileOutputName, body, name);
}
