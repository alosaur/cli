import { Controller } from "alosaur/mod.ts";
import { Get } from "alosaur/src/decorator/Get.ts";

@Controller()
export class RootController {
  @Get()
  public async getRoot() {
    return "root page";
  }
}
