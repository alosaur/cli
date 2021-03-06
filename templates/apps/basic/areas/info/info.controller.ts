import { Content, Controller } from "alosaur/mod.ts";
import { Get } from "alosaur/src/decorator/Get.ts";

@Controller("/info")
export class InfoController {
  @Get(/^\/?$/)
  text() {
    return `Hello info`;
  }

  @Get("/time")
  async time() {
    await delay(500);
    return `Hello info2`;
  }
}

function delay(duration: number): Promise<any> {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
}
