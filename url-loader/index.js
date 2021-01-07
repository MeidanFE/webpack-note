let mine = require("mime");
function loader(source) {
  let { limit } = this.getOptions();
  if (limit && limit > source.length) {
    return `module.exports = "data:${mime.getType(
      this.resourcePath
    )};base64,${source.toString("base64")}"`;
  } else {
    return require("./file-loader").call(this, source);
  }
}

loader.raw = true;
module.exports = loader;
