var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: "renderSquares",
    value: function renderSquares(size) {
      var squares = [];
      for (var i = 0; i < size; i++) {
        squares.push(React.createElement(Square, { key: i }));
      }
      return squares;
    }
  }, {
    key: "render",
    value: function render() {
      var size = 8;
      var html = [];
      for (var i = 0; i < size; i++) {
        html[i] = React.createElement(
          "div",
          null,
          this.renderSquares(size),
          React.createElement("br", null)
        );
      }
      return html;
    }
  }]);

  return Grid;
}(React.Component);

var Square = function (_React$Component2) {
  _inherits(Square, _React$Component2);

  function Square(props) {
    _classCallCheck(this, Square);

    var _this2 = _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, props));

    _this2.state = {
      color: "#00FF00"
    };
    return _this2;
  }

  _createClass(Square, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement("button", { "class": "square", onClick: function onClick() {
          return _this3.setState({ color: '#FF0000' });
        }, style: { background: this.state.color } });
    }
  }]);

  return Square;
}(React.Component);

ReactDOM.render(React.createElement(Grid, null), document.getElementById('root'));