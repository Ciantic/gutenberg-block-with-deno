/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="deno.ns" /> 
/** @jsxImportSource https://cdn.skypack.dev/react@~17 */

import type { BlockAttribute as _BlockAttribute } from "https://cdn.skypack.dev/@wordpress/blocks?dts";

// Note: I tried https://esm.sh/@wordpress/... as source, but I got a problem:
// BlockAttribute<string> could not infer attribute type correctly, it became `unknown`. Thus this now uses skypack.

// Note: This is not perfect either, at the moment if I run
//
// deno check types.ts
//
// I get an error:
// 
// error: Relative import path ".." not prefixed with / or ./ or ../
//    at https://cdn.skypack.dev/-/moment-timezone@v0.5.37-P6XoKxxJwUZJawzhPWyx/dist=es2019,mode=imports/unoptimized/moment-timezone-utils.js:1:24

declare global {
    export type BlockAttribute<T> = _BlockAttribute<T>;
    export type React = typeof import("https://cdn.skypack.dev/react@~17");
    export type ReactDOM = typeof import("https://cdn.skypack.dev/react-dom@~17");
    const wp: {
        blocks: typeof import("https://cdn.skypack.dev/@wordpress/blocks?dts");
        hooks: typeof import("https://cdn.skypack.dev/@wordpress/hooks?dts");
        i18n: typeof import("https://cdn.skypack.dev/@wordpress/i18n?dts");
        data: typeof import("https://cdn.skypack.dev/@wordpress/data?dts");
        editor: typeof import("https://cdn.skypack.dev/@wordpress/editor?dts");
        element: typeof import("https://cdn.skypack.dev/@wordpress/element?dts");
        compose: typeof import("https://cdn.skypack.dev/@wordpress/compose?dts");
        blockEditor: typeof import("https://cdn.skypack.dev/@wordpress/block-editor?dts");
        components: typeof import("https://cdn.skypack.dev/@wordpress/components?dts");
    };
}
