/*! For license information please see 4.358a5341.chunk.js.LICENSE.txt */
(this["webpackJsonpspace-haven-editor"]=this["webpackJsonpspace-haven-editor"]||[]).push([[4],{117:function(e,t,i){"use strict";i.r(t);const n=async e=>{const t=await e.getFile();return t.handle=e,t};t.default=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{}];Array.isArray(e)||(e=[e]);const t=[];e.forEach(((e,i)=>{t[i]={description:e.description||"",accept:{}},e.mimeTypes?e.mimeTypes.map((n=>{t[i].accept[n]=e.extensions||[]})):t[i].accept["*/*"]=e.extensions||[]}));const i=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),c=await Promise.all(i.map(n));return e[0].multiple?c:c[0]}}}]);
//# sourceMappingURL=4.358a5341.chunk.js.map