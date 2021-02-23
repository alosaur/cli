[中文说明](https://github.com/alosaur/cli/blob/master/README_zh.md)

# Command interface for Alosaur application

`deno run --allow-read --allow-write --allow-net https://deno.land/alosaur/cli.ts`

## Getting start

For generate static files

`deno run --allow-read --allow-write --allow-net https://deno.land/alosaur/cli.ts g controller testName`

For generate project

`deno run --allow-read --allow-write --allow-net https://deno.land/alosaur/cli.ts new default myProject`

In local, run

```ts
// generate component home
deno run --allow-read --allow-write --allow-net cli.ts g c home
```

## Enviroments

The Github API is used to generate templates. By default Github has some
limitation, in most cases this limitation should be enough. But if you exceed
this limit you can run the generation script with env variable GITHUB_TOKEN.
Example:
`GITHUB_TOKEN=123 deno run --allow-read --allow-write --allow-net cli.ts new basic MyProject`

> Generate personal tokens: https://github.com/settings/tokens > new token >
> Select scopes > check "Access public repositories"

## Commands

### alosaur new

`deno run --allow-read --allow-write --allow-net cli.ts new basic MyApp`

| Property                                                        | Description                                                                                 |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `basic`, `cors`, `db`, `default`, `handlebars`, `spa`, `static` | Generate default application with collections in Alosaur examples or specific path resource |

### alosaur g

Generate template.

Example: `alosaur g controller name`

| Property   | Alias | Description                                   |
| ---------- | ----- | --------------------------------------------- |
| area       | a     | Generate area                                 |
| controller | c     | Generate controller                           |
| class      |       | Generate class                                |
| service    | s     | Generate service with `@Injectable` decorator |
| hook       | h     | Generate hook                                 |
| middleware | m     | Generate middleware                           |
| path       |       | *                                             |

> *path: Generate one template file from url, template support the Mustache
> render. Example: `deno run --allow-read --allow-write --allow-net
> https://raw.githubusercontent.com/alosaur/cli/main/mod.ts path
> http://myhost.com/test.template name

### alosaur help [TODO]

### alosaur openapi [TODO]

Build openapi docs to specific path or default to 'openapi.json'

### alosaur e2e [TODO]

E2E tests to REST or websockets endpoints

### alosaur test [TODO]

Wrapper over `deno test`

---

## Contributing

You can put any template you want in any of the generate or apps folders. Just
add the desired template and change the source code file `generate.ts` or
`new.ts`

You can also possible to improve template heplers for Mustach
`template.helpers.ts`.
