# [WIP] Command interface for Alosaur application

`deno run --allow-read --allow-write --allow-net https://raw.githubusercontent.com/alosaur/cli/main/mod.ts`

## Getting start

In local, run

```
// generate component home
deno run --allow-read --allow-write --allow-net mod.ts g c home
```

## Commands

**$> [WIP] alosaur new**

| Property |                                                                            | Description                                                                                 |
| -------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| -blank   | `default`, `spa`, `static`, `cors`, `auth`, `ws` and etc, or specific path | Generate default application with collections in Alosaur examples or specific path resource |

**$> alosaur g**

| Property   | Alias | Description                                                                                                                                                                                                                              |
| ---------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| area       | a     | Generate area                                                                                                                                                                                                                            |
| controller | c     | Generate controller                                                                                                                                                                                                                      |
| class      |       | Generate class                                                                                                                                                                                                                           |
| service    | s     | Generate service with `@Injectable` decorator                                                                                                                                                                                            |
| hook       | h     | Generate hook                                                                                                                                                                                                                            |
| middleware | m     | Generate middleware                                                                                                                                                                                                                      |
| path       |       | Generate one template file from url, template support the Mustache render. Example: `deno run --allow-read --allow-write --allow-net https://raw.githubusercontent.com/alosaur/cli/main/mod.ts path http://myhost.com/test.template name |

**$> [WIP] alosaur openapi**

Build openapi docs to specific path or default to 'openapi.json'

**$> [WIP] alosaur e2e**

E2E tests to REST or websockets endpoints

**$> [WIP] alosaur test**

Wrapper over `deno test`

## Contributing

You can put any template you want in any of the generate or apps folders. Just
add the desired template and change the source code file `generate.ts` or
`new.ts`

You can also possible to improve template heplers for Mustach
`template.helpers.ts`.
