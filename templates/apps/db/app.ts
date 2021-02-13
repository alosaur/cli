import { App } from "alosaur/mod.ts";

import { HomeArea } from "./areas/home/home.area.ts";

const app = new App({
  areas: [HomeArea],
});

app.listen();
