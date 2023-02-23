"use strict";(self.webpackChunkrecipesProject=self.webpackChunkrecipesProject||[]).push([[634],{2634:(O,d,s)=>{s.r(d),s.d(d,{AuthModule:()=>y});var p=s(6895),a=s(433),c=s(1196),g=s(4466),u=s(2565),n=s(8256);let h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-loading-spinner"]],decls:13,vars:0,consts:[[1,"lds-spinner"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n._UZ(1,"div")(2,"div")(3,"div")(4,"div")(5,"div")(6,"div")(7,"div")(8,"div")(9,"div")(10,"div")(11,"div")(12,"div"),n.qZA())},styles:['.lds-spinner[_ngcontent-%COMP%]{color:official;display:inline-block;position:relative;width:80px;height:80px}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform-origin:40px 40px;animation:lds-spinner 1.2s linear infinite}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:" ";display:block;position:absolute;top:3px;left:37px;width:6px;height:18px;border-radius:20%;background:rgb(133,157,170)}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){transform:rotate(0);animation-delay:-1.1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){transform:rotate(30deg);animation-delay:-1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){transform:rotate(60deg);animation-delay:-.9s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){transform:rotate(90deg);animation-delay:-.8s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5){transform:rotate(120deg);animation-delay:-.7s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6){transform:rotate(150deg);animation-delay:-.6s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7){transform:rotate(180deg);animation-delay:-.5s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8){transform:rotate(210deg);animation-delay:-.4s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9){transform:rotate(240deg);animation-delay:-.3s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10){transform:rotate(270deg);animation-delay:-.2s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11){transform:rotate(300deg);animation-delay:-.1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12){transform:rotate(330deg);animation-delay:0s}@keyframes lds-spinner{0%{opacity:1}to{opacity:0}}']}),t})(),f=(()=>{class t{constructor(){this.close=new n.vpe}ngOnInit(){}onClose(){this.close.emit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:7,vars:1,consts:[[1,"overlay",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n.NdJ("click",function(){return o.onClose()}),n.qZA(),n.TgZ(1,"div",1)(2,"p"),n._uU(3),n.qZA(),n.TgZ(4,"div",2)(5,"button",3),n.NdJ("click",function(){return o.onClose()}),n._uU(6,"Close"),n.qZA()()()),2&e&&(n.xp6(3),n.Oqu(o.message))},styles:[".overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:30vw;width:40vw;padding:30px 16px;border-radius:.7rem;background:white;z-index:100;box-shadow:0 2px 8px #00000042}.alert-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:500}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),t})();function _(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"app-alert",6),n.NdJ("close",function(){n.CHM(e);const r=n.oxw();return n.KtG(r.closeTriggered())}),n.qZA()}if(2&t){const e=n.oxw();n.Q6J("message",e.isError)}}function v(t,i){1&t&&(n.TgZ(0,"div",7),n._UZ(1,"app-loading-spinner"),n.qZA())}function C(t,i){1&t&&(n.TgZ(0,"span",19),n._uU(1,"please enter a valid email address"),n.qZA())}function x(t,i){1&t&&(n.TgZ(0,"span",19),n._uU(1,"please enter a valid password with minmum 6 length characters"),n.qZA())}function b(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"form",8,9),n.NdJ("ngSubmit",function(){n.CHM(e);const r=n.MAs(1),l=n.oxw();return n.KtG(l.onSubmit(r))}),n.TgZ(2,"label",10),n._uU(3,"E-Mail"),n.qZA(),n._UZ(4,"input",11,12),n.YNc(6,C,2,0,"span",13),n.TgZ(7,"label",14),n._uU(8,"password"),n.qZA(),n._UZ(9,"input",15,16),n.YNc(11,x,2,0,"span",13),n.TgZ(12,"button",17),n._uU(13),n.qZA(),n.TgZ(14,"button",18),n.NdJ("click",function(){n.CHM(e);const r=n.oxw();return n.KtG(r.onSwitchMode())}),n._uU(15),n.qZA()()}if(2&t){const e=n.MAs(1),o=n.MAs(5),r=n.MAs(10),l=n.oxw();n.xp6(6),n.Q6J("ngIf",!o.valid&&o.touched),n.xp6(5),n.Q6J("ngIf",!r.valid&&r.touched),n.xp6(1),n.Q6J("disabled",!e.valid),n.xp6(1),n.Oqu(l.isLoggedin?"Login":"Sign up"),n.xp6(2),n.hij("switch to ",l.isLoggedin?"Sign Up":"Log In","")}}let M=(()=>{class t{constructor(e,o,r){this.authService=e,this.router=o,this.renderer=r,this.isLoggedin=!0,this.isLoading=!1,this.isError=null}ngOnInit(){this.renderer.addClass(document.body,"card")}onSwitchMode(){this.isLoggedin=!this.isLoggedin}closeTriggered(){this.isError=null}onSubmit(e){if(!e.valid)return;const o=e.value.email,r=e.value.password;let l;this.isLoggedin?(this.isLoading=!0,l=this.authService.login(o,r)):(this.isLoading=!0,l=this.authService.signUp(o,r)),l.subscribe(m=>{this.isLoading=!1,this.router.navigate(["/recipes"])},m=>{this.isError=m,this.isLoading=!1}),e.reset()}ngOnDestroy(){this.renderer.removeClass(document.body,"card")}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(u.u),n.Y36(c.F0),n.Y36(n.Qsj))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-auth"]],decls:8,vars:3,consts:[[1,"row"],[1,"col-md-6","col-xs-12","col-md-offset-2","col-lg-offset-2"],[3,"message","close",4,"ngIf"],["style","text-align:center;",4,"ngIf"],[1,"login-card"],["class","login-form",3,"ngSubmit",4,"ngIf"],[3,"message","close"],[2,"text-align","center"],[1,"login-form",3,"ngSubmit"],["myForm","ngForm"],["for","email"],["type","email","id","email","placeholder","enter your mail","ngModel","","name","email","required","","email",""],["email","ngModel"],["class","help-block",4,"ngIf"],["for","password"],["type","password","id","password","placeholder","enter your password","ngModel","","name","password","required","","minlength","6"],["password","ngModel"],["type","submit",3,"disabled"],["type","button",3,"click"],[1,"help-block"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"div",1),n.YNc(2,_,1,1,"app-alert",2),n.YNc(3,v,2,0,"div",3),n.TgZ(4,"div",4)(5,"h2"),n._uU(6,"Enter your credentials"),n.qZA(),n.YNc(7,b,16,5,"form",5),n.qZA()()()),2&e&&(n.xp6(2),n.Q6J("ngIf",o.isError&&!o.isLoading),n.xp6(1),n.Q6J("ngIf",o.isLoading),n.xp6(4),n.Q6J("ngIf",!o.isLoading))},dependencies:[p.O5,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.wO,a.on,a.On,a.F,h,f],styles:['@import"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap";input.ng-invalid.ng-touched{border:1px solid red}.help-block{color:#a94442!important}.card{display:grid!important;place-items:center!important;margin:0!important;padding:0 24px!important;background-image:url(background.ee14843837cd4e3c.svg)!important;background-repeat:no-repeat!important;background-size:cover!important;font-family:Ubuntu,san-serif!important;color:#000!important;animation:rotate 8s infinite alternate linear!important}.login-card{position:relative;z-index:3;width:100%;margin:0 20px;padding:70px 30px 44px;border-radius:1.25rem;background:#fff}.login-card>h2{text-align:center;color:#000000a9;font-size:36px;font-weight:600;margin:0 0 30px}.login-form{width:100%!important;display:grid!important;gap:16px!important;margin:0!important}.login-form>input,.login-form>button{width:100%!important;height:50px!important}.login-form>input{border:2px solid #ebebeb!important;font-family:inherit!important;font-size:15px!important;padding:0 16px!important;border-radius:1.25rem!important;transition:all .375s!important}.login-form>input:hover{border:2px solid #10449a}.login-form>button{cursor:pointer!important;width:100%!important;padding:0 16px!important;text-transform:uppercase;border-radius:1.25rem!important;font-size:1.5rem!important;font-weight:900!important;border:0!important;text-align:center!important;letter-spacing:2px!important;background:#216ce7!important;color:#f9f9f9!important;transition:all .375s!important}.login-form>button:hover{background:#10449a!important}@keyframes rotate{to{background-position:56% 20%}}\n'],encapsulation:2}),t})(),y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[p.ez,a.u5,g.m,c.Bz.forChild([{path:"",component:M}])]}),t})()}}]);