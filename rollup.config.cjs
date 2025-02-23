const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const babel = require("@rollup/plugin-babel");
const json = require("@rollup/plugin-json");
const terser = require("@rollup/plugin-terser");
const pkg = require("./package.json"); // Use require in .cjs file

module.exports = {
    input: "src/index.jsx",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: false,
        },
        {
            file: pkg.module,
            format: "esm",
            sourcemap: false,
        },
    ],
    external: ["react", "react-dom"],
    plugins: [
        resolve({
            extensions: [".js", ".jsx"],
        }),
        commonjs(),
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
            presets: ["@babel/preset-react"],
        }),
        json(),
        terser()
    ],
};
