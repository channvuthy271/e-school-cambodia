(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b6f7616"],{"08ad":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"px-5 bg-white font-khmer_os text-sm h-screen py-5"},[e.checkingInsurance?s("div",{staticClass:"flex justify-center items-center h-screen relative -top-5"},[s("h1",{staticClass:"text-sm font-semibold font-khmer_os relative -top-10"},[s("loading")],1)]):s("div",{staticClass:"w-1/2 leading-6"},[0===e.insuranceStatus?s("div",[s("p",[e._v(" សូមធ្វើការទិញវគ្គសិក្សាចាប់ពី ៤មុខវីជ្ជាឡើងទៅទើបអាចទទួលបានសេវាកម្មធានារ៉ាប់រងដែលមានតម្លៃស្មើរនឹង ១០,០០០,០០រៀល(ដប់លានរៀល)")])]):e._e(),1===e.insuranceStatus?s("div",[s("div",{staticClass:"flex  items-center"},[s("div",{staticClass:"mr-3"},[s("GotInsuranceIcon",{attrs:{fill:"#1fb141"}})],1),s("div",[s("div",{staticClass:"font-khmer_os text-md font-semibold"},[e._v("សូមអបអរសាទរ")]),s("div",{staticClass:"text-red-600 font-semibold text-md"},[e._v(" "+e._s(e.userInsurance.first_name)+" "+e._s(e.userInsurance.last_name)+" ")])])]),s("div",{staticClass:"mt-10 leading-6"},[e._v(" ដោយសារលោកអ្នកបានទិញវគ្គសិក្សាជាមួយ "),s("span",{staticClass:"text-blue-900"},[e._v("E-School ")]),s("span",{staticClass:"text-red-600"},[e._v("Cam")]),s("span",{staticClass:"text-blue-900"},[e._v("bodia")]),e._v(" ចំនួនបួនមុខវិជ្ជាក្នុងខែតែមួយ ដូច្នេះលោកអ្នកទទួលបាននូវសេវាកម្មធានារ៉ាប់រងអាយុជីវិតពីក្រុមហ៊ុន "),s("span",{staticClass:"text-red-600"},[e._v("Fort ")]),e._v(" "),s("span",{staticClass:"text-green-400"},[e._v("Life ")]),e._v(" ចំនួន១០,០០០,០០រៀល(ដប់លានរៀល)ដែលមានសុពលភាពគិតចាប់ពីពេលនេះរហូតដល់ថ្ងៃទី "+e._s(e.formatDate(e.userInsurance.expire_date))+"។ ព័ត៌មានលំអិត 090 787 999/ 023 885 007 ")])]):e._e(),2===e.insuranceStatus?s("div",[s("p",{staticClass:"mb-2 leading-6"},[e._v(" សូមបញ្ជាក់ព័ត៌មានមួយចំនួន ដើម្បីទទួលបានសេវាធានារ៉ាប់រងអាយុជីវិតដែលមានតម្លៃស្មើរនឹង ១០,០០០,០០រៀន(ដប់លានរៀល)")]),s("div",{staticClass:"flex items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.stProfile.first_name,expression:"stProfile.first_name"}],staticClass:"flex-1 py-2 border border-gray-300 rounded pl-3 focus:outline-none",attrs:{type:"text",placeholder:"នាមត្រកូល"},domProps:{value:e.stProfile.first_name},on:{input:function(t){t.target.composing||e.$set(e.stProfile,"first_name",t.target.value)}}}),s("label",{staticClass:"text-red-500 relative right-5"},[e._v("*")])]),s("div",{staticClass:"flex items-center mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.stProfile.last_name,expression:"stProfile.last_name"}],staticClass:"flex-1 py-2 border border-gray-300 rounded pl-3 focus:outline-none",attrs:{type:"text",placeholder:"នាមខ្លួន"},domProps:{value:e.stProfile.last_name},on:{input:function(t){t.target.composing||e.$set(e.stProfile,"last_name",t.target.value)}}}),s("label",{staticClass:"text-red-500 relative right-5"},[e._v("*")])]),s("div",{staticClass:"flex items-center mt-2"},[s("div",{staticClass:"flex mr-20"},[s("label",[s("input",{attrs:{type:"radio",name:"gender",value:"M"},domProps:{checked:"M"===e.stProfile.gender}}),e._v(" ប្រុស ")])]),s("div",{staticClass:"flex"},[s("label",[s("input",{attrs:{type:"radio",name:"gender",value:"F"},domProps:{checked:"F"===e.stProfile.gender}}),e._v(" ស្រី ")])])]),s("div",{staticClass:"flex items-center mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.stProfile.date_of_birth,expression:"stProfile.date_of_birth"}],staticClass:"flex-1 py-2 border border-gray-300 rounded pl-3 focus:outline-none",attrs:{type:"text",placeholder:"ថ្ងៃខែឆ្នាំកំណើត",onfocus:"(this.type='date')"},domProps:{value:e.stProfile.date_of_birth},on:{input:function(t){t.target.composing||e.$set(e.stProfile,"date_of_birth",t.target.value)}}}),s("label",{staticClass:"text-red-500 relative right-5"},[e._v("*")])]),s("div",{staticClass:"flex items-center mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.stProfile.phone,expression:"stProfile.phone"}],staticClass:"flex-1 py-2 border border-gray-300 rounded pl-3 focus:outline-none",attrs:{type:"text",placeholder:"លេខទូរស័ព្ទ"},domProps:{value:e.stProfile.phone},on:{input:function(t){t.target.composing||e.$set(e.stProfile,"phone",t.target.value)}}}),s("label",{staticClass:"text-red-500 relative right-5"},[e._v("*")])]),s("div",{staticClass:"flex items-center mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.stProfile.province.name,expression:"stProfile.province.name"}],staticClass:"flex-1 py-2 border border-gray-300 rounded pl-3 focus:outline-none cursor-pointer",attrs:{type:"text",placeholder:"ខេត្ត",readonly:""},domProps:{value:e.stProfile.province.name},on:{click:e.showAllProvince,input:function(t){t.target.composing||e.$set(e.stProfile.province,"name",t.target.value)}}}),s("label",{staticClass:"text-red-500 relative right-5"},[e._v("*")])]),s("div",{staticClass:"flex items-center mt-2 relative"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.stProfile.school.name,expression:"stProfile.school.name"}],staticClass:"flex-1 py-2 border border-gray-300 rounded pl-3 focus:outline-none cursor-pointer",attrs:{type:"text",placeholder:"វិទ្យាល័យ",readonly:""},domProps:{value:e.stProfile.school.name},on:{click:e.showAllSchool,input:function(t){t.target.composing||e.$set(e.stProfile.school,"name",t.target.value)}}}),s("label",{staticClass:"text-red-500 relative right-5"},[e._v("*")]),e.loadingSchool?s("img",{staticClass:"absolute right-10 top-0 mt-3",attrs:{src:"/ajax-loader.gif"}}):e._e()]),s("div",{staticClass:"parent border border-gray-300 rounded px-5 pb-4 mt-5 relative"},[e._m(0),s("div",{staticClass:"flex items-center mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.yourGuardian.phone,expression:"yourGuardian.phone"}],staticClass:"flex-1 py-1 border border-gray-300 border-t-0 border-l-0 border-r-0  focus:outline-none",attrs:{type:"text",placeholder:"លេខទូរស័ព្ទ"},domProps:{value:e.yourGuardian.phone},on:{input:function(t){t.target.composing||e.$set(e.yourGuardian,"phone",t.target.value)}}}),s("label",{staticClass:"text-red-500 "},[e._v("*")])]),s("div",{staticClass:"flex items-center mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.yourGuardian.type,expression:"yourGuardian.type"}],staticClass:"flex-1 py-1 border border-gray-300 border-t-0 border-l-0 border-r-0 focus:outline-none",attrs:{type:"text",placeholder:"ត្រូវជា"},domProps:{value:e.yourGuardian.type},on:{input:function(t){t.target.composing||e.$set(e.yourGuardian,"type",t.target.value)}}}),s("label",{staticClass:"text-red-500"},[e._v("*")])])]),s("p",{staticClass:"mt-2"},[e._v(" សូមចុចលើពាក្យថា យល់ព្រម លោកអ្នកត្រូវប្រាកដថាព័ត៌មាន ដែលផ្តល់មកគឺត្រឹមត្រូវដូចទៅនឹង សំបុត្រកំណើត ឬអត្តសញ្ញាណប័ណ្ណរបស់អ្នក។ ")]),s("div",{staticClass:"flex justify-end items-center",on:{click:e.confirm}},[s("button",{staticClass:"bg-custom py-2 px-5 focus:outline-none hover:bg-opacity-80 text-white rounded",attrs:{disabled:e.loadingConfirm}},[e._v(" យល់ព្រម "),e.loadingConfirm?s("Loader",{attrs:{size:10}}):e._e()],1)])]):e._e()]),e.err?s("Message",{attrs:{message:e.message},on:{closeMessage:e.closeMessage}}):e._e(),e.showProvince?s("Province",{attrs:{provinces:e.provinces},on:{selectProvince:e.selectProvince,closeProvince:e.closeProvince}}):e._e(),e.showSchool?s("School",{attrs:{schools:e.schools},on:{selectSchool:e.selectSchool,closeSchool:e.closeSchool}}):e._e()],1)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"absolute w-full text-center -top-3"},[s("span",{staticClass:"bg-white"},[e._v("ព័ត៌មានអាណាព្យាបាល")])])}],o=s("2f62"),r=s("e8b5"),l=s("555f"),n=s("86c8"),c=s("a4a7"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"55",version:"1.1",viewBox:"-38 0 511 511.99956",width:"55"}},[s("g",{attrs:{id:"surface1"}},[s("path",{staticStyle:{stroke:"none","fill-rule":"nonzero",fill:"rgb(0%,86.666667%,50.196078%)","fill-opacity":"1"},attrs:{d:"M 413.476562 341.910156 C 399.714844 379.207031 378.902344 411.636719 351.609375 438.289062 C 320.542969 468.625 279.863281 492.730469 230.699219 509.925781 C 229.085938 510.488281 227.402344 510.949219 225.710938 511.289062 C 223.476562 511.730469 221.203125 511.96875 218.949219 512 L 218.507812 512 C 216.105469 512 213.691406 511.757812 211.296875 511.289062 C 209.605469 510.949219 207.945312 510.488281 206.339844 509.9375 C 157.117188 492.769531 116.386719 468.675781 85.289062 438.339844 C 57.984375 411.6875 37.175781 379.277344 23.433594 341.980469 C -1.554688 274.167969 -0.132812 199.464844 1.011719 139.433594 L 1.03125 138.511719 C 1.261719 133.554688 1.410156 128.347656 1.492188 122.597656 C 1.910156 94.367188 24.355469 71.011719 52.589844 69.4375 C 111.457031 66.152344 156.996094 46.953125 195.90625 9.027344 L 196.246094 8.714844 C 202.707031 2.789062 210.847656 -0.117188 218.949219 0.00390625 C 226.761719 0.105469 234.542969 3.007812 240.773438 8.714844 L 241.105469 9.027344 C 280.023438 46.953125 325.5625 66.152344 384.429688 69.4375 C 412.664062 71.011719 435.109375 94.367188 435.527344 122.597656 C 435.609375 128.386719 435.757812 133.585938 435.988281 138.511719 L 436 138.902344 C 437.140625 199.046875 438.554688 273.898438 413.476562 341.910156 Z M 413.476562 341.910156 "}}),s("path",{staticStyle:{stroke:"none","fill-rule":"nonzero",fill:"rgb(0%,66.666667%,38.823529%)","fill-opacity":"1"},attrs:{d:"M 413.476562 341.910156 C 399.714844 379.207031 378.902344 411.636719 351.609375 438.289062 C 320.542969 468.625 279.863281 492.730469 230.699219 509.925781 C 229.085938 510.488281 227.402344 510.949219 225.710938 511.289062 C 223.476562 511.730469 221.203125 511.96875 218.949219 512 L 218.949219 0.00390625 C 226.761719 0.105469 234.542969 3.007812 240.773438 8.714844 L 241.105469 9.027344 C 280.023438 46.953125 325.5625 66.152344 384.429688 69.4375 C 412.664062 71.011719 435.109375 94.367188 435.527344 122.597656 C 435.609375 128.386719 435.757812 133.585938 435.988281 138.511719 L 436 138.902344 C 437.140625 199.046875 438.554688 273.898438 413.476562 341.910156 Z M 413.476562 341.910156 "}}),s("path",{staticStyle:{stroke:"none","fill-rule":"nonzero",fill:"rgb(100%,100%,100%)","fill-opacity":"1"},attrs:{d:"M 346.101562 256 C 346.101562 326.207031 289.097656 383.355469 218.949219 383.605469 L 218.5 383.605469 C 148.144531 383.605469 90.894531 326.359375 90.894531 256 C 90.894531 185.644531 148.144531 128.398438 218.5 128.398438 L 218.949219 128.398438 C 289.097656 128.648438 346.101562 185.796875 346.101562 256 Z M 346.101562 256 "}}),s("path",{staticStyle:{stroke:"none","fill-rule":"nonzero",fill:"rgb(88.235294%,92.156863%,94.117647%)","fill-opacity":"1"},attrs:{d:"M 346.101562 256 C 346.101562 326.207031 289.097656 383.355469 218.949219 383.605469 L 218.949219 128.398438 C 289.097656 128.648438 346.101562 185.796875 346.101562 256 Z M 346.101562 256 "}}),s("path",{staticStyle:{stroke:"none","fill-rule":"nonzero",fill:"rgb(70.588235%,82.352941%,84.313725%)","fill-opacity":"1"},attrs:{d:"M 276.417969 237.625 L 218.949219 295.101562 L 206.53125 307.519531 C 203.597656 310.453125 199.75 311.917969 195.90625 311.917969 C 192.058594 311.917969 188.214844 310.453125 185.277344 307.519531 L 158.578125 280.808594 C 152.710938 274.941406 152.710938 265.4375 158.578125 259.566406 C 164.4375 253.699219 173.953125 253.699219 179.820312 259.566406 L 195.90625 275.652344 L 255.175781 216.382812 C 261.042969 210.511719 270.558594 210.511719 276.417969 216.382812 C 282.285156 222.25 282.285156 231.765625 276.417969 237.625 Z M 276.417969 237.625 "}}),s("path",{staticStyle:{stroke:"none","fill-rule":"nonzero",fill:"rgb(43.529412%,64.705882%,66.666667%)","fill-opacity":"1"},attrs:{d:"M 276.417969 237.625 L 218.949219 295.101562 L 218.949219 252.605469 L 255.175781 216.382812 C 261.042969 210.511719 270.558594 210.511719 276.417969 216.382812 C 282.285156 222.25 282.285156 231.765625 276.417969 237.625 Z M 276.417969 237.625 "}})])])},u=[],h={name:"GotInsuranceIcon",props:{fill:{type:String,default:function(){return"#000000"}}}},m=h,f=s("2877"),v=Object(f["a"])(m,d,u,!1,null,null,null),p=v.exports,g=s("c1df"),C=s.n(g),b=s("3a5e"),y={name:"Insurance",components:{Message:r["a"],Loader:l["a"],Province:n["a"],School:c["a"],Loading:b["a"],GotInsuranceIcon:p},data(){return{showProvince:!1,showSchool:!1,err:!1,message:"",yourGuardian:{phone:"",type:""}}},computed:{...Object(o["c"])("insurance",["insuranceStatus","checkingInsurance","loadingConfirm","userInsurance"]),...Object(o["c"])("auth",["stProfile"]),...Object(o["c"])("guardian",["guardians","loadingGuardian"]),...Object(o["c"])("setting",["provinces","schools","loadingProvince","loadingSchool"])},methods:{...Object(o["b"])("insurance",["checkInsurance","confirmInsurance"]),...Object(o["b"])("auth",["getStudentProfile"]),...Object(o["b"])("guardian",["getGuardian"]),...Object(o["b"])("setting",["getProvinces","getSchool"]),closeMessage(){this.err=!1},showAllProvince(){this.stProfile.school.name=null,this.showProvince=!0},selectProvince(e){this.getSchool(e._id).then(()=>{this.showProvince=!1,this.stProfile.province=e})},formatDate(e){return C.a.locale("km"),C()(e).format("ll")},showAllSchool(){if(!this.schools.length||this.loadingSchool)return!1;this.showSchool=!0},closeProvince(){this.showProvince=!1},closeSchool(){this.showSchool=!1},selectSchool(e){this.showSchool=!1,this.stProfile.school=e},confirm(){return""===this.stProfile.first_name?(this.err=!0,void(this.message="សូមបញ្ចូលនាមត្រកូល")):""===this.stProfile.last_name?(this.err=!0,void(this.message="សូមបញ្ចូលនាមខ្លួន")):""===this.stProfile.phone?(this.err=!0,void(this.message="សូមបញ្ចូលលេខទូរស័ព្ទ")):""===this.stProfile.date_of_birth?(this.err=!0,void(this.message="សូមបញ្ចូលថ្ងៃខែឆ្នាំកំណើត")):""===this.stProfile.province._id?(this.err=!0,void(this.message="សូមជ្រើសរើសខេត្ត")):""===this.stProfile.school._id?(this.err=!0,void(this.message="សូមជ្រើសរើសសាលា")):""===this.yourGuardian.phone?(this.err=!0,void(this.message="សូមបញ្ចូលលេខទូរស័ព្ទអាណាព្យាបាល")):(this.stProfile.guardian_phone=this.yourGuardian.phone,""===this.yourGuardian.type?(this.err=!0,void(this.message="សូមបញ្ជាក់ពីតួនាទីអាណាព្យាបាល")):(this.stProfile.type=this.yourGuardian.type,void this.confirmInsurance(this.stProfile).then(e=>{1===e.data.status?(this.err=!0,this.message=e.data.msg):this.checkInsurance()})))}},created(){this.checkInsurance(),this.getProvinces(),this.getGuardian().then(e=>{if(e.data.data&&e.data.data.length){let t=e.data.data.map(e=>e)[0];this.yourGuardian.phone=t.phone,this.yourGuardian.type=t.type}})}},_=y,x=Object(f["a"])(_,i,a,!1,null,null,null);t["default"]=x.exports},3770:function(e,t,s){"use strict";s("44f3")},"44f3":function(e,t,s){},"86c8":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fixed z-50 inset-0 overflow-y-auto"},[s("div",{staticClass:"flex items-end justify-center min-h-screen text-center sm:block sm:p-0"},[e._m(0),s("span",{staticClass:"hidden sm:inline-block sm:align-middle sm:h-screen",attrs:{"aria-hidden":"true"}},[e._v("​")]),s("div",{staticClass:"inline-block align-bottom bg-white rounded text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle",class:"w-"+e.size,attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"}},[s("div",{staticClass:"bg-white py-5 pl-5 relative"},[s("div",{staticClass:"absolute right-0 top-0 mt-2 mr-2 cursor-pointer opacity-50",on:{click:e.closeProvince}},[s("CloseIcon",{attrs:{width:15,height:15}})],1),s("div",{staticClass:"flex justify-left"},[s("div",{staticClass:"text-sm text-black text-sm font-khmer_os flex-1",staticStyle:{height:"70vh","overflow-y":"scroll"}},e._l(e.provinces,(function(t,i){return s("div",{key:i,staticClass:"mb-3 cursor-pointer",on:{click:function(s){return e.selectProvince(t)}}},[e._v(" "+e._s(t.name)+" ")])})),0)])])])])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fixed inset-0 transition-opacity",attrs:{"aria-hidden":"true"}},[s("div",{staticClass:"absolute inset-0 bg-gray-500 opacity-75"})])}],o=s("646b"),r=s("33d6"),l={name:"Province",components:{CloseIcon:r["a"]},props:{provinces:{},size:{type:Number,default:()=>56},hide:{type:Boolean,default:function(){return!1}}},computed:{gender(){return o["a"].gender()}},methods:{closeProvince(){this.$emit("closeProvince")},selectProvince(e){this.$emit("selectProvince",e)},closeMessage(e){this.$emit("closeMessage",e)},showCart(e){this.$emit("showCart",e)}}},n=l,c=(s("3770"),s("2877")),d=Object(c["a"])(n,i,a,!1,null,"38bcef0a",null);t["a"]=d.exports},a4a7:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fixed z-50 inset-0 overflow-y-auto"},[s("div",{staticClass:"flex items-end justify-center min-h-screen text-center sm:block sm:p-0"},[e._m(0),s("span",{staticClass:"hidden sm:inline-block sm:align-middle sm:h-screen",attrs:{"aria-hidden":"true"}},[e._v("​")]),s("div",{staticClass:"inline-block align-bottom bg-white rounded text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle",class:"w-"+e.size,attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"}},[s("div",{staticClass:"bg-white py-5 pl-5"},[s("div",{staticClass:"absolute right-0 top-0 mt-2 mr-2 cursor-pointer opacity-50",on:{click:e.closeSchool}},[s("CloseIcon",{attrs:{width:15,height:15}})],1),s("div",{staticClass:"flex justify-left"},[s("div",{staticClass:"text-sm text-black text-sm font-khmer_os flex-1",staticStyle:{height:"70vh","overflow-y":"scroll"}},e._l(e.schools,(function(t,i){return s("div",{key:i,staticClass:"mb-3 cursor-pointer",on:{click:function(s){return e.selectSchool(t)}}},[e._v(" "+e._s(t.name)+" ")])})),0)])])])])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fixed inset-0 transition-opacity",attrs:{"aria-hidden":"true"}},[s("div",{staticClass:"absolute inset-0 bg-gray-500 opacity-75"})])}],o=s("646b"),r=s("33d6"),l={name:"Province",components:{CloseIcon:r["a"]},props:{schools:{},size:{type:Number,default:()=>96},hide:{type:Boolean,default:function(){return!1}}},computed:{gender(){return o["a"].gender()}},methods:{closeSchool(){this.$emit("closeSchool")},selectSchool(e){this.$emit("selectSchool",e)},closeMessage(e){this.$emit("closeMessage",e)},showCart(e){this.$emit("showCart",e)}}},n=l,c=(s("fb18"),s("2877")),d=Object(c["a"])(n,i,a,!1,null,"c2272702",null);t["a"]=d.exports},a742:function(e,t,s){},fb18:function(e,t,s){"use strict";s("a742")}}]);
//# sourceMappingURL=chunk-3b6f7616.a2e5f971.js.map