/**
 * sailor-twitter - Twitter clon based on Sailor
 * @version v1.0.0
 * @link    http://tapquo.com
 * @author   ()
 * @license MIT
 */
(function(){"use strict";var __hasProp={}.hasOwnProperty,__extends=function(child,parent){function ctor(){this.constructor=child}for(var key in parent)__hasProp.call(parent,key)&&(child[key]=parent[key]);return ctor.prototype=parent.prototype,child.prototype=new ctor,child.__super__=parent.prototype,child},__slice=[].slice,__bind=function(fn,me){return function(){return fn.apply(me,arguments)}};window.Atoms.Twitter=function(){return{Organism:{},Molecule:{},Dialog:{}}}(),window.isMobile=function(){var check;return check=!1,function(a){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(check=!0)}(navigator.userAgent||navigator.vendor||window.opera),check},window.debug=function(message){return"development"===Sailor.environment()?console.log("DEBUG :: "+message):void 0},Atoms.$(function(){return console.log("------------------------------------------------------------"),console.log("Atoms v"+Atoms.version+" (Sailor v"+Sailor.version+")         "),console.log("------------------------------------------------------------"),new Atoms.Twitter.Organism.Main({},"assets/scaffold/article.main.json"),new Atoms.Twitter.Organism.Home({},"assets/scaffold/article.home.json"),new Atoms.Twitter.Organism.Menu({},"assets/scaffold/aside.menu.json"),new Atoms.Twitter.Dialog.Tweet({},"assets/scaffold/dialog.tweet.json"),new Atoms.Twitter.Dialog.Info({},"assets/scaffold/dialog.info.json"),null==Sailor.store("user")?Atoms.Url.path("main/login"):(Sailor.start(),Atoms.Url.path(Atoms.Url.path().substr(1)||"home/main"))}),Sailor.registerEndpoint("login","user/login"),Sailor.registerEndpoint("signup","user"),Sailor.registerEndpoint("user","user"),Sailor.registerEndpoint("tweet","tweet","sort","id asc"),Sailor.loadingOn=__.Dialog.Loading.show.bind(__.Dialog.Loading),Sailor.loadingOff=__.Dialog.Loading.hide.bind(__.Dialog.Loading),Sailor.start=function(){return Sailor.socket("GET",Sailor.user).then(function(error,users){var user,_i,_len,_results;if(!error){for(_results=[],_i=0,_len=users.length;_len>_i;_i++)user=users[_i],_results.push(__.Entity.User.create(user));return _results}}),Sailor.socket("GET",Sailor.tweet).then(function(error,tweets){var tweet,_i,_len,_results;if(!error){for(_results=[],_i=0,_len=tweets.length;_len>_i;_i++)tweet=tweets[_i],_results.push(__.Entity.Tweet.create(tweet));return _results}}),Sailor.on(Sailor.tweet,function(tweet){return"created"===tweet.verb?__.Entity.Tweet.create(tweet.data):void 0}),Sailor.on(Sailor.user,function(user){return"created"===user.verb?__.Entity.User.create(user.data):void 0})},Sailor.logout=function(){return localStorage.removeItem("user"),Atoms.Url.path("main/login")},__.Entity.Tweet=function(_super){function Tweet(){return Tweet.__super__.constructor.apply(this,arguments)}return __extends(Tweet,_super),Tweet.fields("id","body","user","createdAt","updatedAt"),Tweet.prototype.parse=function(){return{text:this.userName(),info:this.timeFormat(),description:this.body}},Tweet.prototype.timeFormat=function(){return moment(this.createdAt).fromNow(!0)},Tweet.prototype.userName=function(){var username;return username=this.user.email.split("@")[0]},Tweet}(Atoms.Class.Entity),__.Entity.User=function(_super){function User(){return User.__super__.constructor.apply(this,arguments)}return __extends(User,_super),User.fields("email","username","admin","online","label","picture","phone","website","summary","tweets","updatedAt","createdAt","id"),User}(Atoms.Class.Entity),Atoms.Atom.Tweet=function(_super){function Tweet(){return Tweet.__super__.constructor.apply(this,arguments)}return __extends(Tweet,_super),Tweet["default"]={method:"prepend"},Tweet.template='<li {{#if.style}}class="{{style}}"{{/if.style}}>\n  {{#if.image}}<figure><span class="icon loading-d"></span></figure>{{/if.image}}\n  <div>\n    {{#if.info}}<span>{{info}}</span>{{/if.info}}\n    {{#if.text}}<strong>{{text}}</strong>{{/if.text}}\n    {{#if.description}}<small>{{description}}</small>{{/if.description}}\n  </div>\n</li>',Tweet}(Atoms.Atom.Li),Atoms.Twitter.Organism.Home=function(_super){function Home(){return Home.__super__.constructor.apply(this,arguments)}return __extends(Home,_super),Home.prototype.render=function(){return Home.__super__.render.apply(this,arguments)},Home.prototype.onTweetButton=function(){var dispatcher,event,hierarchy;return event=arguments[0],dispatcher=arguments[1],hierarchy=3<=arguments.length?__slice.call(arguments,2):[],__.Dialog.Tweet.show()},Home}(Atoms.Organism.Article),Atoms.Twitter.Organism.Main=function(_super){function Main(){return Main.__super__.constructor.apply(this,arguments)}return __extends(Main,_super),Main.prototype.onSailorSessionLogin=function(){var dispatcher,event,hierarchy;return event=arguments[0],dispatcher=arguments[1],hierarchy=3<=arguments.length?__slice.call(arguments,2):[],this._handler()},Main.prototype.onSailorSessionSignup=function(){var dispatcher,event,hierarchy;return event=arguments[0],dispatcher=arguments[1],hierarchy=3<=arguments.length?__slice.call(arguments,2):[],this._handler()},Main.prototype.onSailorSessionError=function(){var dispatcher,event,hierarchy;return event=arguments[0],dispatcher=arguments[1],hierarchy=3<=arguments.length?__slice.call(arguments,2):[],__.Dialog.Info.view(event.message)},Main.prototype._handler=function(){return Sailor.start(),Atoms.Url.path("home/main")},Main}(Atoms.Organism.Article),Atoms.Twitter.Organism.Menu=function(_super){function Menu(){return Menu.__super__.constructor.apply(this,arguments)}return __extends(Menu,_super),Menu.prototype.onLogout=function(){return Sailor.logout()},Menu}(Atoms.Organism.Aside),Atoms.Twitter.Dialog.Info=function(_super){function Info(){return Info.__super__.constructor.apply(this,arguments)}return __extends(Info,_super),Info.prototype.show=function(){return Info.__super__.show.apply(this,arguments),this._bindKeys()},Info.prototype.view=function(message){return this.section.text.el.html(message),this.show()},Info.prototype.onClose=function(){return this.hide(),!1},Info.prototype._bindKeys=function(){var parent,type;return type=isMobile()?"tap":"click",parent=this.el.parent(),parent.on(type,function(_this){return function(event){return event.target===parent[0]?(parent.off(type),_this.hide()):void 0}}(this))},Info}(Atoms.Organism.Dialog),Atoms.Twitter.Dialog.Tweet=function(_super){function Tweet(){return this.onFormChange=__bind(this.onFormChange,this),Tweet.__super__.constructor.apply(this,arguments)}return __extends(Tweet,_super),Tweet.prototype.show=function(){return Tweet.__super__.show.apply(this,arguments),this.onFormChange(),this._bindKeys()},Tweet.prototype.onClose=function(){return this.hide()},Tweet.prototype.onCancel=function(){return this.hide()},Tweet.prototype.onSend=function(){var form,sendButton,tweet;return sendButton=this.section.form.send,sendButton.el.toggleClass("loading"),form=this.section.form,tweet={body:form.value().tweet,user:Sailor.store("user").id},Sailor.socket("POST",Sailor.tweet,tweet).then(function(_this){return function(error,tweet){return error?_this.bubble("error",error):(_this.bubble("tweet",tweet),__.Entity.Tweet.create(tweet),form.clean(),_this.hide())}}(this)),sendButton.el.toggleClass("loading")},Tweet.prototype.onFormChange=function(){var form,method,sendButton;return form=this.section.form.value(),sendButton=this.section.form.children[1],method=form.tweet.length===this._MIN_LENGHT?"attr":"removeAttr",sendButton.el[method]("disabled",!0)},Tweet.prototype.onWrite=function(){return this.onFormChange()},Tweet.prototype._MIN_LENGHT=0,Tweet.prototype._bindKeys=function(){var parent,type;return type=isMobile()?"tap":"click",parent=this.el.parent(),parent.on(type,function(_this){return function(event){return event.target===parent[0]?(parent.off(type),_this.hide()):void 0}}(this))},Tweet}(Atoms.Organism.Dialog),Atoms.Organism.SailorProfile=function(_super){function SailorProfile(){return this.onFormChange=__bind(this.onFormChange,this),SailorProfile.__super__.constructor.apply(this,arguments)}return __extends(SailorProfile,_super),SailorProfile["extends"]=!0,SailorProfile.events=["error","change","logout"],SailorProfile["default"]={children:[{"Atom.Figure":{id:"avatar",style:"big",events:["touch"]}},{"Atom.Heading":{id:"mail"}},{"Molecule.Form":{id:"form",style:"margin-all",events:["change","error","submit"],children:[{"Atom.Input":{id:"username",type:"text",name:"username",placeholder:"Username..."}},{"Atom.Label":{text:"Other Information"}},{"Atom.Input":{id:"name",type:"text",name:"name",placeholder:"Name..."}},{"Atom.Input":{id:"phone",type:"tel",name:"phone",placeholder:"Phone..."}},{"Atom.Input":{id:"site",type:"text",name:"site",placeholder:"Site..."}},{"Atom.Button":{text:"Update profile",style:"margin-top fluid theme"}},{"Atom.Button":{text:"Logout",style:"fluid",callbacks:["onLogout"]}},{"Atom.Input":{id:"file",type:"file",events:["change"],callbacks:["onAvatarChange"]}}]}}]},SailorProfile.prototype.file=void 0,SailorProfile.prototype.render=function(){return SailorProfile.__super__.render.apply(this,arguments),null==window.Appnima?alert("ERROR: App/nima library not exists."):void 0},SailorProfile.prototype.show=function(){var field,session,value,_ref;if(SailorProfile.__super__.show.apply(this,arguments),session=Appnima.User.session()){this.avatar.refresh({url:session.avatar}),this.mail.refresh({text:session.mail});for(field in session)value=session[field],value&&null!=(_ref=this.form[field])&&_ref.value(value);return this.onFormChange()}},SailorProfile.prototype.onFigureTouch=function(){return this.form.file.el.trigger("click"),!1},SailorProfile.prototype.onAvatarChange=function(){var file_url,reader,_ref;return event.stopPropagation(),event.preventDefault(),file_url=event.target.files[0],(null!=file_url&&null!=(_ref=file_url.type)?_ref.match(/image.*/):void 0)&&(reader=new FileReader,reader.onerror=function(event){return alert("Error code: "+event.target.error)},reader.onload=function(_this){return function(event){return _this.file=event.target.result,_this.avatar.refresh({url:_this.file}),_this.onFormSubmit()}}(this),reader.readAsDataURL(file_url)),!1},SailorProfile.prototype.onFormChange=function(){var child,form,method,_i,_len,_ref;for(form=this.form.value(),method=""===form.mail?"attr":"removeAttr",_ref=this.form.children,_i=0,_len=_ref.length;_len>_i;_i++)child=_ref[_i],child.value||child.el[method]("disabled",!0);return!1},SailorProfile.prototype.onFormError=function(){return this.bubble("error",form),!1},SailorProfile.prototype.onFormSubmit=function(event,form){var parameters,_ref;return null!=(null!=(_ref=window.Appnima)?_ref.key:void 0)&&(parameters=(null!=form?form.value():void 0)||{},null!=this.file&&(parameters.avatar=this.file),__.Dialog.Loading.show(),window.Appnima.User.update(parameters).then(function(_this){return function(error,result){return error?_this.bubble("error",error):_this.bubble("change",result),__.Dialog.Loading.hide()}}(this))),!1},SailorProfile.prototype.onLogout=function(){return Appnima.User.logout().then(function(_this){return function(error,result){return _this.bubble("logout",result)}}(this))},SailorProfile}(Atoms.Organism.Section),Atoms.Organism.SailorSession=function(_super){function SailorSession(){return SailorSession.__super__.constructor.apply(this,arguments)}return __extends(SailorSession,_super),SailorSession["extends"]=!0,SailorSession.events=["login","signup","error"],SailorSession["default"]={style:"centered",children:[{"Atom.Image":{url:"assets/images/logo.png"}},{"Molecule.Form":{id:"form",events:["change"],children:[{"Atom.Input":{id:"mail",type:"email",name:"mail",placeholder:"Email...",events:["keyup"],required:!0}},{"Atom.Input":{id:"password",type:"password",name:"password",placeholder:"Password...",events:["keyup"],required:!0}},{"Atom.Button":{text:"Login",path:"tweet/main",action:"login",style:"fluid theme",callbacks:["onSubmit"]}},{"Atom.Button":{text:"Signup",action:"signup",style:"fluid",callbacks:["onSubmit"]}}]}},{"Atom.Text":{value:"© All Rights Reserved"}}]},SailorSession.prototype.render=function(){return SailorSession.__super__.render.apply(this,arguments),this.onFormChange()},SailorSession.prototype.onFormChange=function(){var child,form,method,_i,_len,_ref;for(form=this.form.value(),method=form.mail.length===this._MIN_LENGHT||form.password.length===this._MIN_LENGHT?"attr":"removeAttr",_ref=this.form.children,_i=0,_len=_ref.length;_len>_i;_i++)child=_ref[_i],child.value||child.el[method]("disabled",!0);return!1},SailorSession.prototype.onSubmit=function(event,button){var action,user,values;return action=button.attributes.action,values=this.form.value(),user="signup"===action?{email:values.mail,password:values.password}:{identifier:values.mail,password:values.password},Sailor.proxy("POST",Sailor[action],user).then(function(_this){return function(error,user){return error?_this.bubble("error",error):(delete user.tweets,Sailor.store("user",user),_this.bubble(action,user))}}(this))},SailorSession.prototype._MIN_LENGHT=0,SailorSession}(Atoms.Organism.Section)}).call(this);