(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"6iIz":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var l=n("8Y7J"),i=n("nYR2");n("EHfV");class a{constructor(t){this.dashboardService=t,this.qtdeDias=new l.EventEmitter,this.ultimosPrecos=[],this.ultimosPrecosDias=0,this.ultimosPrecosLoaded=!1,this.ultimosPrecosEmpty=!1}ngOnInit(){this.dashboardService.getUltimosPrecos(this.codCliente).pipe(Object(i.a)(()=>{this.ultimosPrecosLoaded=!0})).subscribe(t=>{200===t.responseCode&&t.result.length>0?(this.ultimosPrecos=t.result,this.ultimosPrecosDias=t.result[0].diasAtras,this.qtdeDias.emit(this.ultimosPrecosDias)):this.ultimosPrecosEmpty=!0})}}},"8qYg":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));class l{constructor(){this.value=""}iconClass(){let t;return!0===this.active?"asc"===this.sort.toLowerCase()?t="fas fa-sort-up":"desc"===this.sort.toLowerCase()&&(t="fas fa-sort-down"):t="fas fa-sort",t}}},"9ua6":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var l=n("IheW"),i=n("IzEk"),a=n("8Y7J");let o=(()=>{class t{constructor(t){this.http=t,this.API="http://23.254.204.187/api/comercial/cadastros/concorrentes"}getListaConcorrentes(t){let e=new l.h;for(let n in t)e=e.append(n,t[n]);return this.http.get(this.API+"/lista",{params:e}).pipe(Object(i.a)(1))}getConcorrente(t){return this.http.get(`${this.API}/detalhes/${t}`).pipe(Object(i.a)(1))}getAlteracoes(t){return this.http.get(`${this.API}/alteracoes/${t}`).pipe(Object(i.a)(1))}saveConcorrente(t){return this.http.post(this.API+"/salvar",t).pipe(Object(i.a)(1))}updateConcorrente(t){return this.http.put(this.API+"/atualizar",t).pipe(Object(i.a)(1))}save(t){return null!==t.codConcorrenteTid?this.updateConcorrente(t):this.saveConcorrente(t)}activateConcorrente(t){return this.http.post(this.API+"/ativar",t).pipe(Object(i.a)(1))}inactivateConcorrente(t){return this.http.post(this.API+"/inativar",t).pipe(Object(i.a)(1))}}return t.\u0275prov=a["\u0275\u0275defineInjectable"]({factory:function(){return new t(a["\u0275\u0275inject"](l.c))},token:t,providedIn:"root"}),t})()},EHfV:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var l=n("IzEk"),i=n("8Y7J"),a=n("IheW");let o=(()=>{class t{constructor(t){this.http=t,this.API="http://23.254.204.187/api/comercial/clientes/dashboard"}getPermissaoAcesso(t){return this.http.get(`${this.API}/permissao-acesso/${t}`).pipe(Object(l.a)(1))}getFaturamentoGrafico(t){return this.http.get(`${this.API}/faturamento/grafico/${t}`).pipe(Object(l.a)(1))}getFaturamentoAnalitico(t){return this.http.get(`${this.API}/faturamento/analitico/${t}`).pipe(Object(l.a)(1))}getFaturamentoMaisComprados(t){return this.http.get(`${this.API}/faturamento/mais-comprados/${t}`).pipe(Object(l.a)(1))}getFaturamentoComparativo(t){return this.http.get(`${this.API}/faturamento/comparativo/${t}`).pipe(Object(l.a)(1))}getPropostasGrafico(t){return this.http.get(`${this.API}/propostas/grafico/${t}`).pipe(Object(l.a)(1))}getPropostasAnalitico(t){return this.http.get(`${this.API}/propostas/analitico/${t}`).pipe(Object(l.a)(1))}getDuplicatasAtraso(t){return this.http.get(`${this.API}/duplicatas-atraso/${t}`).pipe(Object(l.a)(1))}getNotasDebito(t){return this.http.get(`${this.API}/notas-debito/${t}`).pipe(Object(l.a)(1))}getCreditoDisponivel(t){return this.http.get(`${this.API}/credito-disponivel/${t}`).pipe(Object(l.a)(1))}getDuplicatasVencer(t){return this.http.get(`${this.API}/duplicatas-vencer/${t}`).pipe(Object(l.a)(1))}getUltimaCompra(t){return this.http.get(`${this.API}/ultima-compra/${t}`).pipe(Object(l.a)(1))}getUltimosPrecos(t){return this.http.get(`${this.API}/ultimos-precos/${t}`).pipe(Object(l.a)(1))}getRegistroOcorrencias(t){return this.http.get(`${this.API}/registro-ocorrencias/${t}`).pipe(Object(l.a)(1))}}return t.\u0275prov=i["\u0275\u0275defineInjectable"]({factory:function(){return new t(i["\u0275\u0275inject"](a.c))},token:t,providedIn:"root"}),t})()},EQYY:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var l=n("8Y7J"),i=n("SVse"),a=(n("8qYg"),l["\u0275crt"]({encapsulation:0,styles:[["thead-sorter{display:block;width:100%}  thead-sorter button{color:#000;background-color:rgba(0,0,0,0);border:unset;padding:0}  thead-sorter button i{margin-right:.5rem}  thead-sorter button span{font-size:11px;font-weight:600;text-transform:uppercase}  thead-sorter:hover{cursor:pointer}"]],data:{}}));function o(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),l["\u0275ted"](1,null,["",""]))],null,(function(t,e){t(e,1,0,e.component.value)}))}function s(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,4,"button",[["type","button"]],null,null,null,null,null)),(t()(),l["\u0275eld"](1,0,null,null,1,"i",[],null,null,null,null,null)),l["\u0275did"](2,278528,null,0,i.NgClass,[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2],{ngClass:[0,"ngClass"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,o)),l["\u0275did"](4,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(t,e){var n=e.component;t(e,2,0,n.iconClass()),t(e,4,0,n.value.length>0)}),null)}},SuPn:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var l=n("IheW"),i=n("IzEk"),a=n("un/a"),o=n("VgqD"),s=n("zN97"),u=n("8Y7J");let r=(()=>{class t{constructor(t,e,n){this.http=t,this.comercialService=e,this.tidSoftwareService=n,this.API="http://23.254.204.187/api/comercial/cadastros/propostas/associacao-situacoes-proposta"}getListaAssociacoes(t){let e=new l.h;for(let n in t)e=e.append(n,t[n]);return this.http.get(this.API+"/lista",{params:e}).pipe(Object(i.a)(1),Object(a.a)(2))}getAssociacoesSituacoesProposta(t){return this.http.get(`${this.API}/associacoes/${t}`).pipe(Object(i.a)(1),Object(a.a)(2))}getDetalhes(t){return this.http.get(`${this.API}/detalhes/${t}`).pipe(Object(i.a)(1),Object(a.a)(2))}saveAssociacao(t){return this.http.post(this.API+"/salvar",t).pipe(Object(i.a)(1),Object(a.a)(2))}updateAssociacao(t){return this.http.put(this.API+"/atualizar",t).pipe(Object(i.a)(1),Object(a.a)(2))}save(t){return null!==t.codAssociacao?this.updateAssociacao(t):this.saveAssociacao(t)}activateAssociacao(t){return this.http.post(this.API+"/ativar",t).pipe(Object(i.a)(1),Object(a.a)(2))}inactivateAssociacao(t){return this.http.post(this.API+"/inativar",t).pipe(Object(i.a)(1),Object(a.a)(2))}}return t.\u0275prov=u["\u0275\u0275defineInjectable"]({factory:function(){return new t(u["\u0275\u0275inject"](l.c),u["\u0275\u0275inject"](o.a),u["\u0275\u0275inject"](s.a))},token:t,providedIn:"root"}),t})()},gIxL:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var l=n("8Y7J");let i=(()=>{class t{constructor(){this.config=new l.EventEmitter}show(){this.config.emit({showing:!0,loading:!0,loaded:!1,empty:!0})}hide(){this.config.emit({showing:!1,loading:!1,loaded:!1,empty:!0})}loadedFinished(t){this.config.emit({showing:!0,loading:!1,loaded:!0,empty:t})}}return t.\u0275prov=l["\u0275\u0275defineInjectable"]({factory:function(){return new t},token:t,providedIn:"root"}),t})()},gN2J:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));class l{}},ipBq:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var l=n("8Y7J"),i=n("SVse"),a=(n("sovk"),l["\u0275crt"]({encapsulation:0,styles:[['btn-icon button{-ms-flex-align:center;align-items:center;border:none;background:none;border-radius:4px;box-sizing:border-box;color:#000;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;outline:none;opacity:.7;position:relative;z-index:0}  btn-icon button.small{font-size:13px;height:14px;width:14px}  btn-icon button.small:before{height:25px;left:-6px;top:-5px;width:25px}  btn-icon button.medium{font-size:16px;height:20px;width:20px}  btn-icon button.medium:before{height:40px;left:-9px;top:-9px;width:40px}  btn-icon button:before{background:#212529;border-radius:50%;bottom:0;content:"";display:block;opacity:0;position:absolute;right:0;-ms-transform:scale(0);transform:scale(0);transition-property:transform,opacity;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);z-index:-1}  btn-icon button:hover{background:none;border:none;box-shadow:none;color:#000!important;opacity:1;text-decoration:none}  btn-icon button:hover:before{opacity:.06;-ms-transform:scale(1);transform:scale(1)}  btn-icon button:focus{outline:unset}  btn-icon button.disabled,   btn-icon button[disabled]{color:#586464}  btn-icon button.disabled:hover,   btn-icon button[disabled]:hover{cursor:no-drop}  btn-icon button.disabled:hover:before,   btn-icon button[disabled]:hover:before{background-color:rgba(0,0,0,0);opacity:.5}']],data:{}}));function o(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,3,"button",[["type","button"]],[[8,"disabled",0]],null,null,null,null)),l["\u0275did"](1,278528,null,0,i.NgClass,[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2],{ngClass:[0,"ngClass"]},null),(t()(),l["\u0275eld"](2,0,null,null,1,"i",[],null,null,null,null,null)),l["\u0275did"](3,278528,null,0,i.NgClass,[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2],{ngClass:[0,"ngClass"]},null)],(function(t,e){var n=e.component;t(e,1,0,n.size),t(e,3,0,n.icon)}),(function(t,e){t(e,0,0,e.component.disabled)}))}},nkG6:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var l=n("IheW"),i=n("cp0P"),a=n("IzEk"),o=n("un/a"),s=n("VgqD"),u=n("zN97"),r=n("8Y7J");let c=(()=>{class t{constructor(t,e,n){this.http=t,this.comercialService=e,this.tidSoftwareService=n,this.API="http://23.254.204.187/api/comercial/estoque"}getFiltros(){let t=this.comercialService.getAlmacen(),e=this.comercialService.getClasses(null),n=this.comercialService.getDepositos({grupoManetoni:1}),l=this.comercialService.getEscritorios(),s=this.tidSoftwareService.getEmpresas("estoques"),u=this.tidSoftwareService.getLinhas();return Object(i.a)([t,e,n,l,s,u]).pipe(Object(a.a)(1),Object(o.a)(2))}getEstoqueAtual(t){let e=new l.h;for(let n in t)e=e.append(n,t[n]);return this.http.get(this.API+"/estoque-atual",{params:e}).pipe(Object(a.a)(1),Object(o.a)(2))}getOutrasUnidades(t){return this.http.get(`${this.API}/outras-unidades/${t}`).pipe(Object(a.a)(1),Object(o.a)(2))}getPedidosCompra(t){return this.http.get(`${this.API}/pedidos-compra/${t.idMaterial}/${t.idEmpresa}`).pipe(Object(a.a)(1),Object(o.a)(2))}getComprometido(t){return this.http.get(`${this.API}/estoque-comprometido/${t.idMaterial}/${t.idEmpresa}`).pipe(Object(a.a)(1),Object(o.a)(2))}getLote(t){return this.http.get(`${this.API}/lote/${t.idMaterial}/${t.idEmpresa}`).pipe(Object(a.a)(1),Object(o.a)(2))}getEstoqueSuspenso(t){return this.http.get(`${this.API}/estoque-suspenso/${t.idMaterial}/${t.idEmpresa}`).pipe(Object(a.a)(1),Object(o.a)(2))}getStockComprometido(t){return this.http.get(`${this.API}/estoquecomprometido/${t.idMaterial}`).pipe(Object(a.a)(1),Object(o.a)(2))}getStockSuspeso(t){return this.http.get(`${this.API}/estoquesuspenso/${t.idMaterial}`).pipe(Object(a.a)(1),Object(o.a)(2))}getStockAlmacenes(t){const e=`${this.API}/estoquealmacen/${t.idMaterial}`,n=new l.h({fromObject:{id_lista_precio:t.id_lista_precio||"",nombre_almacen:t.nombre_almacen||"",codigo_almacen:t.codigo_almacen||"",registrosLista:t.registrosLista||"25"}});return console.log("URL de la solicitud:",e),console.log("Par\xe1metros de la solicitud:",n.toString()),this.http.get(e,{params:n}).pipe(Object(a.a)(1),Object(o.a)(2))}buscarListaPrecio(t){const e=(new l.h).set("nombre_lista",t);return console.log("Enviando par\xe1metros:",e.toString()),this.http.get(this.API+"/lista-precio",{params:e}).pipe(Object(a.a)(1),Object(o.a)(2))}}return t.\u0275prov=r["\u0275\u0275defineInjectable"]({factory:function(){return new t(r["\u0275\u0275inject"](l.c),r["\u0275\u0275inject"](s.a),r["\u0275\u0275inject"](u.a))},token:t,providedIn:"root"}),t})()},o1Xq:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var l=n("2Vo4"),i=n("cp0P"),a=n("VgqD"),o=n("3WN2"),s=n("SuPn"),u=n("zN97"),r=n("8Y7J"),c=n("IheW");let d=(()=>{class t{constructor(t,e,n,i,a){this.http=t,this.comercialService=e,this.tidService=n,this.situacoesService=i,this.associacaoSituacoesPropostaService=a,this.API="http://23.254.204.187/api/comercial/ciclo-vendas/cotacoes",this.onChangeClienteCotacao=new l.a([]),this.clienteCotacao=this.onChangeClienteCotacao.asObservable(),this.onTransfereFaturamento=new l.a([]),this.transfereFaturamento=this.onTransfereFaturamento.asObservable(),this.onCotacaoDuplicada=new l.a([]),this.cotacaoDuplicada=this.onCotacaoDuplicada.asObservable(),this.onCotacaoDesdobrada=new l.a([]),this.cotacaoDesdobrada=this.onCotacaoDesdobrada.asObservable(),this.onChangeEmpresaCotacao=new l.a([]),this.empresaCotacao=this.onChangeEmpresaCotacao.asObservable(),this.onPdf=new l.a([]),this.datosPdf=this.onPdf.asObservable()}loadDependencies(){const t=this.situacoesService.getListaSituacaoProposta(null),e=this.tidService.getEmpresas("vendas"),n=this.comercialService.getDepositos(null),l=this.associacaoSituacoesPropostaService.getListaAssociacoes({codSituacao:1});return Object(i.a)([t,e,n,l])}updateClienteCotacao([t,e]){this.onChangeClienteCotacao.next([t,e])}updateTransfereFaturamento([t]){this.onTransfereFaturamento.next([t])}updateCotacaoDuplicada([t,e,n]){this.onCotacaoDuplicada.next([t,e,n])}updateCotacaoDesdobrada([t,e,n]){this.onCotacaoDesdobrada.next([t,e,n])}updateEmpresaCotacao([t,e,n]){this.onChangeEmpresaCotacao.next([t,e,n])}datosPdfService(t){this.onPdf.next(t)}}return t.\u0275prov=r["\u0275\u0275defineInjectable"]({factory:function(){return new t(r["\u0275\u0275inject"](c.c),r["\u0275\u0275inject"](a.a),r["\u0275\u0275inject"](u.a),r["\u0275\u0275inject"](o.a),r["\u0275\u0275inject"](s.a))},token:t,providedIn:"root"}),t})()},pKUh:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var l=n("8Y7J"),i=n("2ZVE"),a=n("SVse"),o=l["\u0275crt"]({encapsulation:0,styles:["[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}"],data:{}});function s(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,1,"span",[["class","bs-remove-tab"]],null,[[null,"click"]],(function(t,e,n){var l=!0,i=t.component;return"click"===e&&(n.preventDefault(),l=!1!==i.removeTab(t.parent.context.$implicit)&&l),l}),null,null)),(t()(),l["\u0275ted"](-1,null,[" \u274c"]))],null,null)}function u(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,8,"li",[],[[2,"active",null],[2,"disabled",null]],[[null,"keydown"]],(function(t,e,n){var l=!0;return"keydown"===e&&(l=!1!==t.component.keyNavActions(n,t.context.index)&&l),l}),null,null)),l["\u0275did"](1,278528,null,0,a.NgClass,[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2],{ngClass:[0,"ngClass"]},null),l["\u0275pad"](2,2),(t()(),l["\u0275eld"](3,0,null,null,5,"a",[["class","nav-link"],["href","javascript:void(0);"]],[[1,"id",0],[2,"active",null],[2,"disabled",null]],[[null,"click"]],(function(t,e,n){var l=!0;return"click"===e&&(l=0!=(t.context.$implicit.active=!0)&&l),l}),null,null)),(t()(),l["\u0275eld"](4,16777216,null,null,2,"span",[],null,null,null,null,null)),l["\u0275did"](5,16384,null,0,i.a,[l.ViewContainerRef],{ngTransclude:[0,"ngTransclude"]},null),(t()(),l["\u0275ted"](6,null,["",""])),(t()(),l["\u0275and"](16777216,null,null,1,null,s)),l["\u0275did"](8,16384,null,0,a.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(t,e){var n=t(e,2,0,"nav-item",e.context.$implicit.customClass||"");t(e,1,0,n),t(e,5,0,e.context.$implicit.headingRef),t(e,8,0,e.context.$implicit.removable)}),(function(t,e){t(e,0,0,e.context.$implicit.active,e.context.$implicit.disabled),t(e,3,0,e.context.$implicit.id?e.context.$implicit.id+"-link":"",e.context.$implicit.active,e.context.$implicit.disabled),t(e,6,0,e.context.$implicit.heading)}))}function r(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,3,"ul",[["class","nav"]],null,[[null,"click"]],(function(t,e,n){var l=!0;return"click"===e&&(l=!1!==n.preventDefault()&&l),l}),null,null)),l["\u0275did"](1,278528,null,0,a.NgClass,[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,u)),l["\u0275did"](3,278528,null,0,a.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),l["\u0275eld"](4,0,null,null,1,"div",[["class","tab-content"]],null,null,null,null,null)),l["\u0275ncd"](null,0)],(function(t,e){var n=e.component;t(e,1,0,"nav",n.classMap),t(e,3,0,n.tabs)}),null)}},pm1a:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return m}));var l=n("8Y7J"),i=n("SVse"),a=n("9Jk6"),o=n("1V3b"),s=n("qNf+"),u=n("MaMn"),r=(n("6iIz"),n("EHfV"),l["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}}));function c(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,14,"tr",[],null,null,null,null,null)),(t()(),l["\u0275eld"](1,0,null,null,1,"th",[["class","text-center"],["scope","col"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["C\xf3digo"])),(t()(),l["\u0275eld"](3,0,null,null,1,"th",[["class","text-center"],["scope","col"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["Linea"])),(t()(),l["\u0275eld"](5,0,null,null,1,"th",[["class","text-center"],["scope","col"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["Ultima fecha"])),(t()(),l["\u0275eld"](7,0,null,null,1,"th",[["class","text-center"],["scope","col"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["Ultimo Precio"])),(t()(),l["\u0275eld"](9,0,null,null,1,"th",[["class","text-center"],["scope","col"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["Suma (TON)"])),(t()(),l["\u0275eld"](11,0,null,null,1,"th",[["class","text-center"],["scope","col"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["Suma ($)"])),(t()(),l["\u0275eld"](13,0,null,null,1,"th",[["class","text-center"],["scope","col"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["Media ($)"]))],null,null)}function d(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,18,"tr",[],null,null,null,null,null)),(t()(),l["\u0275eld"](1,0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(t()(),l["\u0275ted"](2,null,["",""])),(t()(),l["\u0275eld"](3,0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(t()(),l["\u0275ted"](4,null,["",""])),(t()(),l["\u0275eld"](5,0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(t()(),l["\u0275ted"](6,null,["",""])),(t()(),l["\u0275eld"](7,0,null,null,2,"td",[["class","text-center"]],null,null,null,null,null)),(t()(),l["\u0275ted"](8,null,["",""])),l["\u0275ppd"](9,4),(t()(),l["\u0275eld"](10,0,null,null,2,"td",[["class","bg-white text-center"]],null,null,null,null,null)),(t()(),l["\u0275ted"](11,null,["","t"])),l["\u0275ppd"](12,2),(t()(),l["\u0275eld"](13,0,null,null,2,"td",[["class","bg-white text-center"]],null,null,null,null,null)),(t()(),l["\u0275ted"](14,null,["",""])),l["\u0275ppd"](15,4),(t()(),l["\u0275eld"](16,0,null,null,2,"td",[["class","bg-white text-center"]],null,null,null,null,null)),(t()(),l["\u0275ted"](17,null,["",""])),l["\u0275ppd"](18,4)],null,(function(t,e){t(e,2,0,e.context.$implicit.codlinha),t(e,4,0,e.context.$implicit.nomelinha),t(e,6,0,e.context.$implicit.ultimaData);var n=l["\u0275unv"](e,8,0,t(e,9,0,l["\u0275nov"](e.parent.parent.parent,0),e.context.$implicit.ultimoPreco,"$","symbol","1.2-2"));t(e,8,0,n);var i=l["\u0275unv"](e,11,0,t(e,12,0,l["\u0275nov"](e.parent.parent.parent,1),e.context.$implicit.tonelada,"1.3-3"));t(e,11,0,i);var a=l["\u0275unv"](e,14,0,t(e,15,0,l["\u0275nov"](e.parent.parent.parent,0),e.context.$implicit.valor,"$","symbol","1.2-2"));t(e,14,0,a);var o=l["\u0275unv"](e,17,0,t(e,18,0,l["\u0275nov"](e.parent.parent.parent,0),e.context.$implicit.media,"$","symbol","1.2-2"));t(e,17,0,o)}))}function p(t){return l["\u0275vid"](0,[(t()(),l["\u0275and"](16777216,null,null,1,null,d)),l["\u0275did"](1,278528,null,0,i.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),l["\u0275eld"](2,0,null,null,4,"tr",[],null,null,null,null,null)),(t()(),l["\u0275eld"](3,0,null,null,0,"td",[["colspan","4"]],null,null,null,null,null)),(t()(),l["\u0275eld"](4,0,null,null,2,"td",[["class","bg-white border text-center"],["colspan","3"]],null,null,null,null,null)),(t()(),l["\u0275eld"](5,0,null,null,1,"strong",[],null,null,null,null,null)),(t()(),l["\u0275ted"](6,null,["\xdaltimos "," dias"]))],(function(t,e){t(e,1,0,e.component.ultimosPrecos)}),(function(t,e){t(e,6,0,e.component.ultimosPrecosDias)}))}function h(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,5,"custom-table",[],null,null,null,a.b,a.a)),l["\u0275did"](1,638976,null,2,o.a,[],null,null),l["\u0275qud"](603979776,1,{theadTmpl:0}),l["\u0275qud"](603979776,2,{tbodyTmpl:0}),(t()(),l["\u0275and"](0,[[1,2],["thead",2]],null,0,null,c)),(t()(),l["\u0275and"](0,[[2,2],["tbody",2]],null,0,null,p))],(function(t,e){t(e,1,0)}),null)}function f(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,1,"empty-result",[["class","mb-3"],["message","Nenhuma informa\xe7\xe3o encontrada"]],null,null,null,s.b,s.a)),l["\u0275did"](1,49152,null,0,u.a,[],{message:[0,"message"]},null)],(function(t,e){t(e,1,0,"Nenhuma informa\xe7\xe3o encontrada")}),null)}function b(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,3,"div",[["class","d-flex w-100"]],null,null,null,null,null)),(t()(),l["\u0275eld"](1,0,null,null,0,"div",[["class","spinner-border spinner-border-sm text-dark my-auto mr-2"]],null,null,null,null,null)),(t()(),l["\u0275eld"](2,0,null,null,1,"strong",[],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["Cargando precios..."]))],null,null)}function m(t){return l["\u0275vid"](0,[l["\u0275pid"](0,i.CurrencyPipe,[l.LOCALE_ID,l.DEFAULT_CURRENCY_CODE]),l["\u0275pid"](0,i.DecimalPipe,[l.LOCALE_ID]),(t()(),l["\u0275and"](16777216,null,null,1,null,h)),l["\u0275did"](3,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,f)),l["\u0275did"](5,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,b)),l["\u0275did"](7,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(t,e){var n=e.component;t(e,3,0,n.ultimosPrecosLoaded&&!n.ultimosPrecosEmpty),t(e,5,0,n.ultimosPrecosLoaded&&n.ultimosPrecosEmpty),t(e,7,0,!n.ultimosPrecosLoaded)}),null)}},sovk:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));class l{constructor(){this.size="medium"}ngOnInit(){}}}}]);