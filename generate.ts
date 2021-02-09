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
  ["path", "path"],
]);

export async function generate() {
  const templateAlias = args[1];

  if (!templateAlias) {
    console.error("Template alias not found");
  }

  if (templateAlias === "path") {
    await generateFromUrl();
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
    console.error(`name argument not found`);
  }

  if (!TEMPLATES.has(templateAlias)) {
    console.error(`Template ${templateAlias} not found`);
  }

  const template = TEMPLATES.get(templateAlias);

  const fileOutputName = `${dasherize(name)}.${template}.ts`;

  const body = await fetch(`${baseUrl}${template}.template`).then((r) =>
    r.text()
  );

  await renderAndWrite(fileOutputName, body, name);
}

/**
 * Generate from path with default renderer Mustach
 */
async function generateFromUrl() {
  const path = args[2];
  const name = args[3];

  if (!path) {
    console.error(`path argument not found`);
  }
  if (!name) {
    console.error(`name argument not found`);
  }

  try {
    const body = await fetch(path).then((r) => r.text());

    const fileOutputName = `${dasherize(name)}.ts`;

    await renderAndWrite(fileOutputName, body, name);
  } catch (e) {
    console.error(`Error: `, e);
    return;
  }
}

async function renderAndWrite(outputName: string, body: string, name: string) {
  const fileContent = await render(body, {
    ...TemplateHelpers,
    name,
  });

  await Deno.writeFile(outputName, encoder.encode(fileContent));
}
