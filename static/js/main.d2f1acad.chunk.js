(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),o=n.n(r),s=(n(15),n(1)),c=n(2),l=n(4),u=n(3),h=n(5),p=n(6);n(16);var d=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Coin"},i.a.createElement("img",{src:this.props.info.imgSrc,alt:this.props.info.side}))}}]),t}(a.Component),m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={currCoin:null,nFlips:0,nHeads:0,nTails:0},n.handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"flipCoin",value:function(){var e,t=(e=this.props.coins)[Math.floor(Math.random()*e.length)];this.setState(function(e){return{currCoin:t,nFlips:e.nFlips+1,nHeads:e.nHeads+("heads"===t.side?1:0),nTails:e.nTails+("tails"===t.side?1:0)}})}},{key:"handleClick",value:function(e){this.flipCoin()}},{key:"render",value:function(){return i.a.createElement("div",{className:"CoinContainer"},i.a.createElement("h2",null,"Let's flip a coin!"),this.state.currCoin&&i.a.createElement(d,{info:this.state.currCoin}),i.a.createElement("button",{onClick:this.handleClick},"Flip Me!"),i.a.createElement("p",null,"Out of ",this.state.nFlips," flips, there have been ",this.state.nHeads," Heads and ",this.state.nTails," Tails!"))}}]),t}(a.Component);m.defaultProps={coins:[{side:"heads",imgSrc:"https://www.virtualcointoss.com/img/quarter_front.png"},{side:"tails",imgSrc:"https://www.virtualcointoss.com/img/quarter_back.png"}]};var f=m,b=(n(17),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.d2f1acad.chunk.js.map