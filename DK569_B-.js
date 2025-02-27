import{s,c as e,_ as a,a as t}from"./D6061V51.js";import{d as i,c as n,f as m,R as r,S as l,y as o,A as c,C as d,J as g,I as u,u as p,U as _,D as v,E as b,B as y,G as x,$ as f,m as h}from"./ChytOuy1.js";const $={key:0,class:"cycling-hero__body"},w=e(i({__name:"CyclingHero",props:{durationIn:{default:500},durationOut:{default:500},delay:{default:2e3},start:{default:0},max:{}},setup(e){const a=e,t=n(a.start),i=n(null),y=m((()=>({"--_duration-in":`${a.durationIn}ms`,"--_duration-out":`${a.durationOut}ms`})));return r((()=>{i.value=s((()=>{t.value+=1,t.value>=a.max&&(t.value=0)}),a.delay)})),l((()=>{clearInterval(i.value)})),(s,e)=>(o(),c("div",{class:"cycling-hero",style:b(p(y))},[d(s.$slots,"pre",{},void 0,!0),s.$slots.default?(o(),c("div",$,[g(_,{mode:"out-in",name:"fade",duration:500},{default:u((()=>[d(s.$slots,"default",{active:p(t)},void 0,!0)])),_:3})])):v("",!0),d(s.$slots,"post",{},void 0,!0)],4))}}),[["__scopeId","data-v-0933af32"]]),k={class:"main-screen container container_full"},I={class:"main-screen__img"},B={class:"main-screen__body mb-32 md:mb-48"},D={key:0,class:"main-screen__text text-content-secondary text-l lg:text-xl text-center"},H=i({__name:"MainScreen",props:{max:{},link:{default:""},rel:{default:""},short:{type:Boolean,default:!1},pcImg:{type:Boolean},imgDisabled:{type:Boolean}},setup(s){const e=[{src:"/assets/images/main-screen/bg-mobile.svg",type:"max",width:360},{src:"/assets/images/main-screen/bg-mobile-375.svg",type:"max",width:375},{src:"/assets/images/main-screen/bg-mobile-375.svg",type:"max",width:390},{src:"/assets/images/main-screen/bg-mobile-390.svg",type:"max",width:414},{src:"/assets/images/main-screen/bg-mobile-414.svg",type:"max",width:428},{src:"/assets/images/main-screen/bg-mobile-428.svg",type:"max",width:575},{src:"/assets/images/main-screen/bg-mobile-575.svg",type:"max",width:767},{src:"/assets/images/main-screen/bg-mobile-768.svg",type:"max",width:991},{src:"/assets/images/main-screen/bg-mobile-991.svg",type:"max",width:1200}];return(s,i)=>{const n=t,m=w,r=a;return o(),c("div",k,[y("div",{class:x(["main-screen__img-wrapper",{"main-screen__img-wrapper_pc":s.pcImg,"main-screen__img-wrapper_hidden":s.imgDisabled}])},[y("div",I,[g(n,{src:"/assets/images/main-screen/bg.svg",alt:"hero",media:e})])],2),y("div",{class:x(["main-screen__wrapper container",{"main-screen__wrapper_short":s.short}])},[y("div",B,[g(m,{class:"mb-20 md:mb-32",max:s.max},f({_:2},[s.$slots.default?{name:"default",fn:u((({active:e})=>[d(s.$slots,"default",{active:e})])),key:"0"}:void 0,s.$slots.postHero?{name:"post",fn:u((()=>[d(s.$slots,"postHero")])),key:"1"}:void 0]),1032,["max"]),s.$slots.text?(o(),c("div",D,[d(s.$slots,"text")])):v("",!0)]),s.$slots.button?(o(),h(r,{key:0,class:"mx-auto",tag:"a",to:s.link,rel:s.rel,size:"lg","mobile-full":""},{default:u((()=>[d(s.$slots,"button")])),_:3},8,["to","rel"])):v("",!0)],2)])}}});export{H as _};
