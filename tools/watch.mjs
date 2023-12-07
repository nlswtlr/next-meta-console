import fs from "node:fs";
import { exec } from "node:child_process";
import * as esbuild from "esbuild";

import { baseOptions, buildTypeDeclarationCmd } from "./build.mjs";

(async () => {
  const ctx = await esbuild.context({
    ...baseOptions,
    minify: false,
  });

  fs.watch("./src", { recursive: true }, async () => {
    await ctx.rebuild();
    exec(buildTypeDeclarationCmd, (error) => {
      if (error) {
        return console.log(error);
      }
      console.log("✓ rebuild");
    });
  });
  console.log("✓ watching...\n");
})();
