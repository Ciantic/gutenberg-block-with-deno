// Build a single file:
//
// deno -A deno-build-scss.ts style.scss style.css
//
// Build all sass files in project (not implemented):
//
// deno -A deno-build-scss.ts --all

import sass from "https://deno.land/x/denosass/mod.ts";
import postcss from "https://deno.land/x/postcss/mod.js";
import { AcceptedPlugin } from "https://deno.land/x/postcss@8.4.16/lib/postcss.d.ts";
import autoprefixer from "https://deno.land/x/postcss_autoprefixer/mod.js";

const file = Deno.args[0];
const outfile = Deno.args[1];
if (!file) {
    console.log("Sass file is not given");
    Deno.exit(1);
}

// Build all sass files in project
if (file === "--all") {
    console.log("TODO");
    Deno.exit(1);
}

async function buildSassFile(file: string, outFile: string) {
    console.log(`Building '${file}'...`);
    const inputf = await Deno.readTextFile(file);
    const sassed = sass(inputf).to_string();
    const posted = await postcss([autoprefixer] as AcceptedPlugin[]).process(sassed);
    if (outfile) {
        await Deno.writeTextFileSync(outFile, posted.css);
    }
}

try {
    await buildSassFile(file, outfile);
} catch (e) {
    console.error(e);
    Deno.exit(1);
}
