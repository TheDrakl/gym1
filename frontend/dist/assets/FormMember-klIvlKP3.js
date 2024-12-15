import{r,j as D,o as l,l as F,c as n,d as T,a as U,b as e,x as u,y,t as m,g as i,A as L,F as P,k as Z,v as C,I as h,T as G}from"./index-t-_dAoed.js";import{a as k}from"./axios-CpLpn672.js";import{v as O}from"./validationForm-COHavm06.js";const q={key:0,class:"relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md"},z={class:"mb-4"},I={key:0,class:"text-red-500 text-sm"},H={class:"mb-4"},J={key:0,class:"text-red-500 text-sm"},K={class:"mb-4"},Q={key:0,class:"text-red-500 text-sm"},R={class:"mb-4"},W={key:0,class:"text-red-500 text-sm"},X={class:"flex justify-between"},Y=["value"],$={class:"flex justify-between items-center mt-10"},ee={class:"font-roboto text-xl"},te={key:1,class:"text-center mt-20"},le={__name:"FormMember",props:{show:{type:Boolean,default:!1},receivedData:{type:Object,default:""}},emits:["close"],setup(w,{emit:N}){const _=w,M=N,o=r({}),c=r(""),v=r(""),b=r(""),x=r(""),E=r(_.receivedData),g=r(null),p=r(""),d=r(!1),f=()=>{M("close")},V=()=>{const s={firstName:c.value,lastName:v.value,emailAddress:b.value,phoneNumber:x.value};return o.value=O(s),Object.keys(o.value).length===0},S=async()=>{try{d.value=!0;const s=await k.post("send-email/",{first_name:c.value,last_name:v.value,email:email.value,phone_number:phone.value,selected_gym:p.value});return d.value=!1,s.data.message}catch(s){throw s}finally{d.value=!1}},j=async()=>{if(V())try{const s=await S();h({title:"Success!",text:s||"Email sent successfully!",type:"success",duration:1e4}),f()}catch(s){s.response&&s.response.status===429?h({title:"Error!",text:"Too many requests! Try again later.",type:"error",duration:1e4}):h({title:"Error!",text:s.message||"An error occurred while sending the email.",type:"error",duration:1e4})}},A=async()=>{try{const s=await k.get("gyms/");g.value=s.data,p.value=g.value[0].name}catch(s){console.log("Error in fetching data",{error:s})}};return D(()=>{A()}),(s,t)=>{const B=U("font-awesome-icon");return l(),F(G,{to:"body"},[w.show?(l(),n("div",{key:0,onClick:C(f,["self"]),class:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"},[d.value?i("",!0):(l(),n("div",q,[T(B,{icon:["fas","xmark"],class:"absolute top-2 right-2 w-8 h-8 text-black cursor-pointer",onClick:f}),t[11]||(t[11]=e("h2",{class:"text-2xl mb-4 text-center font-montserrat"}," Purchasing a membership! ",-1)),e("form",{onSubmit:C(j,["prevent"]),id:"formMember"},[e("div",z,[t[5]||(t[5]=e("label",{for:"first-name",class:"block text-sm font-medium text-gray-700"}," First name ",-1)),u(e("input",{id:"first-name",type:"text",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm font-montserrat h-8","onUpdate:modelValue":t[0]||(t[0]=a=>c.value=a)},null,512),[[y,c.value]]),o.value.firstName?(l(),n("span",I,m(o.value.firstName),1)):i("",!0)]),e("div",H,[t[6]||(t[6]=e("label",{for:"last-name",class:"block text-sm font-medium text-gray-700"}," Last name ",-1)),u(e("input",{id:"last-name",type:"text",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm font-montserrat h-8","onUpdate:modelValue":t[1]||(t[1]=a=>v.value=a)},null,512),[[y,v.value]]),o.value.lastName?(l(),n("span",J,m(o.value.lastName),1)):i("",!0)]),e("div",K,[t[7]||(t[7]=e("label",{for:"email",class:"block text-sm font-medium text-gray-700"}," Email ",-1)),u(e("input",{id:"email",type:"text",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm font-montserrat h-8","onUpdate:modelValue":t[2]||(t[2]=a=>b.value=a)},null,512),[[y,b.value]]),o.value.emailAddress?(l(),n("span",Q,m(o.value.emailAddress),1)):i("",!0)]),e("div",R,[t[8]||(t[8]=e("label",{for:"phone",class:"block text-sm font-medium text-gray-700"}," Phone number ",-1)),u(e("input",{id:"phone",type:"text",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm font-montserrat h-8","onUpdate:modelValue":t[3]||(t[3]=a=>x.value=a)},null,512),[[y,x.value]]),o.value.phoneNumber?(l(),n("span",W,m(o.value.phoneNumber),1)):i("",!0)]),e("div",X,[t[9]||(t[9]=e("label",{for:"gym-select"},"Choose the location of the gym:",-1)),u(e("select",{"onUpdate:modelValue":t[4]||(t[4]=a=>p.value=a),id:"gym-select",class:"bg-gray-50"},[(l(!0),n(P,null,Z(g.value,a=>(l(),n("option",{value:a.name,key:a.id},m(a.name),9,Y))),128))],512),[[L,p.value]])]),e("div",$,[e("h3",ee,"Price: "+m(E.value.price),1),e("div",{class:"flex"},[e("button",{onClick:f,type:"button",class:"mr-2 px-4 py-2 bg-blue-500 text-white rounded"}," Close "),t[10]||(t[10]=e("button",{type:"submit",class:"px-4 py-2 bg-green-500 text-white rounded"}," Submit ",-1))])])],32)])),d.value?(l(),n("div",te,t[12]||(t[12]=[e("div",{role:"status"},[e("svg",{"aria-hidden":"true",class:"inline w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),e("span",{class:"sr-only"},"Loading...")],-1)]))):i("",!0)])):i("",!0)])}}};export{le as default};