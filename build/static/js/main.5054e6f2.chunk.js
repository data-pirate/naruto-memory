(this.webpackJsonpmemory_game=this.webpackJsonpmemory_game||[]).push([[0],{12:function(e,n,a){},13:function(e,n,a){},15:function(e,n,a){},16:function(e,n,a){"use strict";a.r(n);var t=a(1),c=a.n(t),s=a(6),r=a.n(s),i=a(4),g=(a(12),a(7)),p=(a(13),a(0));var o=function(e){return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{src:e.image,alt:e.name}),Object(p.jsx)("h2",{className:"title",children:e.name})]})},m=[{name:"Naruto Uzumaki",image:"https://www.pngfind.com/pngs/b/17-174708_naruto-headband-png.png"},{name:"Sasuke Uchiha",image:"https://www.pngfind.com/pngs/b/175-1753232_sasuke-png.png"},{name:"Sakura Haruno",image:"https://www.pngfind.com/pngs/b/572-5724349_sakura-haruno-png.png"},{name:"Kakashi Hatake",image:"https://www.pngfind.com/pngs/b/567-5672083_kakashi-hatake-png.png"},{name:"Boruto Uzumaki",image:"https://www.pngfind.com/pngs/b/318-3189639_boruto-png.png"},{name:"Sarada Uchiha",image:"https://www.pngfind.com/pngs/b/407-4070378_sasuke-the-last-png.png"},{name:"Mitsuki",image:"https://www.pngfind.com/pngs/b/292-2926409_naruto-headband-png.png"},{name:"Hinata Hyuga",image:"https://www.pngfind.com/pngs/b/143-1433450_hinata-png.png"},{name:"Shikamaru Nara",image:"https://www.pngfind.com/pngs/b/450-4502981_shikamaru-png.png"},{name:"Ino Yamanaka",image:"https://www.pngfind.com/pngs/b/611-6112528_deidara-png.png"},{name:"Rock Lee",image:"https://www.pngfind.com/pngs/b/656-6560580_rock-lee-png.png"},{name:"Neji Hyuga",image:"https://www.pngfind.com/pngs/b/469-4694657_anime-hat-png.png"}];var h=function(e){var n=m;return Object(t.useEffect)((function(){!function(e){for(var n=e.length-1;n>0;n--){var a=Math.floor(Math.random()*(n+1)),t=[e[a],e[n]];e[n]=t[0],e[a]=t[1]}}(n),e.updateHighScore(Math.max(e.highScore,e.currScore))})),Object(p.jsx)("div",{className:"cards",onClick:function(n){var a=n.target.parentElement.querySelector(".title").textContent;if(a)if(e.selected.includes(a))e.updateSelected([]),console.log("game over"),e.updateRightGuess(0);else{var t=[].concat(Object(g.a)(e.selected),[a]);e.updateSelected(t),e.updateRightGuess(e.currScore+1)}},children:n.map((function(e){return Object(p.jsx)(o,{image:e.image,name:e.name},e.name)}))})};var u=function(){return Object(p.jsx)("div",{className:"header",children:Object(p.jsx)("h1",{children:"Naruto Memory"})})};a(15);var d=function(e){return Object(p.jsxs)("div",{className:"scores",children:[Object(p.jsxs)("div",{children:["High Scores",Object(p.jsx)("h3",{className:"high-score",children:e.highScore})]}),Object(p.jsxs)("div",{children:["Your Scores",Object(p.jsx)("h3",{className:"curr-score",children:e.currScore})]})]})};var j=function(){var e=Object(t.useState)([]),n=Object(i.a)(e,2),a=n[0],c=n[1],s=Object(t.useState)(0),r=Object(i.a)(s,2),g=r[0],o=r[1],m=Object(t.useState)(0),j=Object(i.a)(m,2),b=j[0],l=j[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(u,{}),Object(p.jsx)(d,{highScore:b,currScore:g}),Object(p.jsx)(h,{selected:a,updateSelected:c,updateHighScore:l,updateRightGuess:o,highScore:b,currScore:g})]})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5054e6f2.chunk.js.map