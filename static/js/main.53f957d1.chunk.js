(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{78:function(A,e,t){},80:function(A,e,t){"use strict";t.r(e);var i=t(3),n=t.n(i),r=t(20),c=t.n(r),a=t(13),s=t(15),o=t(9),l=t(8),d=t.n(l),u=t(11),j=t(21),f=t(22),h=function(){function A(){Object(j.a)(this,A)}return Object(f.a)(A,[{key:"getMovie",value:function(){var A=Object(u.a)(d.a.mark((function A(e){var t,i;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("https://api.themoviedb.org/3/search/movie?&api_key=4d5015d85f00f15236a9437603354887&query=".concat(e));case 2:return t=A.sent,A.next=5,t.json();case 5:return i=A.sent,A.abrupt("return",i);case 7:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},{key:"getDefaultMovie",value:function(){var A=Object(u.a)(d.a.mark((function A(){var e,t;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4d5015d85f00f15236a9437603354887&language=en-US&page=1");case 2:return e=A.sent,A.next=5,e.json();case 5:return t=A.sent,A.abrupt("return",t);case 7:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}()},{key:"getDetailsMovie",value:function(){var A=Object(u.a)(d.a.mark((function A(e){var t,i;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=4d5015d85f00f15236a9437603354887&language=en-US"));case 2:return t=A.sent,A.next=5,t.json();case 5:return i=A.sent,A.abrupt("return",i);case 7:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},{key:"getAlternativeMovie",value:function(){var A=Object(u.a)(d.a.mark((function A(e){var t,i;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/similar?api_key=4d5015d85f00f15236a9437603354887&language=en-US&page=1"));case 2:return t=A.sent,A.next=5,t.json();case 5:return i=A.sent,A.abrupt("return",i);case 7:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},{key:"getImage",value:function(){var A=Object(u.a)(d.a.mark((function A(e){var t;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t="https://image.tmdb.org/t/p/w1280/".concat(e),A.abrupt("return",t);case 2:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()}]),A}(),v=t(31),x=t(41),b=t(81),p=t(82),O=t(83),m=t(84),g=t(85),y=t(86),w=t(87),H=t(88),X=t(2),F=new h,P=function(A){var e=A.setData,t=Object(i.useState)(""),n=Object(a.a)(t,2),r=n[0],c=n[1],l=Object(i.useState)(""),j=Object(a.a)(l,2),f=j[0],h=j[1],P=Object(i.useState)(!1),S=Object(a.a)(P,2),D=S[0],R=S[1],T=Object(o.g)();function z(){return(z=Object(u.a)(d.a.mark((function A(){var t;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,F.getMovie(r);case 2:t=A.sent,e(t.results),c(""),h("");case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function q(){return(q=Object(u.a)(d.a.mark((function A(){var t;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,F.getDefaultMovie();case 2:t=A.sent,e(t.results),c(""),h("");case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}Object(i.useEffect)((function(){!function(){q.apply(this,arguments)}()}),[]);var V=function(A){if(A.preventDefault(),!r)return h("La busqueda no puede ser vacia");!function(){z.apply(this,arguments)}()};return Object(X.jsx)("div",{children:Object(X.jsxs)(b.a,{dark:!0,expand:"md",style:{paddingLeft:"30px",paddingRight:"60px"},children:[Object(X.jsx)(p.a,{href:"/home",children:Object(X.jsx)("img",{className:"logoStyle",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAABaCAYAAAB39ULSAAAABHNCSVQICAgIfAhkiAAAElhJREFUeF7tnQk8lWkXwJ9ryS6tDApNymTJhBT5bElCpE9RMw2KSIS20VSjKF/TPi2WFFmiZMkYFIVCm4myZGuzl/Yi23W/81xdu3rzXX033vc3fsr7PM97zvk/5zznnPeOKIi8hoUFKMNCS1JJRIIeJpuABE2CHiYWGCZqkh5Ngh4mFhgmapIeTYIeJhYYJmqSHk2CHiYWGCZqkh5Ngh4mFhgmapIeTYIeJhYYJmp+sx5NS0EqwGjaIHJKosxFTwdx/a+69LcLOhkdBEu5DJq1aEiLMg+lD9r6X3lhEnR/BidBf+Wt2M/jaH8jCcSJ9OA234AloqHbqBnlIm5Yh4Yku63Djs5TdFHVgNdmsYnfrEezmB1ZXhwSNMsjYo6AJGjm2JHlVyFBszwi5ghIgmaOHVl+FRI0yyNijoAkaObYkeVXIUGzPCLmCEiCZo4dWX4VEjTLI2KOgCRo5tiR5VchQbM8IuYISIJmjh1ZfhUSNMsjYo6AJGjm2JHlVyFBszwi5gj4RaCdnJzGiYmJSY8WHM3Z+vH5HPAd/7m1tRHVPKl5WlZeVhoZGUntKt7u3X9o8vPzo/Ly6vJ9+7wewz0avr9xo4eIlNR46ZaWFmptbW2pt7d3XV9qeXl4KY8eP56vuvpptZfXtlLGGA+PPaKioqOkP2WKxsZW9ObNu9pt2zYXf4nJ7OzsxsrJKcq2tbXRXr+uf+jhsbmyv/nu7rvHiYuPleakwEchGBc2DN0u7d+fP69F27dvvwZ/bGMMcXX9TUxaWmIy/jvHx/Htk/AP8NxWmPf8bV5eXhHY9MOXyN9zLGHQhw/7Sk+bNmWfgoKsMg8PLxuFPrN9OhgDUaltqKqy8kNB3n1Xi+XmFxgPWrRoxZgdOzbmf/edCLp1Kzvq9u2bbh4eHs34fmBgsI+JiaFJU1MzraysbL+Ghgb+HBh9E3S90tOvlU+frsBZXFxyWlVV5VfGvbCwiNCFC41022Xp+2pubkb37uWn+fkFu4SHBxD+sF9kRKSLjp7OZtCLVlhYGHP2bMRWHx+fV309JSbmr62zZio78Anw0+1C6SIQjUZD+As2G7qbk3MzNf36uv37dz3B65w9G7nLwEDfho2Njb4sDOu4GPNevnzRfONG9jlLS/ONgw4awIxQUlI5MEdjtqOAAD9qoyIahvvxwqrRQFYKFri05CE6cvT4zOPHD9/G942NLcceOOBZJy4uhq5dy4woKiq0cnZ2bsL3goLCYpYuNTPl4OBEZWUPSu7cubt0+fIluT0Vysy8TlNVVUb5+YW+iorTHRj3g4JCcn7+2VIRbziICthM+KsDOzY49op//sm5fPz4SZuIiMAKIsYyNzfnd3FxvThrlqoaNviDBw9vZWVl/mRtbd0RTbquExeXcFBDY5aLoKAgjUql0eCxHcb5CJCNnR2x1dc3UFNT02Bzmzjhn8dGX/BZaGpkT6NhR6FRwaQwF/6j4L2Bv4NF2RHl2dPnyMfH39bT0yOAiPx9jSHk0cHBwXxSUpOvqqnNnFFb+wzd+Sc39lndMxyeQRI2Cjs7O1VJ6UcpKSnJGZycnOjoUd+Nrq5O+xigDwJoMXFxAJ3RDXQwgDZfusiUk3MEamhogPvX/QwN9e17CpqVdZ02c6YKgC7oA/QyxZcvX9HS09OzX79+WwS+wQcuRTc0UGeHDUlteN8Ql5GVfqbnkdKf0fbvP7xgyRIzfzgXxPC+qaysRHl5BSZGRgZxfc1pBz3bhY+Pj5qcnHLj/fuG653jKJSxY8dMg42qw8HBwVVVWRPtsWP7ipCQkPrYWAC90Ngeji2UkZEV0tpKfcYOaGngSth1RMXF5OXkftARFBRgCw2NiP7ll58WDypoPz+/kZKS39fq6mpxJ1+6jAwW6PfaIKmpV62mTpUOFBYej074Bf5uv2bVzs+Bxh5tYWEGoNuPtgcPHr2Pioo1dnffmNZVoaysGwBaqR+PXqZYUVHZeulSipWd3cqwgRqi67yUlCtuSkozdsNO4Wr48AEJCQmi3Nx7+9XVZ2/oa/34+ISDc+aouXBz8zT7HPP9zXX9OvomZ1zr1/+q5OzsmCAiIjy+qKg4e+/eQ5ahoSfLGKBLSspQRESUlIeH++Ou8+BnsxQV5RKlpScLBQQEvlq9etXogepHyKPpoCUmPdWdq80VF/cXMjNb1GteYmLKL3JyMkEiIt+hEydO7lyzxu73z4Fu92gzUzwOQi/i5uJGaWnX7s7T14Vw3Hm1h+7+PHq5Ynl5BTXl4mUrW3ub0IEagjEPjqmxRkYmx2Rlf1hSkH//XXlFeZGxsYHK3dy8OmUVJREY1y0s43lxcfHg0XNceHn5mo8fB9AfoxljTUdHR1lXV7eUiRMniBTkF+QeOXDE4lToqWIG6FIAHd4H6LCwc0o/KsrHT5WRFgkICHoNoEcNVD/CoKWkvn86d64OV2xsHIA27TXvyMHjBsKiwsd4ePlG3bhx02XXrt9PY6EWLDAX+fNP7xrI1nud0cHBZ2LMzReZvn79pi0vL7919mxVDjgJ2Px8An532+DiCdPp6UlWJng0PqPv3fdVnCHf44xeBqArqRcvXrKyt7f9n0EnJ6fLT5kyKRKSx6nBwWFxwsLCQRB2I9nZ2di9vPY4HTz4x9Gexm4HrU4H7XPMf6uL29q9XcfY2jrK/vrrBgAtLgJ65h7tAbqkpBRFRp6btG3btkdd5wUHhysrKyvEy8jICJ/wD2xcbb+KZ/BBSwJoPV2uCwB6kZkJoQ3CAH34sHcNTsYyr2VFFBYVdCRjGDSchaZv376r++uvhJM62pqmEyXEZe7lFhYnJyUt2/TbpjudoMGj70Ey1gu0pWJVVQ318uUr7m1tbL3OUAqlpcXGxuYhUQPFxFxYq66udgRnRFu2bFfX09R6rTRbOVxCYqICZMk5y5dbzugNOuHgv/6l5gLVCA7dW1zcnPd3HbN2rav8unWOyZKSEsL5+fezIQfoFrpLS8swaMmtW7fSs3HGBR49U1FRPmHKFOkxp04F1YNH8xPVo+c4QsBw6JYaDNAQupdYLDZ99+7906iomLVjx46dDeWGG4Txxlu3bu89ccLPG9eP7R7dH+hlijiRe/Hi5QPwOqjDu6vU3NTycqent/Pp0/4PiBgpMeHSLTiiVO7DZWLiPMPObh6fgYHhn1OnTlkG2TeUROGTvby8uq0VD8mYOj0Z422NioqLbmz8EM94FmwYipCQkJyGhpqDAJQssCnjNm3asAL0esMI3RUVVQjyAncOCnslldrK2UaB4p3GRps8eZL8Dz9MdYFkjuP06ZA7K1daKxHRoa8xXxd0Jnh0YRePDgqBM/rfpvX1H2qjo2PWVFdXXNPTm1eooqI07vHj8qL8/GJzMzOj/M+B7lSM9rGG7VTrw4fG5+vWrTcLCPDBzYpPXlpaVtw+x93fQVThgLzAb968ubgCoCQkJG2CUmsHF9cIroz0DHP9Bfrnuy7EAA3ZMQ3q5UYojRq73oeqhIufn5enqamJkp2de1pTc44Vvs8AjWt92OzvoIJpgbm4qMZVHRrBycHFy8fDC2UZ8vUN2Anhn573DOT6uqB7hu6PyVgDgI6JuuCwarV1LJyDs6ytf04fOVJwxJUr6WcXLjS0yMzMgmRMFRUUFPlOny7b64yGM56Wlnq1+uWrl++hJAXa3UzxNCYmUj8xMZFeu3/q8vc/tdvCwtz97du3rbm5OaZGRkaJ2Oient664E0nRUTGT7x+/Xr8oUOHFoNH0ps++IqHM3qOhpqL4EhBKBObWiHP6AYad9cgSrWVFJeWZmZlWLq5uZV1gjayp1JbUGNjSxNUVi04LQHgNKj/2WGPUZubm5ozrmVlm5gaz/+c/J+6zzTQBgYGXFJSMhM4aey8h32eFCDU3gbFyRjjjO7ZMMFZNw7dDQ0faiB0O9ja2tA7ahDGzquqzlxcVVWNoqKi52traybNVIHQXQDJmGLPZIyedbclJydDebUqZKDGwPL/tmX7nVmzVaZVVVa9rayqPNrWxl4FjY5W8LYxEEIdxMREJ9TU1JRAbmGzZcumzE7Q7aGbl5cX6ugrSeD5F3DIZtwHgK3Qvn37009LouFnHVk7w6NraqqhqZO7m49P8BGN1srGxcXdCj0BAUFB/tcPHz6qLii4m7Vv3776geqG5zENdHR0nM7ECeI7hUYJ8SYmXtrj5GR/lhjofwPo+pqYmDj7lSut6MlUYGCIHmTgpyF5+S4tNa12vPA4EXl5BfDovkE/eVLelpKC6+iBg97mvlPTbaNzmoAgH72bBiEfWrvt7Uvc1+Tm4UEAED2ve950JydvnYHBXD+G4RkNEwDdFBBwap2jo0PHvU/B6ayjSxHAHqWtrf36f4H5VTw6MfHiL3Ky04JExUShjg70srdftY0But/yCrdALfEZ3R00brnqaM/dJa8wbQPumkFzC0FGi/LuFvrOUO7ZAl2mCKBply+nWNna2gYP1FCQ4QZaWCy2ampqRHV1L+iwO6/2zqqICC6jaSg7OycmNfWGnYfHhuf00I0bJuqQddNBBzk5OtqdICJHV9BlZaWj4ajos5dOZK3PjSHk0aF/hgqOlxGp1tXV4Uv4OwklJsULQKO/4xwaN24c28qVtjYK8rI+wiLCCLo4O1avtvXAD7ewsBD19PSqwnV0Rkb3XjcjdENohGQs1gHKh1iGwEcPHVWdb6gfIjVpkjTuBePkpBfoQOh1r8B1dEXbpcQUm/BzoWEgC62urq5DL/x3OE9xuOz1soTxrM2bN0+0WGoZrjBdQe3Bg7JHsbHx1ps2uWVgulpaWrDJeNhLS0vRgQOHnxoazh8JnSxQP9948eLF9LINg1ZTo7dAMWg3AH38c4bH96Nxr3uhoT0ur2pra/7/Hk3vdUtMypitrqpYXVWD7uTkBoFSBThDhPcYVNj9gtBY0IcSRBW/oDh2zG8zdIf+wMpoaZkK+fvveyUuLor7uX32uqE3/DTm/AVHO4eVUV0NFBZ29j8mJkabubmxV9NQYWFxtzM6IjzyovkSs3kvXjyn5eUVhrW10u5R2BG8HGjreOkHR2Uz9OdL4+Kir/T3qu/MmXN6mprqJ4SFRSQg8buoqanRZ+Lj7b13s7PTmv+8r3+Pbt7MNgZI9DKqs2HC2wQvWtbChiX08oHlQEMdzSkhIeWtrPzjeqgJEYBBrdCyZJzwmDY3Nzfi5OSAt1CPX4Gy2nv2eN7FRli0aNGYP/bsfY5DOgZdXNz59iqYXl4tNoX1enk0nuvu7j7O2HjhZSi35LFHF+bjzlhn6E6ITzo5b76uDfZ4LBOVivM/CpRYndsFXhRAjzz/alhYpPWpUz59NU4okAg5Tp4ssZ+Li3eEv+/Jbc4ua7z68kh7e3vJDes35UD5JZSSnBq/wFDfmAEa97qhjm46eeK085q1q/2JeDQO3UZGhvbw5g7kfycEbbA3ROYNZAyh0I0XPnLkiNSECZL7ZafJLhQQ4GOnsHWZChBaWlrRk/InlXdu3/FwcnE8xQiVpuDRW/b89koE3kffvn07oqqqsqMz5u93MtjI2GB5PYBOuXRltcNau45GA0OZrVs9FlhaLP17zJjRqLio1FdTe05HeZWUkLRrhtKMLZhs+7vc9ujcVakWOGsLCgrTzpw5bx0U5Pu4p5Hwhwb09NRPyMhMNXnypAIFB5/6Ht4799tJg5IvVkZmiklJUVmzlo4GN35oRETkQWXlGS483LyNEWcjHdavdw4iAiM0ONxHT18XQJdBWVYvpKen9/8HTURwcgzrWoCwR7OuCqRkRCxAgiZipSEwhgQ9BCASUYEETcRKQ2AMCXoIQCSiAgmaiJWGwBgS9BCASEQFEjQRKw2BMSToIQCRiAokaCJWGgJjSNBDACIRFUjQRKw0BMaQoIcARCIqkKCJWGkIjCFBDwGIRFQgQROx0hAY882Cpl1G3yMqEh80BhSUS9FDg/aJj0GTu5+Fv13QKWgHfHLIbtAMRkFm8O9edfkf2gftSV9l4W8X9CW0Hz4c5gpW6k8H/ElB+AQj/rUv9C/iF/zKAcSOtOFfyblKfBJrj/x2QcMvXoDQvQIw4w/o9XVVgsffRGxIDr5P/UIMz2BreFO00eMvnMeyw79Z0CxrURYVjATNomCYLRYJmtkWZdH1SNAsCobZYpGgmW1RFl2PBM2iYJgtFgma2RZl0fVI0CwKhtlikaCZbVEWXY8EzaJgmC0WCZrZFmXR9UjQLAqG2WKRoJltURZdjwTNomCYLRYJmtkWZdH1SNAsCobZYv0X1oeu08ljovUAAAAASUVORK5CYII=",alt:"logo-app"})}),Object(X.jsx)("div",{children:(null===T||void 0===T?void 0:T.pathname.includes("home"))?Object(X.jsxs)("form",{onSubmit:function(A){return V(A)},children:[Object(X.jsx)("input",{className:"inputSearch",type:"text",placeholder:"Search",value:r,onChange:function(A){return c(A.target.value)},autoFocus:!0}),""!==f?Object(X.jsx)("p",{className:"errorText",children:""!==f?f:null}):null]}):null}),Object(X.jsx)(O.a,{style:{color:"#fff"},onClick:function(){return R(!D)}}),Object(X.jsxs)(m.a,{isOpen:D,navbar:!0,children:[Object(X.jsxs)(g.a,{className:"mr-auto",navbar:!0,children:[Object(X.jsx)(y.a,{children:Object(X.jsx)(w.a,{href:"/home",children:Object(X.jsx)(v.b,{color:"#fff",size:30})})}),Object(X.jsx)(y.a,{children:Object(X.jsx)(w.a,{href:"/home",children:Object(X.jsx)(x.a,{color:"#fff",size:30})})}),Object(X.jsx)(y.a,{children:Object(X.jsx)(w.a,{href:"/home",children:Object(X.jsx)(s.b,{to:"/home",children:Object(X.jsx)(v.a,{color:"#fff",size:30})})})})]}),Object(X.jsx)(H.a,{style:{color:"#fff"},children:"User Test"})]})]})})},S=t(43),D=t(42),R=t.p+"static/media/notFound.87763592.png",T=function(A){Object(S.a)(t,A);var e=Object(D.a)(t);function t(){return Object(j.a)(this,t),e.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return Object(X.jsxs)("div",{children:[Object(X.jsx)("img",{src:R}),Object(X.jsx)("p",{style:{textAlign:"center",color:"#fff",fontSize:"50px"},children:Object(X.jsx)(s.b,{to:"/",children:"Go to Home "})})]})}}]),t}(n.a.Component),z=t(18),q=t(24),V=t.n(q),Z=t(26),B=t(25),L=t(94),E=function(A){var e=A.data.filter((function(A){return null!==(null===A||void 0===A?void 0:A.backdrop_path)}));return console.log("result",e),Object(X.jsx)("div",{style:{paddingLeft:"30px",paddingRight:"30px"},children:Object(X.jsxs)(V.a,Object(z.a)(Object(z.a)({},{infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{children:[0===e.length?Object(X.jsx)(L.a,{color:"danger",children:"No se ha encontrado resultados"}):null,null===e||void 0===e?void 0:e.map((function(A){var e=null!==(null===A||void 0===A?void 0:A.backdrop_path)?null===A||void 0===A?void 0:A.backdrop_path:null;return Object(X.jsxs)(s.b,{to:"/movie/".concat(null===A||void 0===A?void 0:A.id),children:[e?Object(X.jsx)("div",{className:"radius",style:{borderRadius:"20px"},children:Object(X.jsx)(B.LazyLoadImage,{alt:null===A||void 0===A?void 0:A.title,style:{width:"100%",height:"500px",padding:"30px",marginRight:"100px"},delayTime:300,src:"https://image.tmdb.org/t/p/w1280/".concat(e)},"".concat(null===A||void 0===A?void 0:A.title,"+").concat(null===A||void 0===A?void 0:A.id))}):Object(X.jsx)("div",{style:{width:"100%",height:"400px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(X.jsx)(Z.a,{size:200,color:"#fff"})}),Object(X.jsx)("div",{className:"titles",children:(null===A||void 0===A?void 0:A.title.length)>30?Object(X.jsxs)("h1",{className:"titleMovie",children:[null===A||void 0===A?void 0:A.title.substr(0,30),"..."]}):Object(X.jsx)("h1",{className:"titleMovie",children:null===A||void 0===A?void 0:A.title})})]},"".concat(null===A||void 0===A?void 0:A.title,"+").concat(null===A||void 0===A?void 0:A.id))}))]}))})},k=function(A){var e=A.title;return Object(X.jsx)("div",{children:Object(X.jsx)("h2",{style:{color:"#fff"},children:e})})},J=(t(76),t(77),function(A){var e=A.data.filter((function(A){return null!==(null===A||void 0===A?void 0:A.poster_path)}));return Object(X.jsx)("div",{style:{paddingLeft:"50px",paddingRight:"50px"},children:Object(X.jsx)(V.a,Object(z.a)(Object(z.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:6,initialSlide:0,responsive:[{breakpoint:1050,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0,dots:!0}},{breakpoint:860,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:1}},{breakpoint:670,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:1}},{breakpoint:530,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{children:null===e||void 0===e?void 0:e.map((function(A){return Object(X.jsx)(s.b,{to:"/movie/".concat(null===A||void 0===A?void 0:A.id),children:null!==(null===A||void 0===A?void 0:A.poster_path)?Object(X.jsx)("div",{className:"radius",style:{borderRadius:"20px"},children:Object(X.jsx)(B.LazyLoadImage,{alt:null===A||void 0===A?void 0:A.title,style:{width:"100%",height:"350px",padding:"30px"},delayTime:300,src:"https://image.tmdb.org/t/p/w1280/".concat(null===A||void 0===A?void 0:A.poster_path)})}):Object(X.jsx)("div",{style:{width:"100%",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(X.jsx)(Z.a,{size:200,color:"#fff"})})},"".concat(null===A||void 0===A?void 0:A.title,"+").concat(null===A||void 0===A?void 0:A.id))}))}))})}),Y=new h,I=function(A){var e=A.data,t=Object(i.useState)([]),n=Object(a.a)(t,2),r=n[0],c=n[1],s=Object(i.useState)([]),o=Object(a.a)(s,2),l=o[0],j=o[1];function f(){return(f=Object(u.a)(d.a.mark((function A(){var e;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Y.getMovie("DC");case 2:e=A.sent,c(e.results);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function h(){return(h=Object(u.a)(d.a.mark((function A(){var e;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Y.getMovie("Marvel");case 2:e=A.sent,j(e.results);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}return Object(i.useEffect)((function(){!function(){f.apply(this,arguments)}(),function(){h.apply(this,arguments)}()}),[]),Object(X.jsxs)("div",{children:[e!==[]?Object(X.jsx)(E,{data:e}):null,Object(X.jsx)("div",{style:{marginLeft:"5%",marginRight:"5%"},children:Object(X.jsx)(k,{title:"Marvel"})}),Object(X.jsx)(J,{data:l}),Object(X.jsx)("div",{style:{marginLeft:"5%",marginRight:"5%"},children:Object(X.jsx)(k,{title:"DC"})}),Object(X.jsx)(J,{data:r})]})},W=t(89),C=t(90),Q=t(91),N=t(92),G=t(93),M=t.p+"static/media/face.ed1c6925.jpg",U=function(){return Object(X.jsxs)(W.a,{children:[Object(X.jsx)(C.a,{style:{margin:"30px"},children:Object(X.jsx)(Q.a,{body:!0,style:{backgroundColor:"#0B1322"},children:Object(X.jsxs)("div",{className:"card",children:[Object(X.jsx)("div",{children:Object(X.jsx)("img",{style:{height:"100px",width:"100px",borderRadius:"200px"},src:M,alt:"Face"})}),Object(X.jsxs)("div",{className:"info",children:[Object(X.jsxs)(W.a,{body:!0,children:[Object(X.jsx)(C.a,{children:Object(X.jsx)(N.a,{tag:"h5",style:{color:"white"},children:"Name"})}),Object(X.jsx)(C.a,{children:Object(X.jsx)("h5",{style:{color:"yellow"},children:"09/10/2021"})})]}),Object(X.jsx)(G.a,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sit obcaecati quod natus eligendi officia labore eos autem dolorum expedita, dolor quasi! Aliquam non perferendis quibusdam id! Vero veritatis nemo ullam praesentium consectetur iure necessitatibus doloribus?"}),Object(X.jsx)("h6",{style:{color:"yellow"},children:"Leer mas..."})]})]})})}),Object(X.jsx)(C.a,{style:{margin:"30px"},children:Object(X.jsx)(Q.a,{body:!0,style:{backgroundColor:"#0B1322"},children:Object(X.jsxs)("div",{className:"card",children:[Object(X.jsx)("div",{children:Object(X.jsx)("img",{style:{height:"100px",width:"100px",borderRadius:"200px"},src:M,alt:"Face"})}),Object(X.jsxs)("div",{className:"info",children:[Object(X.jsxs)(W.a,{body:!0,children:[Object(X.jsx)(C.a,{children:Object(X.jsx)(N.a,{tag:"h5",style:{color:"white"},children:"Name"})}),Object(X.jsx)(C.a,{children:Object(X.jsx)("h5",{style:{color:"yellow"},children:"09/10/2021"})})]}),Object(X.jsx)(G.a,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sit obcaecati quod natus eligendi officia labore eos autem dolorum expedita, dolor quasi! Aliquam non perferendis quibusdam id! Vero veritatis nemo ullam praesentium consectetur iure necessitatibus doloribus?"}),Object(X.jsx)("h6",{style:{color:"yellow"},children:"Leer mas..."})]})]})})})]})},K=new h,_=function(){var A,e,t=Object(o.h)(),n=Object(i.useState)([]),r=Object(a.a)(n,2),c=r[0],s=r[1],l=Object(i.useState)([]),j=Object(a.a)(l,2),f=j[0],h=j[1],v=Object(i.useState)(""),x=Object(a.a)(v,2),b=x[0],p=x[1];function O(){return(O=Object(u.a)(d.a.mark((function A(){var e;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,K.getDetailsMovie(null===t||void 0===t?void 0:t.id);case 2:!1===(e=A.sent).success?p(null===e||void 0===e?void 0:e.status_message):s(e);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function m(){return(m=Object(u.a)(d.a.mark((function A(){var e;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,K.getAlternativeMovie(null===t||void 0===t?void 0:t.id);case 2:!1===(e=A.sent).success?p(null===e||void 0===e?void 0:e.status_message):h(e.results);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}Object(i.useEffect)((function(){!function(){O.apply(this,arguments)}(),function(){m.apply(this,arguments)}()}),[null===t||void 0===t?void 0:t.id]);var g=null===f||void 0===f?void 0:f.filter((function(A){return null!==(null===A||void 0===A?void 0:A.backdrop_path)}));return Object(X.jsx)(X.Fragment,{children:""===b?Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{style:{backgroundImage:"url(https://image.tmdb.org/t/p/w1280/".concat(null===c||void 0===c?void 0:c.backdrop_path,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100%"},children:Object(X.jsxs)("div",{className:"movieDetails",children:[Object(X.jsx)("img",{style:{width:"350px",height:"500px"},src:"https://image.tmdb.org/t/p/w1280/".concat(null===c||void 0===c?void 0:c.poster_path),alt:c.title}),Object(X.jsxs)("div",{className:"resumen",children:[Object(X.jsx)("h1",{style:{color:"#fff",margin:"10px"},children:null===c||void 0===c?void 0:c.title}),Object(X.jsx)("h3",{style:{color:"#fff",margin:"10px"},children:null===c||void 0===c?void 0:c.overview}),Object(X.jsx)("h2",{style:{color:"#fff",margin:"10px"},children:"Genero"}),Object(X.jsx)("div",{style:{display:"flex",justifyContent:"space-around",maxWidth:"400px",margin:"10px"},children:null===c||void 0===c||null===(A=c.genres)||void 0===A?void 0:A.map((function(A){return Object(X.jsx)("h3",{style:{color:"#fff"},children:A.name})}))})]})]})}),Object(X.jsxs)("div",{style:{paddingTop:"30px"},children:[Object(X.jsx)("h2",{style:{color:"#fff",margin:"20px"},children:"Compa\xf1\xedas"}),Object(X.jsx)("div",{style:{display:"flex",justifyContent:"space-between",maxWidth:"400px",maxHeight:"200px",margin:"10px"},children:null===c||void 0===c||null===(e=c.production_companies)||void 0===e?void 0:e.map((function(A){return Object(X.jsxs)("div",{style:{margin:"10px",maxHeight:"200px"},children:[null!==A.logo_path?Object(X.jsx)("img",{style:{width:"100px",maxHeight:"150px"},src:"https://image.tmdb.org/t/p/w1280/".concat(null===A||void 0===A?void 0:A.logo_path),alt:A.name}):Object(X.jsx)("img",{style:{width:"100px",maxHeight:"150px"},src:"data:image/png;base64,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",alt:A.name}),Object(X.jsx)("p",{style:{textAlign:"center",fontWeight:600,marginTop:"10px"},children:null===A||void 0===A?void 0:A.name})]})}))})]}),Object(X.jsx)("h2",{style:{color:"#fff",margin:"20px"},children:"Comentarios"}),Object(X.jsx)(U,{}),Object(X.jsx)("h2",{style:{color:"#fff",margin:"20px"},children:"Titulos Similares"}),Object(X.jsx)(J,{data:g})]}):Object(X.jsx)("div",{style:{height:"100vh"},children:Object(X.jsx)("h1",{className:"errorText",children:b})})})},$=function(){var A=Object(i.useState)([]),e=Object(a.a)(A,2),t=e[0],n=e[1];return Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)(s.a,{children:[Object(X.jsx)(P,{setData:function(A){n(A)}}),Object(X.jsxs)(o.d,{children:[Object(X.jsx)(o.b,{path:"/movie/:id",children:Object(X.jsx)(_,{})}),Object(X.jsx)(o.b,{path:"/home",children:Object(X.jsx)(I,{data:t})}),Object(X.jsx)(o.b,{component:T}),Object(X.jsx)(o.a,{from:"/",to:"/home"})]})]})})};t(78),t(79);c.a.render(Object(X.jsx)(X.Fragment,{children:Object(X.jsx)($,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.53f957d1.chunk.js.map