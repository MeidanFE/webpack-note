(() => {
  "use strict";
  function n(n, e) {
    for (var o = 0; o < e.length; o++) {
      var t = e[o];
      (t.enumerable = t.enumerable || !1),
        (t.configurable = !0),
        "value" in t && (t.writable = !0),
        Object.defineProperty(n, t.key, t);
    }
  }
  new ((function () {
    function e() {
      !(function (n, e) {
        if (!(n instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (this.display = "none");
    }
    var o, t;
    return (
      (o = e),
      (t = [
        {
          key: "show",
          value: function () {
            this.display = "block";
          },
        },
        {
          key: "hide",
          value: function () {
            this.display = "none";
          },
        },
        {
          key: "isShow",
          value: function () {
            return "block" === this.display;
          },
        },
      ]) && n(o.prototype, t),
      e
    );
  })())(),
    console.log("do post"),
    console.log(1);
})();
