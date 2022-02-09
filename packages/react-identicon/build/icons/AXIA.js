// Copyright 2018-2021 @axia-js/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Copyright 2018 AXIA-tech via axia-tech/oo7/axia-identicon
// This has been converted from the original version that can be found at
//
// https://github.com/axia-tech/oo7/blob/251ba2b7c45503b68eab4320c270b5afa9bccb60/packages/axia-identicon/src/index.jsx
//
// Here we have done the following to convert the component -
//   - Converted the code to TypeScript
//   - Removed the oo7 dependencies (since not initialised properly, it makes calls to wrong endpoints)
//   - Remove encoding functionality, these are catered for in the base
//   - Remove copy functionality (this is catered from in the base components)
//   - Split calculations into relevant functions
//   - Move constants to file-level
//   - Overall it is now just a static component, expecting an address as an input value
import React from 'react';
import { axiaIcon } from '@axia-js/ui-shared';
import { jsx as _jsx } from "react/jsx-runtime";

function renderCircle({
  cx,
  cy,
  fill,
  r
}, key) {
  return /*#__PURE__*/_jsx("circle", {
    cx: cx,
    cy: cy,
    fill: fill,
    r: r
  }, key);
}

function Identicon({
  address,
  className = '',
  isAlternative = false,
  size,
  style
}) {
  return /*#__PURE__*/_jsx("svg", {
    className: className,
    height: size,
    id: address,
    name: address,
    style: style,
    viewBox: "0 0 64 64",
    width: size,
    children: axiaIcon(address, {
      isAlternative
    }).map(renderCircle)
  });
}

export const AXIA = /*#__PURE__*/React.memo(Identicon);