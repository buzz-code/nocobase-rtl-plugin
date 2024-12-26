/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

(function(e,i){typeof exports=="object"&&typeof module!="undefined"?i(exports,require("react/jsx-runtime"),require("@nocobase/client"),require("antd")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","@nocobase/client","antd"],i):(e=typeof globalThis!="undefined"?globalThis:e||self,i(e["@buzz-code/nocobase-rtl-plugin"]={},e.jsxRuntime,e["@nocobase/client"],e.antd))})(this,function(e,i,o,d){"use strict";var u=(e,i,o)=>new Promise((d,s)=>{var a=t=>{try{n(o.next(t))}catch(c){s(c)}},r=t=>{try{n(o.throw(t))}catch(c){s(c)}},n=t=>t.done?d(t.value):Promise.resolve(t.value).then(a,r);n((o=o.apply(e,i)).next())});const s=n=>["ar","he","fa","ps","ur"].some(t=>n.startsWith(t)),a=({children:n})=>i.jsx(d.ConfigProvider,{direction:"rtl",children:n});class r extends o.Plugin{afterAdd(){return u(this,null,function*(){})}beforeLoad(){return u(this,null,function*(){})}load(){return u(this,null,function*(){s(this.app.i18n.language)&&(this.app.use(a),document.body.setAttribute("dir","rtl"))})}}e.RtlSupportClient=r,e.default=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
