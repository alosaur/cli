import { Cookie, getCookies, setCookie } from "http/cookie.ts";
import { Response } from "http/server.ts";
import {
  App,
  Area,
  Controller,
  Get,
  Req,
  Res,
  ServerRequest,
} from "alosaur/mod.ts";
import { Redirect } from "alosaur/src/renderer/redirect.ts";

@Controller("/home")
export class HomeController {
  @Get("/")
  default(@Res() response: Response) {
    const cookie: Cookie = { name: "name", value: "Cat" };
    setCookie(response, cookie);

    return Redirect("/home/text");
  }

  @Get("/text")
  text(@Req() request: ServerRequest) {
    const cookies = getCookies(request);

    return `Hey! ${cookies["name"]}`;
  }
}

@Area({
  controllers: [HomeController],
})
export class HomeArea {}

const app = new App({
  areas: [HomeArea],
});

app.useStatic({
  root: `${Deno.cwd()}/examples/static/www`,
  index: "index.html",
  baseRoute: "/www/",
} // or undefined for default route /
);
app.listen();
