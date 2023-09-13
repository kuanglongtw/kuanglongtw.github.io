import{h as z,u as w,_ as l,o as e,c as s,a as t,g as C,r as x,F as p,i as u,j as v,t as _,k as g,b as r,l as D,m as b,d as m,p as M,e as E}from"./entry.896c339f.js";import{_ as N}from"./Navbar.d43df316.js";import{_ as U}from"./Bubbles.5ca739db.js";import{_ as V}from"./Services.b9a76a48.js";import{_ as I}from"./MyFooter.4cebb0b3.js";import"./nuxt-link.9a5ab4ae.js";const P=n=>Object.fromEntries(Object.entries(n).filter(([,i])=>i!==void 0)),R=(n,i)=>(c,d)=>(w(()=>n({...P(c),...d.attrs},d)),()=>{var a,o;return i?(o=(a=d.slots).default)==null?void 0:o.call(a):null}),F={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},O=z({name:"Meta",inheritAttrs:!1,props:{...F,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:R(n=>{const i={...n};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),A={},G={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"h-6 w-6"},H=t("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z","clip-rule":"evenodd"},null,-1),W=[H];function K(n,i){return e(),s("svg",G,W)}const Q=l(A,[["render",K]]),T={},Z={class:"m-auto max-w-[90%] pt-12 md:max-w-[70%] md:py-24"},J=C('<h2 class="text-[1.6rem] font-bold text-primary md:text-[2rem]"> 門診時間 </h2><div class="mt-24 hidden w-full grid-cols-10 overflow-hidden rounded-xl text-2xl font-bold text-white md:grid"><div class="col-span-3 mr-1 h-24 bg-quaternary text-center"></div><div class="mx-1 h-24 bg-quaternary py-8 text-center">一</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">二</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">三</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">四</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">五</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">六</div><div class="ml-1 h-24 bg-quaternary py-8 text-center">日</div><div class="col-span-3 mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-4"><h3>早診</h3><h3>08:30~11:50</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> 林良德 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> 丁漢祥 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> 林良德 </div><div class="ml-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="col-span-3 mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-4"><h3>午診</h3><h3>14:00~17:30</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> 林良德 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> 林良德 </div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> 丁漢祥 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> 葉昀姿 </div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> 林良德 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="ml-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="col-span-3 mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-4"><h3>晚診</h3><h3>18:00~21:00</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-4 text-center transition hover:scale-105 hover:brightness-110"> 丁漢祥<br>葉昀姿 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> 林良德 </div><div class="mx-1 mt-2 h-24 bg-white/20 py-4 text-center transition hover:scale-105 hover:brightness-110"> 郭炳宏<br>葉昀姿 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> 丁漢祥 </div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> 郭炳宏 </div><div class="mx-1 mt-2 h-24 bg-tertiary py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div><div class="ml-1 mt-2 h-24 bg-white/20 py-8 text-center transition hover:scale-105 hover:brightness-110"> x </div></div><div class="mt-4 grid w-full grid-cols-4 overflow-hidden rounded-xl text-2xl font-bold text-white md:hidden"><div class="mr-1 h-24 bg-quaternary text-center"></div><div class="mx-1 h-24 bg-quaternary py-8 text-center">早診</div><div class="mx-1 h-24 bg-quaternary py-8 text-center">午診</div><div class="ml-1 h-24 bg-quaternary py-8 text-center">晚診</div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>一</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">林良德</div><div class="ml-1 mt-2 h-24 bg-tertiary py-4 text-center"> 丁漢祥<br>葉昀姿 </div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>二</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">林良德</div><div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">林良德</div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>三</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">林良德</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">丁漢祥</div><div class="ml-1 mt-2 h-24 bg-tertiary py-4 text-center"> 郭炳宏<br>葉昀姿 </div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>四</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">葉昀姿</div><div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">丁漢祥</div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>五</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">丁漢祥</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">林良德</div><div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">郭炳宏</div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>六</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">林良德</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">x</div><div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">x</div><div class="mr-1 mt-2 h-24 bg-white/30 text-center"><div class="py-8"><h3>日</h3></div></div><div class="mx-1 mt-2 h-24 bg-white/20 py-8 text-center">x</div><div class="mx-1 mt-2 h-24 bg-dark py-8 text-center">x</div><div class="ml-1 mt-2 h-24 bg-tertiary py-8 text-center">x</div></div>',3),X=[J];function Y(n,i){return e(),s("div",Z,X)}const tt=l(T,[["render",Y]]),et=""+new URL("lin.ccea6cc9.jpg",import.meta.url).href,st=""+new URL("ding.833abc32.jpg",import.meta.url).href,it=""+new URL("kuo.fcd51a2b.jpg",import.meta.url).href,nt=""+new URL("yeh.6944d2fd.jpg",import.meta.url).href,rt={class:"m-auto max-w-[95%] py-8 md:max-w-[70%]"},ot=t("h2",{class:"pl-4 text-[1.6rem] font-bold text-primary md:text-[2rem]"}," 醫師介紹 ",-1),ct={class:"mt-4 grid text-white md:grid-cols-2"},at={class:"m-6 flex h-44 w-[90%] justify-center overflow-hidden rounded-[20px] text-center shadow md:h-52"},dt={key:0,src:et,class:"w-full object-cover",alt:"光隆中醫",loading:"lazy"},lt={key:1,src:st,class:"w-full object-cover",alt:"光隆中醫",loading:"lazy"},ht={key:2,src:it,class:"w-full object-cover",alt:"光隆中醫",loading:"lazy"},mt={key:3,src:nt,class:"w-full object-cover",alt:"光隆中醫",loading:"lazy"},vt={class:"col-span-2 mt-4 overflow-hidden px-6 pb-8 pt-2 md:col-span-3"},_t={class:"text-3xl font-bold"},xt={class:"text-xl font-semibold text-primary"},pt={class:"overflow-hidden py-2 font-normal text-[#ebebeb]"},gt=t("br",null,null,-1),yt={__name:"Projects",setup(n){const i=x([{name:"林良德",image:"/static/images/lin.jpg",role:"院長",experience:["中國醫藥大學中醫學系  醫學士","衛福部桃園醫院中醫科 兼任主治醫師","桃園市中醫師公會 常務理事"],profession:["內科:心血管疾病、高血脂症、胃腸功能異常、消化道潰瘍 肝功能異常、睡眠障礙","兒科:注意力不集中、成長發育","皮膚科:溼疹 蕁麻疹 皮膚炎","針傷科:骨關節疾病、五十肩、坐骨神經痛、膝關節疾病、運動傷害、網球肘、扭拉傷"]},{name:"丁漢祥",image:"/static/images/ding.jpg",role:"專任醫師",experience:["南京中醫藥大學 醫學博士","中國醫大附設醫院 中醫婦科總醫師","中國醫藥大學學士後中醫系 醫學士","中國醫大附設醫院中醫藥 臨床實驗中心執行總醫師","衛生福利部桃園醫院 中醫科主治醫師"],profession:["婦科:痛經、帶下、月經不調、產後調理、更年期障礙、不孕症","內科:感冒、過敏性鼻炎、腸胃機能性障礙","兒科:青春期體質調理","皮膚科:青春痘、濕疹"]},{name:"郭炳宏",image:"/static/images/kuo.jpg",role:"醫師",experience:["中國醫藥大學中醫學院畢業","花蓮慈濟醫院(中醫部)中醫師","台北馬偕醫院(西醫部)婦產專科醫師","台灣婦產科醫學會會員","中華民國傷科醫學會會員","中華民國中西整合醫學會會員"],profession:["內科:心血管疾病、高血脂症、胃腸功能異常、消化道潰瘍 肝功能異常、睡眠障礙","兒科:注意力不集中、成長發育","皮膚科:溼疹 蕁麻疹 皮膚炎","針傷科:骨關節疾病、五十肩、坐骨神經痛、膝關節疾病、運動傷害、網球肘、扭拉傷"]},{name:"葉昀姿",image:"/static/images/yeh.jpg",role:"醫師",experience:["衛生福利部桃園醫院中醫師","中國醫藥大學附設醫院中醫師","中國醫藥大學學士後中醫系學士","國立陽明大學物理治療系學士","台中立人國中（國小）資源班物理治療師"],profession:["內科:心血管疾病、高血脂症、胃腸功能異常、消化道潰瘍 肝功能異常、睡眠障礙","兒科:注意力不集中、成長發育","皮膚科:溼疹 蕁麻疹 皮膚炎","針傷科:骨關節疾病、五十肩、坐骨神經痛、膝關節疾病、運動傷害、網球肘、扭拉傷"]}]);return(c,d)=>(e(),s("div",rt,[ot,t("div",ct,[(e(!0),s(p,null,u(g(i),(a,o)=>(e(),s("div",{key:o,class:"tranition grid grid-cols-3 duration-200 ease-in-out hover:scale-105 hover:opacity-90 md:grid-cols-4"},[t("div",at,[o===0?(e(),s("img",dt)):v("",!0),o===1?(e(),s("img",lt)):v("",!0),o===2?(e(),s("img",ht)):v("",!0),o===3?(e(),s("img",mt)):v("",!0)]),t("div",vt,[t("h2",_t,_(a.name),1),t("h2",xt,_(a.role),1),t("div",pt,[(e(!0),s(p,null,u(a.experience,h=>(e(),s("h3",null,_(h),1))),256)),gt,(e(!0),s(p,null,u(a.profession,h=>(e(),s("h3",null,_(h),1))),256))])])]))),128))])]))}},ut=yt,bt={},ft=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"h-6 w-6"},[t("path",{"fill-rule":"evenodd",d:"M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z","clip-rule":"evenodd"})],-1),wt=[ft];function $t(n,i){return e(),s("div",null,wt)}const St=l(bt,[["render",$t]]),jt={},kt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"h-6 w-6"},qt=t("path",{"fill-rule":"evenodd",d:"M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z","clip-rule":"evenodd"},null,-1),Bt=[qt];function Lt(n,i){return e(),s("svg",kt,Bt)}const zt=l(jt,[["render",Lt]]),Ct=""+new URL("banner.acdf97e4.jpg",import.meta.url).href,Dt={},Mt={class:"m-auto w-full max-w-[80%] py-24 md:max-w-[70%]"},Et=t("h2",{class:"text-[1.6rem] font-bold text-primary md:text-[2rem]"}," 聯絡本院 ",-1),Nt=t("h2",{class:"text-xl font-bold text-primary"},"Contact",-1),Ut={class:"w-full gap-12 py-12 text-lg font-bold text-gray-200 md:flex"},Vt=t("div",{class:"m-auto mb-8 h-32 w-32 overflow-hidden rounded-full md:m-0"},[t("img",{src:Ct,alt:""})],-1),It={class:"flex items-center gap-2 py-2"},Pt=t("h3",null,"03-4016505",-1),Rt={class:"flex items-center gap-2 py-2"},Ft=t("h3",null,"桃園市中壢區中央西路二段39號",-1);function Ot(n,i){const c=St,d=zt;return e(),s("div",Mt,[Et,Nt,t("div",Ut,[Vt,t("div",null,[t("div",It,[r(c),Pt]),t("div",Rt,[r(d),Ft])])])])}const At=l(Dt,[["render",Ot]]),Gt=""+new URL("main.956681fe.svg",import.meta.url).href;const f=n=>(M("data-v-afe4329f"),n=n(),E(),n),Ht=f(()=>t("title",null,"光隆中醫診所",-1)),Wt={class:"scrollbar-hide w-screen overflow-x-hidden"},Kt={id:"first",class:"h-screen"},Qt={class:"m-auto w-[80%] text-[1.6rem] text-white md:text-[2rem]"},Tt={class:"h-[90vh] md:grid md:grid-cols-5"},Zt={class:"mt-32 font-bold md:col-span-2"},Jt=["initial"],Xt=["initial"],Yt=["initial"],te=f(()=>t("br",null,null,-1)),ee={class:"mt-32 flex justify-center md:justify-start"},se={href:"#second"},ie={class:"flex items-center gap-1 overflow-hidden rounded-xl bg-primary px-8 py-1 text-[18px] leading-10 text-white shadow transition delay-150 ease-in-out hover:bg-secondary"},ne=f(()=>t("div",{class:"relative hidden w-full p-32 md:col-span-3 md:block"},[t("img",{class:"m-auto h-full w-full",src:Gt,alt:""})],-1)),re={id:"second"},oe={id:"third"},ce={id:"fourth"},ae={id:"fifth"},de={__name:"index",setup(n){const i=x("光隆中醫診所");w({title:i,meta:[{name:"google-site-verification",content:"_QGfOq9CIrKWskl0mobjGr_yLLyZDDIuvWcENn-vLDs"}]}),x();const c=x({scale:.5,y:100,opacity:0});return(d,a)=>{const o=O,h=N,$=U,S=Q,j=V,k=tt,q=ut,B=At,L=I,y=D("motion");return e(),s(p,null,[t("header",null,[Ht,r(o,{name:"keywords",content:"光隆中醫診所,桃園中醫,中壢中醫,光隆中醫"}),r(o,{name:"theme-color",content:"#81D8D0"})]),t("div",Wt,[r(h,{navHeight:"h-[300vh] md:h-[200vh]"}),r($),t("section",Kt,[t("div",Qt,[t("div",Tt,[t("div",Zt,[b((e(),s("h2",{class:"my-6 text-5xl md:text-3xl",initial:g(c),enter:{scale:1,y:0,opacity:1}},[m(" 本院以醫療服務為職志， ")],8,Jt)),[[y]]),b((e(),s("h2",{class:"my-6 text-5xl md:text-3xl",initial:g(c),enter:{scale:1,y:0,opacity:1,transition:{delay:300}}},[m(" 用愛心、耐心提供專業醫療與照護， ")],8,Xt)),[[y]]),b((e(),s("h2",{class:"my-6 mt-4 text-2xl text-primary md:text-3xl",initial:g(c),enter:{scale:1,y:0,opacity:1,transition:{delay:600}}},[m(" 以精湛醫術及專業醫療設備，深耕地方，"),te,m("為居民健康把關。 ")],8,Yt)),[[y]]),t("div",ee,[t("a",se,[t("button",ie,[m(" 了解更多 "),r(S)])])])]),ne])])]),t("section",re,[r(j)]),t("section",oe,[r(k)]),t("section",ce,[r(q)]),t("section",ae,[r(B)]),r(L)])],64)}}},pe=l(de,[["__scopeId","data-v-afe4329f"]]);export{pe as default};
