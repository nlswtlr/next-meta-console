import fs from "node:fs";
import { exec } from "node:child_process";
import * as esbuild from "esbuild";

export const baseOptions = {
  bundle: true,
  entryPoints: ["./src/main.jsx"],
  outdir: "dist",
  external: ["react", "react-dom", "next"],
  target: ["es2020"],
  format: "esm",
  treeShaking: true,
};

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
