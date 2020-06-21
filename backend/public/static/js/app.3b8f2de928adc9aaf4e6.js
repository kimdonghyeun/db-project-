webpackJsonp([1],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{src:s("wRNL")}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},a,!1,function(t){s("vxI2")},null,null).exports,o=s("/ocq"),i=s("VU/8")(null,null,!1,null,null,null).exports,u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"id"}},[t._v("아이디")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userid,expression:"user.userid"}],attrs:{type:"text",id:"id"},domProps:{value:t.user.userid},on:{input:function(e){e.target.composing||t.$set(t.user,"userid",e.target.value)}}}),t._v(" "),s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"password"}},[t._v("비밀번호")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",id:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),s("div",[s("button",{on:{click:t.login}},[t._v("로그인")]),t._v(" "),s("a",{attrs:{href:"/signUp"}},[t._v("가입하기")])])])])},staticRenderFns:[]},l=s("VU/8")(null,u,!1,null,null,null).exports,p={data:function(){return{user:{userid:"",password:"",age:""}}},methods:{signUp:function(t){var e=this;this.$http.post("/api/users/signup",{user:this.user}).then(function(t){1==t.data.success&&(alert(t.data.message),e.$router.push("/webtoon")),0==t.data.success&&alert(t.data.message)}).catch(function(t){alert("error")})}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"id"}},[t._v("아이디")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userid,expression:"user.userid"}],attrs:{type:"text",id:"id"},domProps:{value:t.user.userid},on:{input:function(e){e.target.composing||t.$set(t.user,"userid",e.target.value)}}}),t._v(" "),s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"password"}},[t._v("패스워드")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",id:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"age"}},[t._v("나이")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.age,expression:"user.age"}],attrs:{type:"text",id:"age"},domProps:{value:t.user.age},on:{input:function(e){e.target.composing||t.$set(t.user,"age",e.target.value)}}}),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{attrs:{click:"signUp"}},[this._v("가입하기")])])}]},c=s("VU/8")(p,d,!1,null,null,null).exports,v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("h1",[t._v("웹툰목록")]),t._v(" "),s("ul",{staticClass:"webtoons"},t._l(t.webtoons,function(e){return s("li",{key:e,staticClass:"item"},[s("router-link",{attrs:{to:{name:"webtoonshowpage",params:{id:e.id}}}},[s("img",{staticClass:"poster",attrs:{src:e.poster}})]),t._v(" "),s("div",{staticClass:"detail"},[s("strong",{staticClass:"tit"},[t._v(t._s(e.webtoon_title))]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:{name:"webtoonshowpage",params:{id:e.id}}}},[t._v("자세히보기")])],1)],1)}),0)])},staticRenderFns:[]},_=s("VU/8")({created:function(){var t=this;this.$http.get("/api/webtoon").then(function(e){t.webtoons=e.data})},data:function(){return{webtoons:[]}}},v,!1,null,null,null).exports,m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail"},[s("h1",[t._v(t._s(t.webtoon.webtoon_title))]),t._v(" "),s("img",{staticClass:"poster",attrs:{src:t.webtoon.poster}}),t._v(" "),s("section",[s("h2",[t._v("웹툰정보")]),t._v(" "),s("dl",{staticClass:"info"},[s("dt",[t._v("작가")]),t._v(" "),s("dd",[t._v(t._s(t.webtoon.pen_name))]),t._v(" "),s("dt",[t._v("연재처")]),t._v(" "),s("dd",[t._v(t._s(t.webtoon.platform_name))]),t._v(" "),s("dt",[t._v("링크")]),t._v(" "),s("dd",[t._v(t._s(t.webtoon.webtoon_link))])])]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:{name:"webtoonindexpage",params:{id:t.webtoon.id}}}},[t._v("돌아가기")])],1)},staticRenderFns:[]},w=s("VU/8")({created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/webtoon/"+e).then(function(e){t.webtoon=e.data[0]})},data:function(){return{webtoon:{}}}},m,!1,null,null,null).exports;n.a.use(o.a);var g=new o.a({mode:"history",routes:[{path:"/mainpage",name:"mainpage",component:i},{path:"/login",name:"login",component:l},{path:"/signup",name:"signup",component:c},{path:"/webtoon",name:"webtoonindexpage",component:_},{path:"/webtoon/:id",name:"webtoonshowpage",component:w}]}),f=s("mtWM"),h=s.n(f);n.a.config.productionTip=!1,n.a.prototype.$http=h.a,new n.a({el:"#app",router:g,components:{App:r},template:"<App/>"})},vxI2:function(t,e){},wRNL:function(t,e,s){t.exports=s.p+"static/img/test.fdfa02d.jpg"}},["NHnr"]);
//# sourceMappingURL=app.3b8f2de928adc9aaf4e6.js.map