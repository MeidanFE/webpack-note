function loader(source) {
  let filename = this.getOptions();
  this.emitFile(filename, source);
  return `module.exports = "${filename}"`;
}
loader.raw = true;
module.exports = loader;
