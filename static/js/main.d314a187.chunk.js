(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),i=s.n(r),c=s(5),o=s(6),a=s(9),l=s(7),u=s(8),h=s(1),b=s.n(h),d=(s(14),s(15),s(2)),p=s.n(d),j=s(0),y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function f(t,e){var s=e.isReversed,r=e.sortType,i=Object(u.a)(t);return i.sort((function(t,e){switch(r){case n.LENGTH:return t.length-e.length;case n.ALPHABET:return t.localeCompare(e);default:return 0}})),s&&i.reverse(),i}!function(t){t.NONE="none",t.ALPHABET="alphabet",t.LENGTH="length"}(n||(n={}));var v=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(c.a)(this,s);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={isReversed:!1,sortType:n.NONE},t}return Object(o.a)(s,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button","is-info",{"is-light":this.state.sortType!==n.ALPHABET}),onClick:function(){t.setState({sortType:n.ALPHABET})},children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-success",{"is-light":this.state.sortType!==n.LENGTH}),onClick:function(){t.setState({sortType:n.LENGTH})},children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-warning",{"is-light":!this.state.isReversed}),onClick:function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},children:"Reverse"}),(this.state.sortType!==n.NONE||this.state.isReversed)&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){t.setState({isReversed:!1,sortType:n.NONE})},children:"Reset"})]}),Object(j.jsx)("ul",{children:f(y,this.state).map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),s}(b.a.Component);i.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d314a187.chunk.js.map