const path = require("path");
const webpack = require("webpack");

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require("terser-webpack-plugin");
const DonePlugin = require("./DonePlugin");
const AsyncPlugin = require("./async-plugin");
const FileListPlugin = require("./filelist-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  plugins: [
    new FileListPlugin({ filename: "list.md" }),
    new webpack.ProgressPlugin(),
    // new DonePlugin(),
    // new AsyncPlugin(0),
  ],
  resolveLoader: {
    alias: {
      "banner-loader": path.resolve(__dirname, "banner-loader"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        use: [
          {
            loader: "banner-loader",
            options: {
              text: "xx",
              filename: path.resolve(__dirname, "banner.js"),
            },
          },
          // {
          //   loader: path.resolve(__dirname, "my-loader"),
          //   options: {
          //     plugins: ["syntax-dynamic-import"],
          //     presets: [
          //       [
          //         "@babel/preset-env",
          //         {
          //           modules: false,
          //         },
          //       ],
          //     ],
          //   },
          // },
        ],
      },
      {
        test: /.(less|css)$/,

        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",

            options: {
              sourceMap: true,
            },
          },
          {
            loader: "less-loader",

            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: false,
    },
  },
};
