(function(e){function t(t){for(var i,r,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},s={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0191":function(e,t,n){},"03a1":function(e,t,n){"use strict";n("18a0")},"0a2c":function(e,t,n){"use strict";n("c93e")},"0dd2":function(e,t,n){},"18a0":function(e,t,n){},"1a74":function(e,t,n){"use strict";n("0dd2")},"353e":function(e,t,n){},"3acf":function(e,t,n){"use strict";n("353e")},"44fb":function(e,t,n){},"48a2":function(e,t,n){"use strict";n("83c3")},5605:function(e,t,n){"use strict";n("9840")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("ModalMain",{directives:[{name:"show",rawName:"v-show",value:e.getOpenModal,expression:"getOpenModal"}],attrs:{modalHide:"hideOpenFile",header:"Load"}},[t("ModalContentUpload")],1),t("CWorkspace")],1)},a=[],r=function(){var e=this,t=e._self._c;return t("div",[t("label",{staticClass:"text-reader"},[t("input",{ref:"file",attrs:{type:"file"},on:{change:e.loadTextFromFile}}),e._v("\n    "+e._s(e.active?"Load active plugin":"Load dependency")+"\n  ")]),e._v("\n  "+e._s(e.fileName)+"\n  "+e._s(e.fileSize)+"\n")])},o=[],l=(n("28a5"),n("7f7f"),{props:{active:{type:Boolean,required:!1,default:!1}},data:function(){return{fileName:"",fileSize:null}},methods:{formatBytes:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!+e)return"0 Bytes";var n=1024,i=t<0?0:t,s=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],a=Math.floor(Math.log(e)/Math.log(n));return"".concat(parseFloat((e/Math.pow(n,a)).toFixed(i))," ").concat(s[a])},loadTextFromFile:function(e){var t=this,n=e.target.files[0];this.fileName=e.target.files[0].name,this.$store.commit("setActivePluginTitle",this.fileName.split(".")[0]),this.fileSize=this.formatBytes(e.target.files[0].size);var i=new FileReader;i.onload=function(e){t.active&&t.$store.dispatch("parseLocalPlugin",[JSON.parse(e.target.result)])},i.readAsText(n)}}}),c=l,u=(n("57ff"),n("2877")),d=Object(u["a"])(c,r,o,!1,null,null,null),p=d.exports,f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"journal-frame"},e._l(e.getJournal,(function(e){return t("JournalFrameQuest",{key:e.name_id,attrs:{quest:e}})})),1)},g=[],v=(n("ac6a"),function(){var e=this,t=e._self._c;return e.quest.entries.length?t("div",{staticClass:"quest"},[t("div",{staticClass:"quest-title",on:{click:e.toggleCollapse}},[e._v("\n    "+e._s(e.quest.name)+"\n  ")]),t("div",{staticClass:"quest-id",on:{click:e.toggleCollapse}},[e._v("\n    "+e._s(e.quest.id)+"\n  ")]),t("collapse-transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isCollapsed,expression:"isCollapsed"}]},e._l(e.quest.entries,(function(n){return t("div",{key:n.info_id,staticClass:"quest-entry",class:{"quest-entry_finished":n.quest_finish,"quest-entry_highlighted":e.getIsHighlighted(n.data.disposition)}},[t("div",{staticClass:"quest-entry__text"},[e._v(e._s(n.text))]),t("div",{staticClass:"quest-entry__index"},[e._v(e._s(n.data.disposition))])])})),0)])],1):e._e()}),_=[],h=n("e1f6"),m={props:{quest:Object},components:{CollapseTransition:h["CollapseTransition"]},data:function(){return{isCollapsed:!1,highlightedComparison:"",highlightedId:""}},watch:{getHighlight:function(e){e.id===this.quest.id?(this.isCollapsed=!0,this.highlightedComparison=e.filter_comparison,this.highlightedId=e.value.Integer):(this.isCollapsed=!1,this.highlightedComparison="",this.highlightedId="")}},computed:{getHighlight:function(){return this.$store.getters["getJournalHighlight"]}},methods:{toggleCollapse:function(){this.isCollapsed=!this.isCollapsed},getIsHighlighted:function(e){var t=parseInt(e),n=parseInt(this.highlightedId);switch(this.highlightedComparison){case"Equal":return t==n;case"GreaterEqual":return t>=n;case"LesserEqual":return t<=n;case"Less":return t<n;case"Greater":return t>n;case"NotEqual":return t!=n;default:return!1}}}},y=m,C=(n("a5f9"),Object(u["a"])(y,v,_,!1,null,null,null)),b=C.exports,k={computed:{getJournal:function(){return this.$store.getters["getParsedQuests"]}},components:{JournalFrameQuest:b}},w=k,O=(n("985d"),Object(u["a"])(w,f,g,!1,null,null,null)),T=O.exports,M=function(){var e=this,t=e._self._c;return t("button",{staticClass:"open-btn",on:{click:e.toggleOpenModal}},[t("icon",{attrs:{name:"folder-open",scale:"1.3"}})],1)},P=[],j=n("849c"),x=(n("d06d"),{components:{Icon:j["a"]},methods:{toggleOpenModal:function(){this.$store.commit("toggleOpenFile",!0)}}}),A=x,F=(n("48a2"),Object(u["a"])(A,M,P,!1,null,null,null)),S=F.exports,D=function(){var e=this,t=e._self._c;return t("div",{staticClass:"frame-upload"},[t("ToolbarReadFile",{attrs:{active:""}}),t("div",{staticClass:"frame-upload-deps"},[e.getDependencies&&e.getDependencies.length>0?t("div",{staticClass:"frame-upload-deps__title"},[e._v("Requires:")]):e._e(),e._l(e.getDependencies,(function(n){return t("div",{key:n,staticClass:"frame-upload-deps__element"},[e._v("\n      "+e._s(n)+" "),t("ToolbarReadFile")],1)}))],2)],1)},q=[],I={components:{ToolbarReadFile:p},computed:{getDependencies:function(){if(this.$store.getters["getActiveHeader"][0])return this.$store.getters["getActiveHeader"][0].masters.map((function(e){return e[0]}))}}},B=I,H=(n("3acf"),Object(u["a"])(B,D,q,!1,null,null,null)),N=H.exports,E=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"window",class:{window_dialogue:e.dialogue}},[t("div",{staticClass:"window-header"},[t("div",{staticClass:"window-header__left"}),t("div",{staticClass:"window-header__name"},[e._v(e._s(e.header))]),t("div",{staticClass:"window-header__right"},[t("div",{staticClass:"window-header__close",on:{click:e.closeModal}},[t("icon",{attrs:{name:"times",scale:"1.3"}})],1)])]),t("div",{staticClass:"window__content"},[e._t("default")],2)])])},J=[],$={components:{Icon:j["a"]},props:{modalHide:String,header:String,dialogue:Boolean},methods:{closeModal:function(){this.$store.commit(this.modalHide)}}},G=$,L=(n("b624"),Object(u["a"])(G,E,J,!1,null,null,null)),Q=L.exports,R=function(){var e=this,t=e._self._c;return t("div",{staticClass:"book-frame"},e._l(e.getBooks,(function(e){return t("BookFrameItem",{key:e.id,attrs:{book:e}})})),1)},W=[],z=function(){var e=this,t=e._self._c;return t("div",{staticClass:"quest"},[t("div",{staticClass:"quest-title",on:{click:e.toggleCollapse}},[e._v("\n    "+e._s(e.book.name)+"\n  ")]),t("collapse-transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isCollapsed,expression:"isCollapsed"}]},[t("div",{staticClass:"quest-entry"},[t("div",{staticClass:"quest-entry__text",domProps:{innerHTML:e._s(e.book.text)}})])])])],1)},U=[],Y={props:{book:Object},components:{CollapseTransition:h["CollapseTransition"]},data:function(){return{isCollapsed:!1}},methods:{toggleCollapse:function(){this.isCollapsed=!this.isCollapsed}}},K=Y,V=(n("8e22"),Object(u["a"])(K,z,U,!1,null,null,null)),Z=V.exports,X={computed:{getBooks:function(){return this.$store.getters["getBooks"]}},components:{BookFrameItem:Z}},ee=X,te=(n("0a2c"),Object(u["a"])(ee,R,W,!1,null,null,null)),ne=te.exports,ie=function(){var e=this,t=e._self._c;return t("div",{staticClass:"workspace"},[t("ToolBar"),t("CWorkspaceDesk")],1)},se=[],ae=function(){var e=this,t=e._self._c;return t("div",{staticClass:"workspace-desk"},[t("JournalFrame"),t("DialogueFrame")],1)},re=[],oe=(n("6762"),n("2fdb"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"frame"},[t("div",{staticClass:"frame-controls"},[t("div",{staticClass:"frame-controls-left"}),t("div",{staticClass:"frame-controls-types"},[t("div",{staticClass:"frame-controls-types__type",class:{"frame-controls-types__type_active":e.speakerTypes.includes("speaker_id")},on:{click:function(t){return e.toggleType("speaker_id")}}},[e._v("\n        Name\n      ")]),t("div",{staticClass:"frame-controls-types__type",class:{"frame-controls-types__type_active":e.speakerTypes.includes("speaker_cell")},on:{click:function(t){return e.toggleType("speaker_cell")}}},[e._v("\n        Cell\n      ")]),t("div",{staticClass:"frame-controls-types__type",class:{"frame-controls-types__type_active":e.speakerTypes.includes("speaker_faction")},on:{click:function(t){return e.toggleType("speaker_faction")}}},[e._v("\n        Faction\n      ")]),t("div",{staticClass:"frame-controls-types__type",class:{"frame-controls-types__type_active":e.speakerTypes.includes("speaker_class")},on:{click:function(t){return e.toggleType("speaker_class")}}},[e._v("\n        Class\n      ")]),t("div",{staticClass:"frame-controls-types__type",class:{"frame-controls-types__type_active":e.speakerTypes.includes("speaker_universal")},on:{click:function(t){return e.toggleType("speaker_universal")}}},[e._v("\n        Global\n      ")])])]),t("div",{staticClass:"frame-dialogue"},e._l(e.getNPCs,(function(e){return t("DialogueFrameCard",{key:e,attrs:{"speaker-id":e,type:"npc"}})})),1),t("ModalMain",{directives:[{name:"show",rawName:"v-show",value:e.getOpenModalDialogue,expression:"getOpenModalDialogue"}],attrs:{dialogue:"",modalHide:"hideDialogue",header:e.getOpenModalDialogue}},[t("ModalContentDialogue",{attrs:{speaker:e.getOpenModalDialogue}})],1)],1)}),le=[],ce=(n("8615"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"dialogue"},[t("div",{staticClass:"dialogue-answers"},[e.currentTopic?t("div",{staticClass:"dialogue-answers__header"},[e._v("\n      "+e._s(e.currentTopic)+"\n      "),t("div",{staticClass:"dialogue-answers__edit"},[e.editMode?t("div",[t("icon",{staticClass:"icon_gold",attrs:{name:"save",color:"#E1FF00",scale:"1"},on:{click:function(t){e.editMode=!1}}}),t("icon",{staticClass:"icon_gold",attrs:{name:"ban",color:"#E1FF00",scale:"1"},on:{click:function(t){e.editMode=!1}}}),t("icon",{staticClass:"icon_gold",attrs:{name:"trash",color:"#E1FF00",scale:"1"},on:{click:function(t){e.editMode=!1}}})],1):t("icon",{staticClass:"icon_gold",attrs:{name:"pen",color:"#E1FF00",scale:"1"},on:{click:function(t){e.editMode=!0}}})],1)]):e._e(),t("div",{staticClass:"dialogue-answers__frame"},e._l(e.currentAnswers,(function(n,i){return t("div",{key:i,staticClass:"dialogue-answers-answer",class:{"dialogue-answers-answer_edit":e.editMode}},[e.editMode?t("div",{staticClass:"dialogue-answers-answer__ids"},[t("div",{staticClass:"prev-id"},[e._v(e._s(n.prev_id||"-")+" (before)")]),t("div",{staticClass:"curr-id"},[e._v("id: "+e._s(n.info_id))])]):e._e(),n.filters.length?t("div",{staticClass:"dialogue-answers-answer-filters"},[e._l(n.filters,(function(n,i){return t("div",{key:i,staticClass:"dialogue-answers-answer-filters__filter",attrs:{tabindex:"0"},on:{focus:function(t){return e.handleFilter(n)},focusout:function(t){return e.handleFilter({})}}},[t("span",{staticClass:"filter__if"},[e._v("if ")]),t("span",{staticClass:"filter__function"},[e._v(e._s(n.filter_function)+"\n            ")]),t("span",{staticClass:"filter__id"},[e._v(e._s(n.id)+" ")]),t("span",{staticClass:"filter__comparison"},[e._v(e._s(e.parseComparison(n.filter_comparison))+"\n            ")]),t("span",{staticClass:"filter__value"},[e._v(e._s(Object.values(n.value)[0]))])])})),e.editMode?t("icon",{staticClass:"icon_gray",attrs:{name:"plus-circle",scale:"1.5"}}):e._e()],2):e._e(),t("div",{staticClass:"dialogue-answers-answer__text",domProps:{innerHTML:e._s(e.getHyperlinkedAnswer(n.text))},on:{click:function(t){return e.handleAnswerClick(t)}}}),n.result?t("div",{staticClass:"dialogue-answers-answer-results"},e._l(n.result.split("\n"),(function(n,i){return t("div",{key:i,staticClass:"dialogue-answers-answer-results__result"},[e._v("\n            "+e._s(n)+"\n          ")])})),0):e._e(),e.editMode?t("div",{staticClass:"dialogue-answers-answer__ids"},[t("div",{staticClass:"prev-id"},[e._v(e._s(n.info_id)+" (id)")]),t("div",{staticClass:"curr-id"},[e._v("next id: "+e._s(n.next_id||"-"))])]):e._e()])})),0)]),t("div",{staticClass:"dialogue-questions"},[e.getGreetings.length?t("div",{staticClass:"dialogue-questions__container"},e._l(e.getGreetings,(function(n,i){return t("div",{key:i,staticClass:"dialogue-questions__topic",on:{click:function(t){return e.setCurrentAnswers(n,"Greeting")}}},[e._v("\n        "+e._s(n)+"\n      ")])})),0):e._e(),e.getPersuasion.length?t("div",{staticClass:"dialogue-questions__container"},e._l(e.getPersuasion,(function(n,i){return t("div",{key:i,staticClass:"dialogue-questions__topic",on:{click:function(t){return e.setCurrentAnswers(n,"Persuasion")}}},[e._v("\n        "+e._s(n)+"\n      ")])})),0):e._e(),e._l(e.getTopics,(function(n,i){return t("div",{key:i,staticClass:"dialogue-questions__topic",on:{click:function(t){return e.setCurrentAnswers(n,"Topic")}}},[e._v("\n      "+e._s(n)+"\n    ")])}))],2)])}),ue=[],de=(n("ac4d"),n("8a81"),n("1c4c"),n("6b54"),n("a481"),n("5df3"),n("4f7f"),n("2909"));function pe(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=fe(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,s=function(){};return{s:s,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){o=!0,a=e},f:function(){try{r||null==n.return||n.return()}finally{if(o)throw a}}}}function fe(e,t){if(e){if("string"===typeof e)return ge(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ge(e,t):void 0}}function ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var ve={components:{Icon:j["a"]},props:{speaker:String},data:function(){return{currentAnswers:[],currentTopic:"",editMode:!1}},mounted:function(){this.editMode=!1},computed:{getTopics:function(){return Object(de["a"])(new Set(this.getSpeakerData("Topic").map((function(e){return e.TMP_topic}))))},getGreetings:function(){return Object(de["a"])(new Set(this.getSpeakerData("Greeting").map((function(e){return e.TMP_topic}))))},getPersuasion:function(){return Object(de["a"])(new Set(this.getSpeakerData("Persuasion").map((function(e){return e.TMP_topic}))))}},methods:{setCurrentAnswers:function(e,t){this.editMode||(this.currentAnswers=this.getSpeakerData(t).filter((function(t){return t.TMP_topic==e})),this.currentTopic=e)},getSpeakerData:function(e){return this.$store.getters["getDialogueBySpeaker"]([this.speaker,e])},parseComparison:function(e){switch(e){case"Equal":return"==";case"GreaterEqual":return">=";case"LesserEqual":return"<=";case"Less":return"<";case"Greater":return">";case"NotEqual":return"!=";default:return e}},handleFilter:function(e){"JournalType"===e.filter_function?this.$store.commit("setJournalHighlight",e):this.$store.commit("setJournalHighlight",{})},handleAnswerClick:function(e){this.editMode||"dialogue-answers-answer__text_hyperlink"==e.target.className&&(this.setCurrentAnswers(e.target.innerText,"Topic"),this.currentTopic=e.target.innerText)},getHyperlinkedAnswer:function(e){var t,n=e,i=pe(this.getTopics);try{for(i.s();!(t=i.n()).done;){var s=t.value;n.includes(s)&&(n=n.replace(s,'<span class="dialogue-answers-answer__text_hyperlink">'.concat(s,"</span>")))}}catch(a){i.e(a)}finally{i.f()}return n}},watch:{speaker:function(){this.currentAnswers=[],this.currentTopic=""}}},_e=ve,he=(n("1a74"),Object(u["a"])(_e,ce,ue,!1,null,null,null)),me=he.exports,ye=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dialogue-card",on:{click:e.openDialogueModal}},[e._v("\n  "+e._s(e.speakerId)+"\n")])},Ce=[],be={props:{speakerType:{type:String},speakerId:{type:String}},methods:{openDialogueModal:function(){this.$store.commit("setDialogueModal",this.speakerId)}}},ke=be,we=(n("9737"),Object(u["a"])(ke,ye,Ce,!1,null,null,null)),Oe=we.exports,Te={components:{Icon:j["a"],DialogueFrameCard:Oe,ModalMain:Q,ModalContentDialogue:me},data:function(){return{speakerTypes:["speaker_id"]}},computed:{getNPCs:function(){return this.$store.getters["getDialogueSpeaker"](this.speakerTypes)},getOpenModalDialogue:function(){return this.$store.getters["getDialogueModal"]}},methods:{toggleType:function(e){this.speakerTypes.includes(e)?this.speakerTypes=this.speakerTypes.filter((function(t){return t!=e})):this.speakerTypes.push(e)}}},Me=Te,Pe=(n("80a0"),Object(u["a"])(Me,oe,le,!1,null,null,null)),je=Pe.exports,xe={components:{JournalFrame:T,DialogueFrame:je}},Ae=xe,Fe=(n("03a1"),Object(u["a"])(Ae,ae,re,!1,null,null,null)),Se=Fe.exports,De=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"toolbar"},[t("div",{staticClass:"file-controls"},[t("ToolBarOpen")],1),e.getTitle?t("div",{staticClass:"header-controls"},[t("div",{staticClass:"header-controls__title"},[e._v("\n        "+e._s(e.getTitle)+"\n      ")]),t("div",{staticClass:"header-controls__info"})]):e._e()]),t("div",{staticClass:"pseudoheader"})])},qe=[],Ie={components:{ToolBarOpen:S},computed:{getTitle:function(){return this.$store.getters["getActivePluginTitle"]}}},Be=Ie,He=(n("db36"),Object(u["a"])(Be,De,qe,!1,null,null,null)),Ne=He.exports,Ee={components:{ToolBar:Ne,CWorkspaceDesk:Se}},Je=Ee,$e=(n("5605"),Object(u["a"])(Je,ie,se,!1,null,null,null)),Ge=$e.exports,Le={name:"App",components:{ToolbarReadFile:p,JournalFrame:T,ToolBarOpen:S,ModalContentUpload:N,ModalMain:Q,BookFrame:ne,CWorkspace:Ge,ModalContentDialogue:me},computed:{getOpenModal:function(){return this.$store.getters["getOpenFile"]}}},Qe=Le,Re=(n("9ec5"),Object(u["a"])(Qe,s,a,!1,null,null,null)),We=Re.exports,ze=n("2f62"),Ue=(n("8e6e"),n("456d"),n("ade3")),Ye=n("3835");function Ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ke(Object(n),!0).forEach((function(t){Object(Ue["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ze(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Xe(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,s=function(){};return{s:s,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){o=!0,a=e},f:function(){try{r||null==n.return||n.return()}finally{if(o)throw a}}}}function Xe(e,t){if(e){if("string"===typeof e)return et(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?et(e,t):void 0}}function et(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var tt={activePlugin:{},parsedQuests:[],activeHeader:{},activePluginTitle:"",journalHighlight:{}},nt={getTest:function(e){return e.test},getParsedQuests:function(e){return e.parsedQuests},getBooks:function(e){return e.activePlugin.Book},getActiveHeader:function(e){return e.activeHeader},getJournalHighlight:function(e){return e.journalHighlight},getActivePluginTitle:function(e){return e.activePluginTitle},getDialogueSpeaker:function(e){return function(t){var n,i=[],s=Ze(t);try{var a=function(){for(var t=n.value,s=["Topic","Greeting","Persuasion"],a=0,r=s;a<r.length;a++){var o=r[a];e.activePlugin[o]&&(i=[].concat(Object(de["a"])(i),Object(de["a"])(e.activePlugin[o].map((function(e){return e[t]})).filter((function(e){return e})))),i=Object(de["a"])(new Set(i)))}};for(s.s();!(n=s.n()).done;)a()}catch(r){s.e(r)}finally{s.f()}return i}},getDialogueBySpeaker:function(e){return function(t){var n=Object(Ye["a"])(t,2),i=n[0],s=n[1];return e.activePlugin[s]?e.activePlugin[s].filter((function(e){return e["speaker_id"]===i||e["speaker_cell"]===i||e["speaker_faction"]===i||e["speaker_class"]===i})):[]}}},it={parseLocalPlugin:function(e,t){var n,i,s=e.commit,a=e.dispatch,r=Object(Ye["a"])(t,1),o=r[0];s("resetActivePlugin");var l,c=Ze(o);try{for(c.s();!(l=c.n()).done;){var u=l.value;if(console.log("ENTRY TYPE: ",u.type),"Header"===u.type)s("setActiveHeader",[u]);else if(["Info","Dialogue"].includes(u.type))if("Dialogue"===u.type){u.id&&(i=u.id),n=u.dialogue_type;var d=Ve(Ve({},u),{},{TMP_topic:i});s("addToActiveArray",[n,d])}else{u.id&&(i=u.id);var p=Ve(Ve({},u),{},{TMP_topic:i});s("addToActiveArray",[n,p])}else s("addToActiveArray",[u.type,u])}}catch(f){c.e(f)}finally{c.f()}a("parseQuests")},parseQuests:function(e){var t,n=e.state,i=e.commit,s=[],a={id:"",name:"",nameId:"",nameNextId:"",entries:[]},r={id:"",name:"",nameId:"",nameNextId:"",entries:[]},o=Ze(n.activePlugin.Journal);try{for(o.s();!(t=o.n()).done;){var l=t.value;"Dialogue"===l.type?(l.id!==r.id&&""!==r.id&&(s.push(r),r=JSON.parse(JSON.stringify(a))),r.id=l.id):1===l.quest_name?(r.name=l.text,r.nameId=l.info_id,r.nameNextId=l.next_id):r.entries.push(l)}}catch(c){o.e(c)}finally{o.f()}s.push(r),i("setParsedQuests",[].concat(s))}},st={setActiveHeader:function(e,t){e.activeHeader=t},setActivePluginTitle:function(e,t){e.activePluginTitle=t},setJournalHighlight:function(e,t){e.journalHighlight=t},resetActivePlugin:function(e){var t={Header:{},Script:[],Creature:[],Npc:[],Clothing:[],Cell:[],Journal:[],Topic:[],Greeting:[],Persuasion:[],Weapon:[],Armor:[],Enchantment:[],Book:[],Spell:[],Door:[],Container:[],Other:[],Activator:[],Light:[],GlobalVariable:[]};e.activePlugin=t},addToActiveArray:function(e,t){var n=Object(Ye["a"])(t,2),i=n[0],s=n[1];console.log(i),e.activePlugin[i]?e.activePlugin[i]=[].concat(Object(de["a"])(e.activePlugin[i]),[s]):e.activePlugin[i]=[s]},setParsedQuests:function(e,t){e.parsedQuests=t}},at={state:tt,getters:nt,actions:it,mutations:st},rt={openFile:!1,dialogueModal:""},ot={toggleOpenFile:function(e,t){e.openFile=t},hideOpenFile:function(e){e.openFile=!1},hideDialogue:function(e){e.dialogueModal=""},setDialogueModal:function(e,t){e.dialogueModal=t}},lt={},ct={getOpenFile:function(e){return e.openFile},getDialogueModal:function(e){return e.dialogueModal}},ut={state:rt,getters:ct,actions:lt,mutations:ot};i["a"].use(ze["a"]);var dt=new ze["a"].Store({modules:{plugin:at,modals:ut}});i["a"].config.productionTip=!1,i["a"].component("v-icon",j["a"]),new i["a"]({store:dt,render:function(e){return e(We)}}).$mount("#app")},"57ff":function(e,t,n){"use strict";n("44fb")},"5fb2":function(e,t,n){},"80a0":function(e,t,n){"use strict";n("a727")},"83c3":function(e,t,n){},"8e22":function(e,t,n){"use strict";n("a0c0")},"92ef":function(e,t,n){},"932a":function(e,t,n){},9737:function(e,t,n){"use strict";n("932a")},9840:function(e,t,n){},"985d":function(e,t,n){"use strict";n("5fb2")},"9ec5":function(e,t,n){"use strict";n("a9eb")},a0c0:function(e,t,n){},a5f9:function(e,t,n){"use strict";n("f345")},a727:function(e,t,n){},a9eb:function(e,t,n){},b624:function(e,t,n){"use strict";n("92ef")},c93e:function(e,t,n){},db36:function(e,t,n){"use strict";n("0191")},f345:function(e,t,n){}});
//# sourceMappingURL=app.d5f7d888.js.map