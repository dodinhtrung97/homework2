webpackJsonp([0,2],[,,,function(t,n,e){"use strict";var s=e(2),o=e(71),a=e(56),i=e.n(a),c=e(59),r=e.n(c),l=e(61),u=e.n(l),d=e(60),m=e.n(d);s.default.use(o.a),n.a=new o.a({routes:[{path:"/",component:i.a},{path:"/sign_in",name:"Users.sign_in",component:i.a},{path:"/posts",name:"Posts.index",component:r.a},{path:"/posts/new",name:"Posts.new",component:m.a},{path:"/posts/:id",name:"Posts.show",component:u.a}]})},function(t,n,e){"use strict";var s=e(2),o=e(7);n.a={login:function(t,n,e){console.log(o.a);var a={user:{email:t,password:n}};s.default.$http.post("/users/api_sign_in.json",a).then(function(t){o.a.dispatch("login"),e(t.data)}).catch(function(t){o.a.dispatch("logout")})},logout:function(t){console.log(o.a),s.default.$http.delete("/users/api_sign_out.json").then(function(n){o.a.dispatch("logout"),t(n.data)}).catch(function(t){o.a.dispatch("logout")})},checkLoggedIn:function(){s.default.$http.get("/users/check_signed_in.json").then(function(t){o.a.dispatch("login")}).catch(function(t){o.a.dispatch("logout")})}}},,function(t,n,e){"use strict";var s=e(2);n.a={getPosts:function(t,n){s.default.$http.get("/posts.json").then(function(n){t(n.data)}).catch(function(t){n(t)})},getPost:function(t,n,e){s.default.$http.get("/posts/"+t+".json").then(function(t){n(t.data)}).catch(function(t){e(t)})},createPost:function(t,n,e){var o={post:t};s.default.$http.post("/posts.json",o).then(function(t){n(t.data)}).catch(function(t){e(t)})}}},function(t,n,e){"use strict";var s=e(2),o=e(73),a=e(3);s.default.use(o.a);var i={auth:!1},c={login:function(t){console.log("mutations login"),t.auth=!0,a.a.push({name:"Posts.index"})},logout:function(t){console.log("mutations logout"),t.auth=!1,a.a.push({name:"Users.sign_in"})}},r={login:function(t){return(0,t.commit)("login")},logout:function(t){return(0,t.commit)("logout")}},l={loggedIn:function(t){return t.auth}};n.a=new o.a.Store({state:i,getters:l,actions:r,mutations:c})},,,,,,function(t,n,e){"use strict";var s=e(2);n.a={getComments:function(t,n,e){s.default.$http.get("/posts/"+t+"/comments.json").then(function(t){n(t.data)}).catch(function(t){console.log(t)})},createComment:function(t,n,e,o){var a={comment:{content:n}};s.default.$http.post("/posts/"+t+"/comments.json",a).then(function(t){e(t.data)}).catch(function(t){console.log(t)})}}},function(t,n,e){e(45);var s=e(1)(e(43),e(62),"data-v-0a2fa57f",null);t.exports=s.exports},,function(t,n){},function(t,n,e){e(50);var s=e(1)(e(36),e(67),null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"app",components:{Iccs340LeftSidenav:e(55)}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(4),o=e(3);n.default={name:"sign-out",data:function(){return{email:"",password:""}},methods:{logout:function(){console.log("methods.logout"),s.a.logout(function(t){o.a.push({name:"Posts.index"})})},toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(4),o=e(3);n.default={name:"sign-in",data:function(){return{email:"",password:""}},methods:{login:function(){console.log("methods.login"),s.a.login(this.email,this.password,function(t){o.a.push({name:"Posts.index"})})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"comment",props:{comment:{type:Object,required:!1,default:{}}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(13),o=e(3);n.default={name:"new-comment",data:function(){return{comment:{content:""}}},props:{post:{type:Object,required:!1,default:{}}},methods:{createComment:function(){var t=this.post.id,n=this.comment.content;this.comment.content="",s.a.createComment(t,n,function(n){console.log(n),o.a.push({name:"Posts.show",params:{post_id:t},query:{t:new Date}})})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(6);n.default={name:"posts",components:{Iccs340Post:e(14)},data:function(){return{posts:null,error:null}},beforeRouteEnter:function(t,n,e){s.a.getPosts(function(t){e(function(n){n.posts=t})})},watch:{$route:function(){var t=this;s.a.getPosts(function(n){t.posts=n})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(6),o=e(3);n.default={name:"new-post",data:function(){return{post:{name:"",content:""}}},methods:{createPost:function(){s.a.createPost(this.post,function(t){o.a.push({name:"Posts.index"})})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"post",props:{post:{type:Object,required:!1,default:{}}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(6),o=e(13);n.default={name:"post",components:{Iccs340Post:e(14),Iccs340Comment:e(57),Iccs340NewComment:e(58)},data:function(){return{post:{},comments:[],error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;s.a.getPost(this.$route.params.id,function(n){t.post=n,o.a.getComments(n.id,function(n){t.comments=n})})}}}},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},,function(t,n,e){e(49);var s=e(1)(e(37),e(66),null,null);t.exports=s.exports},function(t,n,e){e(46);var s=e(1)(e(38),e(63),"data-v-5cb97a65",null);t.exports=s.exports},function(t,n,e){e(53);var s=e(1)(e(39),e(70),"data-v-f2859632",null);t.exports=s.exports},function(t,n,e){e(48);var s=e(1)(e(40),e(65),"data-v-7122c0b0",null);t.exports=s.exports},function(t,n,e){e(52);var s=e(1)(e(41),e(69),"data-v-d23e7dfa",null);t.exports=s.exports},function(t,n,e){e(51);var s=e(1)(e(42),e(68),"data-v-c35205de",null);t.exports=s.exports},function(t,n,e){e(47);var s=e(1)(e(44),e(64),"data-v-6e431d48",null);t.exports=s.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"post"},[e("md-list-item",[e("md-avatar",[e("md-icon",[t._v("announcement")])],1),t._v(" "),e("div",{staticClass:"md-list-text-container"},[e("span",[t._v(t._s(t.post.name))]),t._v(" "),e("p",[t._v(t._s(t.post.content))])]),t._v(" "),e("md-button",{staticClass:"md-icon-button md-list-action"},[e("md-icon",{staticClass:"md-primary"},[t._v("code")])],1),t._v(" "),e("md-divider",{staticClass:"md-inset"})],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"sign-in"},[e("md-list",{staticClass:"md-double-line"},[e("md-subheader",{staticClass:"md-inset"},[t._v("Sign In")]),t._v(" "),e("md-list-item",[e("md-avatar",{staticClass:"md-avatar-icon"},[e("md-icon",[t._v("folder")])],1),t._v(" "),e("div",{staticClass:"md-list-text-container"},[e("md-input-container",[e("label",[t._v("Email")]),t._v(" "),e("md-input",{attrs:{placeholder:""},model:{value:t.email,callback:function(n){t.email=n},expression:"email"}})],1)],1)],1),t._v(" "),e("md-list-item",[e("md-avatar",{staticClass:"md-avatar-icon"},[e("md-icon",[t._v("folder")])],1),t._v(" "),e("div",{staticClass:"md-list-text-container"},[e("md-input-container",[e("label",[t._v("Password")]),t._v(" "),e("md-input",{attrs:{placeholder:"",type:"password"},nativeOn:{keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13))return null;t.login(n)}},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}})],1)],1)],1),t._v(" "),e("md-list-item",[e("span",{staticStyle:{flex:"1"}}),t._v(" "),e("md-button",{staticClass:"md-raised md-primary",nativeOn:{click:function(n){t.login(n)}}},[t._v("Login")]),t._v(" "),e("span",{staticStyle:{flex:"1"}})],1)],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"post"},[e("md-list",{staticClass:"md-triple-line"},[e("iccs340-post",{attrs:{post:t.post}})],1),t._v(" "),t._l(t.comments,function(t){return e("md-list",[e("iccs340-comment",{attrs:{comment:t}})],1)}),t._v(" "),e("iccs340-new-comment",{attrs:{post:t.post}})],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"new-post"},[e("md-list",[e("md-list-item",[e("md-avatar",{staticClass:"md-avatar-icon"},[e("md-icon",[t._v("folder")])],1),t._v(" "),e("div",{staticClass:"md-list-text-container"},[e("md-input-container",[e("label",[t._v("Add Comment")]),t._v(" "),e("md-input",{attrs:{placeholder:""},model:{value:t.comment.content,callback:function(n){t.comment.content=n},expression:"comment.content"}})],1)],1)],1),t._v(" "),e("md-list-item",[e("span",{staticStyle:{flex:"1"}}),t._v(" "),e("md-button",{staticClass:"md-raised md-primary",nativeOn:{click:function(n){t.createComment(n)}}},[t._v("Save")]),t._v(" "),e("span",{staticStyle:{flex:"1"}})],1)],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"left-sidenav"},[e("md-toolbar",[e("md-button",{staticClass:"md-icon-button",nativeOn:{click:function(n){t.toggleLeftSidenav(n)}}},[e("md-icon",[t._v("menu")])],1),t._v(" "),e("h2",{staticClass:"md-title"},[t._v("Homework 2")])],1),t._v(" "),e("md-sidenav",{ref:"leftSidenav",staticClass:"md-left"},[e("md-toolbar",{staticClass:"md-large"},[e("div",{staticClass:"md-toolbar-container"},[e("h3",{staticClass:"md-title"},[t._v("Navigate")])])]),t._v(" "),e("md-content",{attrs:{flex:"",role:"navigation"}},[e("md-list",[e("md-list-item",[e("md-button",{attrs:{href:"#/posts"}},[t._v("Post Index")])],1),t._v(" "),e("md-list-item",[e("md-button",{attrs:{href:"#/posts/new"}},[t._v("New Post")])],1),t._v(" "),e("md-list-item",[e("md-button",{nativeOn:{click:function(n){t.logout(n)}}},[t._v("Logout")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("iccs340-left-sidenav"),t._v(" "),e("router-view")],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"new-post"},[e("md-list",{staticClass:"md-double-line"},[e("md-subheader",{staticClass:"md-inset"},[t._v("New Post")]),t._v(" "),e("md-list-item",[e("md-avatar",{staticClass:"md-avatar-icon"},[e("md-icon",[t._v("folder")])],1),t._v(" "),e("div",{staticClass:"md-list-text-container"},[e("md-input-container",[e("label",[t._v("Name")]),t._v(" "),e("md-input",{attrs:{placeholder:""},model:{value:t.post.name,callback:function(n){t.post.name=n},expression:"post.name"}})],1)],1)],1),t._v(" "),e("md-list-item",[e("md-avatar",{staticClass:"md-avatar-icon"},[e("md-icon",[t._v("folder")])],1),t._v(" "),e("div",{staticClass:"md-list-text-container"},[e("md-input-container",[e("label",[t._v("Content")]),t._v(" "),e("md-textarea",{attrs:{placeholder:""},model:{value:t.post.content,callback:function(n){t.post.content=n},expression:"post.content"}})],1)],1)],1),t._v(" "),e("md-list-item",[e("span",{staticStyle:{flex:"1"}}),t._v(" "),e("md-button",{staticClass:"md-raised md-primary",nativeOn:{click:function(n){t.createPost(n)}}},[t._v("Save")]),t._v(" "),e("span",{staticStyle:{flex:"1"}})],1)],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"posts"},t._l(t.posts,function(t){return e("md-list",{staticClass:"custom-list md-triple-line"},[e("router-link",{attrs:{to:{name:"Posts.show",params:{id:t.id}}}},[e("iccs340-post",{attrs:{post:t}})],1)],1)}))},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"comment"},[e("md-list-item",[e("md-avatar",[e("md-icon",[t._v("account_circle")])],1),t._v(" "),e("div",{staticClass:"md-list-text-container"},[e("span",[t._v(t._s(t.comment.user.email))]),t._v(" "),e("span",[t._v(t._s(t.comment.content))])])],1)],1)},staticRenderFns:[]}},,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(2),o=e(17),a=e.n(o),i=e(3),c=e(7),r=e(4),l=e(18),u=e.n(l),d=e(16),m=(e.n(d),e(15)),p=e.n(m);s.default.use(u.a),s.default.$http=p.a,p.a.defaults.baseURL="https://salty-springs-87982.herokuapp.com/",p.a.defaults.headers.common.Accept="application/json",p.a.defaults.withCredentials=!0,s.default.config.productionTip=!1,r.a.checkLoggedIn(),new s.default({el:"#app",router:i.a,store:c.a,template:"<App/>",components:{App:a.a}})}],[75]);
//# sourceMappingURL=app.4317fadb7cc2e7b50c3b.js.map