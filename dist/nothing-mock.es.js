var n=new function(){var r=function(){return n};return r[Symbol.toPrimitive]=function(){return""},r.valueOf=function(){return!1},new Proxy(Object.freeze(r),{get:function(r,t){return r.hasOwnProperty(t)?r[t]:n}})},r=function(n){return!(!n||!n.valueOf())},t=function(r){return r===n},u=function(r){return!(r===n||null==r)},e=function(r){return JSON.stringify(r,function(r,t){return t===n?null:t})},i=function(r){return JSON.parse(r,function(r,t){return null===t?n:t})};export{n as Nothing,r as toBool,t as isNothing,u as isSomething,e as serialize,i as deserialize};
//# sourceMappingURL=nothing-mock.es.js.map