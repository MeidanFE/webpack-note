const babel = require("@babel/core");

const loaderUtils = require("loader-utils");

const schemaUtils = require("schema-utils");

const schema = {
  type: "object",
  properties: {
    a: {
      description: "A option.",
      type: "number",
    },
    b: {
      description: "B option.",
      type: "string",
    },
    c: {
      description: "c option.",
      type: "boolean",
    },
  },
  additionalProperties: false,
};

function myLoader(source) {
  //   console.log(this);
  //   console.log(this.getOptions());
  const logger = this.getLogger("my-webpack-loader");
  const options = this.getOptions();
  logger.info(options);

  let cb = this.async();

  babel.transform(
    source,
    {
      ...options,
      sourceMap: true,
      filename: this.resourcePath.split("/").pop(),
    },
    function (err, result) {
      if (err) {
        logger.error(err);
      }
      cb(null, result.code, result.map);
    }
  );
}

module.exports = myLoader;
