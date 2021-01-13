function post() {
  console.log("do post");
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Menu = /*#__PURE__*/function () {
  function Menu() {
    _classCallCheck(this, Menu);

    this.display = "none";
  }

  _createClass(Menu, [{
    key: "show",
    value: function show() {
      this.display = "block";
    }
  }, {
    key: "hide",
    value: function hide() {
      this.display = "none";
    }
  }, {
    key: "isShow",
    value: function isShow() {
      return this.display === "block";
    }
  }]);

  return Menu;
}();

// class A {
new Menu();

var baz = function baz() {
  post();
  var x = 1;
  console.log(x);

  return x;
};

baz();
