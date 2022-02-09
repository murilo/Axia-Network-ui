// Copyright 2017-2021 @axia-js/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
import Vue from 'vue';
import { beachballIcon } from '@axia-js/ui-shared';

/**
 * @name Beachball
 * @description The Beachball identicon
 */
export const Beachball = Vue.extend({
  created: function () {
    this.createHtml();
  },
  data: function () {
    return {
      // eslint-disable-next-line quotes
      html: `<div />`
    };
  },
  methods: {
    createHtml: function () {
      this.html = beachballIcon(this.address, this.size).outerHTML;
    }
  },
  props: ['address', 'size'],
  // eslint-disable-next-line quotes
  template: `<div v-html="html" />`
});