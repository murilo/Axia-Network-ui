// Copyright 2017-2021 @axia-js/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { accountKey } from "../defaults.js";
import { genericSubject } from "./genericSubject.js";
export const accounts = genericSubject(accountKey, true);