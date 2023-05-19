function fontFaceObserver() {
    !function(){"use strict";var t,e=[];function n(){for(;e.length;)e[0](),e.shift()}function o(t){this.a=i,this.b=void 0,this.f=[];var e=this;try{t((function(t){s(e,t)}),(function(t){c(e,t)}))}catch(t){c(e,t)}}t=function(){setTimeout(n)};var i=2;function r(t){return new o((function(e){e(t)}))}function s(t,e){if(t.a==i){if(e==t)throw new TypeError;var n=!1;try{var o=e&&e.then;if(null!=e&&"object"==typeof e&&"function"==typeof o)return void o.call(e,(function(e){n||s(t,e),n=!0}),(function(e){n||c(t,e),n=!0}))}catch(e){return void(n||c(t,e))}t.a=0,t.b=e,a(t)}}function c(t,e){if(t.a==i){if(e==t)throw new TypeError;t.a=1,t.b=e,a(t)}}function a(n){!function(n){e.push(n),1==e.length&&t()}((function(){if(n.a!=i)for(;n.f.length;){var t=(r=n.f.shift())[0],e=r[1],o=r[2],r=r[3];try{0==n.a?o("function"==typeof t?t.call(void 0,n.b):n.b):1==n.a&&("function"==typeof e?o(e.call(void 0,n.b)):r(n.b))}catch(t){r(t)}}}))}o.prototype.g=function(t){return this.c(void 0,t)},o.prototype.c=function(t,e){var n=this;return new o((function(o,i){n.f.push([t,e,o,i]),a(n)}))},window.Promise||(window.Promise=o,window.Promise.resolve=r,window.Promise.reject=function(t){return new o((function(e,n){n(t)}))},window.Promise.race=function(t){return new o((function(e,n){for(var o=0;o<t.length;o+=1)r(t[o]).c(e,n)}))},window.Promise.all=function(t){return new o((function(e,n){function o(n){return function(o){s[n]=o,(i+=1)==t.length&&e(s)}}var i=0,s=[];0==t.length&&e(s);for(var c=0;c<t.length;c+=1)r(t[c]).c(o(c),n)}))},window.Promise.prototype.then=o.prototype.c,window.Promise.prototype.catch=o.prototype.g)}(),function(){function t(t,e){document.addEventListener?t.addEventListener("scroll",e,!1):t.attachEvent("scroll",e)}function e(t){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(t)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function n(t,e){t.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+e+";"}function o(t){var e=t.g.offsetWidth,n=e+100;return t.j.style.width=n+"px",t.i.scrollLeft=n,t.h.scrollLeft=t.h.scrollWidth+100,t.l!==e&&(t.l=e,!0)}function i(e,n){function i(){var t=r;o(t)&&null!==t.g.parentNode&&n(t.l)}var r=e;t(e.h,i),t(e.i,i),o(e)}function r(t,e,n){e=e||{},n=n||window,this.family=t,this.style=e.style||"normal",this.weight=e.weight||"normal",this.stretch=e.stretch||"normal",this.context=n}var s=null,c=null,a=null,d=null;function l(t){return null===d&&(d=!!t.document.fonts),d}function u(t,e){var n=t.style,o=t.weight;if(null===a){var i=document.createElement("div");try{i.style.font="condensed 100px sans-serif"}catch(t){}a=""!==i.style.font}return[n,o,a?t.stretch:"","100px",e].join(" ")}r.prototype.load=function(t,o){var r=this,a=t||"BESbswy",d=0,f=o||3e3,h=(new Date).getTime();return new Promise((function(t,o){if(l(r.context)&&!function(t){return null===c&&(l(t)&&/Apple/.test(window.navigator.vendor)?(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!t&&603>parseInt(t[1],10)):c=!1),c}(r.context)){var p=new Promise((function(t,e){!function n(){(new Date).getTime()-h>=f?e(Error(f+"ms timeout exceeded")):r.context.document.fonts.load(u(r,'"'+r.family+'"'),a).then((function(e){1<=e.length?t():setTimeout(n,25)}),e)}()})),m=new Promise((function(t,e){d=setTimeout((function(){e(Error(f+"ms timeout exceeded"))}),f)}));Promise.race([m,p]).then((function(){clearTimeout(d),t(r)}),o)}else!function(t){document.body?t():document.addEventListener?document.addEventListener("DOMContentLoaded",(function e(){document.removeEventListener("DOMContentLoaded",e),t()})):document.attachEvent("onreadystatechange",(function e(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",e),t())}))}((function(){function c(){var e;(e=-1!=w&&-1!=v||-1!=w&&-1!=y||-1!=v&&-1!=y)&&((e=w!=v&&w!=y&&v!=y)||(null===s&&(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),s=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))),e=s&&(w==g&&v==g&&y==g||w==x&&v==x&&y==x||w==b&&v==b&&y==b)),e=!e),e&&(null!==E.parentNode&&E.parentNode.removeChild(E),clearTimeout(d),t(r))}var l=new e(a),p=new e(a),m=new e(a),w=-1,v=-1,y=-1,g=-1,x=-1,b=-1,E=document.createElement("div");E.dir="ltr",n(l,u(r,"sans-serif")),n(p,u(r,"serif")),n(m,u(r,"monospace")),E.appendChild(l.g),E.appendChild(p.g),E.appendChild(m.g),r.context.document.body.appendChild(E),g=l.g.offsetWidth,x=p.g.offsetWidth,b=m.g.offsetWidth,function t(){if((new Date).getTime()-h>=f)null!==E.parentNode&&E.parentNode.removeChild(E),o(Error(f+"ms timeout exceeded"));else{var e=r.context.document.hidden;!0!==e&&void 0!==e||(w=l.g.offsetWidth,v=p.g.offsetWidth,y=m.g.offsetWidth,c()),d=setTimeout(t,50)}}(),i(l,(function(t){w=t,c()})),n(l,u(r,'"'+r.family+'",sans-serif')),i(p,(function(t){v=t,c()})),n(p,u(r,'"'+r.family+'",serif')),i(m,(function(t){y=t,c()})),n(m,u(r,'"'+r.family+'",monospace'))}))}))},"object"==typeof module?module.exports=r:(window.FontFaceObserver=r,window.FontFaceObserver.prototype.load=r.prototype.load)}();
}
export {fontFaceObserver};