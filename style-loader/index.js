const loaderUtils = require("loader-utils");

function loader(source) {}

loader.pitch = function (request) {
  console.log(request);

  let script = `
        let style = document.createElement('style');
        style.innerHTML = require(${loaderUtils.stringifyRequest(
          this,
          "!!" + request
        )})

        document.head.appendChild(style)
    `;
  return script;
};

module.exports = loader;
