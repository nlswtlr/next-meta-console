import { exec } from "node:child_process";
import * as esbuild from "esbuild";

export const baseOptions = {
  banner: {
    js: `"use client";`,
  },
  bundle: true,
  entryPoints: ["./src/main.jsx"],
  outdir: "dist",
  external: ["react", "react-dom", "next"],
  target: ["es2020"],
  format: "esm",
  treeShaking: true,
};

export const buildTypeDeclarationCmd = "tsc --emitDeclarationOnly --declaration";

(async () => {
  await esbuild.build({
    ...baseOptions,
    minify: true,
  });
  exec(buildTypeDeclarationCmd, (error) => {
    if (error) {
      throw new Error(error);
    }
    console.log("✓ build finished\n");
  });
})();
