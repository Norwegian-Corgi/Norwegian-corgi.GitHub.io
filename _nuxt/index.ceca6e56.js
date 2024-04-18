import{F as z,G as q,H as G,I as W,N as Q,J as Y,K as X,r as L,c as O,L as l,d as _,v as u,x as m,M as S,O as Z,P as ee,g as te,y as a,Q as p,R as ne,S as N,B as g,T as se,U as w,z as I,q as oe,D as ae,E as ie,V,W as P,A as h,C}from"./entry.f5d306de.js";import{_ as E}from"./_plugin-vue_export-helper.c27b6911.js";function re(e){for(var n=-1,t=e==null?0:e.length,i={};++n<t;){var s=e[n];i[s[0]]=s[1]}return i}const ce=e=>e===void 0,le=e=>typeof e=="number",ue=e=>z(e)?!Number.isNaN(Number(e)):!1;function me(e,n="px"){if(!e)return"";if(le(e)||ue(e))return`${e}${n}`;if(z(e))return e}const F="__epPropKey",H=e=>e,pe=e=>q(e)&&!!e[F],de=(e,n)=>{if(!q(e)||pe(e))return e;const{values:t,required:i,default:s,type:r,validator:f}=e,y={type:r,required:!!i,validator:t||f?x=>{let v=!1,$=[];if(t&&($=Array.from(t),G(e,"default")&&$.push(s),v||(v=$.includes(x))),f&&(v||(v=f(x))),!v&&$.length>0){const M=[...new Set($)].map(j=>JSON.stringify(j)).join(", ");W(`Invalid prop: validation failed${n?` for prop "${n}"`:""}. Expected one of [${M}], got value ${JSON.stringify(x)}.`)}return v}:void 0,[F]:!0};return G(e,"default")&&(y.default=s),y},J=e=>re(Object.entries(e).map(([n,t])=>[n,de(t,n)])),_e=H([String,Object,Function]),K=(e,n)=>{if(e.install=t=>{for(const i of[e,...Object.values(n??{})])t.component(i.name,i)},n)for(const[t,i]of Object.entries(n))e[t]=i;return e},fe=e=>(e.install=Q,e),T="el",he="is-",b=(e,n,t,i,s)=>{let r=`${e}-${n}`;return t&&(r+=`-${t}`),i&&(r+=`__${i}`),s&&(r+=`--${s}`),r},ge=Symbol("namespaceContextKey"),ye=e=>{const n=e||(Y()?X(ge,L(T)):L(T));return O(()=>l(n)||T)},A=(e,n)=>{const t=ye(n);return{namespace:t,b:(o="")=>b(t.value,e,o,"",""),e:o=>o?b(t.value,e,"",o,""):"",m:o=>o?b(t.value,e,"","",o):"",be:(o,c)=>o&&c?b(t.value,e,o,c,""):"",em:(o,c)=>o&&c?b(t.value,e,"",o,c):"",bm:(o,c)=>o&&c?b(t.value,e,o,"",c):"",bem:(o,c,d)=>o&&c&&d?b(t.value,e,o,c,d):"",is:(o,...c)=>{const d=c.length>=1?c[0]:!0;return o&&d?`${he}${o}`:""},cssVar:o=>{const c={};for(const d in o)o[d]&&(c[`--${t.value}-${d}`]=o[d]);return c},cssVarName:o=>`--${t.value}-${o}`,cssVarBlock:o=>{const c={};for(const d in o)o[d]&&(c[`--${t.value}-${e}-${d}`]=o[d]);return c},cssVarBlockName:o=>`--${t.value}-${e}-${o}`}};var R=(e,n)=>{const t=e.__vccOpts||e;for(const[i,s]of n)t[i]=s;return t};const ve=J({size:{type:H([Number,String])},color:{type:String}}),be=_({name:"ElIcon",inheritAttrs:!1}),xe=_({...be,props:ve,setup(e){const n=e,t=A("icon"),i=O(()=>{const{size:s,color:r}=n;return!s&&!r?{}:{fontSize:ce(s)?void 0:me(s),"--color":r}});return(s,r)=>(u(),m("i",Z({class:l(t).b(),style:l(i)},s.$attrs),[S(s.$slots,"default")],16))}});var $e=R(xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);const we=K($e),Se=_({name:"ElTimeline",setup(e,{slots:n}){const t=A("timeline");return ee("timeline",n),()=>te("ul",{class:[t.b()]},[S(n,"default")])}}),Ie=J({timestamp:{type:String,default:""},hideTimestamp:{type:Boolean,default:!1},center:{type:Boolean,default:!1},placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:_e},hollow:{type:Boolean,default:!1}}),ke=_({name:"ElTimelineItem"}),Ne=_({...ke,props:Ie,setup(e){const n=e,t=A("timeline-item"),i=O(()=>[t.e("node"),t.em("node",n.size||""),t.em("node",n.type||""),t.is("hollow",n.hollow)]);return(s,r)=>(u(),m("li",{class:p([l(t).b(),{[l(t).e("center")]:s.center}])},[a("div",{class:p(l(t).e("tail"))},null,2),s.$slots.dot?w("v-if",!0):(u(),m("div",{key:0,class:p(l(i)),style:ne({backgroundColor:s.color})},[s.icon?(u(),N(l(we),{key:0,class:p(l(t).e("icon"))},{default:g(()=>[(u(),N(se(s.icon)))]),_:1},8,["class"])):w("v-if",!0)],6)),s.$slots.dot?(u(),m("div",{key:1,class:p(l(t).e("dot"))},[S(s.$slots,"dot")],2)):w("v-if",!0),a("div",{class:p(l(t).e("wrapper"))},[!s.hideTimestamp&&s.placement==="top"?(u(),m("div",{key:0,class:p([l(t).e("timestamp"),l(t).is("top")])},I(s.timestamp),3)):w("v-if",!0),a("div",{class:p(l(t).e("content"))},[S(s.$slots,"default")],2),!s.hideTimestamp&&s.placement==="bottom"?(u(),m("div",{key:1,class:p([l(t).e("timestamp"),l(t).is("bottom")])},I(s.timestamp),3)):w("v-if",!0)],2)],2))}});var U=R(Ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/timeline/src/timeline-item.vue"]]);const Te=K(Se,{TimelineItem:U}),Ce=fe(U),B=()=>oe().$device,Oe={class:"flex flex-col items-center justify-center min-h-dvh"},Ve={class:"w-3/4"},Pe={key:0,class:"text-5xl text-green-custom mb-4"},D=_({__name:"CustomSection",props:{title:{type:String,required:!1}},setup(e){return B(),(n,t)=>(u(),m("div",Oe,[a("div",Ve,[e.title?(u(),m("h1",Pe,I(e.title),1)):w("",!0),S(n.$slots,"default")])]))}}),Ee=""+new URL("profile-pick.b4d96203.jpeg",import.meta.url).href,Ae=e=>(ae("data-v-fd5c420c"),e=e(),ie(),e),Be=Ae(()=>a("div",{class:"flex flex-col"},[a("img",{class:"avatar mb-2",src:Ee,alt:"Photo of Me"}),a("h3",{class:"text-xl"},"Abde Ali Sabunwala "),a("h2",{class:"text-3xl text-green-600"},"Software Developer")],-1)),De=_({__name:"MainSection",setup(e){const{isMobileOrTablet:n}=B();return(t,i)=>{const s=D;return u(),N(s,null,{default:g(()=>[a("div",{class:p(["flex items-center justify-between text-center",l(n)?"flex-col":""])},[Be,a("div",null,[a("h1",{class:p(l(n)?"text-4xl":"text-6xl")},"Coding My Life:",2),a("h1",{class:p(["text-green-custom",l(n)?"text-4xl":"text-6xl"])},"One Line at a Time",2)])],2)]),_:1})}}});const Me=E(De,[["__scopeId","data-v-fd5c420c"]]),je={},Ge={class:"w-fit text-green-600 border border-green-600 rounded-3xl px-4 py-1"};function Le(e,n){return u(),m("p",Ge,[S(e.$slots,"default")])}const ze=E(je,[["render",Le]]),qe=a("p",{class:"mb-4 text-lg"}," Greetings, visitor! Originating from India, I embarked on a journey to Germany at the age of 18 to pursue my enthusiasm for Electrical Engineering and Informatics. Throughout my academic exploration, I immersed myself in the world of Full Stack Development, and it has become a passion that continues to captivate me. ",-1),Fe=a("p",{class:"mb-4 text-lg"}," In the last two and a half years, I've amassed substantial expertise in crafting efficient and scalable web applications. This journey has been nothing short of exhilarating, and my enthusiasm remains unwavering as I eagerly embrace fresh challenges, continuously exploring the boundless possibilities within the realm of software development. ",-1),He=a("p",{class:"mb-4 text-lg"}," Outside of work, I derive immense pleasure from staying abreast of emerging technologies through reading and engaging in hands-on experimentation with personal projects. As a perpetual learner, I find deep satisfaction in continually broadening my knowledge and translating it into practical applications. ",-1),Je=a("p",{class:"mb-4 text-lg"},[C(" I'm excited to be a part of this dynamic field and eagerly anticipate collaborating with like-minded individuals who share my passion. Should you have any inquiries or wish to explore potential opportunities, feel free to "),a("a",{class:"text-green-custom underline",href:"mailto:abdealisabun8@gmail.com"},"reach out"),C(". Let's embark on the journey of creating something extraordinary together. ")],-1),Ke=a("h2",{class:"mt-12 mb-2 text-3xl text-green-custom"},"Tech I use",-1),Re={class:"flex flex-wrap gap-2"},Ue=_({__name:"AboutMeSection",setup(e){const n=["Java","HTML","CSS","TypeScript","Spring Boot","Vue","Nuxt","React","JUnit5","Mockito","PostgreSQL","Git","Github","Gitlab","IntelliJ","VS Code","Keycloak","Nginx","Docker","Jira"];return(t,i)=>{const s=ze,r=D;return u(),N(r,{title:"About me"},{default:g(()=>[qe,Fe,He,Je,Ke,a("div",Re,[(u(),m(V,null,P(n,(f,k)=>h(s,{key:k},{default:g(()=>[C(I(f),1)]),_:2},1024)),64))])]),_:1})}}});const We=a("h1",{class:"text-2xl my-4"},"Experience",-1),Qe={class:"text-white text-lg"},Ye=a("h1",{class:"text-2xl my-4"},"Education",-1),Xe=a("p",{class:"text-white text-lg"},"Electrical Engineering and IT",-1),Ze=a("p",{class:"text-white text-lg"},"Hochschule Ravensburg Weingarten",-1),et=_({__name:"CareerSection",setup(e){const{isMobileOrTablet:n}=B(),t=[{duration:"07-2023 - today",company:"systemticks GmbH",role:"Software Developer",color:"#00DC82"},{duration:"05-2022 - 06-2023",company:"FORCAM GmbH",role:"Fullstack Developer"},{duration:"05-2021 - 04-2022",company:"FORCAM GmbH",role:"Working Student(Software Developer)"},{duration:"10-2020 - 03-2021",company:"YURI GmbH",role:"Intern"}];return(i,s)=>{const r=Ce,f=Te,k=D;return u(),N(k,{title:"Career"},{default:g(()=>[a("div",{class:p(["flex",l(n)?"flex-col":"justify-between"])},[a("div",null,[We,h(f,null,{default:g(()=>[(u(),m(V,null,P(t,(y,x)=>h(r,{key:x,timestamp:y.duration,color:y.color},{default:g(()=>[a("p",Qe,I(y.role)+" at "+I(y.company),1)]),_:2},1032,["timestamp","color"])),64))]),_:1})]),a("div",null,[Ye,h(f,null,{default:g(()=>[h(r,{timestamp:"03-2018 - 04-2022"},{default:g(()=>[Xe,Ze]),_:1})]),_:1})])],2)]),_:1})}}}),tt=["href"],nt=_({__name:"SocialIcon",props:{uri:{type:String,required:!0},icon:{type:String,required:!0}},setup(e){return(n,t)=>(u(),m("a",{href:e.uri},[a("span",{class:p(["text-4xl cursor-pointer hover:text-green-custom",e.icon])},null,2)],8,tt))}}),st={class:"flex justify-center gap-4"},ot=_({__name:"SocialLinks",setup(e){const n=[{uri:"https://www.linkedin.com/in/abdeali-sabunwala/",icon:"i-grommet-icons-linkedin-option"},{uri:"https://github.com/Norwegian-Corgi",icon:"i-grommet-icons-github"},{uri:"mailto:abdealisabun8@gmail.com",icon:"i-grommet-icons-mail-option"},{uri:"https://www.instagram.com/not.abdeali/",icon:"i-grommet-icons-instagram"}];return(t,i)=>{const s=nt;return u(),m("div",st,[(u(),m(V,null,P(n,(r,f)=>h(s,{uri:r.uri,icon:r.icon},null,8,["uri","icon"])),64))])}}}),at={},it={class:"bg-blue-custom text-white"},rt=a("footer",{class:"flex justify-center py-8"},"© 2023-2024 Abde Ali Sabunwala",-1);function ct(e,n){const t=Me,i=Ue,s=et,r=ot;return u(),m("main",it,[h(t,{id:"home"}),h(i,{id:"about-me"}),h(s,{id:"career"}),h(r,{id:"social-links"}),rt])}const pt=E(at,[["render",ct]]);export{pt as default};