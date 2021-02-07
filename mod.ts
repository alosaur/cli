import { generate } from "./generate.ts";

const { args } = Deno;

const COMMANDS = new Map<string, Function>([
  ["generate", generate],
  ["g", generate],
]);

const command = args[0];

if (!COMMANDS.has(command)) {
  throw new Error("Command not found");
}

await COMMANDS.get(command)!();
