import { AlosaurOpenApiBuilder } from "alosaur/openapi/mod.ts";

import { settings } from "./app-settings.ts";

AlosaurOpenApiBuilder.create(settings)
  .addTitle("{{#classify}}{{name}}{{/classify}}")
  .addVersion("1.0.0")
  .addDescription("Example Alosaur OpenApi generate")
  .addServer({
    url: "http://localhost:8000",
    description: "Local server",
  })
  .saveToFile("./api.json");
