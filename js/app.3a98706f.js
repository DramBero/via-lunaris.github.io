(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03a1":function(t,e,n){"use strict";n("18a0")},"0a2c":function(t,e,n){"use strict";n("c93e")},"11f4":function(t,e,n){"use strict";n("669b")},"18a0":function(t,e,n){},"44fb":function(t,e,n){},"460f":function(t,e,n){"use strict";n("49aa")},"48a2":function(t,e,n){"use strict";n("83c3")},"49aa":function(t,e,n){},5605:function(t,e,n){"use strict";n("9840")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("ModalMain",{directives:[{name:"show",rawName:"v-show",value:t.getOpenModal,expression:"getOpenModal"}],attrs:{modalHide:"hideOpenFile",header:"Load"}},[e("ModalContentUpload")],1),e("ModalMain",{directives:[{name:"show",rawName:"v-show",value:t.getQuestCreateModal,expression:"getQuestCreateModal"}],attrs:{header:"New quest",modalHide:"hideQuestCreateModal"}},[e("ModalContentNewQuest")],1),e("CWorkspace")],1)},s=[],r=function(){var t=this,e=t._self._c;return e("div",[e("label",{staticClass:"text-reader"},[e("input",{ref:"file",attrs:{type:"file"},on:{change:t.loadTextFromFile}}),t._v("\n    "+t._s(t.active?"Load active plugin":"Load dependency")+"\n  ")]),t._v("\n  "+t._s(t.fileName)+"\n  "+t._s(t.fileSize)+"\n")])},o=[],l=(n("28a5"),n("7f7f"),{props:{active:{type:Boolean,required:!1,default:!1}},data:function(){return{fileName:"",fileSize:null}},methods:{formatBytes:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!+t)return"0 Bytes";var n=1024,i=e<0?0:e,a=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],s=Math.floor(Math.log(t)/Math.log(n));return"".concat(parseFloat((t/Math.pow(n,s)).toFixed(i))," ").concat(a[s])},loadTextFromFile:function(t){var e=this,n=t.target.files[0];this.fileName=t.target.files[0].name,this.$store.commit("setActivePluginTitle",this.fileName.split(".")[0]),this.fileSize=this.formatBytes(t.target.files[0].size);var i=new FileReader;i.onload=function(t){e.active&&e.$store.dispatch("parseLocalPlugin",[JSON.parse(t.target.result)])},i.readAsText(n)}}}),c=l,u=(n("57ff"),n("2877")),d=Object(u["a"])(c,r,o,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"journal-frame"},[t.getJournal.length?e("div",{staticClass:"journal-frame__controls"},[e("div",{staticClass:"add-quest",on:{click:function(e){return t.addQuest()}}},[t._v("\n    New "),e("icon",{staticClass:"add-quest__button",attrs:{name:"plus-circle",scale:"1"}})],1)]):t._e(),t.getJournal.length?e("div",{staticClass:"quests"},[e("transition-group",{style:{width:"100%"},attrs:{name:"fadeHeight",mode:"out-in"}},t._l(t.getJournal,(function(t){return e("JournalFrameQuest",{key:t.name_id||0,attrs:{quest:t}})})),1)],1):t._e()])},g=[],_=(n("55dd"),n("ac6a"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"quest"},[e("div",{staticClass:"quest-title",on:{click:t.toggleCollapse}},[t._v("\n    "+t._s(t.quest.name)+"\n  ")]),e("div",{staticClass:"quest-id",on:{click:t.toggleCollapse}},[t._v("\n    "+t._s(t.quest.id)+"\n  ")]),t.quest.entries.length?e("collapse-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isCollapsed,expression:"isCollapsed"}]},[t._l(t.quest.entries.sort((function(t,e){return parseInt(t.data.disposition)-parseInt(e.data.disposition)})),(function(n){return e("div",{key:n.info_id},[t.entryEdit!=n.data.disposition?e("div",{staticClass:"entry-wrapper"},[e("div",{staticClass:"quest-entry",class:{"quest-entry_finished":n.quest_finish,"quest-entry_highlighted":t.getIsHighlighted(n.data.disposition)}},[e("div",{staticClass:"quest-entry__text"},[t._v(t._s(n.text))]),e("div",{staticClass:"quest-entry__index"},[t._v(t._s(n.data.disposition))])]),e("button",{staticClass:"edit-button"},[e("icon",{attrs:{name:"pen",scale:"1"},on:{click:function(e){t.entryEdit=n.data.disposition}}})],1)]):e("div",[e("form",{staticClass:"edit",on:{submit:function(e){return e.preventDefault(),t.editEntry(e,n.info_id)}}},[e("button",{on:{click:function(e){return e.preventDefault(),t.deleteEntry(n.info_id)}}},[e("icon",{attrs:{name:"trash",scale:"1"},on:{click:function(e){t.entryEdit=n.data.disposition}}})],1),e("div",{staticClass:"edit-entry"},[e("div",{staticClass:"edit-entry-above"},[e("textarea",{staticClass:"edit-entry-above__text",attrs:{name:"entryText",type:"text"},domProps:{textContent:t._s(n.text)}}),e("input",{staticClass:"edit-entry-above__disp",attrs:{placeholder:parseInt(n.data.disposition),name:"entryDisp",type:"number"},domProps:{value:parseInt(n.data.disposition)}})]),e("label",{staticClass:"edit-entry__checkbox"},[e("span",[t._v("Finished: ")]),e("input",{attrs:{type:"checkbox",title:"Finished",name:"entryFinished"},domProps:{checked:n.quest_finish}})])]),e("div",{staticClass:"edit-entry-controls"},[e("button",{attrs:{type:"submit"}},[e("icon",{attrs:{name:"save",scale:"1"},on:{click:function(e){t.entryEdit=n.data.disposition}}})],1),e("button",{on:{click:function(e){e.preventDefault(),t.entryEdit=""}}},[e("icon",{attrs:{name:"ban",scale:"1"},on:{click:function(e){t.entryEdit=n.data.disposition}}})],1)])])])])})),e("div",{staticClass:"add-entry",on:{click:t.createEntry}},[t._v("+")])],2)]):e("div",{staticClass:"no-entries"},[t._v("\n    No entries yet. "),e("a",{staticClass:"link",on:{click:t.createEntry}},[t._v("Create?")])])],1)}),v=[],h=n("2909"),m=(n("6b54"),n("e1f6")),y=n("849c"),C=(n("d06d"),{props:{quest:Object},components:{CollapseTransition:m["CollapseTransition"],Icon:y["a"]},data:function(){return{isCollapsed:!1,highlightedComparison:"",highlightedId:"",entryEdit:""}},watch:{getHighlight:function(t){t.id===this.quest.id?(this.isCollapsed=!0,this.highlightedComparison=t.filter_comparison,this.highlightedId=t.value.Integer):(this.isCollapsed=!1,this.highlightedComparison="",this.highlightedId="")}},computed:{getHighlight:function(){return this.$store.getters["getJournalHighlight"]},getLatestDisposition:function(){return this.quest.entries[0].data.disposition?(10*Math.floor(Math.max.apply(Math,Object(h["a"])(this.quest.entries.map((function(t){return parseInt(t.data.disposition)}))))/10+1)).toString():"10"}},methods:{editEntry:function(t,e){this.$store.commit("editJournalEntry",[e,t.target.elements.entryText.value,t.target.elements.entryDisp.value,t.target.elements.entryFinished.checked]),this.entryEdit=""},deleteEntry:function(t){this.entryEdit="",this.$store.commit("deleteJournalEntry",t)},toggleCollapse:function(){this.isCollapsed=!this.isCollapsed},getIsHighlighted:function(t){var e=parseInt(t),n=parseInt(this.highlightedId);switch(this.highlightedComparison){case"Equal":return e==n;case"GreaterEqual":return e>=n;case"LesserEqual":return e<=n;case"Less":return e<n;case"Greater":return e>n;case"NotEqual":return e!=n;default:return!1}},createEntry:function(){this.isCollapsed=!0,this.$store.commit("addJournalEntry",[this.quest.id,"New entry",this.getLatestDisposition])}}}),b=C,k=(n("6cd4"),Object(u["a"])(b,_,v,!1,null,null,null)),w=k.exports,P={computed:{getJournal:function(){return this.$store.getters["getParsedQuests"]}},components:{JournalFrameQuest:w,Icon:y["a"]},methods:{addQuest:function(){this.$store.commit("setQuestCreateModal",!0)}}},M=P,T=(n("7e54"),Object(u["a"])(M,p,g,!1,null,null,null)),O=T.exports,x=function(){var t=this,e=t._self._c;return e("button",{staticClass:"open-btn",on:{click:t.toggleOpenModal}},[e("icon",{attrs:{name:"folder-open",scale:"1.3"}})],1)},j=[],q={components:{Icon:y["a"]},methods:{toggleOpenModal:function(){this.$store.commit("toggleOpenFile",!0)}}},D=q,S=(n("48a2"),Object(u["a"])(D,x,j,!1,null,null,null)),E=S.exports,A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"frame-upload"},[e("ToolbarReadFile",{attrs:{active:""}}),e("div",{staticClass:"frame-upload-deps"},[t.getDependencies&&t.getDependencies.length>0?e("div",{staticClass:"frame-upload-deps__title"},[t._v("Requires:")]):t._e(),t._l(t.getDependencies,(function(n){return e("div",{key:n,staticClass:"frame-upload-deps__element"},[t._v("\n      "+t._s(n)+" "),e("ToolbarReadFile")],1)}))],2)],1)},F=[],I={components:{ToolbarReadFile:f},computed:{getDependencies:function(){if(this.$store.getters["getActiveHeader"])return this.$store.getters["getActiveHeader"].masters.map((function(t){return t[0]}))}}},J=I,N=(n("11f4"),Object(u["a"])(J,A,F,!1,null,null,null)),H=N.exports,B=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"window",class:{window_dialogue:t.dialogue}},[e("div",{staticClass:"window-header"},[e("div",{staticClass:"window-header__left"}),e("div",{staticClass:"window-header__name"},[t._v(t._s(t.header))]),e("div",{staticClass:"window-header__right"},[e("div",{staticClass:"window-header__close",on:{click:t.closeModal}},[e("icon",{attrs:{name:"times",scale:"1.3"}})],1)])]),e("div",{staticClass:"window__content"},[t._t("default")],2)])])},$=[],Q={components:{Icon:y["a"]},props:{modalHide:String,header:String,dialogue:Boolean},methods:{closeModal:function(){this.$store.commit(this.modalHide)}}},L=Q,G=(n("b624"),Object(u["a"])(L,B,$,!1,null,null,null)),R=G.exports,U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"book-frame"},t._l(t.getBooks,(function(t){return e("BookFrameItem",{key:t.id,attrs:{book:t}})})),1)},z=[],W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"quest"},[e("div",{staticClass:"quest-title",on:{click:t.toggleCollapse}},[t._v("\n    "+t._s(t.book.name)+"\n  ")]),e("collapse-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isCollapsed,expression:"isCollapsed"}]},[e("div",{staticClass:"quest-entry"},[e("div",{staticClass:"quest-entry__text",domProps:{innerHTML:t._s(t.book.text)}})])])])],1)},K=[],Y={props:{book:Object},components:{CollapseTransition:m["CollapseTransition"]},data:function(){return{isCollapsed:!1}},methods:{toggleCollapse:function(){this.isCollapsed=!this.isCollapsed}}},Z=Y,V=(n("8e22"),Object(u["a"])(Z,W,K,!1,null,null,null)),X=V.exports,tt={computed:{getBooks:function(){return this.$store.getters["getBooks"]}},components:{BookFrameItem:X}},et=tt,nt=(n("0a2c"),Object(u["a"])(et,U,z,!1,null,null,null)),it=nt.exports,at=function(){var t=this,e=t._self._c;return e("div",{staticClass:"workspace"},[e("ToolBar"),e("CWorkspaceDesk")],1)},st=[],rt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"workspace-desk"},[e("JournalFrame"),e("DialogueFrame")],1)},ot=[],lt=(n("6762"),n("2fdb"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"frame"},[e("div",{staticClass:"frame-controls"},[e("div",{staticClass:"frame-controls-left"}),e("div",{staticClass:"frame-controls-types"},[e("div",{staticClass:"frame-controls-types__type",class:{"frame-controls-types__type_active":t.speakerTypes.includes("speaker_id")},on:{click:function(e){return t.toggleType("speaker_id")}}},[t._v("\n        Name\n      ")]),e("div",{staticClass:"frame-controls-types__type",class:{"frame-controls-types__type_active":t.speakerTypes.includes("speaker_cell")},on:{click:function(e){return t.toggleType("speaker_cell")}}},[t._v("\n        Cell\n      ")]),e("div",{staticClass:"frame-controls-types__type",class:{"frame-controls-types__type_active":t.speakerTypes.includes("speaker_faction")},on:{click:function(e){return t.toggleType("speaker_faction")}}},[t._v("\n        Faction\n      ")]),e("div",{staticClass:"frame-controls-types__type",class:{"frame-controls-types__type_active":t.speakerTypes.includes("speaker_class")},on:{click:function(e){return t.toggleType("speaker_class")}}},[t._v("\n        Class\n      ")]),e("div",{staticClass:"frame-controls-types__type",class:{"frame-controls-types__type_active":t.speakerTypes.includes("speaker_universal")},on:{click:function(e){return t.toggleType("speaker_universal")}}},[t._v("\n        Global\n      ")])])]),e("div",{staticClass:"frame-dialogue"},t._l(t.getNPCs,(function(t){return e("DialogueFrameCard",{key:t,attrs:{"speaker-id":t,type:"npc"}})})),1),e("ModalMain",{directives:[{name:"show",rawName:"v-show",value:t.getOpenModalDialogue,expression:"getOpenModalDialogue"}],attrs:{dialogue:"",modalHide:"hideDialogue",header:t.getOpenModalDialogue}},[e("ModalContentDialogue",{attrs:{speaker:t.getOpenModalDialogue}})],1)],1)}),ct=[],ut=(n("8615"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"dialogue"},[e("div",{staticClass:"dialogue-answers"},[t.currentTopic?e("div",{staticClass:"dialogue-answers__header"},[t._v("\n      "+t._s(t.currentTopic)+"\n      "),e("div",{staticClass:"dialogue-answers__edit"},[t.editMode?e("div",[e("icon",{staticClass:"icon_gold",attrs:{name:"save",color:"#E1FF00",scale:"1"},on:{click:function(e){t.editMode=!1}}}),e("icon",{staticClass:"icon_gold",attrs:{name:"ban",color:"#E1FF00",scale:"1"},on:{click:function(e){t.editMode=!1}}}),e("icon",{staticClass:"icon_gold",attrs:{name:"trash",color:"#E1FF00",scale:"1"},on:{click:function(e){t.editMode=!1}}})],1):e("icon",{staticClass:"icon_gold",attrs:{name:"pen",color:"#E1FF00",scale:"1"},on:{click:function(e){t.editMode=!0}}})],1)]):t._e(),e("div",{staticClass:"dialogue-answers__frame"},t._l(t.currentAnswers,(function(n,i){return e("div",{key:i,staticClass:"dialogue-answers-answer",class:{"dialogue-answers-answer_edit":t.editMode}},[t.editMode?e("div",{staticClass:"dialogue-answers-answer__ids"},[e("div",{staticClass:"prev-id"},[t._v(t._s(n.prev_id||"-")+" (before)")]),e("div",{staticClass:"curr-id"},[t._v("id: "+t._s(n.info_id))])]):t._e(),n.filters.length?e("div",{staticClass:"dialogue-answers-answer-filters"},[t._l(n.filters,(function(n,i){return e("div",{key:i,staticClass:"dialogue-answers-answer-filters__filter",attrs:{tabindex:"0"},on:{focus:function(e){return t.handleFilter(n)},focusout:function(e){return t.handleFilter({})}}},[e("span",{staticClass:"filter__if"},[t._v("if ")]),e("span",{staticClass:"filter__function"},[t._v(t._s(n.filter_function)+"\n            ")]),e("span",{staticClass:"filter__id"},[t._v(t._s(n.id)+" ")]),e("span",{staticClass:"filter__comparison"},[t._v(t._s(t.parseComparison(n.filter_comparison))+"\n            ")]),e("span",{staticClass:"filter__value"},[t._v(t._s(Object.values(n.value)[0]))])])})),t.editMode?e("icon",{staticClass:"icon_gray",attrs:{name:"plus-circle",scale:"1.5"}}):t._e()],2):t._e(),e("div",{staticClass:"dialogue-answers-answer__text",domProps:{innerHTML:t._s(t.getHyperlinkedAnswer(n.text))},on:{click:function(e){return t.handleAnswerClick(e)}}}),n.result?e("div",{staticClass:"dialogue-answers-answer-results"},t._l(n.result.split("\n"),(function(n,i){return e("div",{key:i,staticClass:"dialogue-answers-answer-results__result",class:{"dialogue-answers-answer-results__result_lua":n.includes(";lua")}},[t._v("\n            "+t._s(n)+"\n          ")])})),0):t._e(),t.editMode?e("div",{staticClass:"dialogue-answers-answer__ids"},[e("div",{staticClass:"prev-id"},[t._v(t._s(n.info_id)+" (id)")]),e("div",{staticClass:"curr-id"},[t._v("next id: "+t._s(n.next_id||"-"))])]):t._e()])})),0)]),e("div",{staticClass:"dialogue-questions"},[t.getGreetings.length?e("div",{staticClass:"dialogue-questions__container"},t._l(t.getGreetings,(function(n,i){return e("div",{key:i,staticClass:"dialogue-questions__topic",on:{click:function(e){return t.setCurrentAnswers(n,"Greeting")}}},[t._v("\n        "+t._s(n)+"\n      ")])})),0):t._e(),t.getPersuasion.length?e("div",{staticClass:"dialogue-questions__container"},t._l(t.getPersuasion,(function(n,i){return e("div",{key:i,staticClass:"dialogue-questions__topic",on:{click:function(e){return t.setCurrentAnswers(n,"Persuasion")}}},[t._v("\n        "+t._s(n)+"\n      ")])})),0):t._e(),t._l(t.getTopics,(function(n,i){return e("div",{key:i,staticClass:"dialogue-questions__topic",on:{click:function(e){return t.setCurrentAnswers(n,"Topic")}}},[t._v("\n      "+t._s(n)+"\n    ")])}))],2)])}),dt=[];n("ac4d"),n("8a81"),n("1c4c"),n("a481"),n("5df3"),n("4f7f");function ft(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=pt(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,o=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return r=t.done,t},e:function(t){o=!0,s=t},f:function(){try{r||null==n.return||n.return()}finally{if(o)throw s}}}}function pt(t,e){if(t){if("string"===typeof t)return gt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?gt(t,e):void 0}}function gt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var _t={components:{Icon:y["a"]},props:{speaker:String},data:function(){return{currentAnswers:[],currentTopic:"",editMode:!1}},mounted:function(){this.editMode=!1},computed:{getTopics:function(){return Object(h["a"])(new Set(this.getSpeakerData("Topic").map((function(t){return t.TMP_topic}))))},getGreetings:function(){return Object(h["a"])(new Set(this.getSpeakerData("Greeting").map((function(t){return t.TMP_topic}))))},getPersuasion:function(){return Object(h["a"])(new Set(this.getSpeakerData("Persuasion").map((function(t){return t.TMP_topic}))))}},methods:{setCurrentAnswers:function(t,e){this.editMode||(this.currentAnswers=this.getSpeakerData(e).filter((function(e){return e.TMP_topic==t})),this.currentTopic=t)},getSpeakerData:function(t){return this.$store.getters["getDialogueBySpeaker"]([this.speaker,t])},parseComparison:function(t){switch(t){case"Equal":return"==";case"GreaterEqual":return">=";case"LesserEqual":return"<=";case"Less":return"<";case"Greater":return">";case"NotEqual":return"!=";default:return t}},handleFilter:function(t){"JournalType"===t.filter_function?this.$store.commit("setJournalHighlight",t):this.$store.commit("setJournalHighlight",{})},handleAnswerClick:function(t){this.editMode||"dialogue-answers-answer__text_hyperlink"==t.target.className&&(this.setCurrentAnswers(t.target.innerText,"Topic"),this.currentTopic=t.target.innerText)},getHyperlinkedAnswer:function(t){var e,n=t,i=ft(this.getTopics);try{for(i.s();!(e=i.n()).done;){var a=e.value;n.includes(a)&&(n=n.replace(a,'<span class="dialogue-answers-answer__text_hyperlink">'.concat(a,"</span>")))}}catch(s){i.e(s)}finally{i.f()}return n}},watch:{speaker:function(){this.currentAnswers=[],this.currentTopic=""}}},vt=_t,ht=(n("fcd3"),Object(u["a"])(vt,ut,dt,!1,null,null,null)),mt=ht.exports,yt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dialogue-card",on:{click:t.openDialogueModal}},[t._v("\n  "+t._s(t.speakerId)+"\n")])},Ct=[],bt={props:{speakerType:{type:String},speakerId:{type:String}},methods:{openDialogueModal:function(){this.$store.commit("setDialogueModal",this.speakerId)}}},kt=bt,wt=(n("9737"),Object(u["a"])(kt,yt,Ct,!1,null,null,null)),Pt=wt.exports,Mt={components:{Icon:y["a"],DialogueFrameCard:Pt,ModalMain:R,ModalContentDialogue:mt},data:function(){return{speakerTypes:["speaker_id"]}},computed:{getNPCs:function(){return this.$store.getters["getDialogueSpeaker"](this.speakerTypes)},getOpenModalDialogue:function(){return this.$store.getters["getDialogueModal"]}},methods:{toggleType:function(t){this.speakerTypes.includes(t)?this.speakerTypes=this.speakerTypes.filter((function(e){return e!=t})):this.speakerTypes.push(t)}}},Tt=Mt,Ot=(n("80a0"),Object(u["a"])(Tt,lt,ct,!1,null,null,null)),xt=Ot.exports,jt={components:{JournalFrame:O,DialogueFrame:xt}},qt=jt,Dt=(n("03a1"),Object(u["a"])(qt,rt,ot,!1,null,null,null)),St=Dt.exports,Et=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"toolbar"},[e("div",{staticClass:"file-controls"},[e("ToolBarOpen"),t.getTitle?e("ToolBarSave"):t._e()],1),t.getTitle?e("div",{staticClass:"header-controls"},[e("div",{staticClass:"header-controls__title"},[t._v("\n        "+t._s(t.getTitle)+"\n      ")]),e("div",{staticClass:"header-controls__info"})]):t._e()]),e("div",{staticClass:"pseudoheader"})])},At=[],Ft=function(){var t=this,e=t._self._c;return e("a",{staticClass:"open-btn",attrs:{href:t.getDownloadLink,download:t.getPluginTitle+".json"}},[e("icon",{attrs:{name:"save",scale:"1.3"}})],1)},It=[],Jt={components:{Icon:y["a"]},computed:{getPluginTitle:function(){return this.$store.getters["getActivePluginTitle"]},getPluginData:function(){return this.$store.getters["getActivePlugin"]},getDownloadLink:function(){return"data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.getPluginData))}},methods:{testPlugin:function(){console.log(this.getPluginData)}}},Nt=Jt,Ht=(n("460f"),Object(u["a"])(Nt,Ft,It,!1,null,null,null)),Bt=Ht.exports,$t={components:{ToolBarOpen:E,ToolBarSave:Bt},computed:{getTitle:function(){return this.$store.getters["getActivePluginTitle"]}}},Qt=$t,Lt=(n("b38f"),Object(u["a"])(Qt,Et,At,!1,null,null,null)),Gt=Lt.exports,Rt={components:{ToolBar:Gt,CWorkspaceDesk:St}},Ut=Rt,zt=(n("5605"),Object(u["a"])(Ut,at,st,!1,null,null,null)),Wt=zt.exports,Kt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"frame-upload"},[e("form",{staticClass:"add-quest-form",on:{submit:function(e){return e.preventDefault(),t.createQuest()}}},[e("label",{staticClass:"modal-field"},[t.nameError?e("span",{key:t.index,staticClass:"error"},[t._v(t._s(t.nameError))]):t._e(),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputName,expression:"inputName"}],staticClass:"modal-field__input",attrs:{name:"quest-name",placeholder:"Quest name"},domProps:{value:t.inputName},on:{input:function(e){e.target.composing||(t.inputName=e.target.value)}}})]),e("label",{staticClass:"modal-field"},[t.idError?e("span",{key:t.index,staticClass:"error"},[t._v(t._s(t.idError))]):t._e(),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputId,expression:"inputId"}],staticClass:"modal-field__input",attrs:{name:"quest-id",placeholder:"Quest ID",required:""},domProps:{value:t.inputId},on:{input:function(e){e.target.composing||(t.inputId=e.target.value)}}})]),e("button",{staticClass:"modal-button",attrs:{type:"submit"}},[t._v("Create")])])])},Yt=[],Zt={data:function(){return{nameError:"",idError:"",inputName:"",inputId:""}},methods:{createQuest:function(){this.$store.commit("addJournalQuest",[this.inputId,this.inputName]),this.$store.commit("hideQuestCreateModal")}},computed:{}},Vt=Zt,Xt=(n("b579"),Object(u["a"])(Vt,Kt,Yt,!1,null,null,null)),te=Xt.exports,ee={name:"App",components:{ToolbarReadFile:f,JournalFrame:O,ToolBarOpen:E,ModalContentUpload:H,ModalMain:R,BookFrame:it,CWorkspace:Wt,ModalContentDialogue:mt,ModalContentNewQuest:te},computed:{getOpenModal:function(){return this.$store.getters["getOpenFile"]},getQuestCreateModal:function(){return this.$store.getters["getQuestCreateModal"]}}},ne=ee,ie=(n("d266"),Object(u["a"])(ne,a,s,!1,null,null,null)),ae=ie.exports,se=n("2f62"),re=(n("8e6e"),n("456d"),n("ade3")),oe=n("3835");function le(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function ce(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?le(Object(n),!0).forEach((function(e){Object(re["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ue(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=de(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,o=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return r=t.done,t},e:function(t){o=!0,s=t},f:function(){try{r||null==n.return||n.return()}finally{if(o)throw s}}}}function de(t,e){if(t){if("string"===typeof t)return fe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fe(t,e):void 0}}function fe(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var pe={activePlugin:[],parsedQuests:[],activeHeader:{},activePluginTitle:"",journalHighlight:{}},ge={getParsedQuests:function(t){if(!t.activePlugin.length)return[];var e,n=[],i={id:"",name:"",nameId:"",nameNextId:"",entries:[]},a={id:"",name:"",nameId:"",nameNextId:"",entries:[]},s=ue(t.activePlugin);try{for(s.s();!(e=s.n()).done;){var r=e.value;"Dialogue"===r.type&&"Journal"===r.TMP_type?(r.id!==a.id&&""!==a.id&&(n.push(a),a=JSON.parse(JSON.stringify(i))),a.id=r.id):"Journal"===r.TMP_type&&(1===r.quest_name?(a.name=r.text,a.nameId=r.info_id,a.nameNextId=r.next_id):a.entries.push(r))}}catch(o){s.e(o)}finally{s.f()}return n.push(a),n},getActivePlugin:function(t){if(t.activePlugin.length){var e=JSON.parse(JSON.stringify(t.activePlugin));for(var n in e){for(var i=e[n],a=["TMP_type","TMP_topic"],s=0,r=a;s<r.length;s++){var o=r[s];i[o]&&delete i[o]}e[n]=i}return e}},getActiveHeader:function(t){return t.activePlugin.filter((function(t){return"Header"===t.type}))[0]},getJournalHighlight:function(t){return t.journalHighlight},getActivePluginTitle:function(t){return t.activePluginTitle},getDialogueSpeaker:function(t){return function(e){var n,i=[],a=ue(e);try{var s=function(){for(var e=n.value,a=["Topic","Greeting","Persuasion"],s=function(){var n=o[r];t.activePlugin.filter((function(t){return t.TMP_type===n})).length&&(i=[].concat(Object(h["a"])(i),Object(h["a"])(t.activePlugin.filter((function(t){return t.TMP_type===n})).map((function(t){return t[e]})).filter((function(t){return t})))),i=Object(h["a"])(new Set(i)))},r=0,o=a;r<o.length;r++)s()};for(a.s();!(n=a.n()).done;)s()}catch(r){a.e(r)}finally{a.f()}return i}},getDialogueBySpeaker:function(t){return function(e){var n=Object(oe["a"])(e,2),i=n[0],a=n[1];return t.activePlugin.filter((function(t){return t.TMP_type===a}))?t.activePlugin.filter((function(t){return t.TMP_type===a})).filter((function(t){return t["speaker_id"]===i||t["speaker_cell"]===i||t["speaker_faction"]===i||t["speaker_class"]===i})):[]}}},_e={parseLocalPlugin:function(t,e){t.state;var n,i,a=t.commit,s=(t.dispatch,Object(oe["a"])(e,1)),r=s[0];a("resetActivePlugin");var o,l=ue(r);try{for(l.s();!(o=l.n()).done;){var c=o.value;if("Header"===c.type)a("addEntryToActive",c);else if(["Info","Dialogue"].includes(c.type))if("Dialogue"===c.type){c.id&&(i=c.id),n=c.dialogue_type;var u=ce(ce({},c),{},{TMP_topic:i,TMP_type:n});a("addEntryToActive",u)}else{c.id&&(i=c.id);var d=ce(ce({},c),{},{TMP_topic:i,TMP_type:n});a("addEntryToActive",d)}else a("addEntryToActive",c)}}catch(f){l.e(f)}finally{l.f()}}},ve={setActiveHeader:function(t,e){t.activeHeader=e},addJournalQuest:function(t,e){var n=Object(oe["a"])(e,2),i=n[0],a=n[1],s=Math.random().toString().slice(2,15)+Math.random().toString().slice(2,9),r={type:"Dialogue",flags:[0,0],id:i,dialogue_type:"Journal",TMP_topic:i,TMP_type:"Journal"},o={type:"Info",flags:[0,0],info_id:s,prev_id:"",next_id:"",data:{dialogue_type:"Journal",disposition:0,speaker_rank:-1,speaker_sex:"Any",player_rank:-1},text:a,quest_name:1,filters:[],TMP_topic:i,TMP_type:"Journal"};t.activePlugin=[].concat(Object(h["a"])(t.activePlugin),[r]),t.activePlugin=[].concat(Object(h["a"])(t.activePlugin),[o])},addJournalEntry:function(t,e){var n=Object(oe["a"])(e,3),i=n[0],a=n[1],s=n[2],r=Math.random().toString().slice(2,15)+Math.random().toString().slice(2,9),o=t.activePlugin.filter((function(t){return"Journal"===t.TMP_type})).filter((function(t){return t.TMP_topic===i})).filter((function(t){return""===t.next_id})),l="";o.length&&o[0].info_id&&(l=o[0].info_id,t.activePlugin.filter((function(t){return t.info_id===l}))[0].next_id=r);var c={TMP_topic:i,TMP_type:"Journal",type:"Info",flags:[0,0],info_id:r,prev_id:l,next_id:"",data:{dialogue_type:"Journal",disposition:s,speaker_rank:-1,speaker_sex:"Any",player_rank:-1},text:a,filters:[]};t.activePlugin=[].concat(Object(h["a"])(t.activePlugin),[c])},deleteJournalEntry:function(t,e){var n=t.activePlugin.filter((function(t){return t.info_id===e}));if(n.length){var i=n[0].next_id,a=n[0].prev_id;t.activePlugin=t.activePlugin.filter((function(t){return t.info_id!==e}));var s=t.activePlugin.filter((function(t){return t.info_id===i}));s.length&&(t.activePlugin.filter((function(t){return t.info_id===i}))[0].prev_id=a);var r=t.activePlugin.filter((function(t){return t.info_id===a}));r.length&&(t.activePlugin.filter((function(t){return t.info_id===a}))[0].next_id=i)}},editJournalEntry:function(t,e){var n=Object(oe["a"])(e,4),i=n[0],a=n[1],s=n[2],r=n[3],o=t.activePlugin.filter((function(t){return t.info_id===i}));o.length&&(t.activePlugin.filter((function(t){return t.info_id===i}))[0].text=a,t.activePlugin.filter((function(t){return t.info_id===i}))[0].data.disposition=s,t.activePlugin.filter((function(t){return t.info_id===i}))[0].quest_finish=r?1:0,!r&&t.activePlugin.filter((function(t){return t.info_id===i}))[0].quest_finish&&delete t.activePlugin.filter((function(t){return t.info_id===i}))[0][quest_finish])},setActivePluginTitle:function(t,e){t.activePluginTitle=e},setJournalHighlight:function(t,e){t.journalHighlight=e},resetActivePlugin:function(t){t.activePlugin=[]},addEntryToActive:function(t,e){t.activePlugin=[].concat(Object(h["a"])(t.activePlugin),[e])},addToActiveArray:function(t,e){var n=Object(oe["a"])(e,2),i=n[0],a=n[1];t.activePlugin[i]?t.activePlugin[i]=[].concat(Object(h["a"])(t.activePlugin[i]),[a]):t.activePlugin[i]=[a]}},he={state:pe,getters:ge,actions:_e,mutations:ve},me={openFile:!1,dialogueModal:"",questCreateModal:!1},ye={toggleOpenFile:function(t,e){t.openFile=e},hideOpenFile:function(t){t.openFile=!1},hideDialogue:function(t){t.dialogueModal=""},setDialogueModal:function(t,e){t.dialogueModal=e},setQuestCreateModal:function(t,e){t.questCreateModal=e},hideQuestCreateModal:function(t){t.questCreateModal=!1}},Ce={},be={getOpenFile:function(t){return t.openFile},getDialogueModal:function(t){return t.dialogueModal},getQuestCreateModal:function(t){return t.questCreateModal}},ke={state:me,getters:be,actions:Ce,mutations:ye};i["a"].use(se["a"]);var we=new se["a"].Store({modules:{plugin:he,modals:ke}});i["a"].config.productionTip=!1,i["a"].component("v-icon",y["a"]),new i["a"]({store:we,render:function(t){return t(ae)}}).$mount("#app")},"57ff":function(t,e,n){"use strict";n("44fb")},"669b":function(t,e,n){},"6a08":function(t,e,n){},"6cd4":function(t,e,n){"use strict";n("d306")},7899:function(t,e,n){},"7e54":function(t,e,n){"use strict";n("b49c")},"80a0":function(t,e,n){"use strict";n("a727")},"83c3":function(t,e,n){},"8e22":function(t,e,n){"use strict";n("a0c0")},"92ef":function(t,e,n){},"932a":function(t,e,n){},9737:function(t,e,n){"use strict";n("932a")},9840:function(t,e,n){},a0c0:function(t,e,n){},a727:function(t,e,n){},b38f:function(t,e,n){"use strict";n("fb71")},b49c:function(t,e,n){},b579:function(t,e,n){"use strict";n("7899")},b624:function(t,e,n){"use strict";n("92ef")},c93e:function(t,e,n){},d0a4:function(t,e,n){},d266:function(t,e,n){"use strict";n("d0a4")},d306:function(t,e,n){},fb71:function(t,e,n){},fcd3:function(t,e,n){"use strict";n("6a08")}});
//# sourceMappingURL=app.3a98706f.js.map