webpackJsonp([1],{"7seb":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{src:s("wRNL")}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var a=s("VU/8")({name:"App"},r,!1,function(t){s("7seb")},null,null).exports,o=s("/ocq"),i={data:function(){return{user:{userid:"",name:"",password:""}}},methods:{signUp:function(t){var e=this;this.$http.post("/api/users/signUp",{user:this.user}).then(function(t){1==t.data.success&&(alert(t.data.message),e.$router.push("/login")),0==t.data.success&&alert(t.data.message)}).catch(function(t){alert("error")})}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"id"}},[t._v("아이디")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userid,expression:"user.userid"}],attrs:{type:"text",id:"id"},domProps:{value:t.user.userid},on:{input:function(e){e.target.composing||t.$set(t.user,"userid",e.target.value)}}}),t._v(" "),s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"name"}},[t._v("이름")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text",id:"name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),t._v(" "),s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"password"}},[t._v("비밀번호")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",id:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),s("div",[s("button",{attrs:{click:t.signUp}},[t._v("가입하기")])])])])])},staticRenderFns:[]},p=s("VU/8")(i,u,!1,null,null,null).exports,d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"webtoons"},[s("h1",[t._v("웹툰 목록")]),t._v(" "),t._l(t.webtoons,function(e){return s("div",{key:e,staticClass:"webtoons"},[s("img",{staticClass:"poster",attrs:{src:e.poster}}),t._v(" "),s("div",[s("strong"),t._v(",\n      "),s("i"),t._v(" "),s("router-link",{attrs:{to:{name:"webtoonshowpage",params:{id:e.id}}}},[t._v("더보기")])],1)])})],2)},staticRenderFns:[]},c=s("VU/8")({created:function(){var t=this;this.$http.get("/api/webtoon").then(function(e){t.webtoons=e.data})},data:function(){return{webtoons:[]}}},d,!1,null,null,null).exports,l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("상세 내용")]),this._v("\n  "+this._s(this.webtoon)+"\n")])},staticRenderFns:[]},v=s("VU/8")({created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/webtoon/"+e).then(function(e){t.webtoon=e.data})},data:function(){return{webtoon:{}}}},l,!1,null,null,null).exports;n.a.use(o.a);var m=new o.a({routes:[{path:"/signup",name:"signup",component:p},{path:"/webtoon",name:"webtoonindexpage",component:c},{path:"/webtoon/:id",name:"webtoonshowpage",component:v}]}),w=s("mtWM"),h=s.n(w);n.a.prototype.$http=h.a,n.a.config.productionTip=!1,new n.a({el:"#app",router:m,components:{App:a},template:"<App/>"})},wRNL:function(t,e,s){t.exports=s.p+"static/img/test.fdfa02d.jpg"}},["NHnr"]);
//# sourceMappingURL=app.7f8ebf51ca68964018ca.js.map