"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNumbers = void 0;

var _types = require("./types");

var getNumbers = function getNumbers() {
  return function (dispatch) {
    console.log("Getting all Basket numbers");
    dispatch({
      type: _types.GET_NUMBERS_BASKET
    });
  };
};

exports.getNumbers = getNumbers;