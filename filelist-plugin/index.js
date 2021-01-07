const webpack = require("webpack");

class FileListPlugin {
  constructor({ filename }) {
    this.filename = filename;
  }

  apply(compiler) {
    // const logger = compiler.getInfrastructureLogger("filelist-plugin");

    compiler.hooks.compilation.tap("FileListPlugin", (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: "FileListPlugin",
          //   stage: webpack.Compilation.PROCESS_ASSETS_STAGE_DEV_TOOLING,
        },
        (assets) => {
          const logger = compilation.getLogger("filelist-plugin");
          logger.info("log compilation");
          // code
          logger.info(assets);
          //   let assets = compilation.assets;
          //   const logger = compilation.getLogger("filelist-plugin");
          //   //   logger.info(assets);
          let content = `## 文件名 资源大小 \r\n`;
          Object.keys(assets).forEach((filename) => {
            // logger.log(JSON.stringify(filename));
            // logger.log(JSON.stringify(statObj));
            content += `- ${filename}   ${assets[filename].size()} \r\n`;
          });
          //   logger.info(content);
          assets[this.filename] = new webpack.sources.RawSource(content);
        }
      );
    });
  }
}

module.exports = FileListPlugin;
