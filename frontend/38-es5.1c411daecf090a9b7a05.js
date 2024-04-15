!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var l=0;l<e.length;l++){var n=e[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(a=n.key,i=void 0,"symbol"==typeof(i=function(t,e){if("object"!=typeof t||null===t)return t;var l=t[Symbol.toPrimitive];if(void 0!==l){var n=l.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(a,"string"))?i:String(i)),n)}var a,i}function l(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"1V3b":function(e,n,a){"use strict";a.d(n,"a",(function(){return i}));var i=function(){function e(){t(this,e),this.defaultConfig={subtitleBorder:!1,fixedHeader:!1,bodyHeight:250,isResponsive:!1,isFixed:!1,border:!0,small:!0,select:!0,hover:!0,theme:{color:"light"}}}return l(e,[{key:"ngOnInit",value:function(){this.checkConfig()}},{key:"ngOnChanges",value:function(){this.checkConfig()}},{key:"checkConfig",value:function(){if(this.config)for(var t in this.config)this.defaultConfig[t]=this.config[t]}},{key:"tableClass",value:function(){var t="";return!0===this.defaultConfig.subtitleBorder&&(t+=" custom-border"),!0===this.defaultConfig.fixedHeader&&(t+=" table-fixed-header"),!0===this.defaultConfig.isFixed&&(t+=" table-fixed"),!0===this.defaultConfig.border&&(t+=" border"),!1===this.defaultConfig.select&&(t+=" no-select"),!0===this.defaultConfig.hover&&(t+=" table-hover"),t="".concat(t," ").concat(this.tableSize()),t}},{key:"tableSize",value:function(){return!0===this.defaultConfig.small?"table-sm":""}},{key:"bodyHeight",value:function(){var t={};return!0===this.defaultConfig.fixedHeader&&(t={height:this.defaultConfig.bodyHeight+"px"}),t}}]),e}()},"4xRd":function(e,n,a){"use strict";a.d(n,"a",(function(){return s}));var i=a("IzEk"),u=a("un/a"),r=a("8Y7J"),o=a("IheW"),s=function(){var e=function(){function e(l){t(this,e),this.http=l,this.API="http://23.254.204.187/api/comercial/vendedor",this.API_CADASTROS="http://23.254.204.187/api/comercial/cadastros"}return l(e,[{key:"getDetalhesCadastro",value:function(){return this.http.get(this.API+"/detalhes-cadastro").pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"getVendedores",value:function(){return this.http.get(this.API+"/lista").pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"getVendedoresSucursal",value:function(t){return this.http.get("".concat(this.API,"/sucursal-vendedor/").concat(t))}},{key:"getGestiones",value:function(){return this.http.get(this.API_CADASTROS+"/titulos-agenda/lista?codSituacao=1").pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"getCarteiraClientes",value:function(t){return this.http.get(this.API+"/carteira-clientes",{params:t}).pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"getCarteiraClientesCotizacion",value:function(t){return this.http.get(this.API+"/carteira-clientes-cotizacion",{params:t}).pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"getUbicaionesClientes",value:function(t){return this.http.get("".concat(this.API,"/cliente/ubicacionescliente/").concat(t)).pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"getValidaClienteCarteira",value:function(t){return this.http.get("".concat(this.API,"/valida-cliente-carteira/").concat(t)).pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"getVinculoOperadores",value:function(){return this.http.get(this.API+"/vinculo-operadores").pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"getDetalleVendedor",value:function(t){return this.http.get(this.API+"/detalles_vendedor",{params:t}).pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"getRubros",value:function(){return this.http.get(this.API+"/rubros").pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"getVendedorSucursal",value:function(t){return this.http.get("".concat(this.API,"/datosvendedor/").concat(t)).pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"getSucursalVendedor",value:function(t){return this.http.get("".concat(this.API_CADASTROS,"/datossucursal/").concat(t)).pipe(Object(i.a)(1),Object(u.a)(2))}}]),e}();return e.\u0275prov=r["\u0275\u0275defineInjectable"]({factory:function(){return new e(r["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e}()},"8qYg":function(e,n,a){"use strict";a.d(n,"a",(function(){return i}));var i=function(){function e(){t(this,e),this.value=""}return l(e,[{key:"iconClass",value:function(){var t;return!0===this.active?"asc"===this.sort.toLowerCase()?t="fas fa-sort-up":"desc"===this.sort.toLowerCase()&&(t="fas fa-sort-down"):t="fas fa-sort",t}}]),e}()},"9Jk6":function(t,e,l){"use strict";l.d(e,"a",(function(){return i})),l.d(e,"b",(function(){return o}));var n=l("8Y7J"),a=l("SVse"),i=(l("1V3b"),n["\u0275crt"]({encapsulation:0,styles:[['custom-table table,   custom-table table.table-sm{font-size:13px}  custom-table table.table-sm thead{font-size:11px}  custom-table table.border th{border-top:1px solid #dee2e6}  custom-table table.no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}  custom-table table th{border-top:unset!important;text-transform:uppercase}  custom-table table td,   custom-table table th{vertical-align:middle!important}  custom-table table thead.light tr th,   custom-table table thead.white tr th{background-color:#fff}  custom-table table tbody.light tr td{background-color:#f7f7f7}  custom-table table tbody.white tr td{background-color:#fff}  custom-table table.table-fixed-header{width:100%}  custom-table table.table-fixed-header tbody,   custom-table table.table-fixed-header tbody>td,   custom-table table.table-fixed-header tbody>tr,   custom-table table.table-fixed-header thead,   custom-table table.table-fixed-header thead>tr,   custom-table table.table-fixed-header thead>tr>th{display:block}  custom-table table.table-fixed-header tbody>tr:after,   custom-table table.table-fixed-header thead>tr:after{content:" ";display:block;visibility:hidden;clear:both}  custom-table table.table-fixed-header tbody,   custom-table table.table-fixed-header thead{overflow-y:scroll}  custom-table table.table-fixed-header thead tr th{min-height:29px;border-top:unset!important;border-bottom:unset!important}  custom-table table.table-fixed-header thead::-webkit-scrollbar{background-color:inherit}  custom-table table.table-fixed-header tbody>tr>td:after,   custom-table table.table-fixed-header thead>tr>th:after{content:" ";display:table-cell;visibility:hidden;clear:both}  custom-table table.table-fixed-header tbody tr td,   custom-table table.table-fixed-header thead tr th{float:left;word-wrap:break-word}  custom-table table tbody tr td.sticky,   custom-table table thead tr th.sticky{position:sticky;z-index:1010}']],data:{}}));function u(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function r(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function o(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,13,"div",[],[[2,"table-responsive",null]],null,null,null,null)),(t()(),n["\u0275eld"](1,0,null,null,12,"table",[["class","table mb-0"]],null,null,null,null,null)),n["\u0275did"](2,278528,null,0,a.NgClass,[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(t()(),n["\u0275eld"](3,0,null,null,4,"thead",[],null,null,null,null,null)),n["\u0275did"](4,278528,null,0,a.NgClass,[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2],{ngClass:[0,"ngClass"]},null),(t()(),n["\u0275and"](16777216,null,null,2,null,u)),n["\u0275did"](6,540672,null,0,a.NgTemplateOutlet,[n.ViewContainerRef],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),n["\u0275pod"](7,{$implicit:0}),(t()(),n["\u0275eld"](8,0,null,null,5,"tbody",[],null,null,null,null,null)),n["\u0275did"](9,278528,null,0,a.NgClass,[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2],{ngClass:[0,"ngClass"]},null),n["\u0275did"](10,278528,null,0,a.NgStyle,[n.ElementRef,n.KeyValueDiffers,n.Renderer2],{ngStyle:[0,"ngStyle"]},null),(t()(),n["\u0275and"](16777216,null,null,2,null,r)),n["\u0275did"](12,540672,null,0,a.NgTemplateOutlet,[n.ViewContainerRef],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),n["\u0275pod"](13,{$implicit:0})],(function(t,e){var l=e.component;t(e,2,0,"table mb-0",l.tableClass()),t(e,4,0,l.defaultConfig.theme.color);var n=t(e,7,0,l.theadTmpl);t(e,6,0,n,l.theadTmpl),t(e,9,0,l.defaultConfig.theme.color),t(e,10,0,l.bodyHeight());var a=t(e,13,0,l.tbodyTmpl);t(e,12,0,a,l.tbodyTmpl)}),(function(t,e){t(e,0,0,!0===e.component.defaultConfig.isResponsive)}))}},EQYY:function(t,e,l){"use strict";l.d(e,"a",(function(){return i})),l.d(e,"b",(function(){return r}));var n=l("8Y7J"),a=l("SVse"),i=(l("8qYg"),n["\u0275crt"]({encapsulation:0,styles:[["thead-sorter{display:block;width:100%}  thead-sorter button{color:#000;background-color:rgba(0,0,0,0);border:unset;padding:0}  thead-sorter button i{margin-right:.5rem}  thead-sorter button span{font-size:11px;font-weight:600;text-transform:uppercase}  thead-sorter:hover{cursor:pointer}"]],data:{}}));function u(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),n["\u0275ted"](1,null,["",""]))],null,(function(t,e){t(e,1,0,e.component.value)}))}function r(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,4,"button",[["type","button"]],null,null,null,null,null)),(t()(),n["\u0275eld"](1,0,null,null,1,"i",[],null,null,null,null,null)),n["\u0275did"](2,278528,null,0,a.NgClass,[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2],{ngClass:[0,"ngClass"]},null),(t()(),n["\u0275and"](16777216,null,null,1,null,u)),n["\u0275did"](4,16384,null,0,a.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(t,e){var l=e.component;t(e,2,0,l.iconClass()),t(e,4,0,l.value.length>0)}),null)}},VRgM:function(t,e,l){"use strict";l.d(e,"a",(function(){return i})),l.d(e,"b",(function(){return o}));var n=l("8Y7J"),a=l("SVse"),i=(l("lDLK"),n["\u0275crt"]({encapsulation:0,styles:[["subtitles .subtitle{border:1px solid rgba(0,0,0,0);border-radius:.25rem;display:-ms-flexbox;display:flex;margin-right:5px;padding:4px}  subtitles .subtitle.active.green{border-color:#4dcc71}  subtitles .subtitle.active.blue{border-color:#005fdc}  subtitles .subtitle.active.yellow{border-color:#ca9f1d}  subtitles .subtitle.active.red{border-color:#b8342c}  subtitles .subtitle.active.gray{border-color:#586464}  subtitles .subtitle .square{border-radius:.25rem;height:15px;margin-bottom:auto;margin-top:auto;width:15px}  subtitles .subtitle .text{line-height:15px;margin-top:auto;margin-left:5px;margin-bottom:auto;font-size:11px;font-weight:700;text-transform:uppercase}  subtitles .subtitle.green .square{background-color:#4dcc71}  subtitles .subtitle.green .text{color:#4dcc71}  subtitles .subtitle.blue .square{background-color:#005fdc}  subtitles .subtitle.blue .text{color:#005fdc}  subtitles .subtitle.yellow .square{background-color:#ca9f1d}  subtitles .subtitle.yellow .text{color:#ca9f1d}  subtitles .subtitle.red .square{background-color:#b8342c}  subtitles .subtitle.red .text{color:#b8342c}  subtitles .subtitle.gray .square{background-color:#586464}  subtitles .subtitle.gray .text{color:#586464}"]],data:{}}));function u(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,8,"li",[],null,[[null,"click"]],(function(t,e,l){var n=!0;return"click"===e&&(n=!1!==t.component.setActive(t.context.index)&&n),n}),null,null)),(t()(),n["\u0275eld"](1,0,null,null,7,"div",[["class","subtitle"]],null,null,null,null,null)),n["\u0275did"](2,278528,null,0,a.NgClass,[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),n["\u0275did"](3,278528,null,0,a.NgStyle,[n.ElementRef,n.KeyValueDiffers,n.Renderer2],{ngStyle:[0,"ngStyle"]},null),(t()(),n["\u0275eld"](4,0,null,null,1,"div",[["class","square"]],null,null,null,null,null)),n["\u0275did"](5,278528,null,0,a.NgStyle,[n.ElementRef,n.KeyValueDiffers,n.Renderer2],{ngStyle:[0,"ngStyle"]},null),(t()(),n["\u0275eld"](6,0,null,null,2,"div",[["class","text"]],null,null,null,null,null)),n["\u0275did"](7,278528,null,0,a.NgStyle,[n.ElementRef,n.KeyValueDiffers,n.Renderer2],{ngStyle:[0,"ngStyle"]},null),(t()(),n["\u0275ted"](8,null,["",""]))],(function(t,e){var l=e.component;t(e,2,0,"subtitle",l.subtitleClass(e.context.index,e.context.$implicit)),t(e,3,0,l.subtitleStyle(e.context.index,e.context.$implicit)),t(e,5,0,l.squareStyle(e.context.$implicit)),t(e,7,0,l.textStyle(e.context.$implicit))}),(function(t,e){t(e,8,0,e.context.$implicit.text)}))}function r(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,4,"div",[["class","row mb-2"]],null,null,null,null,null)),(t()(),n["\u0275eld"](1,0,null,null,3,"div",[["class","col"]],null,null,null,null,null)),(t()(),n["\u0275eld"](2,0,null,null,2,"ul",[["class","list-unstyled d-flex mb-0"]],null,null,null,null,null)),(t()(),n["\u0275and"](16777216,null,null,1,null,u)),n["\u0275did"](4,278528,null,0,a.NgForOf,[n.ViewContainerRef,n.TemplateRef,n.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(t,e){t(e,4,0,e.component.data)}),null)}function o(t){return n["\u0275vid"](0,[(t()(),n["\u0275and"](16777216,null,null,1,null,r)),n["\u0275did"](1,16384,null,0,a.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(t,e){var l=e.component;t(e,1,0,l.show&&l.data.length>0)}),null)}},VgqD:function(e,n,a){"use strict";a.d(n,"a",(function(){return s}));var i=a("IheW"),u=a("IzEk"),r=a("un/a"),o=a("8Y7J"),s=function(){var e=function(){function e(l){t(this,e),this.http=l,this.API="http://23.254.204.187/api/comercial"}return l(e,[{key:"getEmpresas",value:function(t){var e=new i.h;for(var l in t)e=e.append(l,t[l]);return this.http.get(this.API+"/empresas",{params:e}).pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getDepositos",value:function(t){var e=new i.h;for(var l in t)e=e.append(l,t[l]);return this.http.get(this.API+"/depositos",{params:e}).pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getAlmacen",value:function(t){return this.http.get(this.API+"/estoque").pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getLinhasId",value:function(t){return this.http.get("".concat(this.API,"/linhas/").concat(t)).pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getSublineasId",value:function(t){return this.http.get("".concat(this.API,"/sublineas/").concat(t)).pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"sincronizarMateriales",value:function(){return this.http.get(this.API+"/sincronizar").pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getMateriales",value:function(t){return this.http.get(this.API+"/materiales",{params:t}).pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getMaterialesLista",value:function(t){return this.http.get(this.API+"/materiales/lista",{params:t}).pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getAlmacenesLista",value:function(t){return this.http.get(this.API+"/materiales/lista_almacen",{params:t}).pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getMaterialesOferta",value:function(t){return this.http.get(this.API+"/materiales_lista_precio",{params:t}).pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getMaterialesOfertaVendedor",value:function(t){return this.http.get(this.API+"/materiales_lista_precio_vendedor",{params:t}).pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getUpSellService",value:function(t){return this.http.get(this.API+"/materiales_suplementarios",{params:t}).pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getLinhas",value:function(t){var e=new i.h;for(var l in t)e=e.append(l,t[l]);return this.http.get(this.API+"/linhas",{params:e}).pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getClasses",value:function(t){var e=new i.h;for(var l in t)e=e.append(l,t[l]);return this.http.get(this.API+"/classes",{params:e}).pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getGrupo",value:function(t){var e=new i.h;for(var l in t)e=e.append(l,t[l]);return this.http.get(this.API+"/grupos",{params:e}).pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getMateriais",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=new i.h;for(var l in t)e=e.append(l,t[l]);return this.http.get(this.API+"/materiais",{params:e}).pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getPerfil",value:function(){return this.http.get(this.API+"/perfil").pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getEscritorios",value:function(){return this.http.get(this.API+"/escritorios").pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getPresentacionMaterial",value:function(){return this.http.get(this.API+"/presentacion_materiales").pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getCliente",value:function(t){return this.http.get("".concat(this.API,"/clientes/detalhes/").concat(t)).pipe(Object(u.a)(1))}},{key:"getListarPrecios",value:function(){return this.http.get(this.API+"/vendedor/lista_precio").pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getTodosVendedores",value:function(){return this.http.get(this.API+"/vendedor/allvendedor").pipe(Object(u.a)(1),Object(r.a)(2))}},{key:"getCentrosLogisticos",value:function(){return this.http.get(this.API+"/almacen/centros_logisticos")}}]),e}();return e.\u0275prov=o["\u0275\u0275defineInjectable"]({factory:function(){return new e(o["\u0275\u0275inject"](i.c))},token:e,providedIn:"root"}),e}()},lDLK:function(e,n,a){"use strict";a.d(n,"a",(function(){return u}));var i=a("8Y7J"),u=function(){function e(){t(this,e),this.data=[],this.allowActivation=!1,this.activationChange=new i.EventEmitter}return l(e,[{key:"ngOnInit",value:function(){}},{key:"setActive",value:function(t){this.activeIndex!==t&&!0===this.allowActivation?(this.activeIndex=t,this.activationChange.emit(this.data[t])):(this.activeIndex=null,!0===this.allowActivation&&this.activationChange.emit(null))}},{key:"subtitleClass",value:function(t,e){var l=e.color?e.color:"";return this.activeIndex===t&&(l+=" active"),!0===this.allowActivation&&(l+=" hover"),l}},{key:"subtitleStyle",value:function(t,e){return this.activeIndex===t&&e.hex?{"border-color":e.hex}:{}}},{key:"squareStyle",value:function(t){return t.hex?{"background-color":t.hex}:{}}},{key:"textStyle",value:function(t){return t.hex?{color:t.hex}:{}}}]),e}()},yGOH:function(e,n,a){"use strict";a.d(n,"a",(function(){return i}));var i=function(){function e(){t(this,e)}return l(e,null,[{key:"forRoot",value:function(){return{ngModule:e}}}]),e}()},zN97:function(e,n,a){"use strict";a.d(n,"a",(function(){return c}));var i=a("IzEk"),u=a("un/a"),r=a("cp0P"),o=a("8Y7J"),s=a("IheW"),c=function(){var e=function(){function e(l){t(this,e),this.http=l,this.API="http://23.254.204.187/api/comercial/tid-software"}return l(e,[{key:"loadDependencies",value:function(){var t=this.getEmpresas("vendas"),e=this.getLinhas(),l=this.getModulosVendas(),n=this.getModulosProducaoTela();return Object(r.a)([t,e,l,n]).pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"getEmpresas",value:function(t){return this.http.get("".concat(this.API,"/empresas/").concat(t)).pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"getLinhas",value:function(){return this.http.get(this.API+"/linhas").pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"getModulosVendas",value:function(){return this.http.get(this.API+"/modulos/vendas").pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"getModulosProducaoTela",value:function(){return this.http.get(this.API+"/modulos/producao-tela").pipe(Object(i.a)(1),Object(u.a)(2))}},{key:"postGerarAcesso",value:function(t){return this.http.post(this.API+"/gerar-acesso",t).pipe(Object(i.a)(1),Object(u.a)(2))}}]),e}();return e.\u0275prov=o["\u0275\u0275defineInjectable"]({factory:function(){return new e(o["\u0275\u0275inject"](s.c))},token:e,providedIn:"root"}),e}()}}])}();