(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f61bb31e"],{"2e39":function(e,t,i){"use strict";i("d281")},8619:function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bg-white h-screen  p-5 font-khmer_os"},[e.loadingHelp?i("div",{staticClass:"flex justify-center items-center h-screen relative -top-5"},[i("h1",{staticClass:"text-sm font-semibold font-khmer_os relative -top-10"},[i("loading")],1)]):i("div",[i("div",{staticClass:"grid grid-cols-4 gap-4 font-khmer_os text-sm"},e._l(e.help,(function(t,l){return i("div",{key:l,staticClass:"cursor-pointer",on:{click:function(i){return e.getHelpDetail(t)}}},[i("img",{attrs:{src:t.thumbnail,alt:""}}),i("div",{staticClass:"mt-2"},[e._v(e._s(t.title))])])})),0)]),e.showDetail?i("Detail",{attrs:{youTubeId:e.youTubeId,title:e.title},on:{closeDetail:e.closeDetail}}):e._e()],1)},s=[],a=i("2f62"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"fixed z-10 inset-0 overflow-y-auto font-khmer_os"},[i("div",{staticClass:"flex items-end justify-center min-h-screen text-center sm:block sm:p-0"},[i("div",{staticClass:"fixed inset-0 transition-opacity",attrs:{"aria-hidden":"true"}},[i("div",{staticClass:"absolute inset-0 bg-black",on:{click:function(t){return e.closeDetail()}}})]),i("span",{staticClass:"hidden sm:inline-block sm:align-middle sm:h-screen",attrs:{"aria-hidden":"true"}},[e._v("​")]),i("div",{staticClass:"inline-block align-bottom bg-opacity-0  overflow-hidden  transform transition-all  sm:align-middle",attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"}},[i("div",{staticClass:"content w-100"},[i("div",{staticClass:"relative"},[e.loading?e._e():i("div",{staticClass:"flex justify-end opacity-50 cursor-pointer py-3",on:{click:function(t){return e.closeDetail()}}},[i("CloseIcon",{attrs:{fill:"#ffffff"}})],1)]),e.loadingHelpDetail?i("div",{staticClass:"flex items-center justify-center"},[i("LoadingWhite")],1):i("div",{staticClass:"flex items-center justify-center"},[e.loading?i("LoadingWhite"):e._e(),i("video",{staticClass:"m-auto focus:outline-none",class:e.loading?"hidden":"",attrs:{id:"my_video",controls:"",autoplay:"",controlsList:"nodownload"}},[i("source",{attrs:{src:e.video}})])],1)])])])])},o=[],c=i("4dc6"),d=i("33d6");const{ipcRenderer:r}=i("34bb");var u={name:"Detail",components:{LoadingWhite:c["a"],CloseIcon:d["a"]},data(){return{video:"",loading:!1,loadingHelpDetail:!1}},props:{youTubeId:{type:String,default:()=>""},title:{type:String,default:()=>""}},computed:{...Object(a["c"])("help",["youtube_url"])},methods:{...Object(a["b"])("help",["helpDetail"]),closeMessage(e){this.$emit("closeMessage",e)},closeDetail(){this.$emit("closeDetail")},getVideo(){this.loading=!0;let e=setInterval(()=>{if(null!==document.getElementById("my_video")){let t=document.getElementById("my_video");t.addEventListener("canplay",()=>{this.loading=!1}),clearInterval(e)}},100)}},created(){this.getVideo(),this.loadingHelpDetail=!0,r.on("youtubeVideo",(e,t)=>{this.video=t.filter(e=>22===e.itag).map(e=>e.url)[0],this.loadingHelpDetail=!1})}},h=u,p=(i("2e39"),i("2877")),m=Object(p["a"])(h,n,o,!1,null,null,null),f=m.exports,g=i("3a5e");const{ipcRenderer:b}=i("34bb");var v={name:"Help",components:{Detail:f,Loading:g["a"]},data(){return{showDetail:!1,loading:!0,youTubeId:"",title:""}},computed:{...Object(a["c"])("help",["help","loadingHelp"])},methods:{...Object(a["b"])("help",["getHelp"]),closeDetail(){this.showDetail=!1},getHelpDetail(e){this.title=e.title,this.youTubeId=e.youtube_url,b.send("youtubeVideo",e.youtube_url),this.showDetail=!0}},created(){this.getHelp()}},y=v,D=Object(p["a"])(y,l,s,!1,null,null,null);t["default"]=D.exports},d281:function(e,t,i){}}]);
//# sourceMappingURL=chunk-f61bb31e.ce20b332.js.map