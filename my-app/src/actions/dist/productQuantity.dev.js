"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearProduct = exports.productQuantity = void 0;

var _types = require("./types");

var productQuantity = function productQuantity(action, name) {
  return function (dispatch) {
    console.log("inside product quantity");
    console.log("The action is ", action);
    console.log("The product name is ", name);
    dispatch({
      type: action === "increase" ? _types.INCREASE_QUANTITY : _types.DECREASE_QUANTITY,
      payload: name
    });
  };
};

exports.productQuantity = productQuantity;

var clearProduct = function clearProduct(name) {
  return function (dispatch) {
    console.log("inside clear quantity");
    console.log("The product name is ", name);
    dispatch({
      type: _types.CLEAR_PRODUCT,
      payload: name
    });
  };
};

exports.clearProduct = clearProduct;