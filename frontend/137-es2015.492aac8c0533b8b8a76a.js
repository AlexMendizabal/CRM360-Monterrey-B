(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{"/25D":function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));class t{constructor(){this.show=!0,this.backButton=!0}ngOnInit(){}}},"0vPL":function(n,l,e){"use strict";e.d(l,"a",(function(){return r})),e.d(l,"b",(function(){return d}));var t=e("8Y7J"),o=e("fIf1"),u=e("hDo6"),i=e("SVse"),r=(e("KDPy"),t["\u0275crt"]({encapsulation:0,styles:[["#application-body{height:calc(100vh - (93px));overflow-y:auto;margin-top:45px;padding-top:15px;padding-bottom:15px;position:relative}"]],data:{}}));function a(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,1,"breadcrumb",[],null,null,null,o.b,o.a)),t["\u0275did"](3,114688,null,0,u.a,[],{tree:[0,"tree"]},null)],(function(n,l){n(l,3,0,l.component.breadCrumbTree)}),null)}function c(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"div",[["class","row"],["id","application-body"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,5,"div",[["class","col"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,a)),t["\u0275did"](3,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](4,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,1,"div",[["class","col-lg-12"]],null,null,null,null,null)),t["\u0275ncd"](null,0)],(function(n,l){n(l,3,0,l.component.onShowBreadCrumb())}),null)}function d(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](16777216,null,null,1,null,c)),t["\u0275did"](1,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,l.component.show)}),null)}},"7++P":function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("8Y7J"),o=e("UX1j"),u=function(){function n(){}return n.decorators=[{type:t.NgModule,args:[{declarations:[o.CountoDirective],exports:[o.CountoDirective]}]}],n.ctorParameters=function(){return[]},n}();l.CountoModule=u},KDPy:function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));class t{constructor(){this.show=!0,this.breadCrumbTree=[]}ngOnInit(){}onShowBreadCrumb(){return void 0!==this.breadCrumbTree&&this.breadCrumbTree.length>0}}},QdM9:function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));class t{static forRoot(){return{ngModule:t}}}},UX1j:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("8Y7J"),o=function(){function n(){this.countoChange=new t.EventEmitter,this.countoEnd=new t.EventEmitter}return Object.defineProperty(n.prototype,"duration",{set:function(n){this._duration=parseFloat(n),this.run()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"countTo",{set:function(n){this._countTo=parseFloat(n),this.run()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"countFrom",{set:function(n){this._countFrom=parseFloat(n),this.run()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"step",{set:function(n){this._step=parseFloat(n),this.run()},enumerable:!0,configurable:!0}),n.prototype.run=function(){var n=this;if(clearInterval(n._timer),isNaN(n._duration))return!1;if(isNaN(n._step))return!1;if(isNaN(n._countFrom))return!1;if(isNaN(n._countTo))return!1;if(n._step<=0)return console.info("Step must be greater than 0."),!1;if(n._duration<=0)return console.info("Duration must be greater than 0."),!1;if(n._step>1e3*n._duration)return console.info("Step must be equal or smaller than duration."),!1;var l=n._countFrom,e=Math.abs(n._countTo-n._countFrom)/(1e3*n._duration/n._step);n.countoChange.emit(l),n._timer=setInterval((function(){n._countTo<n._countFrom?l<=n._countTo?(clearInterval(n._timer),n.countoChange.emit(n._countTo),n.countoEnd.emit()):(n.countoChange.emit(l),l-=e):l>=n._countTo?(clearInterval(n._timer),n.countoChange.emit(n._countTo),n.countoEnd.emit()):(n.countoChange.emit(l),l+=e)}),n._step)},n.decorators=[{type:t.Directive,args:[{selector:"[counto]"}]}],n.ctorParameters=function(){return[]},n.propDecorators={countoChange:[{type:t.Output}],countoEnd:[{type:t.Output}],duration:[{type:t.Input}],countTo:[{type:t.Input}],countFrom:[{type:t.Input}],step:[{type:t.Input}]},n}();l.CountoDirective=o},Xhka:function(n,l,e){"use strict";e.r(l),e.d(l,"ComercialCicloVendasModuleNgFactory",(function(){return q}));var t=e("8Y7J");class o{}var u=e("pMnS"),i=e("1AWn"),r=e("Eae9"),a=e("cuJr"),c=e("vkLX"),d=e("JMXm"),s=e("iInd"),p=e("SVse"),f=e("mvBb"),m=e("/25D"),b=e("0vPL"),h=e("KDPy"),g=e("g+W+"),v=e("0PD5"),C=e("dNnS"),y=e("UNg1");class x{constructor(n,l,e,t,o,u){this.activatedRoute=n,this.router=l,this.atividadesService=e,this._atividadesService=t,this.pnotifyService=o,this.titleService=u,this.loaderFullScreen=!0,this.breadCrumbTree=[{descricao:"Home",routerLink:"/comercial/home"},{descricao:"Ciclo de ventas"}],this.atividades=[],this.pnotifyService.getPNotify()}ngOnInit(){this.titleService.setTitle("Ciclo de ventas"),this.activatedRoute.params.subscribe(n=>{this.registrarAcesso(),this.getAtividadesInternas(n.idSubModulo)})}registrarAcesso(){this.atividadesService.registrarAcesso().subscribe()}getAtividadesInternas(n){var l,e;let t=null===(e=null===(l=JSON.parse(localStorage.getItem("currentUser")))||void 0===l?void 0:l.info)||void 0===e?void 0:e.matricula;this._atividadesService.getAtividades({submoduloId:n,matricula:t,exibeSidebar:0}).subscribe(n=>{200===n.status?(console.log(n.body.data),this.atividades=n.body.data,this.loaderFullScreen=!1):this.handleAtividadesInternasError()},n=>{this.handleAtividadesInternasError()})}handleAtividadesInternasError(){this.pnotifyService.error(),this.router.navigate(["/comercial/home"])}}var I=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"loader-spinner-full-screen",[],null,null,null,r.b,r.a)),t["\u0275did"](1,114688,null,0,a.a,[],null,null)],(function(n,l){n(l,1,0)}),null)}function T(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","col-md-3"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,3,"card-button",[],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,3).onClick()&&o),o}),c.b,c.a)),t["\u0275did"](2,114688,null,0,d.a,[],{icon:[0,"icon"],text:[1,"text"]},null),t["\u0275did"](3,540672,null,0,s.p,[s.o,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](4,1)],(function(n,l){n(l,2,0,l.context.$implicit.icone,l.context.$implicit.nome);var e=n(l,4,0,l.context.$implicit.rota);n(l,3,0,e)}),null)}function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](1,16384,null,0,p.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](2,0,null,null,1,"app-header",[["appTitle","Ciclo de ventas"]],null,null,null,f.b,f.a)),t["\u0275did"](3,114688,null,0,m.a,[],{appTitle:[0,"appTitle"]},null),(n()(),t["\u0275eld"](4,0,null,null,8,"app-body",[],null,null,null,b.b,b.a)),t["\u0275did"](5,114688,null,0,h.a,[],{show:[0,"show"],breadCrumbTree:[1,"breadCrumbTree"]},null),(n()(),t["\u0275eld"](6,0,null,0,1,"h5",[["class","pt-2 mb-4 text-center"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Selecione uma atividade"])),(n()(),t["\u0275eld"](8,0,null,0,4,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(n()(),t["\u0275eld"](9,0,null,null,3,"div",[["class","col-lg-10"]],null,null,null,null,null)),(n()(),t["\u0275eld"](10,0,null,null,2,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,T)),t["\u0275did"](12,278528,null,0,p.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,1,0,e.loaderFullScreen),n(l,3,0,"Ciclo de ventas"),n(l,5,0,!e.loaderFullScreen,e.breadCrumbTree),n(l,12,0,e.atividades)}),null)}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"comercial-ciclo-vendas",[],null,null,null,k,I)),t["\u0275did"](1,114688,null,0,x,[s.a,s.o,v.a,y.a,g.a,C.a],null,null)],(function(n,l){n(l,1,0)}),null)}var F=t["\u0275ccf"]("comercial-ciclo-vendas",x,N,{},{},[]),S=e("TSLY"),_=e("XTVK"),R=e("ITC6"),P=e("cUpR"),M=e("ciPE"),D=e("EZ6S"),V=e("gJda"),L=e("bNMV"),O=e("qrKy"),z=e("09oW"),E=e("9Xeq"),A=e("TSSN"),j=e("UKGz"),J=e("sCnT"),K=e("7++P"),$=e("QdM9");const U=()=>Promise.all([e.e(1),e.e(2),e.e(3),e.e(4),e.e(7),e.e(8),e.e(10),e.e(11),e.e(12),e.e(19),e.e(40)]).then(e.bind(null,"GvZF")).then(n=>n.ComercialCicloVendasAutorizacionesModuleNgFactory),B=()=>Promise.all([e.e(1),e.e(2),e.e(3),e.e(4),e.e(7),e.e(9),e.e(8),e.e(10),e.e(14),e.e(11),e.e(12),e.e(19),e.e(41),e.e(27),e.e(224)]).then(e.bind(null,"6eUx")).then(n=>n.ComercialCicloVendasCotacoesModuleNgFactory),X=()=>Promise.all([e.e(1),e.e(2),e.e(3),e.e(4),e.e(8),e.e(10),e.e(14),e.e(11),e.e(12),e.e(19),e.e(27),e.e(0),e.e(200)]).then(e.bind(null,"A3et")).then(n=>n.ComercialCicloVendasPedidosProducaoTelasModuleNgFactory),Y=()=>Promise.all([e.e(1),e.e(2),e.e(3),e.e(4),e.e(10),e.e(12),e.e(174)]).then(e.bind(null,"mwxZ")).then(n=>n.ComercialPainelBobinasModuleNgFactory),G=()=>Promise.all([e.e(1),e.e(2),e.e(3),e.e(4),e.e(7),e.e(8),e.e(10),e.e(11),e.e(12),e.e(19),e.e(40)]).then(e.bind(null,"GvZF")).then(n=>n.ComercialCicloVendasAutorizacionesModuleNgFactory);class Z{}var q=t["\u0275cmf"](o,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,i.a,F]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,p.NgLocalization,p.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,S.a,S.a,[]),t["\u0275mpd"](4608,_.a,_.a,[]),t["\u0275mpd"](4608,R.a,R.a,[P.DomSanitizer]),t["\u0275mpd"](4608,M.a,M.a,[]),t["\u0275mpd"](4608,D.a,D.a,[]),t["\u0275mpd"](4608,V.a,V.a,[]),t["\u0275mpd"](4608,L.a,L.a,[]),t["\u0275mpd"](4608,O.a,O.a,[]),t["\u0275mpd"](4608,z.a,z.a,[]),t["\u0275mpd"](1073742336,p.CommonModule,p.CommonModule,[]),t["\u0275mpd"](1073742336,s.s,s.s,[[2,s.x],[2,s.o]]),t["\u0275mpd"](1073742336,E.a,E.a,[]),t["\u0275mpd"](1073742336,A.h,A.h,[]),t["\u0275mpd"](1073742336,j.a,j.a,[]),t["\u0275mpd"](1073742336,J.a,J.a,[]),t["\u0275mpd"](1073742336,K.CountoModule,K.CountoModule,[]),t["\u0275mpd"](1073742336,$.a,$.a,[]),t["\u0275mpd"](1073742336,Z,Z,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,s.m,(function(){return[[{path:":idSubModulo",children:[{path:"",component:x},{path:"autorizaciones",loadChildren:U},{path:"cotacoes-pedidos",loadChildren:B},{path:"pedidos-producao-telas",loadChildren:X},{path:"painel-bobinas",loadChildren:Y},{path:"contato",redirectTo:"/comercial/agenda/novo"},{path:"clientes",redirectTo:"/comercial/clientes/lista"},{path:"reporte",redirectTo:"/comercial/reporte"},{path:"autorizaciones",loadChildren:G}]}]]}),[])])}))},fIf1:function(n,l,e){"use strict";e.d(l,"a",(function(){return i})),e.d(l,"b",(function(){return s}));var t=e("8Y7J"),o=e("iInd"),u=e("SVse"),i=(e("hDo6"),t["\u0275crt"]({encapsulation:0,styles:[['@charset "UTF-8";  breadcrumb{display:block;width:100%}  breadcrumb .custom{background-color:rgba(0,0,0,0);font-size:11px;font-weight:700;padding:0;text-transform:uppercase}  breadcrumb .custom a{color:#3e0752}  breadcrumb .custom a:hover{text-decoration:unset}  breadcrumb .custom span{color:#586464}  breadcrumb .custom .breadcrumb-item+.breadcrumb-item:before{content:"\uf054";font-family:Font Awesome\\ 5 Free;font-size:9px;font-weight:900}']],data:{}}));function r(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,1).onClick(e.button,e.ctrlKey,e.shiftKey,e.altKey,e.metaKey)&&o),o}),null,null)),t["\u0275did"](1,671744,null,0,o.r,[o.o,o.a,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](2,1),(n()(),t["\u0275ted"](3,null,["",""]))],(function(n,l){var e=n(l,2,0,l.parent.context.$implicit.routerLink);n(l,1,0,e)}),(function(n,l){n(l,0,0,t["\u0275nov"](l,1).target,t["\u0275nov"](l,1).href),n(l,3,0,l.parent.context.$implicit.descricao)}))}function a(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""]))],null,(function(n,l){n(l,1,0,l.parent.context.$implicit.descricao)}))}function c(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,u.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](2,{active:0}),(n()(),t["\u0275and"](16777216,null,null,1,null,r)),t["\u0275did"](4,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,a)),t["\u0275did"](6,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=n(l,2,0,!l.context.$implicit.routerLink);n(l,1,0,"breadcrumb-item",e),n(l,4,0,l.context.$implicit.routerLink),n(l,6,0,!l.context.$implicit.routerLink)}),null)}function d(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"nav",[["aria-label","breadcrumb"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"ol",[["class","breadcrumb custom"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,c)),t["\u0275did"](3,278528,null,0,u.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,3,0,l.component.tree)}),null)}function s(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](16777216,null,null,1,null,d)),t["\u0275did"](1,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,l.component.tree.length>0)}),null)}},hDo6:function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));class t{constructor(){this.tree=[]}ngOnInit(){}}},mvBb:function(n,l,e){"use strict";e.d(l,"a",(function(){return c})),e.d(l,"b",(function(){return p}));var t=e("8Y7J"),o=e("GNMj"),u=e("luz8"),i=e("iInd"),r=e("SVse"),a=e("w8rm"),c=(e("/25D"),t["\u0275crt"]({encapsulation:0,styles:[["#application-header{background-color:#fafbfc;border-bottom:1px solid #e5e5e3;box-shadow:0 .045rem .25rem rgba(0,0,0,.075);height:45px;padding:7px 0;position:fixed;width:calc(100% - 48px);z-index:1020}  #application-header #title{display:-ms-flexbox;display:flex}  #application-header #title h1{color:#000;font-size:13px;font-weight:700;line-height:30px;margin-bottom:0;text-transform:uppercase}  #application-header #actions button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#eff3f6;background-image:linear-gradient(-180deg,#fafbfc,#eff3f6 90%);background-position:-1px -1px;background-repeat:repeat-x;background-size:110% 110%;border:1px solid rgba(27,31,35,.2);border-radius:.25em;color:#000;cursor:pointer;display:inline-block;font-size:12px;font-weight:600;height:30px;line-height:20px;padding:4px 10px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}  #application-header #actions button:hover{background-color:#e6ebf1;background-image:linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);background-position:-.5em;border-color:rgba(27,31,35,.35)}  #application-header #actions button:hover.active{background-color:#eff3f6;background-image:linear-gradient(-180deg,#fafbfc,#eff3f6 90%);background-position:-1px -1px;border-color:rgba(27,31,35,.2);cursor:default}  #application-header #actions button.active{color:#005fdc}  #application-header #actions button:disabled{opacity:.6}  #application-header #actions button:disabled:hover{box-shadow:unset;color:#000;cursor:no-drop}  #application-header #actions button:not(:first-child){margin-left:5px}  #application-header #actions button:not(:last-child){margin-right:5px}"]],data:{}}));function d(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"back-button",[],null,null,null,o.b,o.a)),t["\u0275did"](1,114688,null,0,u.a,[i.a,i.o,r.Location,a.a],null,null)],(function(n,l){n(l,1,0)}),null)}function s(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"div",[["class","row"],["id","application-header"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,5,"div",[["class","col-lg-4"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,4,"div",[["id","title"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,d)),t["\u0275did"](4,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](5,0,null,null,1,"h1",[["class","text-truncate"]],null,null,null,null,null)),(n()(),t["\u0275ted"](6,null,["",""])),(n()(),t["\u0275eld"](7,0,null,null,2,"div",[["class","col-lg-8 d-flex justify-content-end"]],null,null,null,null,null)),(n()(),t["\u0275eld"](8,0,null,null,1,"div",[["id","actions"]],null,null,null,null,null)),t["\u0275ncd"](null,0)],(function(n,l){n(l,4,0,l.component.backButton)}),(function(n,l){n(l,6,0,l.component.appTitle)}))}function p(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](16777216,null,null,1,null,s)),t["\u0275did"](1,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,l.component.show)}),null)}}}]);