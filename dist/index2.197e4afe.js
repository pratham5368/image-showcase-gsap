!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequire392c;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequire392c=a),a.register;var i=a("cH00A"),n=a("1OZqT"),o=a("jOTZQ"),s=a("4HiNC");let l=document.body,p={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{p={width:window.innerWidth,height:window.innerHeight}});let d=document.querySelector(".content__overlay"),c=[];[...document.querySelectorAll(".preview__item")].forEach(e=>{c.push(new s.PreviewItem(e))});let u=[];[...document.querySelectorAll(".content__item")].forEach((e,t)=>{u.push(new o.ContentItem(e,c[t]))});let m=-1,w=!1,g=document.querySelector(".preview__back");for(let[e,t]of u.entries())t.DOM.imgWrap.addEventListener("click",()=>{if(w)return;w=!0,m=e;let r=c[e];(0,i.gsap).timeline({defaults:{duration:1,ease:"expo"},onStart:()=>{l.classList.add("preview-open"),(0,i.gsap).set(r.DOM.el,{clipPath:`circle(0vmax at ${p.width/2}px ${p.height/2}px)`}),(0,i.gsap).set(r.DOM.img,{scale:.8}),(0,i.gsap).set(r.DOM.title,{scale:1.6}),(0,i.gsap).set(r.DOM.boxes,{xPercent:e=>e?20:-20}),(0,i.gsap).set(g,{x:"+=15%",opacity:0}),r.DOM.el.classList.add("preview__item--current")},onComplete:()=>{(0,i.gsap).set(r.DOM.el,{clipPath:"none"}),w=!1}}).addLabel("start",0).addLabel("preview","start+=0.3").to(t.DOM.imgWrap,{ease:"power2",scale:1.2},"start").to(d,{ease:"power2",scale:1},"start").to(r.DOM.el,{duration:.9,ease:"power2",clipPath:`circle(60vmax at ${p.width/2}px ${p.height/2}px)`},"preview").to([r.DOM.img,r.DOM.title],{scale:1},"preview").to(r.DOM.boxes,{xPercent:0},"preview").to(g,{ease:"power2",opacity:1,x:"-=15%"},"preview")}),t.DOM.imgWrap.addEventListener("mouseenter",()=>{(0,i.gsap).timeline({defaults:{duration:.8,ease:"power4"}}).addLabel("start",0).set(t.DOM.titleInner,{transformOrigin:"0% 50%"},"start").to(t.DOM.titleInner,{startAt:{filter:"blur(0px)"},duration:.2,ease:"power1.in",yPercent:-100,rotation:-4,filter:"blur(6px)"},"start").to(t.DOM.titleInner,{startAt:{yPercent:100,rotation:4,filter:"blur(6px)"},yPercent:0,rotation:0,filter:"blur(0px)"},"start+=0.2").to(t.DOM.imgWrap,{scale:.95},"start").to(t.DOM.img,{scale:1.2},"start")}),t.DOM.imgWrap.addEventListener("mouseleave",()=>{(0,i.gsap).timeline({defaults:{duration:.8,ease:"power4"}}).addLabel("start",0).to([t.DOM.imgWrap,t.DOM.img],{scale:1},"start")});g.addEventListener("click",()=>{if(w)return;w=!0;let e=c[m];(0,i.gsap).timeline({defaults:{duration:1,ease:"power2"},onStart:()=>{(0,i.gsap).set(e.DOM.el,{clipPath:`circle(60vmax at ${p.width/2}px ${p.height/2}px)`})},onComplete:()=>{e.DOM.el.classList.remove("preview__item--current"),l.classList.remove("preview-open"),w=!1}}).addLabel("start",0).addLabel("content","start+=0.2").to(g,{opacity:0},"start").to(e.DOM.title,{scale:.6},"start").to(e.DOM.img,{scale:.9},"start").to(e.DOM.el,{duration:.6,clipPath:`circle(0vmax at ${p.width/2}px ${p.height/2}px)`},"start").to(d,{duration:.6,ease:"power3.inOut",scale:0},"content").to(u[m].DOM.imgWrap,{startAt:{scale:1.2},scale:1},"content")}),(0,n.preloadImages)(".content__item-img").then(()=>document.body.classList.remove("loading"))}();