webpackJsonp([1,2],{330:function(n,e,t){var r=t(588);"string"==typeof r&&(r=[[n.i,r,""]]);t(611)(r,{});r.locals&&(n.exports=r.locals)},588:function(n,e,t){e=n.exports=t(589)(),e.push([n.i,"/* You can add global styles to this file, and also import other style files */\n\n* {\n  font-family: 'Fjalla One', sans-serif;\n  box-sizing: border-box;\n  text-align: center;\n}\n\n.hide {\n  display: none;\n}\n\n.arrow {\n  border: 4px solid #000;\n  border-radius: 5px;\n  font-size: 40px;\n}\n\nli {\n  background-color: #008B8B;\n  border-radius: 6px;\n  margin: 5%;\n  list-style: none;\n}\n\nli:hover {\n  background-color: #007777;\n  color: #039be5;\n}\n\n.content a {\n  display: block;\n  width: 100%;\n  color: #F9F9F9;\n  text-decoration: none;\n  font-size: 22px;\n  padding: 4%;\n}\n\n.footer a {\n  display: block;\n  color: #090909;\n  text-decoration: none;\n  margin: 4%;\n}\n\nul {\n  padding: 0;\n}\n",""])},589:function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var t=this[e];t[2]?n.push("@media "+t[2]+"{"+t[1]+"}"):n.push(t[1])}return n.join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},611:function(n,e){function t(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],e))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(f(r.parts[i],e));d[r.id]={id:r.id,refs:1,parts:s}}}}function r(n){for(var e=[],t={},r=0;r<n.length;r++){var o=n[r],i=o[0],s=o[1],a=o[2],f=o[3],l={css:s,media:a,sourceMap:f};t[i]?t[i].parts.push(l):e.push(t[i]={id:i,parts:[l]})}return e}function o(n,e){var t=v(),r=m[m.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),m.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function i(n){n.parentNode.removeChild(n);var e=m.indexOf(n);e>=0&&m.splice(e,1)}function s(n){var e=document.createElement("style");return e.type="text/css",o(n,e),e}function a(n){var e=document.createElement("link");return e.rel="stylesheet",o(n,e),e}function f(n,e){var t,r,o;if(e.singleton){var f=g++;t=b||(b=s(e)),r=l.bind(null,t,f,!1),o=l.bind(null,t,f,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=a(e),r=c.bind(null,t),o=function(){i(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(e),r=u.bind(null,t),o=function(){i(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}function l(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function u(n,e){var t=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function c(n,e){var t=e.css,r=e.sourceMap;r&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([t],{type:"text/css"}),i=n.href;n.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},p=function(n){var e;return function(){return"undefined"==typeof e&&(e=n.apply(this,arguments)),e}},h=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=p(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,g=0,m=[];n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var o=r(n);return t(o,e),function(n){for(var i=[],s=0;s<o.length;s++){var a=o[s],f=d[a.id];f.refs--,i.push(f)}if(n){var l=r(n);t(l,e)}for(var s=0;s<i.length;s++){var f=i[s];if(0===f.refs){for(var u=0;u<f.parts.length;u++)f.parts[u]();delete d[f.id]}}}};var y=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},614:function(n,e,t){n.exports=t(330)}},[614]);