!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="/build/",e(0)}([function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=r(13),c=function(t){function e(){n(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,u.Platform.utils.randomNumberBetween(60,window.innerWidth-100),u.Platform.utils.randomNumberBetween(60,window.innerHeight-100),12,12));return t.color=u.Platform.utils.randomColorHex(),t.setVectorX(u.Platform.utils.randomNumberBetween(-3,3)),t.setVectorY(u.Platform.utils.randomNumberBetween(-3,3)),t}return i(e,t),a(e,[{key:"draw",value:function(t){var e=this.getWidth()/2;t.beginPath(),t.arc(e,e,e,2*Math.PI,!1),t.fillStyle=this.color,t.fill(),t.closePath()}}]),e}(u.View.Item.with("vectors","gravity","collisions")),s=u.View.createLayer();s.addEntity(new(function(t){function e(){return n(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,window.innerWidth/2,window.innerHeight/2,2,2))}return i(e,t),a(e,[{key:"draw",value:function(t){var e=this.getWidth()/2;t.beginPath(),t.arc(e,e,e,2*Math.PI,!1),t.fillStyle="#000",t.fill(),t.closePath()}}]),e}(u.View.Item)));for(var f=0;f<10;f++)s.addEntity(new c);u.Platform.hooks.on("collision",function(t,e){t.reflectVectorX(e),t.reflectVectorY(e)}),u.Platform.loop.start()},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.Platform=void 0;var o=r(2),i=n(o),a=r(4),u=n(a),c=r(5),s=n(c),f=r(6),l=n(f),d=r(7),h=n(d),y={config:i,hooks:u,input:s,loop:l,utils:h};e.Platform=y},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.fpsCounter=!0,e.debugEnabled=!1,e.performanceFeedback=!1},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Item=void 0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=r(8),a=r(9),u=r(10);e.Item=function(){function t(e,r,o,i,a){n(this,t),this._canvas=a||document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),a||(this._canvas.width=o,this._canvas.height=i),this.dx=e,this.dy=r}return o(t,[{key:"getCanvas",value:function(){return this._canvas}},{key:"getContext",value:function(){return this._ctx}},{key:"getWidth",value:function(){return this._canvas.width}},{key:"getHeight",value:function(){return this._canvas.height}},{key:"getCoordinates",value:function(){return{dx:this.dx,dy:this.dy}}},{key:"setCoordinates",value:function(t){var e=t.dx,r=t.dy;this.setDxCoordinate(e),this.setDyCoordinate(r)}},{key:"getDxCoordinate",value:function(){return this.dx}},{key:"setDxCoordinate",value:function(t){this.dx=t}},{key:"getDyCoordinate",value:function(){return this.dy}},{key:"setDyCoordinate",value:function(t){this.dy=t}},{key:"getCenterCoordinates",value:function(){return{dx:this.dx+this._canvas.width/2,dy:this.dy+this._canvas.height/2}}},{key:"getHorizontalCenterCoordinate",value:function(){return this.dx+this._canvas.width/2}},{key:"getVerticalCenterCoordinate",value:function(){return this.dy+this._canvas.height/2}},{key:"getMinHorizontalCoordinate",value:function(){return this.dx}},{key:"getMaxHorizontalCoordinate",value:function(){return this.dx+this._canvas.width}},{key:"getMinVerticalCoordinate",value:function(){return this.dy}},{key:"getMaxVerticalCoordinate",value:function(){return this._dy+this._canvas.height}},{key:"Class",get:function(){return t}}],[{key:"with",value:function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.reduce(function(e,r){if(!t[r])throw Error("Property not found on class");return t[r](e)},this)}},{key:"collisions",get:function(){return i.collisions}},{key:"gravity",get:function(){return a.gravity}},{key:"vectors",get:function(){return u.vectors}}]),t}()},function(t,e){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function n(t,e){i.hasOwnProperty(t)?i[t].push(e):i[t]=[e]}function o(t,e){if(i.hasOwnProperty(t)){var n=!0,o=!1,a=void 0;try{for(var u,c=i[t][Symbol.iterator]();!(n=(u=c.next()).done);n=!0){var s=u.value;s.apply(void 0,r(e))}}catch(t){o=!0,a=t}finally{try{!n&&c.return&&c.return()}finally{if(o)throw a}}}}Object.defineProperty(e,"__esModule",{value:!0}),e.on=n,e.fire=o;var i={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=e.keyboard={upArrow:!1,downArrow:!1,leftArrow:!1,rightArrow:!1};document.addEventListener("keydown",function(t){switch(t.keyCode){case 38:case 87:r.upArrow=!0;break;case 40:case 83:r.downArrow=!0;break;case 37:case 65:r.leftArrow=!0;break;case 39:case 68:r.rightArrow=!0}},!1),document.addEventListener("keyup",function(t){switch(t.keyCode){case 38:case 87:r.upArrow=!1;break;case 40:case 83:r.downArrow=!1;break;case 37:case 65:r.leftArrow=!1;break;case 39:case 68:r.rightArrow=!1}},!1)},function(t,e,r){(function(t){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;if("function"!=typeof t)throw Error("Only functions may be added to the loop");s.push({fn:t,priority:e}),s=s.sort(function(t,e){return t.priority<e.priority})}function i(){f=!0,window.requestAnimationFrame(t)}function a(){f=!1}function t(){if(f){for(c.performanceFeedback&&(y=performance.now()),d=0,h=s.length;d<h;)s[d++].fn();c.performanceFeedback&&(v=performance.now(),console.log("Frame took %sms",v-y)),c.fpsCounter&&l++,window.requestAnimationFrame(t)}}Object.defineProperty(e,"__esModule",{value:!0}),e.add=o,e.start=i,e.stop=a;var u=r(2),c=n(u),s=[],f=void 0,l=0,d=void 0,h=void 0,y=void 0,v=void 0;window.onerror=a,c.fpsCounter&&setInterval(function(){console.debug("%s FPS",l),l=0},1e3)}).call(e,r(14))},function(t,e){"use strict";function r(){return(v++).toString(36)}function n(){return i(100,window.innerWidth-100)}function o(){return i(100,window.innerHeight-100)}function i(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function a(){return"#"+Math.floor(16777215*Math.random()).toString(16)}function u(t,e){for(var r=0,n=t.length;n--;)r+=t[n]*e[n];return r}function c(t,e){return Math.sqrt(t*t+e*e)}function s(t,e){return Math.cos(t*Math.PI/180)*e}function f(t,e){return Math.sin(t*Math.PI/180)*e}function l(t,e,r){var n=[e.dx-t.dx,e.dy-t.dy],o=[r.dx-e.dx,r.dy-e.dy];return Math.acos(-u(n,o)/(c.apply(void 0,n)*c.apply(void 0,o)))}function d(t,e){return{dx:(t.dx+e.dx)/2,dy:(t.dy+e.dy)/2}}function h(t){return t*Math.PI/180}function y(t){return 180*t/Math.PI}Object.defineProperty(e,"__esModule",{value:!0}),e.generateUid=r,e.randomX=n,e.randomY=o,e.randomNumberBetween=i,e.randomColorHex=a,e.getDotProduct=u,e.pythagoras=c,e.adjacentLength=s,e.oppositeLength=f,e.getAngleBetweenThreePoints=l,e.getCenterBetweenTwoPoints=d,e.degreesToRadians=h,e.radiansToDegrees=y;var v=0},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return function(t){function e(){return n(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),u(e,[{key:"setDxCoordinate",value:function(){var t;f.includes(this)||f.push(this);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];(t=c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setDxCoordinate",this)).call.apply(t,[this].concat(n))}},{key:"setDyCoordinate",value:function(){var t;f.includes(this)||f.push(this);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];(t=c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setDyCoordinate",this)).call.apply(t,[this].concat(n))}}]),e}(t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),c=function t(e,r,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,r);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)};e.collisions=a;var s=r(1),f=[];s.Platform.loop.add(function(){for(var t=[],e=0,r=f.length;e<r;e++)for(var n=e+1;n<r;n++){var o=f[e],i=f[n],a=o.getWidth()/2,u=i.getWidth()/2,c=o.getCenterCoordinates(),l=c.dx,d=c.dy,h=i.getCenterCoordinates(),y=h.dx,v=h.dy;s.Platform.utils.pythagoras(y-l,v-d)<a+u&&(t[t.length]=[o,i])}for(;t.length;)s.Platform.hooks.fire("collision",t.shift());f.length=0},1/0)},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return function(t){function e(){n(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return c.push(t),t}return i(e,t),e}(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.gravity=a;var u=r(1),c=[],s={dx:window.innerWidth/2,dy:window.innerHeight/2};u.Platform.loop.add(function(){var t=!0,e=!1,r=void 0;try{for(var n,o=c[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var i=n.value,a=i.getCenterCoordinates(),f=u.Platform.utils.radiansToDegrees(u.Platform.utils.getAngleBetweenThreePoints({dx:a.dx,dy:s.dy},s,a)),l=u.Platform.utils.adjacentLength(f,.3),d=u.Platform.utils.oppositeLength(f,.3);i.setVectorX(i.getVectorX()+(a.dx<s.dx?l:-l)),i.setVectorY(i.getVectorY()+(a.dy<s.dy?d:-d))}}catch(t){e=!0,r=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw r}}},0)},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return function(t){function e(){n(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return f.push(t),t.vectorX=0,t.vectorY=0,t}return i(e,t),u(e,[{key:"getVectorX",value:function(){return this.vectorX}},{key:"setVectorX",value:function(t){this.vectorX=t}},{key:"getVectorY",value:function(){return this.vectorY}},{key:"setVectorY",value:function(t){this.vectorY=t}},{key:"reverseVectorX",value:function(){this.vectorX=-this.vectorX}},{key:"reverseVectorY",value:function(t){var e=this;if(t){var r=this.vectorY;this.vectorY=t,window.requestAnimationFrame(function(){e.vectorY=-r})}else this.vectorY=-this.vectorY}},{key:"reflectVectorX",value:function(t){if(!(t instanceof e))throw Error("Item must include the Vector class");this.vectorX=[t.vectorX,t.vectorX=this.vectorX][0]}},{key:"reflectVectorY",value:function(t){if(!(t instanceof e))throw Error("Item must include the Vector class");this.vectorY=[t.vectorY,t.vectorY=this.vectorY][0]}},{key:"getVectorMagnitude",value:function(){return s.Platform.utils.pythagoras(this.vectorX,this.vectorY)}},{key:"getVectorDirection",value:function(){var t=c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"getCenterCoordinates",this).call(this);return s.Platform.utils.getAngleBetweenThreePoints({dx:t.dx,dy:t.dy+1},t,{dx:t.dx+this.vectorX,dy:t.dy+this.vectorY})}}]),e}(t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),c=function t(e,r,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,r);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)};e.vectors=a;var s=r(1),f=[];s.Platform.loop.add(function(){var t=!0,e=!1,r=void 0;try{for(var n,o=f[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var i=n.value,a=i.getCoordinates(),u=a.dx,c=a.dy;i.setCoordinates({dx:u+i.vectorX,dy:c+i.vectorY})}}catch(t){e=!0,r=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw r}}},1/0)},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Layer=void 0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=r(3),a=r(1);e.Layer=function(){function t(e,r){var o=this;n(this,t),this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),this._entities=[],this.resizeCanvas(e,r),document.body.appendChild(this._canvas),a.Platform.loop.add(function(){o._ctx.clearRect(0,0,o._canvas.width,o._canvas.height);for(var t=void 0,e=0,r=o._entities.length;e<r;){t=o._entities[e++];var n=t.getContext().canvas,i=t.getCoordinates(),u=i.dx,c=i.dy;a.Platform.config.debugEnabled&&t._ctx.strokeRect(0,0,n.width,n.height),o._ctx.drawImage(n,u,c)}})}return o(t,[{key:"getCanvas",value:function(){return this._canvas}},{key:"getContext",value:function(){return this._ctx}},{key:"getWidth",value:function(){return this._canvas.width}},{key:"getHeight",value:function(){return this._canvas.height}},{key:"addEntity",value:function(t){if(!(t instanceof i.Item))throw Error("Entities must be valid");return t.draw&&t.draw(t._ctx),this._entities[this._entities.length]=t,this}},{key:"getEntities",value:function(){return this._entities}},{key:"clearCanvas",value:function(){this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height)}},{key:"resizeCanvas",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.innerWidth,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.innerHeight;if(this._boundariesLocked)throw Error("Cannot resize canvas when boundaries are locked");this._canvas.width=this._width=t,this._canvas.height=this._height=e}},{key:"lockBoundaries",value:function(){this._boundariesLocked=!0}},{key:"unlockBoundaries",value:function(){this._boundariesLocked=!1}},{key:"Class",get:function(){return t}}]),t}()},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.View=void 0;var a=r(3),u=r(11),c={Item:a.Item,Layer:u.Layer},s=[];c.createLayer=function(t,e){var r=s[s.length]=new u.Layer(t,e);return r},c.createItem=function(t){var e=t.draw,r=void 0===e?Function:e,u=t.coordinates,c=u.dx,s=u.dy,f=t.dimensions,l=f.width,d=f.height;return new(function(t){function e(t,r,i,a,u){n(this,e);var c=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,r,i,a,u));return c.draw=t,c}return i(e,t),e}(a.Item))(r,c,s,l,d)},c.getLayer=function(t){for(var e=0,r=s.length;e<r;e++)if(s[e].uid===t)return s[e]},c.getLayers=function(){return s},window.addEventListener("resize",function(){for(var t=void 0,e=0,r=s.length;e<r;e++)t=s[e],t._boundariesLocked||t.resizeCanvas()},!1),e.View=c},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1);Object.defineProperty(e,"Platform",{enumerable:!0,get:function(){return n.Platform}});var o=r(12);Object.defineProperty(e,"View",{enumerable:!0,get:function(){return o.View}})},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function a(){v&&h&&(v=!1,h.length?y=h.concat(y):p=-1,y.length&&u())}function u(){if(!v){var t=o(a);v=!0;for(var e=y.length;e;){for(h=y,y=[];++p<e;)h&&h[p].run();p=-1,e=y.length}h=null,v=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function s(){}var f,l,d=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(t){l=n}}();var h,y=[],v=!1,p=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];y.push(new c(t,e)),1!==y.length||v||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}}]);