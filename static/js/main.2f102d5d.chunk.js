(this.webpackJsonpreceitas=this.webpackJsonpreceitas||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(6),a=c.n(s),i=(c(12),c(4)),u=c.n(i),o=c(7),j=c(2),l=(c(14),c(0)),p=function(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),r=c[0],s=c[1];return Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.setQuery(r)},className:"search-form",children:[Object(l.jsx)("input",{type:"text",value:r,onChange:function(e){s(e.target.value)},className:"search-bar"}),Object(l.jsx)("input",{type:"submit",value:"Submit",className:"search-btn"})]})},b=c(5),h=c.n(b),f=function(e){var t=e.recipe;return Object(l.jsxs)("div",{className:h.a.recipe,children:[Object(l.jsx)("img",{src:t.recipe.image,alt:"rec",className:h.a.image}),Object(l.jsxs)("li",{children:[Object(l.jsx)("h2",{children:t.recipe.label}),Object(l.jsx)("ol",{children:t.recipe.ingredients.map((function(e){return Object(l.jsx)("li",{children:e.text})}))}),Object(l.jsxs)("h5",{children:["Calories: ",t.recipe.calories.toFixed()," kcal"]})]})]})},m=function(e){return Object(l.jsx)("div",{className:"recipes",children:Object(l.jsx)("ul",{children:e.recipes.map((function(e){return Object(l.jsx)(f,{recipe:e})}))})})};var d=function(){var e=Object(n.useState)("chicken"),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(j.a)(s,2),i=a[0],b=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(c,"&app_id=643ecb8f&app_key=7cadc8e0cf697101583abf9df9c47e54&from=0&to=3&calories=591-722&health=alcohol-free"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,b(n.hits),console.log(n.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"title",children:"Receipts on Demand"}),Object(l.jsx)(p,{query:c,setQuery:r}),Object(l.jsx)(m,{recipes:i})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),O()},5:function(e,t,c){e.exports={recipe:"recipes_recipe__1wtmK",image:"recipes_image__2Wh7W"}}},[[16,1,2]]]);
//# sourceMappingURL=main.2f102d5d.chunk.js.map