(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+SZM":function(t,e,s){"use strict";s("eay2");var r={components:{},data:function(){return{isOn:!1,isOpen:!1,showMenu:!1}},methods:{toggleNavbar:function(){console.log("Navbar"),this.showMenu=!this.showMenu}}},a=s("KHd+"),n={components:{HeaderMenu:Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"bg-gray-800"},[s("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[s("div",{staticClass:"flex items-center justify-between h-16"},[s("div",{staticClass:"flex items-center"},[s("div",{staticClass:"flex-shrink-0"},[s("inertia-link",{attrs:{href:"/"}},[s("img",{staticClass:"h-8 w-8",attrs:{src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:"Workflow"}})])],1),t._v(" "),s("div",{staticClass:"hidden md:block"},[t.$store.logged?s("div",{staticClass:"ml-5 flex items-baseline space-x-4"},[s("inertia-link",{staticClass:"px-3 py-2 rounded-md text-sm font-medium",class:t.route().current("dashboard.index")?"text-white bg-gray-900":"text-gray-300 hover:text-white hover:bg-gray-700",attrs:{href:t.route("dashboard.index")}},[t._v("\r\n                                    Dashboard\r\n                        ")])],1):t._e()])]),t._v(" "),s("div",{staticClass:"hidden md:block"},[s("div",{staticClass:"ml-4 flex items-center md:ml-6"},[s("div",{staticClass:"space-x-4"},[t.$store.logged?t._e():s("inertia-link",{staticClass:"px-3 py-2 rounded-md text-sm font-medium",class:t.route().current("login")?"text-white bg-gray-900":"text-gray-300 hover:text-white hover:bg-gray-700",attrs:{href:t.route("login")}},[t._v("\r\n                                    Login\r\n                        ")]),t._v(" "),t.$store.logged?t._e():s("inertia-link",{staticClass:"px-3 py-2 rounded-md text-sm font-medium",class:t.route().current("register")?"text-white bg-gray-900":"text-gray-300 hover:text-white hover:bg-gray-700",attrs:{href:t.route("register")}},[t._v("\r\n                                    Register\r\n                        ")])],1),t._v(" "),t.$store.logged?s("div",{staticClass:"ml-3 relative"},[s("div",[s("button",{staticClass:"max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",attrs:{id:"user-menu","aria-haspopup":"true"},on:{click:function(e){t.isOpen=!t.isOpen}}},[s("span",{staticClass:"sr-only"},[t._v("Open user menu")]),t._v(" "),s("img",{staticClass:"h-8 w-8 rounded-full",attrs:{src:"/img/user.png",alt:""}})])]),t._v(" "),s("transition",{attrs:{"enter-active-class":"transition ease-out duration-100 transform","enter-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75 transform","leave-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg"},[s("div",{staticClass:"rounded-md bg-white shadow-xs"},[s("div",{staticClass:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu"}},[s("inertia-link",{staticClass:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",attrs:{href:t.route("profile.index")}},[t._v("\r\n                                                        Profile\r\n                                        ")]),t._v(" "),t.$store.logged?s("inertia-link",{staticClass:"block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",attrs:{href:"/logout",method:"post",as:"button",type:"button"}},[t._v("\r\n                                                    Logout\r\n                                        ")]):t._e()],1)])])])],1):t._e()])]),t._v(" "),s("div",{staticClass:"-mr-2 flex md:hidden"},[s("button",{staticClass:"bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",on:{click:function(e){return t.toggleNavbar()}}},[s("span",{staticClass:"sr-only"},[t._v("Open main menu")]),t._v(" "),s("svg",{staticClass:"h-6 w-6",class:{block:!t.showMenu,hidden:t.showMenu},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})]),t._v(" "),s("svg",{staticClass:"h-6 w-6",class:{hidden:!t.showMenu,block:t.showMenu},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])]),t._v(" "),s("div",{staticClass:"block md:hidden",class:{hidden:!t.showMenu,block:t.showMenu}},[s("div",{staticClass:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},[t.$store.logged?t._e():s("inertia-link",{staticClass:"block px-3 py-2 rounded-md text-base font-medium",class:t.route().current("login")?"text-white bg-gray-900":"text-gray-300 hover:text-white hover:bg-gray-700",attrs:{href:t.route("login")}},[t._v("\r\n                            Login\r\n            ")]),t._v(" "),t.$store.logged?t._e():s("inertia-link",{staticClass:"block px-3 py-2 rounded-md text-base font-medium",class:t.route().current("register")?"text-white bg-gray-900":"text-gray-300 hover:text-white hover:bg-gray-700",attrs:{href:t.route("register")}},[t._v("\r\n                            Register\r\n            ")]),t._v(" "),t.$store.logged?s("inertia-link",{staticClass:"block px-3 py-2 rounded-md text-base font-medium",class:t.route().current("dashboard.index")?"text-white bg-gray-900":"text-gray-300 hover:text-white hover:bg-gray-700",attrs:{href:t.route("dashboard.index")}},[t._v("\r\n                            Dashboard\r\n            ")]):t._e()],1),t._v(" "),t.$store.logged?s("div",{staticClass:"pt-4 pb-3 border-t border-gray-700"},[t._m(0),t._v(" "),s("div",{staticClass:"mt-3 px-2 space-y-1"},[s("inertia-link",{staticClass:"block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700",attrs:{href:t.route("profile.index")}},[t._v("\r\n                                Profile\r\n                ")]),t._v(" "),s("inertia-link",{staticClass:"block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700",attrs:{href:"/logout",method:"post",as:"button",type:"button"}},[t._v("\r\n                            Logout\r\n                ")])],1)]):t._e()])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center px-5"},[e("div",{staticClass:"flex-shrink-0"},[e("img",{staticClass:"h-10 w-10 rounded-full",attrs:{src:"/img/user.png",alt:""}})]),this._v(" "),e("div",{staticClass:"ml-3"},[e("div",{staticClass:"text-base font-medium leading-none text-white"},[this._v("My Settings")])])])}],!1,null,null,null).exports},data:function(){return{}},watch:{"$page.props.user.id":{handler:function(t,e){null!==this.$page.props.user?this.$store.logged=!0:this.$store.logged=!1}}},methods:{url:function(){return location.pathname.substr(1)}},created:function(){null!==this.$page.props.user?this.$store.logged=!0:this.$store.logged=!1,null!==this.$page.props.user&&1==this.$page.props.user.adm?this.$store.adm=!0:this.$store.adm=!1}},i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header-menu",{key:t.url()}),t._v(" "),t._t("default"),t._v("\n      "+t._s(t.$page)+" "),s("br"),t._v("\n      "+t._s(t.$store)+"\n ")],2)}),[],!1,null,null,null);e.a=i.exports},"1PdU":function(t,e,s){"use strict";s.r(e);var r=s("Wz0r"),a=s("+SZM"),n=s("XmmZ"),i=s("Uuxi"),o=s("1bRN"),l=s("NPno"),u=s("Gth5"),c=s("LCsz"),d={layout:a.a,props:{canResetPassword:Boolean,errors:Object,status:String},components:{AuthCard:n.a,AuthValidationErrors:i.a,AuthSessionStatus:o.a,Label:l.a,Input:u.a,Button:c.a},data:function(){return{form:{email:"",password:"",remember:!1}}},methods:{login:function(){r.Inertia.post("/login",this.form,{preserveScroll:!0,onProgress:function(t){document.querySelector("Button").classList.add("cursor-not-allowed","opacity-25")},onFinish:function(t){document.querySelector("Button").classList.remove("cursor-not-allowed","opacity-25")}})}},metaInfo:{title:"Login"}},m=s("KHd+"),h=Object(m.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("AuthCard",[s("AuthSessionStatus",{staticClass:"mb-4",attrs:{status:t.status}}),t._v(" "),s("AuthValidationErrors",{staticClass:"mb-4",attrs:{errors:t.errors}}),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[s("div",{staticClass:"mb-4"},[s("Label",{attrs:{for:"email",value:"Email"}}),t._v(" "),s("Input",{staticClass:"mt-1 block w-full",attrs:{type:"email",id:"email",autofocus:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),s("div",{staticClass:"mb-4"},[s("Label",{attrs:{for:"password",value:"Password"}}),t._v(" "),s("Input",{staticClass:"mt-1 block w-full",attrs:{type:"password",id:"password",autocomplete:"current-password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),s("div",{staticClass:"block mt-4"},[s("label",{staticClass:"flex items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.remember,expression:"form.remember"}],staticClass:"form-checkbox",attrs:{type:"checkbox",name:"remember"},domProps:{checked:Array.isArray(t.form.remember)?t._i(t.form.remember,null)>-1:t.form.remember},on:{change:function(e){var s=t.form.remember,r=e.target,a=!!r.checked;if(Array.isArray(s)){var n=t._i(s,null);r.checked?n<0&&t.$set(t.form,"remember",s.concat([null])):n>-1&&t.$set(t.form,"remember",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.form,"remember",a)}}}),t._v(" "),s("span",{staticClass:"ml-2 text-sm text-gray-600"},[t._v("Remember me")])])]),t._v(" "),s("div",{staticClass:"flex items-center justify-end mt-4"},[t.canResetPassword?s("inertia-link",{staticClass:"underline text-sm text-gray-600 hover:text-gray-900",attrs:{href:t.route("password.request")}},[t._v("\n                Forgot your password?\n            ")]):t._e(),t._v(" "),s("Button",{staticClass:"ml-4"},[t._v("\n                Login\n            ")])],1)])],1)}),[],!1,null,null,null);e.default=h.exports},"1bRN":function(t,e,s){"use strict";var r={props:["status"]},a=s("KHd+"),n=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.status?e("div",{staticClass:"mb-4 font-medium text-sm text-green-600"},[this._v("\n    "+this._s(this.status)+"\n")]):this._e()}),[],!1,null,null,null);e.a=n.exports},Gth5:function(t,e,s){"use strict";var r={props:["value"],methods:{focus:function(){this.$refs.input.focus()}}},a=s("KHd+"),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",staticClass:"block w-full border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm sm:leading-5",attrs:{type:"text"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})}),[],!1,null,null,null);e.a=n.exports},"KHd+":function(t,e,s){"use strict";function r(t,e,s,r,a,n,i,o){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=s,u._compiled=!0),r&&(u.functional=!0),n&&(u._scopeId="data-v-"+n),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):a&&(l=o?function(){a.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}s.d(e,"a",(function(){return r}))},LCsz:function(t,e,s){"use strict";var r={props:{type:{type:String,default:"submit"}}},a=s("KHd+"),n=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150",attrs:{type:this.type}},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},NPno:function(t,e,s){"use strict";var r={props:["value"]},a=s("KHd+"),n=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"block font-medium text-sm text-gray-700"},[this.value?e("span",[this._v(this._s(this.value))]):e("span",[this._t("default")],2)])}),[],!1,null,null,null);e.a=n.exports},Uuxi:function(t,e,s){"use strict";var r={props:["errors"],computed:{hasErrors:function(){return 0!==Object.values(this.errors).length}}},a=s("KHd+"),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.hasErrors?s("div",[s("div",{staticClass:"font-medium text-red-600"},[t._v("\n        Whoops! Something went wrong.\n    ")]),t._v(" "),s("ul",{staticClass:"mt-3 list-disc list-inside text-sm text-red-600"},t._l(t.errors,(function(e,r,a){return s("li",[t._v(t._s(e[0]))])})),0)]):t._e()}),[],!1,null,null,null);e.a=n.exports},XmmZ:function(t,e,s){"use strict";var r=s("KHd+"),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-40 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},[e("div",{staticClass:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"},[this._t("default")],2)])}),[],!1,null,null,null);e.a=a.exports}}]);