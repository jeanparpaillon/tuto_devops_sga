import{d as v,z as c,o as d,b as u,e as s,h as x,i as r,x as o,g,f as y,c as $,q as b,s as w,B as m}from"./modules/vue-Cr8adJSV.js";import{u as h,f as C}from"./slidev/context-DIMNQ7DD.js";import"./index-BgAwawQV.js";import"./modules/shiki-BxWJ1Fcu.js";function _(e){return e.startsWith("/")?"/tuto_devops_sga/"+e.slice(1):e}function j(e,l=!1,n="cover"){const a=e&&(e[0]==="#"||e.startsWith("rgb")),i={background:a?e:void 0,color:e&&!a?"white":void 0,backgroundImage:a?void 0:e?l?`linear-gradient(#0005, #0008), url(${_(e)})`:`url("${_(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:n};return i.background||delete i.background,i}const k={class:"slidev-layout about-me p-0"},B={key:0,class:"flex"},S={class:"font-extrabold"},z={class:"text-2xl space-y-2 mt-4"},P={class:"job"},M={class:"line-1"},R={class:"line-2"},A={class:"text-2xl space-y-2 mt-4"},I={class:"social social-1"},N={class:"social social-2"},V={class:"social social-3"},W=v({__name:"about-me",props:{imageSrc:{},helloMsg:{},name:{},job:{},line1:{},line2:{},email:{},social1:{},social2:{},social3:{},position:{}},setup(e){h();const l=e,n=c(()=>j(l.imageSrc,!1)),a=c(()=>l.position==="left"?"flex-row-reverse":"flex-row"),i=c(()=>l.position==="left"?"items-start":"items-end"),f=c(()=>l.position==="left"?"text-left":"text-right");return(t,p)=>(d(),u("div",k,[s("div",{class:r(["flex h-full",a.value])},[s("div",{class:"w-1/2 h-full flex flex-col justify-end",style:x(n.value)},null,4),s("div",{class:r(["w-1/2 flex flex-col justify-between px-8 py-16",i.value])},[t.helloMsg?(d(),u("h1",B,o(t.helloMsg),1)):g("",!0),s("div",{class:r(["flex flex-col flex flex-col justify-end py-16",[i.value,f.value]])},[s("h2",S,o(t.name),1),s("div",z,[s("p",P,o(t.job),1),s("p",M,o(t.line1),1),s("p",R,o(t.line2),1)]),s("div",A,[s("p",I,o(t.social1),1),s("p",N,o(t.social2),1),s("p",V,o(t.social3),1)])],2)],2)],2),y(t.$slots,"default")]))}}),G={__name:"slides.md__slidev_2",setup(e){const{$slidev:l,$nav:n,$clicksContext:a,$clicks:i,$page:f,$renderContext:t,$frontmatter:p}=h();return a.setup(),(q,D)=>(d(),$(W,b(w(m(C)(m(p),1))),null,16))}};export{G as default};
