import{d as m,o as d,b as h,e as s,f as n,i as r,c as g,k as i,ac as o,q as w,s as v,B as c}from"../modules/vue-Cr8adJSV.js";import{_ as k}from"../index-BgAwawQV.js";import{u as _,f as b}from"./context-DIMNQ7DD.js";import"../modules/shiki-BxWJ1Fcu.js";const $={class:"col-header"},C=m({__name:"two-cols-header",props:{class:{type:String},layoutClass:{type:String}},setup(u){const e=u;return(t,a)=>(d(),h("div",{class:r(["slidev-layout two-cols-header w-full h-full",u.layoutClass])},[s("div",$,[n(t.$slots,"default",{},void 0,!0)]),s("div",{class:r(["col-left",e.class])},[n(t.$slots,"left",{},void 0,!0)],2),s("div",{class:r(["col-right",e.class])},[n(t.$slots,"right",{},void 0,!0)],2),s("div",{class:r(["col-bottom",e.class])},[n(t.$slots,"bottom",{},void 0,!0)],2)],2))}}),x=k(C,[["__scopeId","data-v-ecda4088"]]),E={__name:"ci.md__slidev_7",setup(u){const{$slidev:e,$nav:t,$clicksContext:a,$clicks:y,$page:P,$renderContext:S,$frontmatter:p}=_();return a.setup(),(B,l)=>(d(),g(x,w(v(c(b)(c(p),6))),{left:i(f=>l[0]||(l[0]=[s("h2",null,"Workflow",-1),s("ul",null,[s("li",null,"Processus automatisé qui s’exécute lorsqu’un déclencheur est activé")],-1),s("h2",null,"Job",-1),s("ul",null,[s("li",null,[o("Exécutés sur un "),s("em",null,"runner"),o(", en parallèle par défaut")]),s("li",null,[o("Contient une ou plusieurs étapes ("),s("em",null,"steps"),o(")")]),s("li",null,"Les jobs ne partagent pas leurs données")],-1),s("h2",null,"Steps",-1),s("ul",null,[s("li",null,"Suite d’instructions (scripts) ou actions"),s("li",null,"Les instructions partagent leurs données")],-1)])),right:i(f=>l[1]||(l[1]=[s("h2",null,"Déclencheurs",-1),s("ul",null,[s("li",null,[s("code",null,"git push"),o(" … mais pas seulement")]),s("li",null,"La plupart des déclencheurs ont des filtres"),s("li",null,[s("a",{href:"https://docs.github.com/fr/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows",target:"_blank"},"GitHub Actions Events")])],-1),s("h2",null,"Conditions",-1),s("ul",null,[s("li",null,"Filtre des jobs à l’intérieur d’un workflow"),s("li",null,[s("a",{href:"https://docs.github.com/fr/actions/writing-workflows/choosing-when-your-workflow-runs/using-conditions-to-control-job-execution",target:"_blank"},"GitHub Actions conditions")])],-1)])),default:i(()=>[l[2]||(l[2]=s("h1",null,"Concepts GitHub Actions",-1))]),_:1},16))}};export{E as default};