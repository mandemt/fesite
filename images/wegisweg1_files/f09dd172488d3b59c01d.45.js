(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"K/JX":function(e,t,r){"use strict";r.d(t,"a",(function(){return C})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return _}));var i=r("mrSG"),n=r("RRgQ");function a(e){return{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GeneratedClientQuery"},selectionSet:o(e)}]}}function o(e){if("number"==typeof e||"boolean"==typeof e||"string"==typeof e||null==e)return null;if(Array.isArray(e))return o(e[0]);var t=[];return Object.keys(e).forEach((function(r){var i={kind:"Field",name:{kind:"Name",value:r},selectionSet:o(e[r])||void 0};t.push(i)})),{kind:"SelectionSet",selections:t}}var c,s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:null,variableDefinitions:null,directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:null,name:{kind:"Name",value:"__typename"},arguments:[],directives:[],selectionSet:null}]}}]},u=function(){function e(){}return e.prototype.transformDocument=function(e){return e},e.prototype.transformForLink=function(e){return e},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!1),this.read({query:e.query,variables:e.variables,optimistic:t})},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!1),this.read({query:Object(n.k)(e.fragment,e.fragmentName),variables:e.variables,rootId:e.id,optimistic:t})},e.prototype.writeQuery=function(e){this.write({dataId:"ROOT_QUERY",result:e.data,query:e.query,variables:e.variables})},e.prototype.writeFragment=function(e){this.write({dataId:e.id,result:e.data,variables:e.variables,query:Object(n.k)(e.fragment,e.fragmentName)})},e.prototype.writeData=function(e){var t,r,i=e.id,n=e.data;if(void 0!==i){var c=null;try{c=this.read({rootId:i,optimistic:!1,query:s})}catch(e){}var u=c&&c.__typename||"__ClientData",l=Object.assign({__typename:u},n);this.writeFragment({id:i,fragment:(t=l,r=u,{kind:"Document",definitions:[{kind:"FragmentDefinition",typeCondition:{kind:"NamedType",name:{kind:"Name",value:r||"__FakeType"}},name:{kind:"Name",value:"GeneratedClientQuery"},selectionSet:o(t)}]}),data:l})}else this.writeQuery({query:a(n),data:n})},e}();c||(c={});var l=r("qx2n"),d=r("4ygG"),f=r("qVdT"),p=!1;function h(){var e=!p;return Object(n.y)()||(p=!0),e}var y=function(){function e(){}return e.prototype.ensureReady=function(){return Promise.resolve()},e.prototype.canBypassInit=function(){return!0},e.prototype.match=function(e,t,r){var i=r.store.get(e.id),n="ROOT_QUERY"===e.id;if(!i)return n;var a=i.__typename,o=void 0===a?n&&"Query":a;return o&&o===t||(h(),"heuristic")},e}(),m=function(){function e(e){e&&e.introspectionQueryResultData?(this.possibleTypesMap=this.parseIntrospectionResult(e.introspectionQueryResultData),this.isReady=!0):this.isReady=!1,this.match=this.match.bind(this)}return e.prototype.match=function(e,t,r){Object(f.b)(this.isReady,1);var i=r.store.get(e.id),n="ROOT_QUERY"===e.id;if(!i)return n;var a=i.__typename,o=void 0===a?n&&"Query":a;if(Object(f.b)(o,2),o===t)return!0;var c=this.possibleTypesMap[t];return!!(o&&c&&c.indexOf(o)>-1)},e.prototype.parseIntrospectionResult=function(e){var t={};return e.__schema.types.forEach((function(e){"UNION"!==e.kind&&"INTERFACE"!==e.kind||(t[e.name]=e.possibleTypes.map((function(e){return e.name})))})),t},e}(),v=Object.prototype.hasOwnProperty,b=function(){function e(e){var t=this;void 0===e&&(e=Object.create(null)),this.data=e,this.depend=Object(d.b)((function(e){return t.data[e]}),{disposable:!0,makeCacheKey:function(e){return e}})}return e.prototype.toObject=function(){return this.data},e.prototype.get=function(e){return this.depend(e),this.data[e]},e.prototype.set=function(e,t){t!==this.data[e]&&(this.data[e]=t,this.depend.dirty(e))},e.prototype.delete=function(e){v.call(this.data,e)&&(delete this.data[e],this.depend.dirty(e))},e.prototype.clear=function(){this.replace(null)},e.prototype.replace=function(e){var t=this;e?(Object.keys(e).forEach((function(r){t.set(r,e[r])})),Object.keys(this.data).forEach((function(r){v.call(e,r)||t.delete(r)}))):Object.keys(this.data).forEach((function(e){t.delete(e)}))},e}();function O(e){return new b(e)}var g=function(){function e(e){var t=this,r=void 0===e?{}:e,i=r.cacheKeyRoot,a=void 0===i?new d.a(n.e):i,o=r.freezeResults,c=void 0!==o&&o,s=this.executeStoreQuery,u=this.executeSelectionSet,l=this.executeSubSelectedArray;this.freezeResults=c,this.executeStoreQuery=Object(d.b)((function(e){return s.call(t,e)}),{makeCacheKey:function(e){var t=e.query,r=e.rootValue,i=e.contextValue,n=e.variableValues,o=e.fragmentMatcher;if(i.store instanceof b)return a.lookup(i.store,t,o,JSON.stringify(n),r.id)}}),this.executeSelectionSet=Object(d.b)((function(e){return u.call(t,e)}),{makeCacheKey:function(e){var t=e.selectionSet,r=e.rootValue,i=e.execContext;if(i.contextValue.store instanceof b)return a.lookup(i.contextValue.store,t,i.fragmentMatcher,JSON.stringify(i.variableValues),r.id)}}),this.executeSubSelectedArray=Object(d.b)((function(e){return l.call(t,e)}),{makeCacheKey:function(e){var t=e.field,r=e.array,i=e.execContext;if(i.contextValue.store instanceof b)return a.lookup(i.contextValue.store,t,r,JSON.stringify(i.variableValues))}})}return e.prototype.readQueryFromStore=function(e){return this.diffQueryAgainstStore(Object(i.a)(Object(i.a)({},e),{returnPartialData:!1})).result},e.prototype.diffQueryAgainstStore=function(e){var t=e.store,r=e.query,i=e.variables,a=e.previousResult,o=e.returnPartialData,c=void 0===o||o,s=e.rootId,u=void 0===s?"ROOT_QUERY":s,d=e.fragmentMatcherFunction,p=e.config,h=Object(n.o)(r);i=Object(n.c)({},Object(n.h)(h),i);var y={store:t,dataIdFromObject:p&&p.dataIdFromObject,cacheRedirects:p&&p.cacheRedirects||{}},m=this.executeStoreQuery({query:r,rootValue:{type:"id",id:u,generated:!0,typename:"Query"},contextValue:y,variableValues:i,fragmentMatcher:d}),v=m.missing&&m.missing.length>0;return v&&!c&&m.missing.forEach((function(e){if(!e.tolerable)throw new f.a(8)})),a&&Object(l.a)(a,m.result)&&(m.result=a),{result:m.result,complete:!v}},e.prototype.executeStoreQuery=function(e){var t=e.query,r=e.rootValue,i=e.contextValue,a=e.variableValues,o=e.fragmentMatcher,c=void 0===o?S:o,s=Object(n.l)(t),u=Object(n.j)(t),l={query:t,fragmentMap:Object(n.g)(u),contextValue:i,variableValues:a,fragmentMatcher:c};return this.executeSelectionSet({selectionSet:s.selectionSet,rootValue:r,execContext:l})},e.prototype.executeSelectionSet=function(e){var t=this,r=e.selectionSet,a=e.rootValue,o=e.execContext,c=o.fragmentMap,s=o.contextValue,u=o.variableValues,l={result:null},d=[],p=s.store.get(a.id),h=p&&p.__typename||"ROOT_QUERY"===a.id&&"Query"||void 0;function y(e){var t;return e.missing&&(l.missing=l.missing||[],(t=l.missing).push.apply(t,e.missing)),e.result}return r.selections.forEach((function(e){var r;if(Object(n.F)(e,u))if(Object(n.t)(e)){var l=y(t.executeField(p,h,e,o));void 0!==l&&d.push(((r={})[Object(n.E)(e)]=l,r))}else{var m=void 0;if(Object(n.v)(e))m=e;else if(!(m=c[e.name.value]))throw new f.a(9);var v=m.typeCondition&&m.typeCondition.name.value,b=!v||o.fragmentMatcher(a,v,s);if(b){var O=t.executeSelectionSet({selectionSet:m.selectionSet,rootValue:a,execContext:o});"heuristic"===b&&O.missing&&(O=Object(i.a)(Object(i.a)({},O),{missing:O.missing.map((function(e){return Object(i.a)(Object(i.a)({},e),{tolerable:!0})}))})),d.push(y(O))}}})),l.result=Object(n.B)(d),this.freezeResults,l},e.prototype.executeField=function(e,t,r,i){var a=i.variableValues,o=i.contextValue,c=function(e,t,r,i,a,o){o.resultKey;var c=o.directives,s=r;(i||c)&&(s=Object(n.p)(s,i,c));var u=void 0;if(e&&void 0===(u=e[s])&&a.cacheRedirects&&"string"==typeof t){var l=a.cacheRedirects[t];if(l){var d=l[r];d&&(u=d(e,i,{getCacheKey:function(e){var t=a.dataIdFromObject(e);return t&&Object(n.H)({id:t,typename:e.__typename})}}))}}if(void 0===u)return{result:u,missing:[{object:e,fieldName:s,tolerable:!1}]};Object(n.w)(u)&&(u=u.json);return{result:u}}(e,t,r.name.value,Object(n.b)(r,a),o,{resultKey:Object(n.E)(r),directives:Object(n.i)(r,a)});return Array.isArray(c.result)?this.combineExecResults(c,this.executeSubSelectedArray({field:r,array:c.result,execContext:i})):r.selectionSet?null==c.result?c:this.combineExecResults(c,this.executeSelectionSet({selectionSet:r.selectionSet,rootValue:c.result,execContext:i})):(j(r,c.result),this.freezeResults,c)},e.prototype.combineExecResults=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.forEach((function(t){t.missing&&(e=e||[]).push.apply(e,t.missing)})),{result:t.pop().result,missing:e}},e.prototype.executeSubSelectedArray=function(e){var t,r=this,i=e.field,n=e.array,a=e.execContext;function o(e){return e.missing&&(t=t||[]).push.apply(t,e.missing),e.result}return n=n.map((function(e){return null===e?null:Array.isArray(e)?o(r.executeSubSelectedArray({field:i,array:e,execContext:a})):i.selectionSet?o(r.executeSelectionSet({selectionSet:i.selectionSet,rootValue:e,execContext:a})):(j(i,e),e)})),this.freezeResults,{result:n,missing:t}},e}();function j(e,t){if(!e.selectionSet&&Object(n.u)(t))throw new f.a(10)}function S(){return!0}var R=function(){function e(e){void 0===e&&(e=Object.create(null)),this.data=e}return e.prototype.toObject=function(){return this.data},e.prototype.get=function(e){return this.data[e]},e.prototype.set=function(e,t){this.data[e]=t},e.prototype.delete=function(e){this.data[e]=void 0},e.prototype.clear=function(){this.data=Object.create(null)},e.prototype.replace=function(e){this.data=e||Object.create(null)},e}();var x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="WriteError",t}return Object(i.c)(t,e),t}(Error);var w=function(){function e(){}return e.prototype.writeQueryToStore=function(e){var t=e.query,r=e.result,i=e.store,n=void 0===i?O():i,a=e.variables,o=e.dataIdFromObject,c=e.fragmentMatcherFunction;return this.writeResultToStore({dataId:"ROOT_QUERY",result:r,document:t,store:n,variables:a,dataIdFromObject:o,fragmentMatcherFunction:c})},e.prototype.writeResultToStore=function(e){var t=e.dataId,r=e.result,i=e.document,a=e.store,o=void 0===a?O():a,c=e.variables,s=e.dataIdFromObject,u=e.fragmentMatcherFunction,l=Object(n.m)(i);try{return this.writeSelectionSetToStore({result:r,dataId:t,selectionSet:l.selectionSet,context:{store:o,processedData:{},variables:Object(n.c)({},Object(n.h)(l),c),dataIdFromObject:s,fragmentMap:Object(n.g)(Object(n.j)(i)),fragmentMatcherFunction:u}})}catch(e){throw function(e,t){var r=new x("Error writing result to store for query:\n "+JSON.stringify(t));return r.message+="\n"+e.message,r.stack=e.stack,r}(e,i)}},e.prototype.writeSelectionSetToStore=function(e){var t=this,r=e.result,i=e.dataId,a=e.selectionSet,o=e.context,c=o.variables,s=o.store,u=o.fragmentMap;return a.selections.forEach((function(e){var a;if(Object(n.F)(e,c))if(Object(n.t)(e)){var s=Object(n.E)(e),l=r[s];if(void 0!==l)t.writeFieldToStore({dataId:i,value:l,field:e,context:o});else{var d=!1,p=!1;e.directives&&e.directives.length&&(d=e.directives.some((function(e){return e.name&&"defer"===e.name.value})),p=e.directives.some((function(e){return e.name&&"client"===e.name.value}))),!d&&!p&&o.fragmentMatcherFunction}}else{var h=void 0;Object(n.v)(e)?h=e:(h=(u||{})[e.name.value],Object(f.b)(h,3));var y=!0;if(o.fragmentMatcherFunction&&h.typeCondition){var m=i||"self",v=Object(n.H)({id:m,typename:void 0}),b={store:new R((a={},a[m]=r,a)),cacheRedirects:{}},O=o.fragmentMatcherFunction(v,h.typeCondition.name.value,b);Object(n.x)(),y=!!O}y&&t.writeSelectionSetToStore({result:r,selectionSet:h.selectionSet,dataId:i,context:o})}})),s},e.prototype.writeFieldToStore=function(e){var t,r,a,o=e.field,c=e.value,s=e.dataId,u=e.context,d=u.variables,p=u.dataIdFromObject,h=u.store,y=Object(n.G)(o,d);if(o.selectionSet&&null!==c)if(Array.isArray(c)){var m=s+"."+y;r=this.processArrayValue(c,m,o.selectionSet,u)}else{var v=s+"."+y,b=!0;if(k(v)||(v="$"+v),p){var O=p(c);Object(f.b)(!O||!k(O),4),(O||"number"==typeof O&&0===O)&&(v=O,b=!1)}F(v,o,u.processedData)||this.writeSelectionSetToStore({dataId:v,result:c,selectionSet:o.selectionSet,context:u});var g=c.__typename;r=Object(n.H)({id:v,typename:g},b);var j=(a=h.get(s))&&a[y];if(j!==r&&Object(n.u)(j)){var S=void 0!==j.typename,R=void 0!==g,x=S&&R&&j.typename!==g;Object(f.b)(!b||j.generated||x,5),Object(f.b)(!S||R,6),j.generated&&(x?b||h.delete(j.id):function e(t,r,a){if(t===r)return!1;var o=a.get(t),c=a.get(r),s=!1;Object.keys(o).forEach((function(t){var r=o[t],i=c[t];Object(n.u)(r)&&k(r.id)&&Object(n.u)(i)&&!Object(l.a)(r,i)&&e(r.id,i.id,a)&&(s=!0)})),a.delete(t);var u=Object(i.a)(Object(i.a)({},o),c);if(Object(l.a)(u,c))return s;return a.set(r,u),!0}(j.id,r.id,h))}}else r=null!=c&&"object"==typeof c?{type:"json",json:c}:c;(a=h.get(s))&&Object(l.a)(r,a[y])||h.set(s,Object(i.a)(Object(i.a)({},a),((t={})[y]=r,t)))},e.prototype.processArrayValue=function(e,t,r,i){var a=this;return e.map((function(e,o){if(null===e)return null;var c=t+"."+o;if(Array.isArray(e))return a.processArrayValue(e,c,r,i);var s=!0;if(i.dataIdFromObject){var u=i.dataIdFromObject(e);u&&(c=u,s=!1)}return F(c,r,i.processedData)||a.writeSelectionSetToStore({dataId:c,result:e,selectionSet:r,context:i}),Object(n.H)({id:c,typename:e.__typename},s)}))},e}();function k(e){return"$"===e[0]}function F(e,t,r){if(!r)return!1;if(r[e]){if(r[e].indexOf(t)>=0)return!0;r[e].push(t)}else r[e]=[t];return!1}var I={fragmentMatcher:new y,dataIdFromObject:_,addTypename:!0,resultCaching:!0,freezeResults:!1};function _(e){if(e.__typename){if(void 0!==e.id)return e.__typename+":"+e.id;if(void 0!==e._id)return e.__typename+":"+e._id}return null}var D=Object.prototype.hasOwnProperty,T=function(e){function t(t,r,i){var n=e.call(this,Object.create(null))||this;return n.optimisticId=t,n.parent=r,n.transaction=i,n}return Object(i.c)(t,e),t.prototype.toObject=function(){return Object(i.a)(Object(i.a)({},this.parent.toObject()),this.data)},t.prototype.get=function(e){return D.call(this.data,e)?this.data[e]:this.parent.get(e)},t}(R),C=function(e){function t(t){void 0===t&&(t={});var r=e.call(this)||this;r.watches=new Set,r.typenameDocumentCache=new Map,r.cacheKeyRoot=new d.a(n.e),r.silenceBroadcast=!1,r.config=Object(i.a)(Object(i.a)({},I),t),r.config.customResolvers&&(r.config.cacheRedirects=r.config.customResolvers),r.config.cacheResolvers&&(r.config.cacheRedirects=r.config.cacheResolvers),r.addTypename=!!r.config.addTypename,r.data=r.config.resultCaching?new b:new R,r.optimisticData=r.data,r.storeWriter=new w,r.storeReader=new g({cacheKeyRoot:r.cacheKeyRoot,freezeResults:t.freezeResults});var a=r,o=a.maybeBroadcastWatch;return r.maybeBroadcastWatch=Object(d.b)((function(e){return o.call(r,e)}),{makeCacheKey:function(e){if(!e.optimistic&&!e.previousResult)return a.data instanceof b?a.cacheKeyRoot.lookup(e.query,JSON.stringify(e.variables)):void 0}}),r}return Object(i.c)(t,e),t.prototype.restore=function(e){return e&&this.data.replace(e),this},t.prototype.extract=function(e){return void 0===e&&(e=!1),(e?this.optimisticData:this.data).toObject()},t.prototype.read=function(e){if("string"==typeof e.rootId&&void 0===this.data.get(e.rootId))return null;var t=this.config.fragmentMatcher,r=t&&t.match;return this.storeReader.readQueryFromStore({store:e.optimistic?this.optimisticData:this.data,query:this.transformDocument(e.query),variables:e.variables,rootId:e.rootId,fragmentMatcherFunction:r,previousResult:e.previousResult,config:this.config})||null},t.prototype.write=function(e){var t=this.config.fragmentMatcher,r=t&&t.match;this.storeWriter.writeResultToStore({dataId:e.dataId,result:e.result,variables:e.variables,document:this.transformDocument(e.query),store:this.data,dataIdFromObject:this.config.dataIdFromObject,fragmentMatcherFunction:r}),this.broadcastWatches()},t.prototype.diff=function(e){var t=this.config.fragmentMatcher,r=t&&t.match;return this.storeReader.diffQueryAgainstStore({store:e.optimistic?this.optimisticData:this.data,query:this.transformDocument(e.query),variables:e.variables,returnPartialData:e.returnPartialData,previousResult:e.previousResult,fragmentMatcherFunction:r,config:this.config})},t.prototype.watch=function(e){var t=this;return this.watches.add(e),function(){t.watches.delete(e)}},t.prototype.evict=function(e){throw new f.a(7)},t.prototype.reset=function(){return this.data.clear(),this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(e){for(var t=[],r=0,i=this.optimisticData;i instanceof T;)i.optimisticId===e?++r:t.push(i),i=i.parent;if(r>0){for(this.optimisticData=i;t.length>0;){var n=t.pop();this.performTransaction(n.transaction,n.optimisticId)}this.broadcastWatches()}},t.prototype.performTransaction=function(e,t){var r=this.data,i=this.silenceBroadcast;this.silenceBroadcast=!0,"string"==typeof t&&(this.data=this.optimisticData=new T(t,this.optimisticData,e));try{e(this)}finally{this.silenceBroadcast=i,this.data=r}this.broadcastWatches()},t.prototype.recordOptimisticTransaction=function(e,t){return this.performTransaction(e,t)},t.prototype.transformDocument=function(e){if(this.addTypename){var t=this.typenameDocumentCache.get(e);return t||(t=Object(n.a)(e),this.typenameDocumentCache.set(e,t),this.typenameDocumentCache.set(t,t)),t}return e},t.prototype.broadcastWatches=function(){var e=this;this.silenceBroadcast||this.watches.forEach((function(t){return e.maybeBroadcastWatch(t)}))},t.prototype.maybeBroadcastWatch=function(e){e.callback(this.diff({query:e.query,variables:e.variables,previousResult:e.previousResult&&e.previousResult(),optimistic:e.optimistic}))},t}(u)}}]);
//# sourceMappingURL=f09dd172488d3b59c01d.45.js.map