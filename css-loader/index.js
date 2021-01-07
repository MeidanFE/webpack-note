function loader(source) {
  let reg = /url\((.*?)\)/g;
  let current;
  let pos = 0;
  let arr = [`let list =[]`];
  while ((current = reg.exec(source))) {
    let [matchUrl, p] = current;
    let index = reg.lastIndex - matchUrl.length;
    arr.push(`lists.push(${JSON.stringify(source.slice(pos, index))})`);
    arr.push(`lists.push("url("+requuire(${p})+")")`);
    pos = reg.lastIndex;
  }
}
