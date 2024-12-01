const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TheFilter-otiNTIvw.js","assets/axios-CpLpn672.js","assets/index-t-_dAoed.js","assets/index-DKY4WAlI.css","assets/TheFilter-C4yIyE9h.css","assets/SupplementCard-KBeVV45o.js","assets/CartMenu-C1l6VkNd.js"])))=>i.map(i=>d[i]);
import{r as o,B as D,j as q,s as H,o as a,c as u,d as E,a as M,b as t,l as b,u as k,m as P,n as S,g as i,x as G,y as J,C as Q,t as B,F as W,k as X,D as Y,q as ee}from"./index-t-_dAoed.js";import{a as te}from"./axios-CpLpn672.js";const oe={class:"flex float-left mt-28 md:mx-4 flex-col"},le={class:"pt-32 lg:pt-0"},ae={key:0,class:"flex items-center justify-center relative md:ml-0 mt-20 mx-14 md:mx-0"},se={key:1,class:"text-white text-lg text-center mb-2 md:mt-12 font-montserrat font-light pt-32 pb-4 md:pb-0 md:pt-0 md:mr-32"},ne={key:0,class:"text-3xl text-white text-center mr-24 mt-24 text-milkBlue"},re={key:1,class:"text-3xl text-red-500 text-center mt-24"},ue={key:2,class:"text-center mt-20"},ie={class:"px-4 ml-2 xl:ml-0 md:p-4 mr-2 xl:mr-8 2xl:mr-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6"},ce={key:2,class:"flex justify-center gap-4 mt-12 md:mt-8 md:ml-56"},de={class:"text-white md:mt-2 mt-4 md:text-base text-lg"},he={__name:"ShopView",setup(pe){const V=P(()=>S(()=>import("./TheFilter-otiNTIvw.js"),__vite__mapDeps([0,1,2,3,4]))),N=P(()=>S(()=>import("./SupplementCard-KBeVV45o.js"),__vite__mapDeps([5,2,3]))),z=P(()=>S(()=>import("./CartMenu-C1l6VkNd.js"),__vite__mapDeps([6,2,3]))),c=o(1),h=o([]),g=o(""),$=o(""),s=o(""),_=o(""),f=o(!1),d=o(!1),x=o(),p=o(),v=o(0),m=o(12),C=o(!1),T=Y("scrollToTop"),F=l=>{m.value=l,n(!0)},L=l=>{v.value=l},j=l=>{x.value=l,n(!0)},A=l=>{p.value=l},I=()=>{f.value=!f.value},O=()=>{f.value=!1},n=async(l=!1)=>{l&&(c.value=1);try{if(s.value===_.value&&_.value!=="")return;C.value=!0;let e="";v.value===0||v.value===1?e=p.value?`&ordering=${p.value}`:"":v.value===2&&(e=p.value?`&ordering=-${p.value}`:"");let y=s.value?`&search=${s.value}`:"",w=x.value?`category/id/${x.value}/?page=${c.value}${y}${e}&page_size=${m.value}`:`supplements/?page=${c.value}${y}${e}&page_size=${m.value}`;_.value=s.value;const r=await te.get(w);C.value=!1,h.value=r.data.results;const K=m.value;g.value=Math.ceil(r.data.count/K),$.value=r.data.count}catch(e){d.value=!0,console.log("Error fetching data",e)}},R=()=>{c.value<g.value&&(c.value+=1,n(),T())},U=()=>{c.value>1&&(c.value-=1,n(),T())},Z=()=>{(s||x||p)&&n()};return D([p,v],()=>{n(!0)}),D(s,(l,e)=>{e!==l&&s.value===""&&n(!0)}),q(()=>{n()}),H({title:"Shop - Denys",meta:[{name:"description",content:"Explore our shop with a wide range of products designed to suit your needs."},{property:"og:title",content:"Shop - Denys"},{property:"og:description",content:"Find the best deals and products in our online shop."}]}),(l,e)=>{const y=M("navbar-white"),w=M("font-awesome-icon");return a(),u("div",{class:ee(["bg-black relative bg-cover bg-bottom font-montserrat font-light lg:pt-0",d.value?"h-[75vh] md:h-[100vh]":"h-[300vh] md:h-[250vh] lg:h-[250vh] xl:h-[200vh]"])},[E(y,{class:"relative z-20"}),t("div",oe,[d.value?i("",!0):(a(),b(k(V),{key:0,class:"hidden lg:block",onChosenCategory:j,onChosenOrderBy:A,onShowSortBy:L,"onUpdate:supplementsPerPage":F,supplementsPerPage:m.value},null,8,["supplementsPerPage"]))]),t("section",le,[d.value?i("",!0):(a(),u("div",ae,[e[2]||(e[2]=t("label",{for:"search",class:"sr-only"},"Search",-1)),G(t("input",{id:"search",type:"text",class:"md:w-[70vh] w-[80vh] h-[5vh] min-h-[50px] p-2 relative rounded-full rounded-r-none focus:outline-none focus:ring-2 focus:ring-black focus:border-black",placeholder:"Start typing to get results","onUpdate:modelValue":e[0]||(e[0]=r=>s.value=r),autocomplete:"off",onKeyup:Q(n,["enter"])},null,544),[[J,s.value]]),t("button",{class:"transform h-[5vh] min-h-[50px] bg-purple-600 text-white rounded-full relative rounded-l-none py-1 px-4 hover:bg-purple-700 transition",onClick:e[1]||(e[1]=r=>Z())}," Submit ")])),h.value&&!d.value?(a(),u("p",se," Total amount of products: "+B($.value),1)):i("",!0),t("div",null,[h.value?i("",!0):(a(),u("p",ne," Unfortunately, we weren't able to find any supplement with this description ")),d.value?(a(),u("p",re," An error occured, please try again later ")):i("",!0),C.value&&!d.value?(a(),u("div",ue,e[3]||(e[3]=[t("div",{role:"status"},[t("svg",{"aria-hidden":"true",class:"inline w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),t("span",{class:"sr-only"},"Loading...")],-1)]))):i("",!0)]),t("div",ie,[(a(!0),u(W,null,X(h.value,r=>(a(),b(k(N),{key:r.id,supplement:r},null,8,["supplement"]))),128))]),e[4]||(e[4]=t("div",{class:"text-4xl text-white"},null,-1)),g.value?(a(),u("div",ce,[t("button",{class:"bg-purple-600 text-white py-4 px-3 md:py-2 md:px-4 rounded-lg hover:bg-purple-700 transition",onClick:U}," Previous Page "),t("button",{class:"bg-purple-600 text-white py-4 px-5 md:py-2 md:px-4 rounded-lg hover:bg-purple-700 transition",onClick:R}," Next Page "),t("h1",de," Page: "+B(c.value)+" / "+B(g.value),1)])):i("",!0)]),d.value?i("",!0):(a(),u("div",{key:0,class:"fixed bottom-6 left-6 w-24 h-24 md:w-36 md:h-36 bg-white flex items-center justify-center rounded-full border-[6px] border-purple-500 shadow-2xl cursor-pointer transition-opacity duration-500",onClick:I},[E(w,{icon:["fa","cart-shopping"],class:"w-12 md:w-20 h-auto text-black"})])),f.value?(a(),b(k(z),{key:1,onClose:O})):i("",!0)],2)}}};export{he as default};
