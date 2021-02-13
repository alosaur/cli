import { render } from "https://deno.land/x/mustache/mod.ts";
import { dasherize } from "./string.utils.ts";
import { TemplateHelpers } from "./template.helpers.ts";
const encoder = new TextEncoder();

/**
 * Fetch and generate from url
 */
export async function generateFromUrl(
  downloadUrl: string,
  outputFileName: string,
  name: string,
) {
  try {
    const body = await fetch(downloadUrl).then((r) => r.text());

    const fileOutputName = outputFileName || `${dasherize(name)}.ts`;

    await renderAndWrite(fileOutputName, body, name);
  } catch (e) {
    console.error(`Error: `, e);
    return;
  }
}

/**
 * Render and write file
 * default renderer Mustach
 */
export async function renderAndWrite(
  fileOutputName: string,
  body: string,
  name: string,
) {
  const fileContent = await render(body, {
    ...TemplateHelpers,
    name,
  });

  await Deno.create(fileOutputName);
  await Deno.writeFile(fileOutputName, encoder.encode(fileContent), {
    append: true,
  });
}
