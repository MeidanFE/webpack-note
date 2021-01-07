const fs = require("fs");

function loader(source) {
  this.cacheable && this.cacheable();

  let cb = this.async();

  let schema = {
    type: "object",
    properties: {
      text: {
        type: "string",
      },
      filename: {
        type: "string",
      },
    },
  };
  let options = this.getOptions(schema);
  const logger = this.getLogger("banner-loader");

  if (options.filename) {
    // logger.info(options);
    this.addDependency(options.filename);
    fs.readFile(options.filename, "utf8", function (err, data) {
      logger.info(data);
      cb(err, `/**${data}**/${source}`);
    });
  } else {
    cb(null, `/**${options.text}**/${source}`);
  }
}

module.exports = loader;
