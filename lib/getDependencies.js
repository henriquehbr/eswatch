import{readFileSync as s}from"fs";import t from"find-up";const o=async()=>{const e=await t("package.json");if(e){const n=s(e,{encoding:"utf-8"}),a=JSON.parse(n),c=Object.keys(a.dependencies);return c}return[]};export{o as getDependencies};