# rollup-plugin-typescript2-jsx-runtime-bug

Having an issue trying to bundle a Typescript React library using Typescript 4.1.3 and the new JSX transform via babel.

Steps:

1. npm install
2. npm run build

The error:
```
[!] (plugin rpt2) Error: [...]/rollup-plugin-typescript2-jsx-runtime-bug/src/components/Button/Button.tsx(1,10): semantic error TS2305: Module '"../../../node_modules/@types/react/jsx-runtime"' has no exported member 'jsx'.
```

So it's having trouble with `@types/react`. Interestingly, uninstalling `@types/react` allows the build to go through. (`npm uninstall @types/react` then `npm run build` to reproduce this behaviour.)

I had the same issue with the actual React library, then applied the `@rollup/plugin-node-resolve` as shown in `rollup.config.js` lines 20-22. I tried to do the same with `@types/react` but it didn't change the result.

I have an application project building with the JSX transform, Typescript and React (with `@types/react`) successfully, so I don't believe it's an issue with `@types/react`.