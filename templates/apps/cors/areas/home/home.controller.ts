import {
  Controller,
  Delete,
  Put,
} from "alosaur/mod.ts";
import { Get } from "alosaur/src/decorator/Get.ts";
import { Post } from "alosaur/src/decorator/Post.ts";
import { Body } from "alosaur/src/decorator/Body.ts";

@Controller("/home")
export class HomeController {
  constructor() {}

  @Get("/text")
  text() {
    return `Hello world`;
  }

  @Post("/post")
  post(@Body() body: any) {
    return body;
  }

  @Delete("/delete")
  delete() {
    return "ok";
  }

  @Put("/put")
  put() {
    return "ok";
  }
}
