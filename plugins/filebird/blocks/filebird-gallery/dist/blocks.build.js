!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(1)},function(e,t,r){"use strict";var n=r(2),o=(r.n(n),r(3)),a=(r.n(o),r(4)),i=wp.editor.RichText,__=wp.i18n.__;(0,wp.blocks.registerBlockType)("filebird/block-filebird-gallery",{title:__("FileBird Gallery","filebird"),description:__("Display folder images in a rich gallery.","filebird"),icon:"images-alt2",category:"common",keywords:["filebird-gallery"],supports:{align:!0},attributes:{isLoading:{type:"boolean",default:!1},captions:{type:"object",default:{}},imagesRemoved:{type:"array",default:[]},images:{type:"array",default:[]},selectedFolder:{type:"array",default:[]},columns:{type:"integer",default:3},isCropped:{type:"boolean",default:!0},hasCaption:{type:"boolean",default:!1},linkTo:{type:"string",default:"none"},sortBy:{type:"string",default:wp.media.model.Query.defaultProps.orderby},sortType:{type:"string",default:wp.media.model.Query.defaultProps.order}},edit:a.a,save:function(e){var t=e.attributes;return e.className,wp.element.createElement("ul",{className:"wp-block-gallery columns-"+t.columns+" "+(t.isCropped?"is-cropped":"")},t.images.map(function(e){var r=void 0;switch(t.linkTo){case"media":r=e.fullUrl||e.url;break;case"attachment":r=e.link}var n=wp.element.createElement("img",{src:e.url,alt:e.alt,className:e.id?"wp-image-"+e.id:null});return wp.element.createElement("li",{key:e.id||e.url,className:"blocks-gallery-item"},wp.element.createElement("figure",null,r?wp.element.createElement("a",{href:r},n):n,!i.isEmpty(e.caption)&&wp.element.createElement(i.Content,{tagName:"figcaption",className:"blocks-gallery-item__caption",value:e.caption})))}))}})},function(e,t){},function(e,t){},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,a){try{var i=t[o](a),l=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}return n("next")})}}var a=r(5),i=r.n(a),l=r(8),c=(r.n(l),r(9)),s=(r.n(c),this),u=function(){function e(e,t){var r=[],_n=!0,n=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(_n=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);_n=!0);}catch(e){n=!0,o=e}finally{try{!_n&&i.return&&i.return()}finally{if(n)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),__=wp.i18n.__,f=wp,p=f.apiFetch,d=wp.element,h=d.useState,m=d.useEffect,y=d.useRef,v=[{value:"attachment",label:__("Attachment Page","filebird")},{value:"media",label:__("Media File","filebird")},{value:"none",label:__("None","filebird")}],g=[{value:"name",label:fbv_data.i18n.by_name},{value:"date",label:fbv_data.i18n.by_date},{value:"modified",label:fbv_data.i18n.by_modified},{value:"author",label:fbv_data.i18n.by_author},{value:"title",label:fbv_data.i18n.by_title},{value:"file_name",label:fbv_data.i18n.by_file_name}],b=[{value:"ASC",label:__("Ascending","filebird")},{value:"DESC",label:__("Descending","filebird")}],w=function(e){var t=e.attributes,r=e.setAttributes,a=e.className,f=(e.isSelected,y(!1)),d=h(""),w=u(d,2),E=w[0],_=w[1],x=function(){var e=o(i.a.mark(function e(){var n,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(fbv_data.json_url+"/gutenberg-get-folders",{method:"GET",headers:{"X-WP-Nonce":fbv_data.rest_nonce}}).then(function(e){if(e.ok)return e;throw new Error("Network response was not ok.")});case 2:return n=e.sent,e.next=5,n.json();case 5:o=e.sent,r({folders:o.data,selectedFolder:t.selectedFolder});case 7:case"end":return e.stop()}},e,s)}));return function(){return e.apply(this,arguments)}}(),L=function(){var e=o(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r({isLoading:!0}),e.next=3,p({url:fbv_data.json_url+"/gutenberg-get-images",method:"POST",data:Object.assign({},t),headers:{"X-WP-Nonce":fbv_data.rest_nonce}});case 3:n=e.sent,r({isLoading:!1}),_(n.html);case 6:case"end":return e.stop()}},e,s)}));return function(){return e.apply(this,arguments)}}(),k=function(e){0!=e&&r({selectedFolder:[].concat(n(e))})},C=function(e){r({columns:e})},N=function(){r({isCropped:!t.isCropped})},T=function(){r({hasCaption:!t.hasCaption})},j=function(e){r({linkTo:e})};return m(function(){x(),t.selectedFolder.length&&L()},[]),m(function(){f.current?L():f.current=!0},[t.sortBy,t.sortType,t.hasCaption,t.selectedFolder,t.columns,t.isCropped]),wp.element.createElement("div",{className:a},t.isLoading?wp.element.createElement("div",{className:"components-placeholder"},wp.element.createElement("div",{className:"components-placeholder__fieldset"},wp.element.createElement("span",{className:"components-spinner"}))):E?wp.element.createElement("div",{dangerouslySetInnerHTML:{__html:E}}):0==t.selectedFolder?wp.element.createElement("div",{className:"components-notice is-error"},wp.element.createElement("div",{className:"components-notice__content"},wp.element.createElement("p",null,__("Please choose folder in the block settings.","filebird")))):wp.element.createElement("div",{className:"components-notice is-error"},wp.element.createElement("div",{className:"components-notice__content"},wp.element.createElement("p",null,__("This folder has no images, please choose another one.","filebird")))),wp.element.createElement(l.InspectorControls,null,wp.element.createElement(c.PanelBody,{title:__("Gallery Settings","filebird")},wp.element.createElement(c.SelectControl,{className:"filebird-select-wrapper",label:__("Folder","filebird"),value:t.selectedFolder,options:t.folders,onChange:k,multiple:!0,style:{height:100,overflowY:"auto"}}),E&&wp.element.createElement("div",null,wp.element.createElement(c.RangeControl,{label:__("Columns","filebird"),value:t.columns,onChange:C,min:1,max:4}),wp.element.createElement(c.ToggleControl,{label:__("Crop Images","filebird"),help:__("Thumbnails are cropped to align.","filebird"),checked:t.isCropped,onChange:N}),wp.element.createElement(c.ToggleControl,{label:__("Caption","filebird"),help:__("Display image caption","filebird"),checked:t.hasCaption,onChange:T}),wp.element.createElement(c.SelectControl,{label:__("Link To","filebird"),value:t.linkTo,onChange:j,options:v}),wp.element.createElement(c.SelectControl,{label:__("Sort By","filebird"),value:t.sortBy,onChange:function(e){return r({sortBy:e})},options:g}),wp.element.createElement(c.SelectControl,{label:__("Sort Type","filebird"),value:t.sortType,onChange:function(e){return r({sortType:e})},options:b})))))};t.a=w},function(e,t,r){e.exports=r(6)},function(e,t,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(7),o)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";function r(e,t,r,n){var a=t&&t.prototype instanceof o?t:o,i=Object.create(a.prototype),l=new d(n||[]);return i._invoke=s(e,r,l),i}function n(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function o(){}function a(){}function i(){}function l(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function c(e){function t(r,o,a,i){var l=n(e[r],e,o);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"===typeof s&&g.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,a,i)},function(e){t("throw",e,a,i)}):Promise.resolve(s).then(function(e){c.value=e,a(c)},i)}i(l.arg)}function r(e,r){function n(){return new Promise(function(n,o){t(e,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function s(e,t,r){var o=k;return function(a,i){if(o===N)throw new Error("Generator is already running");if(o===T){if("throw"===a)throw i;return m()}for(r.method=a,r.arg=i;;){var l=r.delegate;if(l){var c=u(l,r);if(c){if(c===j)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===k)throw o=T,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=N;var s=n(e,t,r);if("normal"===s.type){if(o=r.done?T:C,s.arg===j)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=T,r.method="throw",r.arg=s.arg)}}}function u(e,t){var r=e.iterator[t.method];if(r===y){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=y,u(e,t),"throw"===t.method))return j;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var o=n(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,j;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=y),t.delegate=null,j):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,j)}function f(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function p(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function d(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(f,this),this.reset(!0)}function h(e){if(e){var t=e[w];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(g.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=y,t.done=!0,t};return n.next=n}}return{next:m}}function m(){return{value:y,done:!0}}var y,v=Object.prototype,g=v.hasOwnProperty,b="function"===typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",E=b.asyncIterator||"@@asyncIterator",_=b.toStringTag||"@@toStringTag",x="object"===typeof e,L=t.regeneratorRuntime;if(L)return void(x&&(e.exports=L));L=t.regeneratorRuntime=x?e.exports:{},L.wrap=r;var k="suspendedStart",C="suspendedYield",N="executing",T="completed",j={},O={};O[w]=function(){return this};var P=Object.getPrototypeOf,S=P&&P(P(h([])));S&&S!==v&&g.call(S,w)&&(O=S);var F=i.prototype=o.prototype=Object.create(O);a.prototype=F.constructor=i,i.constructor=a,i[_]=a.displayName="GeneratorFunction",L.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},L.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,_ in e||(e[_]="GeneratorFunction")),e.prototype=Object.create(F),e},L.awrap=function(e){return{__await:e}},l(c.prototype),c.prototype[E]=function(){return this},L.AsyncIterator=c,L.async=function(e,t,n,o){var a=new c(r(e,t,n,o));return L.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},l(F),F[_]="Generator",F[w]=function(){return this},F.toString=function(){return"[object Generator]"},L.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},L.values=h,d.prototype={constructor:d,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(p),!e)for(var t in this)"t"===t.charAt(0)&&g.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=y)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return a.type="throw",a.arg=e,r.next=t,n&&(r.method="next",r.arg=y),!!n}if(this.done)throw e;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=g.call(o,"catchLoc"),l=g.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,j):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),j},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),p(r),j}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;p(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:h(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=y),j}}}(function(){return this}()||Function("return this")())},function(e,t){e.exports=wp.blockEditor},function(e,t){e.exports=wp.components}]);