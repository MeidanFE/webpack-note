const { compose } = require("async");

class AsyncPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync("AsyncPlugin", (compilation, cb) => {
      setTimeout(() => {
        cb();
      }, 1000);
    });

    compiler.hooks.emit.tapPromise("AsyncPlugin", (compilation) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    });
  }
}

module.exports = AsyncPlugin;
