(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,n){},15:function(e,a,n){},17:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),d=n(2),i=n.n(d),c=(n(13),n(3)),r=n(4),s=n(6),l=n(5),y=n(7),m=(n(15),function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyUp)}},{key:"handleKeyUp",value:function(e){var a=new Audio("/sounds/"+e.keyCode+".wav"),n=document.getElementById(e.keyCode);65!==e.keyCode&&83!==e.keyCode&&68!==e.keyCode&&70!==e.keyCode&&74!==e.keyCode&&75!==e.keyCode&&76!==e.keyCode&&186!==e.keyCode||(a.play(),n.classList.add("playing"),setTimeout(function(){n.classList.remove("playing")},100))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"keyboardKey",id:"65"},"a"),o.a.createElement("div",{className:"keyboardKey",id:"83"},"s"),o.a.createElement("div",{className:"keyboardKey",id:"68"},"d"),o.a.createElement("div",{className:"keyboardKey",id:"70"},"f"),o.a.createElement("div",{className:"keyboardKey",id:"74"},"j"),o.a.createElement("div",{className:"keyboardKey",id:"75"},"k"),o.a.createElement("div",{className:"keyboardKey",id:"76"},"l"),o.a.createElement("div",{className:"keyboardKey",id:"186"},";"))}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,n){e.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.c63e6bf0.chunk.js.map