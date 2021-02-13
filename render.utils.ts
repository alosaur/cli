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
    throw e;
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

  const path = dasherize(name) + fileOutputName;

  await createDirs(path);

  const f = await Deno.create(path);
  await f.write(encoder.encode(fileContent));
  await f.close();

  console.log(path);
}

const createdDirs = new Set();

async function createDirs(path: string) {
  const dirs = path.split("/");

  let needDir = "";

  for (let i = 0; i < dirs.length - 1; i++) {
    needDir += dirs[i] + "/";

    if (!createdDirs.has(needDir)) {
      await Deno.mkdir(needDir);
    }
    createdDirs.add(needDir);
  }
}
