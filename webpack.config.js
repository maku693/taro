const { resolve } = require("path");

module.exports = (_, { mode, target }) => {
  const entry = {
    web: ["./web/index.ts"],
    node: ["./node/index.ts"]
  };

  const devtool = {
    web: {
      production: undefined,
      development: "source-map"
    },
    node: {
      production: "source-map",
      development: "source-map"
    }
  };

  return {
    mode: mode,
    entry: entry[target],
    output: {
      path: resolve(__dirname, "dist", target),
      filename: "[name].js",
      chunkFilename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: "ts-loader"
          }
        }
      ]
    },
    resolve: {
      extensions: [".js", ".ts", "tsx"]
    },
    devtool: devtool[target][mode],
    context: resolve(__dirname, "src")
  };
};
