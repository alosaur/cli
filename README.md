# Command interface for Alosaur application

## Getting start

In local, run

`deno run --allow-read --allow-write  mod.ts g c home`

## Commands

**$> alosaur new**

| Property |                                                                            | Description                                                                                 |
| -------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| -blank   | `default`, `spa`, `static`, `cors`, `auth`, `ws` and etc, or specific path | Generate default application with collections in Alosaur examples or specific path resource |

**$> alosaur g**

| Property   | Alias | Description                                   |
| ---------- | ----- | --------------------------------------------- |
| area       | a     | Generate area                                 |
| controller | c     | Generate controller                           |
| class      |       | Generate class                                |
| service    | s     | Generate service with `@Injectable` decorator |
| hook       | h     | Generate hook                                 |
| middleware | m     | Generate middleware                           |

**$> alosaur openapi**

Build openapi docs to specific path or default to 'openapi.json'

**$> alosaur e2e**

E2E tests to REST or websockets endpoints

**$> alosaur test**

Wrapper over `deno test`
