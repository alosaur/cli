import { Controller } from "alosaur/mod.ts";

import { Get } from "alosaur/src/decorator/Get.ts";

@Controller()
export class HealthController {
  @Get()
  public async getHealth() {
    return { status: "pass" };
  }
}
