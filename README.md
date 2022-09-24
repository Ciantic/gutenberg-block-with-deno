# WordPress Gutenberg Block With Deno

Only dependency is Deno, but VSCode is recommended. Before starting VSCode it might be advisable to run:

```bash
deno cache --reload ./types.ts
```

Above loads the WordPress types to Deno cache, there is a lot of them and it takes minutes.

To trigger building SCSS and TypeScript on save, it's recommended to use VSCode extension [`Gruntfuggly.triggertaskonsave`](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.triggertaskonsave)

You can also manually build a TypeScript soruce file like this:

```bash
deno run -A deno-build-typescript.ts src/counter.tsx src/counter.js
```

Or SCSS File like this:

```bash
deno run -A deno-build-scss.ts src/counter.scss src/counter.css
```

🎈 Enjoy your Gutenberg block without node_modules!