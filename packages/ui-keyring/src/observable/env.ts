// Copyright 2017-2021 @axia-js/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(false);

export const env = {
  isDevelopment: (): boolean =>
    subject.getValue(),
  set: (isDevelopment: boolean): void => {
    subject.next(isDevelopment);
  },
  subject
};
