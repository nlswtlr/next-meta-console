import * as esbuild from "esbuild";

export const baseOptions = {
  banner: {
    js: '"use client";',
  },
  bundle: true,
  entryPoints: ["./src/main.jsx"],
  outdir: "dist",
  external: ["react", "react-dom", "next"],
  target: ["es2020"],
  format: "esm",
  treeShaking: true,
};

(async () => {
  await esbuild.build({
    ...baseOptions,
    minify: true,
  });
  console.log("✓ build finished\n");
})();
