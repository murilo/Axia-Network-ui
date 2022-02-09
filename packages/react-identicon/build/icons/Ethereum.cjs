"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ethereum = void 0;

var _ethereumBlockiesBase = _interopRequireDefault(require("ethereum-blockies-base64"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Copyright 2017-2021 @axia-js/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
function Identicon({
  address,
  className = '',
  style
}) {
  const imgSrc = (0, _react.useMemo)(() => (0, _ethereumBlockiesBase.default)(address), [address]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
    className: className,
    src: imgSrc,
    style: style
  });
}

const Ethereum = /*#__PURE__*/_react.default.memo((0, _styledComponents.default)(Identicon).withConfig({
  displayName: "Ethereum",
  componentId: "sc-bgudgx-0"
})(({
  size
}) => `
  display: block;
  height: ${size}px;
  width: ${size}px;
`));

exports.Ethereum = Ethereum;