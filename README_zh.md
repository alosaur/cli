[中文说明](https://github.com/alosaur/cli/blob/master/README_zh.md)

# Alosaur命令行工具 (CLI)

`deno run --allow-read --allow-write --allow-net https://deno.land/alosaur/cli.ts`

## 起步

生成静态文件

`deno run --allow-read --allow-write --allow-net https://deno.land/alosaur/cli.ts g controller testName`

生成项目框架

`deno run --allow-read --allow-write --allow-net https://deno.land/alosaur/cli.ts new default myProject`

在本机执行

```ts
// 生成home组件
deno run --allow-read --allow-write --allow-net cli.ts g c home
```

## 环境变量

命令行工具使用Github API来生成模板。默认情况下Github对于API的使用有一些限制，虽然对于大部分场景来说是够用的，但是如果想要突破这些限制，可以使用环境变量GITHUB_TOKEN来运行命令行工具。
例如：
`GITHUB_TOKEN=123 deno run --allow-read --allow-write --allow-net cli.ts new basic MyProject`

> 生成个人令牌: https://github.com/settings/tokens > new token >
> 选择 scopes > 勾选 "Access public repositories"

## 命令行参数

### alosaur new

`deno run --allow-read --allow-write --allow-net cli.ts new basic MyApp`

| 参数                                                        | 说明                                                                                 |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `basic`, `cors`, `db`, `default`, `handlebars`, `spa`, `static` | 生成默认的应用程序框架，默认情况下使用Alosaur的示例程序，也可以指定模板源文件 |

### alosaur g

生成模板.

例如: `alosaur g controller name`

| 参数   | 简写 | 说明                                   |
| ---------- | ----- | --------------------------------------------- |
| area       | a     | 创建模块                                 |
| controller | c     | 创建控制器                           |
| class      |       | 创建类                                |
| service    | s     | 使用`@Injectable`装饰器创建一个服务 |
| hook       | h     | 创建钩子                                 |
| middleware | m     | 创建中间件                           |
| path       |       | *                                             |

> *path: 从url、其他模板创建模板文件，支持Mustache渲染引擎。
> 例如: `deno run --allow-read --allow-write --allow-net
> https://raw.githubusercontent.com/alosaur/cli/main/mod.ts path
> http://myhost.com/test.template name

### alosaur help [TODO]

### alosaur openapi [TODO]

创建openapi文档，默认配置文件为'openapi.json'，也可以手工指定配置文件的路径。 

### alosaur e2e [TODO]

E2E测试，用来对REST接口或者websocket进行测试。

### alosaur test [TODO]

用来代替`deno test`

---

## Contributing

You can put any template you want in any of the generate or apps folders. Just
add the desired template and change the source code file `generate.ts` or
`new.ts`

You can also possible to improve template heplers for Mustach
`template.helpers.ts`.
