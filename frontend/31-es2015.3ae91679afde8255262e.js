(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"1V3b":function(e,t,l){"use strict";l.d(t,"a",(function(){return n}));class n{constructor(){this.defaultConfig={subtitleBorder:!1,fixedHeader:!1,bodyHeight:250,isResponsive:!1,isFixed:!1,border:!0,small:!0,select:!0,hover:!0,theme:{color:"light"}}}ngOnInit(){this.checkConfig()}ngOnChanges(){this.checkConfig()}checkConfig(){if(this.config)for(let e in this.config)this.defaultConfig[e]=this.config[e]}tableClass(){let e="";return!0===this.defaultConfig.subtitleBorder&&(e+=" custom-border"),!0===this.defaultConfig.fixedHeader&&(e+=" table-fixed-header"),!0===this.defaultConfig.isFixed&&(e+=" table-fixed"),!0===this.defaultConfig.border&&(e+=" border"),!1===this.defaultConfig.select&&(e+=" no-select"),!0===this.defaultConfig.hover&&(e+=" table-hover"),e=`${e} ${this.tableSize()}`,e}tableSize(){return!0===this.defaultConfig.small?"table-sm":""}bodyHeight(){let e={};return!0===this.defaultConfig.fixedHeader&&(e={height:this.defaultConfig.bodyHeight+"px"}),e}}},"2p+7":function(e,t,l){"use strict";l.d(t,"a",(function(){return r})),l.d(t,"b",(function(){return d}));var n=l("8Y7J"),i=(l("6No5"),l("SVse"));l("s7LF");var r=n["\u0275crt"]({encapsulation:2,styles:[],data:{}});function a(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,1,"li",[["class","pagination-first page-item"]],[[2,"disabled",null]],null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,0,"a",[["class","page-link"],["href",""]],[[8,"innerHTML",1]],[[null,"click"]],(function(e,t,l){var n=!0;return"click"===t&&(n=!1!==e.component.selectPage(1,l)&&n),n}),null,null))],null,(function(e,t){var l=t.component;e(t,0,0,l.noPrevious()||l.disabled),e(t,1,0,l.getText("first"))}))}function u(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,1,"li",[["class","pagination-prev page-item"]],[[2,"disabled",null]],null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,0,"a",[["class","page-link"],["href",""]],[[8,"innerHTML",1]],[[null,"click"]],(function(e,t,l){var n=!0,i=e.component;return"click"===t&&(n=!1!==i.selectPage(i.page-1,l)&&n),n}),null,null))],null,(function(e,t){var l=t.component;e(t,0,0,l.noPrevious()||l.disabled),e(t,1,0,l.getText("previous"))}))}function o(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,1,"li",[["class","pagination-page page-item"]],[[2,"active",null],[2,"disabled",null]],null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,0,"a",[["class","page-link"],["href",""]],[[8,"innerHTML",1]],[[null,"click"]],(function(e,t,l){var n=!0;return"click"===t&&(n=!1!==e.component.selectPage(e.context.$implicit.number,l)&&n),n}),null,null))],null,(function(e,t){e(t,0,0,t.context.$implicit.active,t.component.disabled&&!t.context.$implicit.active),e(t,1,0,t.context.$implicit.text)}))}function s(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,1,"li",[["class","pagination-next page-item"]],[[2,"disabled",null]],null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,0,"a",[["class","page-link"],["href",""]],[[8,"innerHTML",1]],[[null,"click"]],(function(e,t,l){var n=!0,i=e.component;return"click"===t&&(n=!1!==i.selectPage(i.page+1,l)&&n),n}),null,null))],null,(function(e,t){var l=t.component;e(t,0,0,l.noNext()||l.disabled),e(t,1,0,l.getText("next"))}))}function c(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,1,"li",[["class","pagination-last page-item"]],[[2,"disabled",null]],null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,0,"a",[["class","page-link"],["href",""]],[[8,"innerHTML",1]],[[null,"click"]],(function(e,t,l){var n=!0,i=e.component;return"click"===t&&(n=!1!==i.selectPage(i.totalPages,l)&&n),n}),null,null))],null,(function(e,t){var l=t.component;e(t,0,0,l.noNext()||l.disabled),e(t,1,0,l.getText("last"))}))}function d(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,11,"ul",[["class","pagination"]],null,null,null,null,null)),n["\u0275did"](1,278528,null,0,i.NgClass,[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(e()(),n["\u0275and"](16777216,null,null,1,null,a)),n["\u0275did"](3,16384,null,0,i.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),n["\u0275and"](16777216,null,null,1,null,u)),n["\u0275did"](5,16384,null,0,i.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),n["\u0275and"](16777216,null,null,1,null,o)),n["\u0275did"](7,278528,null,0,i.NgForOf,[n.ViewContainerRef,n.TemplateRef,n.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),n["\u0275and"](16777216,null,null,1,null,s)),n["\u0275did"](9,16384,null,0,i.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),n["\u0275and"](16777216,null,null,1,null,c)),n["\u0275did"](11,16384,null,0,i.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(e,t){var l=t.component;e(t,1,0,"pagination",l.classMap),e(t,3,0,l.boundaryLinks),e(t,5,0,l.directionLinks),e(t,7,0,l.pages),e(t,9,0,l.directionLinks),e(t,11,0,l.boundaryLinks)}),null)}},"9GEg":function(e,t,l){"use strict";l.d(t,"a",(function(){return n}));class n{constructor(){this.showAdvancedFilter=!0}ngOnInit(){}onAdvancedFilter(){this.showAdvancedFilter=!this.showAdvancedFilter}}},"9Jk6":function(e,t,l){"use strict";l.d(t,"a",(function(){return r})),l.d(t,"b",(function(){return o}));var n=l("8Y7J"),i=l("SVse"),r=(l("1V3b"),n["\u0275crt"]({encapsulation:0,styles:[['custom-table table,   custom-table table.table-sm{font-size:13px}  custom-table table.table-sm thead{font-size:11px}  custom-table table.border th{border-top:1px solid #dee2e6}  custom-table table.no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}  custom-table table th{border-top:unset!important;text-transform:uppercase}  custom-table table td,   custom-table table th{vertical-align:middle!important}  custom-table table thead.light tr th,   custom-table table thead.white tr th{background-color:#fff}  custom-table table tbody.light tr td{background-color:#f7f7f7}  custom-table table tbody.white tr td{background-color:#fff}  custom-table table.table-fixed-header{width:100%}  custom-table table.table-fixed-header tbody,   custom-table table.table-fixed-header tbody>td,   custom-table table.table-fixed-header tbody>tr,   custom-table table.table-fixed-header thead,   custom-table table.table-fixed-header thead>tr,   custom-table table.table-fixed-header thead>tr>th{display:block}  custom-table table.table-fixed-header tbody>tr:after,   custom-table table.table-fixed-header thead>tr:after{content:" ";display:block;visibility:hidden;clear:both}  custom-table table.table-fixed-header tbody,   custom-table table.table-fixed-header thead{overflow-y:scroll}  custom-table table.table-fixed-header thead tr th{min-height:29px;border-top:unset!important;border-bottom:unset!important}  custom-table table.table-fixed-header thead::-webkit-scrollbar{background-color:inherit}  custom-table table.table-fixed-header tbody>tr>td:after,   custom-table table.table-fixed-header thead>tr>th:after{content:" ";display:table-cell;visibility:hidden;clear:both}  custom-table table.table-fixed-header tbody tr td,   custom-table table.table-fixed-header thead tr th{float:left;word-wrap:break-word}  custom-table table tbody tr td.sticky,   custom-table table thead tr th.sticky{position:sticky;z-index:1010}']],data:{}}));function a(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function u(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function o(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,13,"div",[],[[2,"table-responsive",null]],null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,12,"table",[["class","table mb-0"]],null,null,null,null,null)),n["\u0275did"](2,278528,null,0,i.NgClass,[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(e()(),n["\u0275eld"](3,0,null,null,4,"thead",[],null,null,null,null,null)),n["\u0275did"](4,278528,null,0,i.NgClass,[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2],{ngClass:[0,"ngClass"]},null),(e()(),n["\u0275and"](16777216,null,null,2,null,a)),n["\u0275did"](6,540672,null,0,i.NgTemplateOutlet,[n.ViewContainerRef],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),n["\u0275pod"](7,{$implicit:0}),(e()(),n["\u0275eld"](8,0,null,null,5,"tbody",[],null,null,null,null,null)),n["\u0275did"](9,278528,null,0,i.NgClass,[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2],{ngClass:[0,"ngClass"]},null),n["\u0275did"](10,278528,null,0,i.NgStyle,[n.ElementRef,n.KeyValueDiffers,n.Renderer2],{ngStyle:[0,"ngStyle"]},null),(e()(),n["\u0275and"](16777216,null,null,2,null,u)),n["\u0275did"](12,540672,null,0,i.NgTemplateOutlet,[n.ViewContainerRef],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),n["\u0275pod"](13,{$implicit:0})],(function(e,t){var l=t.component;e(t,2,0,"table mb-0",l.tableClass()),e(t,4,0,l.defaultConfig.theme.color);var n=e(t,7,0,l.theadTmpl);e(t,6,0,n,l.theadTmpl),e(t,9,0,l.defaultConfig.theme.color),e(t,10,0,l.bodyHeight());var i=e(t,13,0,l.tbodyTmpl);e(t,12,0,i,l.tbodyTmpl)}),(function(e,t){e(t,0,0,!0===t.component.defaultConfig.isResponsive)}))}},CU0E:function(e,t,l){"use strict";l.d(t,"a",(function(){return a}));var n=l("IheW"),i=l("IzEk"),r=l("8Y7J");let a=(()=>{class e{constructor(e){this.http=e,this.API="http://23.254.204.187/api/comercial/cadastros/escritorio"}getListaEscritorios(e){let t=new n.h;for(let l in e)t=t.append(l,e[l]);return this.http.get(this.API+"/lista",{params:t}).pipe(Object(i.a)(1))}getAlteracoes(e){return this.http.get(`${this.API}/alteracoes/${e}`).pipe(Object(i.a)(1))}getDetalhes(e){return this.http.get(`${this.API}/detalhes/${e}`).pipe(Object(i.a)(1))}saveEscritorio(e){return this.http.post(this.API+"/salvar",e).pipe(Object(i.a)(1))}updateEscritorio(e){return this.http.put(this.API+"/atualizar",e).pipe(Object(i.a)(1))}save(e){return null!==e.codEscritorio?this.updateEscritorio(e):this.saveEscritorio(e)}activateEscritorio(e){return this.http.post(this.API+"/ativar",e).pipe(Object(i.a)(1))}inactivateEscritorio(e){return this.http.post(this.API+"/inativar",e).pipe(Object(i.a)(1))}}return e.\u0275prov=r["\u0275\u0275defineInjectable"]({factory:function(){return new e(r["\u0275\u0275inject"](n.c))},token:e,providedIn:"root"}),e})()},FOez:function(e,t,l){"use strict";l.d(t,"a",(function(){return a}));var n=l("SMoX"),i=l("8Y7J"),r=l("LqlI");let a=(()=>{class e{constructor(e){this.modalService=e}showConfirm(e,t,l,i,r){const a=this.modalService.show(n.a,{animated:!1,ignoreBackdropClick:!0,keyboard:!1,class:"confirm"});return a.content.type=e,a.content.title=t,a.content.message=l,"delete"===e&&(a.content.messageAlerts=["Se eliminar\xe1 toda la informaci\xf3n relacionada.","Esta acci\xf3n no se puede deshacer."]),"inactivate"===e&&(a.content.messageAlerts=["Las informaciones ser\xe1n inactivadas."]),i&&(a.content.cancelTxt=i),r&&(a.content.okTxt=r),a.content.confirmResult}}return e.\u0275prov=i["\u0275\u0275defineInjectable"]({factory:function(){return new e(i["\u0275\u0275inject"](r.b))},token:e,providedIn:"root"}),e})()},FpO7:function(e,t,l){e.exports=function(e){function t(n){if(l[n])return l[n].exports;var i=l[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var l={};return t.m=e,t.c=l,t.p="",t(0)}([function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=l(3);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(i).default}});var r=l(2);Object.defineProperty(t,"adjustCaretPosition",{enumerable:!0,get:function(){return n(r).default}});var a=l(5);Object.defineProperty(t,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function"},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.previousConformedValue,i=void 0===t?n:t,r=e.previousPlaceholder,a=void 0===r?n:r,u=e.currentCaretPosition,o=void 0===u?0:u,s=e.conformedValue,c=e.rawValue,d=e.placeholderChar,f=e.placeholder,p=e.indexesOfPipedChars,h=void 0===p?l:p,b=e.caretTrapIndexes,g=void 0===b?l:b;if(0===o||!c.length)return 0;var m=i.length,v=f.length,y=s.length,x=c.length-m,k=x>0;if(x>1&&!k&&0!==m)return o;var C=0,I=void 0,O=void 0;if(!k||i!==s&&s!==f){var w=s.toLowerCase(),P=c.toLowerCase().substr(0,o).split(n).filter((function(e){return-1!==w.indexOf(e)}));O=P[P.length-1];var j=a.substr(0,P.length).split(n).filter((function(e){return e!==d})).length,T=f.substr(0,P.length).split(n).filter((function(e){return e!==d})).length;!k&&(T!==j||void 0!==a[P.length-1]&&void 0!==f[P.length-2]&&a[P.length-1]!==d&&a[P.length-1]!==f[P.length-1]&&a[P.length-1]===f[P.length-2])&&j>0&&f.indexOf(O)>-1&&void 0!==c[o]&&(I=!0,O=c[o]);for(var E=h.map((function(e){return w[e]})).filter((function(e){return e===O})).length,M=P.filter((function(e){return e===O})).length,A=f.substr(0,f.indexOf(d)).split(n).filter((function(e,t){return e===O&&c[t]!==e})).length+M+E+(I?1:0),S=0,_=0;_<y&&(C=_+1,w[_]===O&&S++,!(S>=A));_++);}else C=o-x;if(k){for(var R=C,V=C;V<=v;V++)if(f[V]===d&&(R=V),f[V]===d||-1!==g.indexOf(V)||V===v)return R}else if(I){for(var N=C-1;N>=0;N--)if(s[N]===O||-1!==g.indexOf(N)||0===N)return N}else for(var D=C;D>=0;D--)if(f[D-1]===d||-1!==g.indexOf(D)||0===D)return D};var l=[],n=""},function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(t)){if((void 0===t?"undefined":n(t))!==r.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,l),t=(0,i.processCaretTraps)(t).maskWithoutCaretTraps}var o=l.guide,s=void 0===o||o,c=l.previousConformedValue,d=void 0===c?u:c,f=l.placeholderChar,p=void 0===f?r.placeholderChar:f,h=l.placeholder,b=void 0===h?(0,i.convertMaskToPlaceholder)(t,p):h,g=l.keepCharPositions,m=!1===s&&void 0!==d,v=e.length,y=d.length,x=b.length,k=t.length,C=v-y,I=C>0,O=l.currentCaretPosition+(I?-C:0),w=O+Math.abs(C);if(!0===g&&!I){for(var P=u,j=O;j<w;j++)b[j]===p&&(P+=p);e=e.slice(0,O)+P+e.slice(O,v)}for(var T=e.split(u).map((function(e,t){return{char:e,isNew:t>=O&&t<w}})),E=v-1;E>=0;E--){var M=T[E].char;M!==p&&M===b[E>=O&&y===k?E-C:E]&&T.splice(E,1)}var A=u,S=!1;e:for(var _=0;_<x;_++){var R=b[_];if(R===p){if(T.length>0)for(;T.length>0;){var V=T.shift(),N=V.char,D=V.isNew;if(N===p&&!0!==m){A+=p;continue e}if(t[_].test(N)){if(!0===g&&!1!==D&&d!==u&&!1!==s&&I){for(var L=T.length,F=null,$=0;$<L;$++){var q=T[$];if(q.char!==p&&!1===q.isNew)break;if(q.char===p){F=$;break}}null!==F?(A+=N,T.splice(F,1)):_--}else A+=N;continue e}S=!0}!1===m&&(A+=b.substr(_,x));break}A+=R}if(m&&!1===I){for(var J=null,K=0;K<A.length;K++)b[K]===p&&(J=K);A=null!==J?A.substr(0,J+1):u}return{conformedValue:A,meta:{someCharsRejected:S}}};var i=l(4),r=l(1),a=[],u=""},function(e,t,l){"use strict";function n(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.placeholderChar;if(!n(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==e.indexOf(t))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(t)+"\n\nThe mask that was received is: "+JSON.stringify(e));return e.map((function(e){return e instanceof RegExp?t:e})).join("")},t.isArray=n,t.isString=function(e){return"string"==typeof e||e instanceof String},t.isNumber=function(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)},t.isNil=function(e){return null==e},t.processCaretTraps=function(e){for(var t=[],l=void 0;-1!==(l=e.indexOf(a));)t.push(l),e.splice(l,1);return{maskWithoutCaretTraps:e,indexes:t}};var i=l(1),r=[],a="[]"},function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){document.activeElement===e&&(b?g((function(){return e.setSelectionRange(t,t,p)}),0):e.setSelectionRange(t,t,p))}function r(e){if((0,c.isString)(e))return e;if((0,c.isNumber)(e))return String(e);if(null==e)return f;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(l){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,p=n.inputElement,b=n.mask,g=n.guide,m=n.pipe,v=n.placeholderChar,y=void 0===v?d.placeholderChar:v,x=n.keepCharPositions,k=void 0!==x&&x,C=n.showMask,I=void 0!==C&&C;if(void 0===l&&(l=p.value),l!==t.previousConformedValue){(void 0===b?"undefined":u(b))===h&&void 0!==b.pipe&&void 0!==b.mask&&(m=b.pipe,b=b.mask);var O=void 0,w=void 0;if(b instanceof Array&&(O=(0,c.convertMaskToPlaceholder)(b,y)),!1!==b){var P=r(l),j=p.selectionEnd,T=t.previousConformedValue,E=t.previousPlaceholder,M=void 0;if((void 0===b?"undefined":u(b))===d.strFunction){if(!1===(w=b(P,{currentCaretPosition:j,previousConformedValue:T,placeholderChar:y})))return;var A=(0,c.processCaretTraps)(w);M=A.indexes,O=(0,c.convertMaskToPlaceholder)(w=A.maskWithoutCaretTraps,y)}else w=b;var S={previousConformedValue:T,guide:g,placeholderChar:y,pipe:m,placeholder:O,currentCaretPosition:j,keepCharPositions:k},_=(0,s.default)(P,w,S).conformedValue,R=(void 0===m?"undefined":u(m))===d.strFunction,V={};R&&(!1===(V=m(_,a({rawValue:P},S)))?V={value:T,rejected:!0}:(0,c.isString)(V)&&(V={value:V}));var N=R?V.value:_,D=(0,o.default)({previousConformedValue:T,previousPlaceholder:E,conformedValue:N,placeholder:O,rawValue:P,currentCaretPosition:j,placeholderChar:y,indexesOfPipedChars:V.indexesOfPipedChars,caretTrapIndexes:M}),L=N===O&&0===D?I?O:f:N;t.previousConformedValue=L,t.previousPlaceholder=O,p.value!==L&&(p.value=L,i(p,D))}}}}};var o=n(l(2)),s=n(l(3)),c=l(4),d=l(1),f="",p="none",h="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),g="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])},KLQb:function(e,t,l){"use strict";l.d(t,"a",(function(){return i})),l.d(t,"b",(function(){return r}));var n=l("8Y7J"),i=(l("UOde"),n["\u0275crt"]({encapsulation:0,styles:[["loader-spinner-navbar{right:295px;position:absolute;top:14px;z-index:1092}  loader-spinner-navbar .spinner-border{color:hsla(0,0%,100%,.75);border-width:.2rem;width:20px;height:20px}"]],data:{}}));function r(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,2,"div",[["class","spinner-border"],["role","status"]],null,null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(e()(),n["\u0275ted"](-1,null,["Loading..."]))],null,null)}},MaMn:function(e,t,l){"use strict";l.d(t,"a",(function(){return n}));class n{constructor(){this.position="center"}}},QPKW:function(e,t,l){"use strict";l.d(t,"a",(function(){return r})),l.d(t,"b",(function(){return a}));var n=l("8Y7J"),i=l("SVse"),r=(l("9GEg"),n["\u0275crt"]({encapsulation:0,styles:[["advanced-filter{display:block;width:100%}  advanced-filter #filter-header{padding:7px 15px}  advanced-filter #filter-body{padding:7px 15px 15px}  advanced-filter #filter-body .form-row:last-child .form-group{margin-bottom:0}"]],data:{}}));function a(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,15,"div",[["class","row mb-3"]],null,null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,14,"div",[["class","col-lg-12"]],null,null,null,null,null)),(e()(),n["\u0275eld"](2,0,null,null,13,"div",[["class","border shadow-sm"]],null,null,null,null,null)),(e()(),n["\u0275eld"](3,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(e()(),n["\u0275eld"](4,0,null,null,9,"div",[["class","col"]],null,null,null,null,null)),(e()(),n["\u0275eld"](5,0,null,null,8,"div",[["class","bg-light hover w-100 d-flex justify-content-between"],["id","filter-header"]],null,[[null,"click"]],(function(e,t,l){var n=!0;return"click"===t&&(n=!1!==e.component.onAdvancedFilter()&&n),n}),null,null)),n["\u0275did"](6,278528,null,0,i.NgClass,[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),n["\u0275pod"](7,{"shadow-sm border-bottom":0}),(e()(),n["\u0275eld"](8,0,null,null,2,"div",[["class","mtc-title mb-0"]],null,null,null,null,null)),(e()(),n["\u0275eld"](9,0,null,null,0,"i",[["class","fas fa-filter mr-1"]],null,null,null,null,null)),(e()(),n["\u0275ted"](-1,null,[" Filtros"])),(e()(),n["\u0275eld"](11,0,null,null,2,"button",[["class","btn-icon-sm my-auto mr-1"],["type","button"]],null,null,null,null,null)),(e()(),n["\u0275eld"](12,0,null,null,0,"i",[["class","fas fa-chevron-down"]],[[8,"hidden",0]],null,null,null,null)),(e()(),n["\u0275eld"](13,0,null,null,0,"i",[["class","fas fa-chevron-up"]],[[8,"hidden",0]],null,null,null,null)),(e()(),n["\u0275eld"](14,0,null,null,1,"div",[["id","filter-body"]],[[8,"hidden",0]],null,null,null,null)),n["\u0275ncd"](null,0)],(function(e,t){var l=e(t,7,0,t.component.showAdvancedFilter);e(t,6,0,"bg-light hover w-100 d-flex justify-content-between",l)}),(function(e,t){var l=t.component;e(t,12,0,l.showAdvancedFilter),e(t,13,0,!l.showAdvancedFilter),e(t,14,0,!l.showAdvancedFilter)}))}},UOde:function(e,t,l){"use strict";l.d(t,"a",(function(){return n}));class n{constructor(){}ngOnInit(){}}},UVXo:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l("8Y7J"),i=l("s7LF"),r=l("cUpR"),a=l("FpO7");t.TextMaskConfig=function(){return function(){}}(),t.MASKEDINPUT_VALUE_ACCESSOR={provide:i.NG_VALUE_ACCESSOR,useExisting:n.forwardRef((function(){return u})),multi:!0};var u=function(){function e(e,t,l){var n;this._renderer=e,this._elementRef=t,this._compositionMode=l,this.textMaskConfig={mask:[],guide:!0,placeholderChar:"_",pipe:void 0,keepCharPositions:!1},this.onChange=function(e){},this.onTouched=function(){},this._composing=!1,null==this._compositionMode&&(this._compositionMode=(n=r.\u0275getDOM()?r.\u0275getDOM().getUserAgent():"",!/android (\d+)/.test(n.toLowerCase())))}return e.prototype.ngOnChanges=function(e){this._setupMask(!0),void 0!==this.textMaskInputElement&&this.textMaskInputElement.update(this.inputElement.value)},e.prototype.writeValue=function(e){this._setupMask(),this._renderer.setProperty(this.inputElement,"value",null==e?"":e),void 0!==this.textMaskInputElement&&this.textMaskInputElement.update(e)},e.prototype.registerOnChange=function(e){this.onChange=e},e.prototype.registerOnTouched=function(e){this.onTouched=e},e.prototype.setDisabledState=function(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)},e.prototype._handleInput=function(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&(this._setupMask(),void 0!==this.textMaskInputElement&&(this.textMaskInputElement.update(e),this.onChange(e=this.inputElement.value)))},e.prototype._setupMask=function(e){void 0===e&&(e=!1),this.inputElement||(this.inputElement="INPUT"===this._elementRef.nativeElement.tagName.toUpperCase()?this._elementRef.nativeElement:this._elementRef.nativeElement.getElementsByTagName("INPUT")[0]),this.inputElement&&e&&(this.textMaskInputElement=a.createTextMaskInputElement(Object.assign({inputElement:this.inputElement},this.textMaskConfig)))},e.prototype._compositionStart=function(){this._composing=!0},e.prototype._compositionEnd=function(e){this._composing=!1,this._compositionMode&&this._handleInput(e)},e.decorators=[{type:n.Directive,args:[{host:{"(input)":"_handleInput($event.target.value)","(blur)":"onTouched()","(compositionstart)":"_compositionStart()","(compositionend)":"_compositionEnd($event.target.value)"},selector:"[textMask]",exportAs:"textMask",providers:[t.MASKEDINPUT_VALUE_ACCESSOR]}]}],e.propDecorators={textMaskConfig:[{type:n.Input,args:["textMask"]}]},e}();t.MaskedInputDirective=u,t.TextMaskModule=function(){function e(){}return e.decorators=[{type:n.NgModule,args:[{declarations:[u],exports:[u]}]}],e}();var o=l("FpO7");t.conformToMask=o.conformToMask},VRgM:function(e,t,l){"use strict";l.d(t,"a",(function(){return r})),l.d(t,"b",(function(){return o}));var n=l("8Y7J"),i=l("SVse"),r=(l("lDLK"),n["\u0275crt"]({encapsulation:0,styles:[["subtitles .subtitle{border:1px solid rgba(0,0,0,0);border-radius:.25rem;display:-ms-flexbox;display:flex;margin-right:5px;padding:4px}  subtitles .subtitle.active.green{border-color:#4dcc71}  subtitles .subtitle.active.blue{border-color:#005fdc}  subtitles .subtitle.active.yellow{border-color:#ca9f1d}  subtitles .subtitle.active.red{border-color:#b8342c}  subtitles .subtitle.active.gray{border-color:#586464}  subtitles .subtitle .square{border-radius:.25rem;height:15px;margin-bottom:auto;margin-top:auto;width:15px}  subtitles .subtitle .text{line-height:15px;margin-top:auto;margin-left:5px;margin-bottom:auto;font-size:11px;font-weight:700;text-transform:uppercase}  subtitles .subtitle.green .square{background-color:#4dcc71}  subtitles .subtitle.green .text{color:#4dcc71}  subtitles .subtitle.blue .square{background-color:#005fdc}  subtitles .subtitle.blue .text{color:#005fdc}  subtitles .subtitle.yellow .square{background-color:#ca9f1d}  subtitles .subtitle.yellow .text{color:#ca9f1d}  subtitles .subtitle.red .square{background-color:#b8342c}  subtitles .subtitle.red .text{color:#b8342c}  subtitles .subtitle.gray .square{background-color:#586464}  subtitles .subtitle.gray .text{color:#586464}"]],data:{}}));function a(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,8,"li",[],null,[[null,"click"]],(function(e,t,l){var n=!0;return"click"===t&&(n=!1!==e.component.setActive(e.context.index)&&n),n}),null,null)),(e()(),n["\u0275eld"](1,0,null,null,7,"div",[["class","subtitle"]],null,null,null,null,null)),n["\u0275did"](2,278528,null,0,i.NgClass,[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),n["\u0275did"](3,278528,null,0,i.NgStyle,[n.ElementRef,n.KeyValueDiffers,n.Renderer2],{ngStyle:[0,"ngStyle"]},null),(e()(),n["\u0275eld"](4,0,null,null,1,"div",[["class","square"]],null,null,null,null,null)),n["\u0275did"](5,278528,null,0,i.NgStyle,[n.ElementRef,n.KeyValueDiffers,n.Renderer2],{ngStyle:[0,"ngStyle"]},null),(e()(),n["\u0275eld"](6,0,null,null,2,"div",[["class","text"]],null,null,null,null,null)),n["\u0275did"](7,278528,null,0,i.NgStyle,[n.ElementRef,n.KeyValueDiffers,n.Renderer2],{ngStyle:[0,"ngStyle"]},null),(e()(),n["\u0275ted"](8,null,["",""]))],(function(e,t){var l=t.component;e(t,2,0,"subtitle",l.subtitleClass(t.context.index,t.context.$implicit)),e(t,3,0,l.subtitleStyle(t.context.index,t.context.$implicit)),e(t,5,0,l.squareStyle(t.context.$implicit)),e(t,7,0,l.textStyle(t.context.$implicit))}),(function(e,t){e(t,8,0,t.context.$implicit.text)}))}function u(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,4,"div",[["class","row mb-2"]],null,null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,3,"div",[["class","col"]],null,null,null,null,null)),(e()(),n["\u0275eld"](2,0,null,null,2,"ul",[["class","list-unstyled d-flex mb-0"]],null,null,null,null,null)),(e()(),n["\u0275and"](16777216,null,null,1,null,a)),n["\u0275did"](4,278528,null,0,i.NgForOf,[n.ViewContainerRef,n.TemplateRef,n.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){e(t,4,0,t.component.data)}),null)}function o(e){return n["\u0275vid"](0,[(e()(),n["\u0275and"](16777216,null,null,1,null,u)),n["\u0275did"](1,16384,null,0,i.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(e,t){var l=t.component;e(t,1,0,l.show&&l.data.length>0)}),null)}},VgqD:function(e,t,l){"use strict";l.d(t,"a",(function(){return u}));var n=l("IheW"),i=l("IzEk"),r=l("un/a"),a=l("8Y7J");let u=(()=>{class e{constructor(e){this.http=e,this.API="http://23.254.204.187/api/comercial"}getEmpresas(e){let t=new n.h;for(let l in e)t=t.append(l,e[l]);return this.http.get(this.API+"/empresas",{params:t}).pipe(Object(i.a)(1),Object(r.a)(2))}getDepositos(e){let t=new n.h;for(let l in e)t=t.append(l,e[l]);return this.http.get(this.API+"/depositos",{params:t}).pipe(Object(i.a)(1),Object(r.a)(2))}getAlmacen(e){return this.http.get(this.API+"/estoque").pipe(Object(i.a)(1),Object(r.a)(2))}getLinhasId(e){return this.http.get(`${this.API}/linhas/${e}`).pipe(Object(i.a)(1),Object(r.a)(2))}getSublineasId(e){return this.http.get(`${this.API}/sublineas/${e}`).pipe(Object(i.a)(1),Object(r.a)(2))}sincronizarMateriales(){return this.http.get(this.API+"/sincronizar").pipe(Object(i.a)(1),Object(r.a)(2))}getMateriales(e){return this.http.get(this.API+"/materiales",{params:e}).pipe(Object(i.a)(1),Object(r.a)(2))}getMaterialesLista(e){return this.http.get(this.API+"/materiales/lista",{params:e}).pipe(Object(i.a)(1),Object(r.a)(2))}getAlmacenesLista(e){return this.http.get(this.API+"/materiales/lista_almacen",{params:e}).pipe(Object(i.a)(1),Object(r.a)(2))}getMaterialesOferta(e){return this.http.get(this.API+"/materiales_lista_precio",{params:e}).pipe(Object(i.a)(1),Object(r.a)(2))}getMaterialesOfertaVendedor(e){return this.http.get(this.API+"/materiales_lista_precio_vendedor",{params:e}).pipe(Object(i.a)(1),Object(r.a)(2))}getUpSellService(e){return this.http.get(this.API+"/materiales_suplementarios",{params:e}).pipe(Object(i.a)(1),Object(r.a)(2))}getLinhas(e){let t=new n.h;for(let l in e)t=t.append(l,e[l]);return this.http.get(this.API+"/linhas",{params:t}).pipe(Object(i.a)(1),Object(r.a)(2))}getClasses(e){let t=new n.h;for(let l in e)t=t.append(l,e[l]);return this.http.get(this.API+"/classes",{params:t}).pipe(Object(i.a)(1),Object(r.a)(2))}getGrupo(e){let t=new n.h;for(let l in e)t=t.append(l,e[l]);return this.http.get(this.API+"/grupos",{params:t}).pipe(Object(i.a)(1),Object(r.a)(2))}getMateriais(e=[]){let t=new n.h;for(let l in e)t=t.append(l,e[l]);return this.http.get(this.API+"/materiais",{params:t}).pipe(Object(i.a)(1),Object(r.a)(2))}getPerfil(){return this.http.get(this.API+"/perfil").pipe(Object(i.a)(1),Object(r.a)(2))}getEscritorios(){return this.http.get(this.API+"/escritorios").pipe(Object(i.a)(1),Object(r.a)(2))}getPresentacionMaterial(){return this.http.get(this.API+"/presentacion_materiales").pipe(Object(i.a)(1),Object(r.a)(2))}getCliente(e){return this.http.get(`${this.API}/clientes/detalhes/${e}`).pipe(Object(i.a)(1))}getListarPrecios(){return this.http.get(this.API+"/vendedor/lista_precio").pipe(Object(i.a)(1),Object(r.a)(2))}getTodosVendedores(){return this.http.get(this.API+"/vendedor/allvendedor").pipe(Object(i.a)(1),Object(r.a)(2))}getCentrosLogisticos(){return this.http.get(this.API+"/almacen/centros_logisticos")}}return e.\u0275prov=a["\u0275\u0275defineInjectable"]({factory:function(){return new e(a["\u0275\u0275inject"](n.c))},token:e,providedIn:"root"}),e})()},Zplu:function(e,t,l){"use strict";l.d(t,"a",(function(){return u})),l.d(t,"b",(function(){return f}));var n=l("8Y7J"),i=l("qNf+"),r=l("MaMn"),a=l("SVse"),u=(l("qHdd"),l("gIxL"),n["\u0275crt"]({encapsulation:0,styles:[["detail-panel #panel-header{padding:7px 15px}  detail-panel #panel-body{padding:10px 15px}"]],data:{}}));function o(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),n["\u0275ncd"](null,0)],null,null)}function s(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,3,"div",[["class","d-flex w-100"]],null,null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,0,"div",[["class","spinner-border spinner-border-sm text-dark my-auto mr-2"]],null,null,null,null,null)),(e()(),n["\u0275eld"](2,0,null,null,1,"strong",[],null,null,null,null,null)),(e()(),n["\u0275ted"](-1,null,["Cargando..."]))],null,null)}function c(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,1,"empty-result",[["class","my-3"],["message","Nenhuma informa\xe7\xe3o encontrada"]],null,null,null,i.b,i.a)),n["\u0275did"](1,49152,null,0,r.a,[],{message:[0,"message"]},null)],(function(e,t){e(t,1,0,"Nenhuma informa\xe7\xe3o encontrada")}),null)}function d(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,13,"div",[["class","shadow-sm"]],null,null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,4,"div",[["class","bg-light border w-100 d-flex justify-content-between"],["id","panel-header"]],null,null,null,null,null)),(e()(),n["\u0275eld"](2,0,null,null,1,"div",[["class","mtc-title mb-0"]],null,null,null,null,null)),(e()(),n["\u0275ted"](3,null,["",""])),(e()(),n["\u0275eld"](4,0,null,null,1,"button",[["class","btn-icon-sm my-auto"],["type","button"]],null,[[null,"click"]],(function(e,t,l){var n=!0;return"click"===t&&(n=!1!==e.component.onClose()&&n),n}),null,null)),(e()(),n["\u0275eld"](5,0,null,null,0,"i",[["class","fas fa-times"]],null,null,null,null,null)),(e()(),n["\u0275eld"](6,0,null,null,7,"div",[["class","border-left border-right border-bottom"],["id","panel-body"]],null,null,null,null,null)),(e()(),n["\u0275eld"](7,0,null,null,6,"div",[],null,null,null,null,null)),(e()(),n["\u0275and"](16777216,null,null,1,null,o)),n["\u0275did"](9,16384,null,0,a.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),n["\u0275and"](16777216,null,null,1,null,s)),n["\u0275did"](11,16384,null,0,a.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),n["\u0275and"](16777216,null,null,1,null,c)),n["\u0275did"](13,16384,null,0,a.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(e,t){var l=t.component;e(t,9,0,l.config.loaded&&!l.config.empty),e(t,11,0,l.config.loading),e(t,13,0,!l.config.loading&&l.config.empty)}),(function(e,t){e(t,3,0,t.component.title)}))}function f(e){return n["\u0275vid"](0,[n["\u0275qud"](671088640,1,{scroll:0}),(e()(),n["\u0275eld"](1,0,[[1,0],["scroll",1]],null,0,"div",[],null,null,null,null,null)),(e()(),n["\u0275and"](16777216,null,null,1,null,d)),n["\u0275did"](3,16384,null,0,a.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(e,t){e(t,3,0,t.component.config.showing)}),null)}},gIxL:function(e,t,l){"use strict";l.d(t,"a",(function(){return i}));var n=l("8Y7J");let i=(()=>{class e{constructor(){this.config=new n.EventEmitter}show(){this.config.emit({showing:!0,loading:!0,loaded:!1,empty:!0})}hide(){this.config.emit({showing:!1,loading:!1,loaded:!1,empty:!0})}loadedFinished(e){this.config.emit({showing:!0,loading:!1,loaded:!0,empty:e})}}return e.\u0275prov=n["\u0275\u0275defineInjectable"]({factory:function(){return new e},token:e,providedIn:"root"}),e})()},lDLK:function(e,t,l){"use strict";l.d(t,"a",(function(){return i}));var n=l("8Y7J");class i{constructor(){this.data=[],this.allowActivation=!1,this.activationChange=new n.EventEmitter}ngOnInit(){}setActive(e){this.activeIndex!==e&&!0===this.allowActivation?(this.activeIndex=e,this.activationChange.emit(this.data[e])):(this.activeIndex=null,!0===this.allowActivation&&this.activationChange.emit(null))}subtitleClass(e,t){let l=t.color?t.color:"";return this.activeIndex===e&&(l+=" active"),!0===this.allowActivation&&(l+=" hover"),l}subtitleStyle(e,t){return this.activeIndex===e&&t.hex?{"border-color":t.hex}:{}}squareStyle(e){return e.hex?{"background-color":e.hex}:{}}textStyle(e){return e.hex?{color:e.hex}:{}}}},qHdd:function(e,t,l){"use strict";l.d(t,"a",(function(){return n})),l("gIxL");class n{constructor(e){this.detailPanelService=e,this.config={showing:!1,loading:!1,loaded:!1,empty:!0}}ngOnInit(){this.checkTitle(),this.onEventEmitter()}checkTitle(){this.title=void 0!==this.title&&this.title.length>0?this.title:"Detalles"}onClose(){this.detailPanelService.hide()}onEventEmitter(){this.detailPanelService.config.subscribe(e=>{this.config=e,!0===this.config.showing&&this.scroll.nativeElement.scrollIntoView({behavior:"instant"})})}}},"qNf+":function(e,t,l){"use strict";l.d(t,"a",(function(){return r})),l.d(t,"b",(function(){return a}));var n=l("8Y7J"),i=l("SVse"),r=(l("MaMn"),n["\u0275crt"]({encapsulation:0,styles:[["empty-result{display:block}  empty-result .empty-result{display:-ms-flexbox;display:flex}  empty-result .empty-result.left{-ms-flex-pack:start;justify-content:start}  empty-result .empty-result.center{-ms-flex-pack:center;justify-content:center}  empty-result .empty-result.right{-ms-flex-pack:end;justify-content:end}  empty-result .empty-result #img{height:40px;margin-right:15px}  empty-result .empty-result #message{color:#586464;font-size:15px;font-weight:500;letter-spacing:.25px;line-height:40px}"]],data:{}}));function a(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,4,"div",[["class","empty-result"]],null,null,null,null,null)),n["\u0275did"](1,278528,null,0,i.NgClass,[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(e()(),n["\u0275eld"](2,0,null,null,0,"img",[["id","img"],["src","../../../../assets/images/system-alerts/empty.png"]],null,null,null,null,null)),(e()(),n["\u0275eld"](3,0,null,null,1,"div",[["id","message"]],null,null,null,null,null)),(e()(),n["\u0275ted"](4,null,["",""]))],(function(e,t){e(t,1,0,"empty-result",t.component.position)}),(function(e,t){e(t,4,0,t.component.message)}))}}}]);