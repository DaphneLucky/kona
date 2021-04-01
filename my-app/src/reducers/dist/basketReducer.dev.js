"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../actions/types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    original: {
      name: "Original",
      tagName: "original",
      price: 10.00,
      numbers: 0,
      inCart: false
    },
    original60gr: {
      name: "Original (60gr)",
      tagName: "original60gr",
      price: 2.00,
      numbers: 0,
      inCart: false
    },
    original360gr: {
      name: "Original (360gr)",
      tagName: "original360gr",
      price: 6.00,
      numbers: 0,
      inCart: false
    },
    original600gr: {
      name: "Original (600gr)",
      tagName: "original600gr",
      price: 8.00,
      numbers: 0,
      inCart: false
    },
    original1500gr: {
      name: "Original (1500gr)",
      tagName: "original1500gr",
      price: 15.00,
      numbers: 0,
      inCart: false
    },
    matcha: {
      name: "Matcha",
      tagName: "matcha",
      price: 30.00,
      numbers: 0,
      inCart: false
    },
    matcha60gr: {
      name: "Matcha (60gr)",
      tagName: "matcha60gr",
      price: 3.00,
      numbers: 0,
      inCart: false
    },
    matcha360gr: {
      name: "Matcha (360gr)",
      tagName: "matcha360gr",
      price: 7.00,
      numbers: 0,
      inCart: false
    },
    matcha600gr: {
      name: "Mathca (600gr)",
      tagName: "matcha600gr",
      price: 9.00,
      numbers: 0,
      inCart: false
    },
    matcha1500gr: {
      name: "Mathca (1500gr)",
      tagName: "matcha1500gr",
      price: 16.00,
      numbers: 0,
      inCart: false
    }
  }
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var productSelected = "";

  switch (action.type) {
    case _types.ADD_PRODUCT_BASKET:
      productSelected = _objectSpread({}, state.products[action.payload]);
      productSelected.numbers += 1;
      productSelected.inCart = true;
      console.log(productSelected);
      return _objectSpread({}, state, {
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: _objectSpread({}, state.products, _defineProperty({}, action.payload, productSelected))
      });

    case _types.GET_NUMBERS_BASKET:
      return _objectSpread({}, state);

    case _types.INCREASE_QUANTITY:
      productSelected = _objectSpread({}, state.products[action.payload]);
      productSelected.numbers += 1;
      return _objectSpread({}, state, {
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: _objectSpread({}, state.products, _defineProperty({}, action.payload, productSelected))
      });

    case _types.DECREASE_QUANTITY:
      productSelected = _objectSpread({}, state.products[action.payload]);
      var newCartCost = 0;
      var newBasketNumbers = 0;

      if (productSelected.numbers === 0) {
        productSelected.numbers = 0;
        newCartCost = state.cartCost;
        newBasketNumbers = state.basketNumbers;
      } else {
        productSelected.numbers -= 1;
        newCartCost = state.cartCost - state.products[action.payload].price;
        newBasketNumbers = state.basketNumbers - 1;
      }

      return _objectSpread({}, state, {
        cartCost: newCartCost,
        basketNumbers: newBasketNumbers,
        products: _objectSpread({}, state.products, _defineProperty({}, action.payload, productSelected))
      });

    case _types.CLEAR_PRODUCT:
      productSelected = _objectSpread({}, state.products[action.payload]);
      var numbersBackup = productSelected.numbers;
      productSelected.numbers = 0;
      productSelected.inCart = false;
      return _objectSpread({}, state, {
        basketNumbers: state.basketNumbers - numbersBackup,
        cartCost: state.cartCost - numbersBackup * productSelected.price,
        products: _objectSpread({}, state.products, _defineProperty({}, action.payload, productSelected))
      });

    default:
      return state;
  }
};

exports["default"] = _default;