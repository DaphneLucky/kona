"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addBasket = void 0;

var _types = require("./types");

var addBasket = function addBasket(productName) {
  return function (dispatch) {
    console.log("Adding to Basket");
    console.log("Product ", productName);
    dispatch({
      type: _types.ADD_PRODUCT_BASKET,
      payload: productName
    });
  };
};

exports.addBasket = addBasket;