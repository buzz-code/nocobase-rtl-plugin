/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

(function(e,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("@nocobase/client")):typeof define=="function"&&define.amd?define(["exports","@nocobase/client"],t):(e=typeof globalThis!="undefined"?globalThis:e||self,t(e["@buzz-code/nocobase-rtl-plugin"]={},e["@nocobase/client"]))})(this,function(e,t){"use strict";var u=(e,t,i)=>new Promise((s,o)=>{var d=n=>{try{l(i.next(n))}catch(a){o(a)}},c=n=>{try{l(i.throw(n))}catch(a){o(a)}},l=n=>n.done?s(n.value):Promise.resolve(n.value).then(d,c);l((i=i.apply(e,t)).next())});const i=o=>["ar","he","fa","ps","ur"].some(d=>o.startsWith(d));class s extends t.Plugin{afterAdd(){return u(this,null,function*(){})}beforeLoad(){return u(this,null,function*(){})}load(){return u(this,null,function*(){i(this.app.i18n.language)&&document.body.setAttribute("dir","rtl")})}}e.RtlSupportClient=s,e.default=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
