(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{309:function(e,t,n){var content=n(312);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(88).default)("24d4bd78",content,!0,{sourceMap:!1})},310:function(e,t,n){"use strict";(function(e){var n,r,o='"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',l="\n  .codeflask {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n\n  .codeflask, .codeflask * {\n    box-sizing: border-box;\n  }\n\n  .codeflask__pre {\n    pointer-events: none;\n    z-index: 3;\n    overflow: hidden;\n  }\n\n  .codeflask__textarea {\n    background: none;\n    border: none;\n    color: "+(n="caret-color",r="#000",("undefined"!=typeof CSS?CSS.supports(n,r):"undefined"!=typeof document&&function(e){return(e=e.split("-").filter((function(e){return!!e})).map((function(e){return e[0].toUpperCase()+e.substr(1)})).join(""))[0].toLowerCase()+e.substr(1)}(n)in document.body.style)?"#fff":"#ccc")+";\n    z-index: 1;\n    resize: none;\n    font-family: "+o+";\n    -webkit-appearance: pre;\n    caret-color: #111;\n    z-index: 2;\n    width: 100%;\n    height: 100%;\n  }\n\n  .codeflask--has-line-numbers .codeflask__textarea {\n    width: calc(100% - 40px);\n  }\n\n  .codeflask__code {\n    display: block;\n    font-family: "+o+";\n    overflow: hidden;\n  }\n\n  .codeflask__flatten {\n    padding: 10px;\n    font-size: 13px;\n    line-height: 20px;\n    white-space: pre;\n    position: absolute;\n    top: 0;\n    left: 0;\n    overflow: auto;\n    margin: 0 !important;\n    outline: none;\n    text-align: left;\n  }\n\n  .codeflask--has-line-numbers .codeflask__flatten {\n    width: calc(100% - 40px);\n    left: 40px;\n  }\n\n  .codeflask__line-highlight {\n    position: absolute;\n    top: 10px;\n    left: 0;\n    width: 100%;\n    height: 20px;\n    background: rgba(0,0,0,0.1);\n    z-index: 1;\n  }\n\n  .codeflask__lines {\n    padding: 10px 4px;\n    font-size: 12px;\n    line-height: 20px;\n    font-family: 'Cousine', monospace;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 40px;\n    height: 100%;\n    text-align: right;\n    color: #999;\n    z-index: 2;\n  }\n\n  .codeflask__lines__line {\n    display: block;\n  }\n\n  .codeflask.codeflask--has-line-numbers {\n    padding-left: 40px;\n  }\n\n  .codeflask.codeflask--has-line-numbers:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 40px;\n    height: 100%;\n    background: #eee;\n    z-index: 1;\n  }\n";function c(e,t,n){var a=t||"codeflask-style",s=n||document.head;if(!e)return!1;if(document.getElementById(a))return!0;var r=document.createElement("style");return r.innerHTML=e,r.id=a,s.appendChild(r),!0}var d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function h(e){return String(e).replace(/[&<>"'`=/]/g,(function(e){return d[e]}))}var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var m=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof s?new s(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var s,r,i=a.util.type(t);switch(n=n||{},i){case"Object":if(r=a.util.objId(t),n[r])return n[r];for(var o in s={},n[r]=s,t)t.hasOwnProperty(o)&&(s[o]=e(t[o],n));return s;case"Array":return r=a.util.objId(t),n[r]?n[r]:(s=[],n[r]=s,t.forEach((function(t,a){s[a]=e(t,n)})),s);default:return t}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var s in t)n[s]=t[s];return n},insertBefore:function(e,t,n,s){var r=(s=s||a.languages)[e],i={};for(var o in r)if(r.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);n.hasOwnProperty(o)||(i[o]=r[o])}var c=s[e];return s[e]=i,a.languages.DFS(a.languages,(function(t,n){n===c&&t!=e&&(this[t]=i)})),i},DFS:function e(t,n,s,r){r=r||{};var i=a.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],s||o);var l=t[o],c=a.util.type(l);"Object"!==c||r[i(l)]?"Array"!==c||r[i(l)]||(r[i(l)]=!0,e(l,n,o,r)):(r[i(l)]=!0,e(l,n,null,r))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var s={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",s);for(var r,i=s.elements||e.querySelectorAll(s.selector),o=0;r=i[o++];)a.highlightElement(r,!0===t,s.callback)},highlightElement:function(n,s,r){for(var i,o,l=n;l&&!t.test(l.className);)l=l.parentNode;l&&(i=(l.className.match(t)||[,""])[1].toLowerCase(),o=a.languages[i]),n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+i,n.parentNode&&(l=n.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+i));var c={element:n,language:i,grammar:o,code:n.textContent},d=function(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),r&&r.call(c.element)};if(a.hooks.run("before-sanity-check",c),c.code)if(a.hooks.run("before-highlight",c),c.grammar)if(s&&e.Worker){var u=new Worker(a.filename);u.onmessage=function(e){d(e.data)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else d(a.highlight(c.code,c.grammar,c.language));else d(a.util.encode(c.code));else a.hooks.run("complete",c)},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",r),r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),s.stringify(a.util.encode(r.tokens),r.language)},matchGrammar:function(e,t,n,r,i,o,l){for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==l)return;var d=n[c];d="Array"===a.util.type(d)?d:[d];for(var u=0;u<d.length;++u){var p=d[u],h=p.inside,g=!!p.lookbehind,f=!!p.greedy,m=0,b=p.alias;if(f&&!p.pattern.global){var v=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,v+"g")}p=p.pattern||p;for(var y=r,x=i;y<t.length;x+=t[y].length,++y){var k=t[y];if(t.length>e.length)return;if(!(k instanceof s)){if(f&&y!=t.length-1){if(p.lastIndex=x,!(S=p.exec(e)))break;for(var w=S.index+(g?S[1].length:0),C=S.index+S[0].length,A=y,T=x,F=t.length;A<F&&(T<C||!t[A].type&&!t[A-1].greedy);++A)w>=(T+=t[A].length)&&(++y,x=T);if(t[y]instanceof s)continue;_=A-y,k=e.slice(x,T),S.index-=x}else{p.lastIndex=0;var S=p.exec(k),_=1}if(S){g&&(m=S[1]?S[1].length:0),C=(w=S.index+m)+(S=S[0].slice(m)).length;var E=k.slice(0,w),L=k.slice(C),I=[y,_];E&&(++y,x+=E.length,I.push(E));var N=new s(c,h?a.tokenize(S,h):S,b,S,f);if(I.push(N),L&&I.push(L),Array.prototype.splice.apply(t,I),1!=_&&a.matchGrammar(e,t,n,y,x,!0,c),o)break}else if(o)break}}}}},tokenize:function(e,t){var n=[e],s=t.rest;if(s){for(var r in s)t[r]=s[r];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var s,r=0;s=n[r++];)s(t)}},Token:s};function s(e,t,n,a,s){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!s}if(e.Prism=a,s.stringify=function(e,t,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(n){return s.stringify(n,t,e)})).join("");var r={type:e.type,content:s.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,i)}a.hooks.run("wrap",r);var o=Object.keys(r.attributes).map((function(e){return e+'="'+(r.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+(o?" "+o:"")+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),s=n.language,r=n.code,i=n.immediateClose;e.postMessage(a.highlight(r,a.languages[s],s)),i&&e.close()}),!1),a):a;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(a.filename=r.src,a.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==f&&(f.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,n){var a={};a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:s},t.languages.insertBefore("markup","cdata",r)}}),t.languages.xml=t.languages.extend("markup",{}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+t.source+"|.*?)\\)","i"),selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.markup.tag.addInlined("script","javascript"),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var a,s=e.getAttribute("data-src"),r=e,i=/\blang(?:uage)?-([\w-]+)\b/i;r&&!i.test(r.className);)r=r.parentNode;if(r&&(a=(e.className.match(i)||[,""])[1]),!a){var o=(s.match(/\.(\w+)$/)||[,""])[1];a=n[o]||o}var l=document.createElement("code");l.className="language-"+a,e.textContent="",l.textContent="Loading…",e.appendChild(l);var c=new XMLHttpRequest;c.open("GET",s,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,t.highlightElement(l),e.setAttribute("data-src-loaded","")):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)}})),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",(function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))})),v=function(e,t){if(!e)throw Error("CodeFlask expects a parameter which is Element or a String selector");if(!t)throw Error("CodeFlask expects an object containing options as second parameter");if(e.nodeType)this.editorRoot=e;else{var n=document.querySelector(e);n&&(this.editorRoot=n)}this.opts=t,this.startEditor()};v.prototype.startEditor=function(){if(!c(l,null,this.opts.styleParent))throw Error("Failed to inject CodeFlask CSS.");this.createWrapper(),this.createTextarea(),this.createPre(),this.createCode(),this.runOptions(),this.listenTextarea(),this.populateDefault(),this.updateCode(this.code)},v.prototype.createWrapper=function(){this.code=this.editorRoot.innerHTML,this.editorRoot.innerHTML="",this.elWrapper=this.createElement("div",this.editorRoot),this.elWrapper.classList.add("codeflask")},v.prototype.createTextarea=function(){this.elTextarea=this.createElement("textarea",this.elWrapper),this.elTextarea.classList.add("codeflask__textarea","codeflask__flatten")},v.prototype.createPre=function(){this.elPre=this.createElement("pre",this.elWrapper),this.elPre.classList.add("codeflask__pre","codeflask__flatten")},v.prototype.createCode=function(){this.elCode=this.createElement("code",this.elPre),this.elCode.classList.add("codeflask__code","language-"+(this.opts.language||"html"))},v.prototype.createLineNumbers=function(){this.elLineNumbers=this.createElement("div",this.elWrapper),this.elLineNumbers.classList.add("codeflask__lines"),this.setLineNumber()},v.prototype.createElement=function(e,t){var n=document.createElement(e);return t.appendChild(n),n},v.prototype.runOptions=function(){this.opts.rtl=this.opts.rtl||!1,this.opts.tabSize=this.opts.tabSize||2,this.opts.enableAutocorrect=this.opts.enableAutocorrect||!1,this.opts.lineNumbers=this.opts.lineNumbers||!1,this.opts.defaultTheme=!1!==this.opts.defaultTheme,this.opts.areaId=this.opts.areaId||null,this.opts.ariaLabelledby=this.opts.ariaLabelledby||null,this.opts.readonly=this.opts.readonly||null,"boolean"!=typeof this.opts.handleTabs&&(this.opts.handleTabs=!0),"boolean"!=typeof this.opts.handleSelfClosingCharacters&&(this.opts.handleSelfClosingCharacters=!0),"boolean"!=typeof this.opts.handleNewLineIndentation&&(this.opts.handleNewLineIndentation=!0),!0===this.opts.rtl&&(this.elTextarea.setAttribute("dir","rtl"),this.elPre.setAttribute("dir","rtl")),!1===this.opts.enableAutocorrect&&(this.elTextarea.setAttribute("spellcheck","false"),this.elTextarea.setAttribute("autocapitalize","off"),this.elTextarea.setAttribute("autocomplete","off"),this.elTextarea.setAttribute("autocorrect","off")),this.opts.lineNumbers&&(this.elWrapper.classList.add("codeflask--has-line-numbers"),this.createLineNumbers()),this.opts.defaultTheme&&c("\n.codeflask {\n  background: #fff;\n  color: #4f559c;\n}\n\n.codeflask .token.punctuation {\n  color: #4a4a4a;\n}\n\n.codeflask .token.keyword {\n  color: #8500ff;\n}\n\n.codeflask .token.operator {\n  color: #ff5598;\n}\n\n.codeflask .token.string {\n  color: #41ad8f;\n}\n\n.codeflask .token.comment {\n  color: #9badb7;\n}\n\n.codeflask .token.function {\n  color: #8500ff;\n}\n\n.codeflask .token.boolean {\n  color: #8500ff;\n}\n\n.codeflask .token.number {\n  color: #8500ff;\n}\n\n.codeflask .token.selector {\n  color: #8500ff;\n}\n\n.codeflask .token.property {\n  color: #8500ff;\n}\n\n.codeflask .token.tag {\n  color: #8500ff;\n}\n\n.codeflask .token.attr-value {\n  color: #8500ff;\n}\n","theme-default",this.opts.styleParent),this.opts.areaId&&this.elTextarea.setAttribute("id",this.opts.areaId),this.opts.ariaLabelledby&&this.elTextarea.setAttribute("aria-labelledby",this.opts.ariaLabelledby),this.opts.readonly&&this.enableReadonlyMode()},v.prototype.updateLineNumbersCount=function(){for(var e="",t=1;t<=this.lineNumber;t++)e=e+'<span class="codeflask__lines__line">'+t+"</span>";this.elLineNumbers.innerHTML=e},v.prototype.listenTextarea=function(){var e=this;this.elTextarea.addEventListener("input",(function(t){e.code=t.target.value,e.elCode.innerHTML=h(t.target.value),e.highlight(),setTimeout((function(){e.runUpdate(),e.setLineNumber()}),1)})),this.elTextarea.addEventListener("keydown",(function(t){e.handleTabs(t),e.handleSelfClosingCharacters(t),e.handleNewLineIndentation(t)})),this.elTextarea.addEventListener("scroll",(function(t){e.elPre.style.transform="translate3d(-"+t.target.scrollLeft+"px, -"+t.target.scrollTop+"px, 0)",e.elLineNumbers&&(e.elLineNumbers.style.transform="translate3d(0, -"+t.target.scrollTop+"px, 0)")}))},v.prototype.handleTabs=function(e){if(this.opts.handleTabs){if(9!==e.keyCode)return;e.preventDefault();var t=this.elTextarea,n=t.selectionDirection,a=t.selectionStart,s=t.selectionEnd,r=t.value,i=r.substr(0,a),o=r.substring(a,s),l=r.substring(s),c=" ".repeat(this.opts.tabSize);if(a!==s&&o.length>=c.length){var d=a-i.split("\n").pop().length,u=c.length,p=c.length;e.shiftKey?(r.substr(d,c.length)===c?(u=-u,d>a?(o=o.substring(0,d)+o.substring(d+c.length),p=0):d===a?(u=0,p=0,o=o.substring(c.length)):(p=-p,i=i.substring(0,d)+i.substring(d+c.length))):(u=0,p=0),o=o.replace(new RegExp("\n"+c.split("").join("\\"),"g"),"\n")):(i=i.substr(0,d)+c+i.substring(d,a),o=o.replace(/\n/g,"\n"+c)),t.value=i+o+l,t.selectionStart=a+u,t.selectionEnd=a+o.length+p,t.selectionDirection=n}else t.value=i+c+l,t.selectionStart=a+c.length,t.selectionEnd=a+c.length;var h=t.value;this.updateCode(h),this.elTextarea.selectionEnd=s+this.opts.tabSize}},v.prototype.handleSelfClosingCharacters=function(e){if(this.opts.handleSelfClosingCharacters){var t=e.key;if(["(","[","{","<","'",'"'].includes(t)||[")","]","}",">","'",'"'].includes(t))switch(t){case"(":case")":this.closeCharacter(t);break;case"[":case"]":this.closeCharacter(t);break;case"{":case"}":this.closeCharacter(t);break;case"<":case">":case"'":case'"':this.closeCharacter(t)}}},v.prototype.setLineNumber=function(){this.lineNumber=this.code.split("\n").length,this.opts.lineNumbers&&this.updateLineNumbersCount()},v.prototype.handleNewLineIndentation=function(e){if(this.opts.handleNewLineIndentation&&13===e.keyCode){e.preventDefault();var t=this.elTextarea,n=t.selectionStart,a=t.selectionEnd,s=t.value,r=s.substr(0,n),i=s.substring(a),o=s.lastIndexOf("\n",n-1),l=o+s.slice(o+1).search(/[^ ]|$/),c=l>o?l-o:0,d=r+"\n"+" ".repeat(c)+i;t.value=d,t.selectionStart=n+c+1,t.selectionEnd=n+c+1,this.updateCode(t.value)}},v.prototype.closeCharacter=function(e){var t=this.elTextarea.selectionStart,n=this.elTextarea.selectionEnd;if(this.skipCloseChar(e)){var a=this.code.substr(n,1)===e,s=a?n+1:n,r=!a&&["'",'"'].includes(e)?e:"",i=""+this.code.substring(0,t)+r+this.code.substring(s);this.updateCode(i),this.elTextarea.selectionEnd=++this.elTextarea.selectionStart}else{var o=e;switch(e){case"(":o=String.fromCharCode(e.charCodeAt()+1);break;case"<":case"{":case"[":o=String.fromCharCode(e.charCodeAt()+2)}var l=this.code.substring(t,n),c=""+this.code.substring(0,t)+l+o+this.code.substring(n);this.updateCode(c)}this.elTextarea.selectionEnd=t},v.prototype.skipCloseChar=function(e){var t=this.elTextarea.selectionStart,n=this.elTextarea.selectionEnd,a=Math.abs(n-t)>0;return[")","}","]",">"].includes(e)||["'",'"'].includes(e)&&!a},v.prototype.updateCode=function(e){this.code=e,this.elTextarea.value=e,this.elCode.innerHTML=h(e),this.highlight(),this.setLineNumber(),setTimeout(this.runUpdate.bind(this),1)},v.prototype.updateLanguage=function(e){var t=this.opts.language;this.elCode.classList.remove("language-"+t),this.elCode.classList.add("language-"+e),this.opts.language=e,this.highlight()},v.prototype.addLanguage=function(e,t){m.languages[e]=t},v.prototype.populateDefault=function(){this.updateCode(this.code)},v.prototype.highlight=function(){m.highlightElement(this.elCode,!1)},v.prototype.onUpdate=function(e){if(e&&"[object Function]"!=={}.toString.call(e))throw Error("CodeFlask expects callback of type Function");this.updateCallBack=e},v.prototype.getCode=function(){return this.code},v.prototype.runUpdate=function(){this.updateCallBack&&this.updateCallBack(this.code)},v.prototype.enableReadonlyMode=function(){this.elTextarea.setAttribute("readonly",!0)},v.prototype.disableReadonlyMode=function(){this.elTextarea.removeAttribute("readonly")},t.a=v}).call(this,n(22))},311:function(e,t,n){"use strict";var r=n(309);n.n(r).a},312:function(e,t,n){(t=n(87)(!1)).push([e.i,"main{max-width:1200px;margin:100px auto}.el-upload-dragger{width:100%;height:100%}#code,.el-select{width:100%}#code{position:relative;height:496px;border:1px solid #dcdfe6}.btn-render{float:right}.canvas-wrapper{position:relative;width:600px;height:600px}#canvas{width:100%;height:100%;border:1px solid #dcdfe6}.canvas-error{position:absolute;top:1px;left:1px;padding:20px;color:red;background:hsla(0,0%,100%,.8)}",""]),e.exports=t},313:function(e,t,n){"use strict";n.r(t);n(29),n(47),n(30),n(15),n(48);var r=n(3),o=[{label:"[VRC]おもいでコルクボード",code:"\n/**\n *  [VRC]おもいでコルクボード - NK_NAKA\n *  https://booth.pm/ja/items/1288171\n */\n\nconst w = 1360\nconst h = 765\nconst font = '110px sans-serif'\n\n// init\nCTX.font = font\nCTX.drawImage(IMAGES[0], 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)\n\nfunction getDate(str) {\n    const d = str.match(/_([0-9]+-[0-9]+-[0-9]+)_/)\n    return d ? d[1].replace(/-/g, '.') : ''\n}\n\n// photos\nCTX.drawImage(IMAGES[1], 1351, 191, w, h)\nCTX.fillText(getDate(IMAGES[1].filename), 2160, 1064);\nCTX.drawImage(IMAGES[2], 2728, 1204, w, h)\nCTX.fillText(getDate(IMAGES[2].filename), 3530, 2070);\nCTX.drawImage(IMAGES[3], 1328, 3208, w, h)\nCTX.fillText(getDate(IMAGES[3].filename), 2130, 4070);\nCTX.drawImage(IMAGES[4], 2729, 2195, w, h)\nCTX.fillText(getDate(IMAGES[4].filename), 3530, 3060);\nCTX.drawImage(IMAGES[5], 1351, 1204, w, h)\nCTX.fillText(getDate(IMAGES[5].filename), 2150, 2060);\nCTX.drawImage(IMAGES[6], 2720, 3208, w, h)\nCTX.fillText(getDate(IMAGES[6].filename), 3530, 4070);\nCTX.drawImage(IMAGES[7], -9, 176, w, h)\nCTX.fillText(getDate(IMAGES[7].filename), 780, 1040);\nCTX.drawImage(IMAGES[8], 1347, 2203, w, h)\nCTX.fillText(getDate(IMAGES[8].filename), 2140, 3060);\nCTX.drawImage(IMAGES[9], 2727, 192, w, h)\nCTX.fillText(getDate(IMAGES[9].filename), 3530, 1050);\n"},{label:"Custom",code:"\n/**\n *  Create your custom code\n */        \n"}],l=n(310),c={data:function(){return{flask:null,canvas:null,ctx:null,templates:o,activeTemplate:0,fileList:[],images:[],errorMessage:""}},methods:{addedImage:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.fileList=t,n.draw(n.flask.getCode());case 2:case"end":return e.stop()}}),e)})))()},changedTemplate:function(e){var code=this.templates[e].code;this.flask.updateCode(code)},draw:function(code){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.fileList.length===e.images.length){t.next=5;break}return n=e.fileList.map((function(e){return new Promise((function(t,n){var img=new Image;img.src=e.url,img.filename=e.name,img.onload=function(){return t(img)}}))})),t.next=4,Promise.all(n);case 4:e.images=t.sent;case 5:e.ctx.save(),e.ctx.beginPath(),e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height);try{new Function("CANVAS_WIDTH","CANVAS_HEIGHT","CTX","IMAGES",code)(e.canvas.width,e.canvas.height,e.ctx,e.images),e.errorMessage=""}catch(t){console.error(t),e.errorMessage=t}e.ctx.restore();case 10:case"end":return t.stop()}}),t)})))()},render:function(){var e=this.canvas.toDataURL("image/png");window.open().document.write('<img src="'.concat(e,'">'))}},mounted:function(){this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.flask=new l.a("#code",{language:"js"}),this.flask.onUpdate(this.draw),this.flask.updateCode(this.templates[0].code)}},d=(n(311),n(43)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("h1",[e._v("VRC Texture Generator")]),e._v(" "),n("el-row",{staticClass:"images"},[n("h4",[e._v("Images")]),e._v(" "),n("el-upload",{attrs:{action:"/",drag:"",multiple:"","auto-upload":!1,"on-change":e.addedImage,"file-list":e.fileList,"list-type":"picture-card"}},[n("i",{staticClass:"el-icon-plus"})])],1),e._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("h4",[e._v("Template")]),e._v(" "),n("el-select",{on:{change:e.changedTemplate},model:{value:e.activeTemplate,callback:function(t){e.activeTemplate=t},expression:"activeTemplate"}},e._l(e.templates,(function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:t}})})),1),e._v(" "),n("h4",[e._v("Canvas Code")]),e._v(" "),n("div",{attrs:{id:"code"}})],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("h4",[e._v("\n                Output\n                "),n("el-button",{staticClass:"btn-render",attrs:{size:"small"},on:{click:e.render}},[e._v("\n                    render\n                ")])],1),e._v(" "),n("div",{staticClass:"canvas-wrapper"},[n("canvas",{ref:"canvas",attrs:{id:"canvas",width:"4096px",height:"4096px"}}),e._v(" "),e.errorMessage?n("div",{staticClass:"canvas-error"},[e._v("\n                    "+e._s(e.errorMessage)+"\n                ")]):e._e()])])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);