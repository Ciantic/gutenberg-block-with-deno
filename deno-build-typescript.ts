import { emit, bundle } from "https://deno.land/x/emit/mod.ts";

const file = Deno.args[0];
const outfile = Deno.args[1];
if (!file) {
    console.log("TS file is not given");
    console.log("Usage: deno run -A deno-build-typescript.ts counter.tsx counter.js");
    Deno.exit(1);
}

// Build all sass files in project
if (file === "--all") {
    console.log("TODO");
    Deno.exit(1);
}

// This is used to remove sourceMap
function removeLastLine(str: string) {
    if (str.lastIndexOf("\n") > 0) {
        return str.substring(0, str.lastIndexOf("\n"));
    } else {
        return str;
    }
}

async function buildTsFile(file: string, outFile: string) {
    const url = new URL(file, import.meta.url);

    // Emit (for 1:1 TS -> JS)
    // const result = await emit(url);
    // const code = result[url.href];

    // Bundle (tries to roll dependencies to single file)
    const result = await bundle(url);
    const code = result.code;

    if (outfile) {
        await Deno.writeTextFileSync(outFile, removeLastLine(code));
    }
}

try {
    await buildTsFile(file, outfile);
} catch (e) {
    console.error(e);
    Deno.exit(1);
}
