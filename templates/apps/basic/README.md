# {{#classify}}{{name}}{{/classify}}

This boilerplate contains Basic implementation of Alosaur web framework.

### Scripts

Run server

```
deno run --allow-net --allow-read --importmap=imports.json --config ./tsconfig.json app.ts
```

Generate OpenAPI file:

```
deno run --allow-read --allow-write --config ./src/tsconfig.lib.json openapi.ts
```

That's it!
