import fs from "node:fs";
import { exec } from "node:child_process";
import * as esbuild from "esbuild";

import { baseOptions } from "./build.mjs";

(async () => {
  const ctx = await esbuild.context({
    ...baseOptions,
    minify: false,
  });

  fs.watch("./src", { recursive: true }, async () => {
    await ctx.rebuild();
    exec("tsc --emitDeclarationOnly --declaration", (error) => {
      if (!error) {
        console.log("✓ rebuild");
      }
    });
  });
  console.log("✓ watching...\n");
})();
