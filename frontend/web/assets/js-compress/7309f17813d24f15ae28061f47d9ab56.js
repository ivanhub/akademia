/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */
(function(global,factory){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
return factory(w);};}else{factory(global);}}(typeof window!=="undefined"?window:this,function(window,noGlobal){var arr=[];var document=window.document;var slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var
version="2.2.4",jQuery=function(selector,context){return new jQuery.fn.init(selector,context);},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,selector:"",length:0,toArray:function(){return slice.call(this);},get:function(num){return num!=null?(num<0?this[num+this.length]:this[num]):slice.call(this);},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;return ret;},each:function(callback){return jQuery.each(this,callback);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor();},push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(i===length){target=this;i--;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function(obj){return obj!=null&&obj===obj.window;},isNumeric:function(obj){var realStringObj=obj&&obj.toString();return!jQuery.isArray(obj)&&(realStringObj-parseFloat(realStringObj)+1)>=0;},isPlainObject:function(obj){var key;if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype||{},"isPrototypeOf")){return false;}
for(key in obj){}
return key===undefined||hasOwn.call(obj,key);},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},type:function(obj){if(obj==null){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;},globalEval:function(code){var script,indirect=eval;code=jQuery.trim(code);if(code){if(code.indexOf("use strict")===1){script=document.createElement("script");script.text=code;document.head.appendChild(script).parentNode.removeChild(script);}else{indirect(code);}}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}
return obj;},trim:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}
first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
return matches;},map:function(elems,callback,arg){var length,value,i=0,ret=[];if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}
return concat.apply([],ret);},guid:1,proxy:function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!jQuery.isFunction(fn)){return undefined;}
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
var Sizzle=
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
return 0;},MAX_NEGATIVE=1<<31,hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}
return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",identifier="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+".*"+")\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},unloadHandler=function(){setDocument();};try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els));}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j-1;}};}
function Sizzle(selector,context,results,seed){var m,i,elem,nid,nidselect,match,groups,newSelector,newContext=context&&context.ownerDocument,nodeType=context?context.nodeType:9;results=results||[];if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}
if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
context=context||document;if(documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){if((elem=context.getElementById(m))){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;}else if(context.nodeName.toLowerCase()!=="object"){if((nid=context.getAttribute("id"))){nid=nid.replace(rescape,"\\$&");}else{context.setAttribute("id",(nid=expando));}
groups=tokenize(selector);i=groups.length;nidselect=ridentifier.test(nid)?"#"+nid:"[id='"+nid+"']";while(i--){groups[i]=nidselect+" "+toSelector(groups[i]);}
newSelector=groups.join(",");newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}
if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key+" "]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var div=document.createElement("div");try{return!!fn(div);}catch(e){return false;}finally{if(div.parentNode){div.parentNode.removeChild(div);}
div=null;}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-
(~a.sourceIndex||MAX_NEGATIVE);if(diff){return diff;}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}
support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);if((parent=document.defaultView)&&parent.top!==parent){if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false);}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}}
support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className");});support.getElementsByTagName=assert(function(div){div.appendChild(document.createComment(""));return!div.getElementsByTagName("*").length;});support.getElementsByClassName=rnative.test(document.getElementsByClassName);support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(document.querySelectorAll))){assert(function(div){docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}
if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){var input=document.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D");if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}
if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}
div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;};sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;return 0;}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}
if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}
return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}
return compare&4?-1:1;}:function(a,b){if(a===b){hasDuplicate=true;return 0;}
var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
while(ap[i]===bp[i]){i++;}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
sortInput=null;return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while((node=elem[i++])){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[3]){match[2]=match[4]||match[5]||"";}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){node=parent;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{if(useCache){node=elem;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}
if(diff===false){while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}
if(node===elem){break;}}}}}
diff-=last;return diff===first||(diff%first===0&&diff / first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push((tokens=[]));}
matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if((oldCache=uniqueCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2]);}else{uniqueCache[dir]=newCache;if((newCache[2]=matcher(elem,context,xml))){return true;}}}}}};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret;}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}
while((matcher=elementMatchers[j++])){if(matcher(elem,context||document,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!match){match=tokenize(selector);}
i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector;}
return cached;};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[];if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}else if(compiled){context=context.parentNode;}
selector=selector.slice(tokens.shift().value.length);}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1;});if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}
if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}
if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}
return Sizzle;})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var dir=function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}
matched.push(elem);}}
return matched;};var siblings=function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}
return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=(/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);var risSimple=/^.[^:#\[\.,]*$/;function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}
qualifier=jQuery.filter(qualifier,elements);}
return jQuery.grep(elements,function(elem){return(indexOf.call(qualifier,elem)>-1)!==not;});}
jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,len=this.length,ret=[],self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;if(!selector){return this;}
root=root||rootjQuery;if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||root).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector):selector(jQuery);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}
return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}
return indexOf.call(this,elem.jquery?elem[0]:elem);},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}
return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return dir(elem,"nextSibling");},prevAll:function(elem){return dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem);},children:function(elem){return siblings(elem.firstChild);},contents:function(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}
if(this.length>1){if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}
if(rparentsprev.test(name)){matched.reverse();}}
return this.pushStack(matched);};});var rnotwhite=(/\S+/g);function createOptions(options){var object={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var
firing,memory,fired,locked,list=[],queue=[],firingIndex=-1,fire=function(){locked=options.once;fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){firingIndex=list.length;memory=false;}}}
if(!options.memory){memory=false;}
firing=false;if(locked){if(memory){list=[];}else{list="";}}},self={add:function(){if(list){if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}
(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){add(arg);}});})(arguments);if(memory&&!firing){fire();}}
return this;},remove:function(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(index<=firingIndex){firingIndex--;}}});return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},empty:function(){if(list){list=[];}
return this;},disable:function(){locked=queue=[];list=memory="";return this;},disabled:function(){return!list;},lock:function(){locked=queue=[];if(!memory){list=memory="";}
return this;},locked:function(){return!!locked;},fireWith:function(context,args){if(!locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[i^1][2].disable,tuples[2][2].lock);}
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(subordinate){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(!(--remaining)){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().progress(updateFunc(i,progressContexts,progressValues)).done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject);}else{--remaining;}}}
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}
return deferred.promise();}});var readyList;jQuery.fn.ready=function(fn){jQuery.ready.promise().done(fn);return this;};jQuery.extend({isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}});function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}
jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"||(document.readyState!=="loading"&&!document.documentElement.doScroll)){window.setTimeout(jQuery.ready);}else{document.addEventListener("DOMContentLoaded",completed);window.addEventListener("load",completed);}}
return readyList.promise(obj);};jQuery.ready.promise();var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}
if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
return chainable?elems:bulk?fn.call(elems):len?fn(elems[0],key):emptyGet;};var acceptData=function(owner){return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType);};function Data(){this.expando=jQuery.expando+Data.uid++;}
Data.uid=1;Data.prototype={register:function(owner,initial){var value=initial||{};if(owner.nodeType){owner[this.expando]=value;}else{Object.defineProperty(owner,this.expando,{value:value,writable:true,configurable:true});}
return owner[this.expando];},cache:function(owner){if(!acceptData(owner)){return{};}
var value=owner[this.expando];if(!value){value={};if(acceptData(owner)){if(owner.nodeType){owner[this.expando]=value;}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}
return value;},set:function(owner,data,value){var prop,cache=this.cache(owner);if(typeof data==="string"){cache[data]=value;}else{for(prop in data){cache[prop]=data[prop];}}
return cache;},get:function(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][key];},access:function(owner,key,value){var stored;if(key===undefined||((key&&typeof key==="string")&&value===undefined)){stored=this.get(owner,key);return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key));}
this.set(owner,key,value);return value!==undefined?value:key;},remove:function(owner,key){var i,name,camel,cache=owner[this.expando];if(cache===undefined){return;}
if(key===undefined){this.register(owner);}else{if(jQuery.isArray(key)){name=key.concat(key.map(jQuery.camelCase));}else{camel=jQuery.camelCase(key);if(key in cache){name=[key,camel];}else{name=camel;name=name in cache?[name]:(name.match(rnotwhite)||[]);}}
i=name.length;while(i--){delete cache[name[i]];}}
if(key===undefined||jQuery.isEmptyObject(cache)){if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function dataAttr(elem,key,data){var name;if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
dataUser.set(elem,key,data);}else{data=undefined;}}
return data;}
jQuery.extend({hasData:function(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function(elem,name,data){return dataUser.access(elem,name,data);},removeData:function(elem,name){dataUser.remove(elem,name);},_data:function(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}
dataPriv.set(elem,"hasDataAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){dataUser.set(this,key);});}
return access(this,function(value){var data,camelKey;if(elem&&value===undefined){data=dataUser.get(elem,key)||dataUser.get(elem,key.replace(rmultiDash,"-$&").toLowerCase());if(data!==undefined){return data;}
camelKey=jQuery.camelCase(key);data=dataUser.get(elem,camelKey);if(data!==undefined){return data;}
data=dataAttr(elem,camelKey,undefined);if(data!==undefined){return data;}
return;}
camelKey=jQuery.camelCase(key);this.each(function(){var data=dataUser.get(this,camelKey);dataUser.set(this,camelKey,value);if(key.indexOf("-")>-1&&data!==undefined){dataUser.set(this,key,value);}});},null,value,arguments.length>1,null,true);},removeData:function(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){unit=unit||initialInUnit[3];valueParts=valueParts||[];initialInUnit=+initial||1;do{scale=scale||".5";initialInUnit=initialInUnit / scale;jQuery.style(elem,prop,initialInUnit+unit);}while(scale!==(scale=currentValue()/ initial)&&scale!==1&&--maxIterations);}
if(valueParts){initialInUnit=+initialInUnit||+initial||0;adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}
return adjusted;}
var rcheckableType=(/^(?:checkbox|radio)$/i);var rtagName=(/<([\w:-]+)/);var rscriptType=(/^$|\/(?:java|ecma)script/i);var wrapMap={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){var ret=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!=="undefined"?context.querySelectorAll(tag||"*"):[];return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret;}
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}
var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||fragment.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
jQuery.merge(nodes,tmp.childNodes);tmp=fragment.firstChild;tmp.textContent="";}}}
fragment.textContent="";i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}
continue;}
contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(fragment.appendChild(elem),"script");if(contains){setGlobalEval(tmp);}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
return fragment;}
(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var
rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}
function returnFalse(){return false;}
function safeActiveElement(){try{return document.activeElement;}catch(err){}}
function on(elem,types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){on(elem,type,selector,data,types[type],one);}
return elem;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return elem;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);if(!elemData){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(!handler.guid){handler.guid=jQuery.guid++;}
if(!(events=elemData.events)){events=elemData.events={};}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}},remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function(event){event=jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=slice.call(arguments),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(event.type!=="click"||isNaN(event.button)||event.button<1)){for(;cur!==this;cur=cur.parentNode||this){if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}
if(matches[sel]){matches.push(handleObj);}}
if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}
if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});}
return handlerQueue;},props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase "+"metaKey relatedTarget shiftKey target timeStamp view which").split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
return event;}},mouseHooks:{props:("button buttons clientX clientY offsetX offsetY pageX pageY "+"screenX screenY toElement").split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+
(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-
(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+
(doc&&doc.scrollTop||body&&body.scrollTop||0)-
(doc&&doc.clientTop||body&&body.clientTop||0);}
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
return event;}},fix:function(event){if(event[jQuery.expando]){return event;}
var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}},_default:function(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true;};jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}
this.stopPropagation();}};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn);},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,rnoInnerhtml=/<script|<style|<link/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}
function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}
return elem;}
function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}
if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
function domManip(collection,args,callback,ignored){args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);if(isFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}
domManip(self,args,callback,ignored);});}
if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(collection[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{jQuery.globalEval(node.textContent.replace(rcleanScript,""));}}}}}}
return collection;}
function remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}
if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}
node.parentNode.removeChild(node);}}
return elem;}
jQuery.extend({htmlPrefilter:function(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
return clone;},cleanData:function(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if((data=elem[dataPriv.expando])){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
elem[dataPriv.expando]=undefined;}
if(elem[dataUser.expando]){elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({domManip:domManip,detach:function(selector){return remove(this,selector,true);},remove:function(selector){return remove(this,selector);},text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.textContent="";}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var ignored=[];return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret,elems.get());}
return this.pushStack(ret);};});var iframe,elemdisplay={HTML:"block",BODY:"block"};function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display");elem.detach();return display;}
function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);doc=iframe[0].contentDocument;doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach();}
elemdisplay[nodeName]=display;}
return display;}
var rmargin=(/^margin/);var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function(elem){var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}
return view.getComputedStyle(elem);};var swap=function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
return ret;};var documentElement=document.documentElement;(function(){var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");if(!div.style){return;}
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div);function computeStyleTests(){div.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px";div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);}
jQuery.extend(support,{pixelPosition:function(){computeStyleTests();return pixelPositionVal;},boxSizingReliable:function(){if(boxSizingReliableVal==null){computeStyleTests();}
return boxSizingReliableVal;},pixelMarginRight:function(){if(boxSizingReliableVal==null){computeStyleTests();}
return pixelMarginRightVal;},reliableMarginLeft:function(){if(boxSizingReliableVal==null){computeStyleTests();}
return reliableMarginLeftVal;},reliableMarginRight:function(){var ret,marginDiv=div.appendChild(document.createElement("div"));marginDiv.style.cssText=div.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;"+"display:block;margin:0;border:0;padding:0";marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";documentElement.appendChild(container);ret=!parseFloat(window.getComputedStyle(marginDiv).marginRight);documentElement.removeChild(container);div.removeChild(marginDiv);return ret;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed.getPropertyValue(name)||computed[name]:undefined;if((ret===""||ret===undefined)&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}
if(computed){if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret!==undefined?ret+"":ret;}
function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;return;}
return(this.get=hookFn).apply(this,arguments);}};}
var
rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"],emptyStyle=document.createElement("div").style;function vendorPropName(name){if(name in emptyStyle){return name;}
var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}
function setPositiveNumber(elem,value,subtract){var matches=rcssNum.exec(value);return matches?Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}
if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
return val;}
function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";if(val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}
if(rnumnonpx.test(val)){return val;}
valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);val=parseFloat(val)||0;}
return(val+
augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px";}
function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
values[index]=dataPriv.get(elem,"olddisplay");display=elem.style.display;if(show){if(!values[index]&&display==="none"){elem.style.display="";}
if(elem.style.display===""&&isHidden(elem)){values[index]=dataPriv.access(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else{hidden=isHidden(elem);if(display!=="none"||!hidden){dataPriv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}
return elements;}
jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":"cssFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);type="number";}
if(value==null||value!==value){return;}
if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name,styles);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}
return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles);if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}
return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-
swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/ 2;},_default:"swing"};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var
fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return(fxNow=jQuery.now());}
function genFx(type,includeWidth){var which,i=0,attrs={height:type};includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=dataPriv.get(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];display=jQuery.css(elem,"display");checkDisplay=display==="none"?dataPriv.get(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){style.display="inline-block";}}
if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}
for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}else{display=undefined;}}
if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}
anim.done(function(){var prop;dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display;}}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining / animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}
return result;}}
jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}
jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnotwhite);}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){window.clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";support.checkOn=input.value!=="";support.optSelected=opt.selected;select.disabled=true;support.optDisabled=!opt.disabled;input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}
if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
elem.setAttribute(name,value+"");return value;}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){elem[propName]=false;}
elem.removeAttribute(name);}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle;if(!isXML){handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle;}
return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
return(elem[name]=value);}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
return elem[name];},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}});if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}
return null;},set:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});var rclass=/[\t\r\n\f]/g;function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}
jQuery.fn.extend({addClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}
if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
return this;},removeClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}
if(!arguments.length){return this.attr("class","");}
if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}
finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}
if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}
return this.each(function(){var className,i,self,classNames;if(type==="string"){i=0;self=jQuery(this);classNames=value.match(rnotwhite)||[];while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){dataPriv.set(this,"__className__",className);}
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function(selector){var className,elem,i=0;className=" "+selector+" ";while((elem=this[i++])){if(elem.nodeType===1&&(" "+getClass(elem)+" ").replace(rclass," ").indexOf(className)>-1){return true;}}
return false;}});var rreturn=/\r/g,rspaces=/[\x20\t\r\n\f]+/g;jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret;}
return;}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:jQuery.trim(jQuery.text(elem)).replace(rspaces," ");}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}}
if(!optionSet){elem.selectedIndex=-1;}
return values;}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1);}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>-1){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin"in window;if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}
dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}
var location=window.location;var nonce=jQuery.now();var rquery=(/\?/);jQuery.parseJSON=function(data){return JSON.parse(data+"");};jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}
try{xml=(new window.DOMParser()).parseFromString(data,"text/xml");}catch(e){xml=undefined;}
if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;};var
rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,prefilters={},transports={},allTypes="*/".concat("*"),originAnchor=document.createElement("a");originAnchor.href=location.href;function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
return{state:"success",data:response};}
jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,urlAnchor,fireGlobals,i,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match==null?null:match;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;},statusCode:function(map){var code;if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]];}}else{jqXHR.always(map[jqXHR.status]);}}
return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||location.href)+"").replace(rhash,"").replace(rprotocol,location.protocol+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];if(s.crossDomain==null){urlAnchor=document.createElement("a");try{urlAnchor.href=s.url;urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){s.crossDomain=true;}}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR;}
fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data);delete s.data;}
if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+nonce++):cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;}}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+
(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort();}
strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(state===2){return jqXHR;}
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){if(state<2){done(-1,e);}else{throw e;}}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return;}
state=2;if(timeoutTimer){window.clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function(html){var wrap;if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden=function(elem){return!jQuery.expr.filters.visible(elem);};jQuery.expr.filters.visible=function(elem){return elem.offsetWidth>0||elem.offsetHeight>0||elem.getClientRects().length>0;};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback,errorCallback;if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
for(i in headers){xhr.setRequestHeader(i,headers[i]);}
callback=function(type){return function(){if(callback){callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};xhr.onload=callback();errorCallback=xhr.onerror=callback("error");if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){if(xhr.readyState===4){window.setTimeout(function(){if(callback){errorCallback();}});}};}
callback=callback("abort");try{xhr.send(options.hasContent&&options.data||null);}catch(e){if(callback){throw e;}}},abort:function(){if(callback){callback();}}};}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,callback;return{send:function(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});document.head.appendChild(script[0]);},abort:function(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){if(overwritten===undefined){jQuery(window).removeProp(callbackName);}else{window[callbackName]=overwritten;}
if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}
if(typeof context==="boolean"){keepScripts=context;context=false;}
context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);};var _load=jQuery.fn.load;jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}
var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=jQuery.trim(url.slice(off));url=url.slice(0,off);}
if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
if(self.length>0){jQuery.ajax({url:url,type:type||"GET",dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}
return this;};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}
jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative";}
curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,jQuery.extend({},curOffset));}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;if(!doc){return;}
docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box;}
box=elem.getBoundingClientRect();win=getWindow(doc);return{top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft};},position:function(){if(!this[0]){return;}
var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}
return offsetParent||documentElement;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}
if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},size:function(){return this.length;}});jQuery.fn.andSelf=jQuery.fn.addBack;if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}
var
_jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;};if(!noGlobal){window.jQuery=window.$=jQuery;}
return jQuery;}));;;
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery')}
+function($){'use strict';var version=$.fn.jquery.split(' ')[0].split('.')
if((version[0]<2&&version[1]<9)||(version[0]==1&&version[1]==9&&version[2]<1)||(version[0]>3)){throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')}}(jQuery);+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
$.fn.emulateTransitionEnd=function(duration){var called=false
var $el=this
$(this).one('bsTransitionEnd',function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()
if(!$.support.transition)return
$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);+function($){'use strict';var dismiss='[data-dismiss="alert"]'
var Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.VERSION='3.3.7'
Alert.TRANSITION_DURATION=150
Alert.prototype.close=function(e){var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=$(selector==='#'?[]:selector)
if(e)e.preventDefault()
if(!$parent.length){$parent=$this.closest('.alert')}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.detach().trigger('closed.bs.alert').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.alert')
if(!data)$this.data('bs.alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.alert
$.fn.alert=Plugin
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},Button.DEFAULTS,options)
this.isLoading=false}
Button.VERSION='3.3.7'
Button.DEFAULTS={loadingText:'loading...'}
Button.prototype.setState=function(state){var d='disabled'
var $el=this.$element
var val=$el.is('input')?'val':'html'
var data=$el.data()
state+='Text'
if(data.resetText==null)$el.data('resetText',$el[val]())
setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state])
if(state=='loadingText'){this.isLoading=true
$el.addClass(d).attr(d,d).prop(d,true)}else if(this.isLoading){this.isLoading=false
$el.removeClass(d).removeAttr(d).prop(d,false)}},this),0)}
Button.prototype.toggle=function(){var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){var $input=this.$element.find('input')
if($input.prop('type')=='radio'){if($input.prop('checked'))changed=false
$parent.find('.active').removeClass('active')
this.$element.addClass('active')}else if($input.prop('type')=='checkbox'){if(($input.prop('checked'))!==this.$element.hasClass('active'))changed=false
this.$element.toggleClass('active')}
$input.prop('checked',this.$element.hasClass('active'))
if(changed)$input.trigger('change')}else{this.$element.attr('aria-pressed',!this.$element.hasClass('active'))
this.$element.toggleClass('active')}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
var old=$.fn.button
$.fn.button=Plugin
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target).closest('.btn')
Plugin.call($btn,'toggle')
if(!($(e.target).is('input[type="radio"], input[type="checkbox"]'))){e.preventDefault()
if($btn.is('input,button'))$btn.trigger('focus')
else $btn.find('input:visible,button:visible').first().trigger('focus')}}).on('focus.bs.button.data-api blur.bs.button.data-api','[data-toggle^="button"]',function(e){$(e.target).closest('.btn').toggleClass('focus',/^focus(in)?$/.test(e.type))})}(jQuery);+function($){'use strict';var Carousel=function(element,options){this.$element=$(element)
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.paused=null
this.sliding=null
this.interval=null
this.$active=null
this.$items=null
this.options.keyboard&&this.$element.on('keydown.bs.carousel',$.proxy(this.keydown,this))
this.options.pause=='hover'&&!('ontouchstart'in document.documentElement)&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this))}
Carousel.VERSION='3.3.7'
Carousel.TRANSITION_DURATION=600
Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true,keyboard:true}
Carousel.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName))return
switch(e.which){case 37:this.prev();break
case 39:this.next();break
default:return}
e.preventDefault()}
Carousel.prototype.cycle=function(e){e||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this}
Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item')
return this.$items.index(item||this.$active)}
Carousel.prototype.getItemForDirection=function(direction,active){var activeIndex=this.getItemIndex(active)
var willWrap=(direction=='prev'&&activeIndex===0)||(direction=='next'&&activeIndex==(this.$items.length-1))
if(willWrap&&!this.options.wrap)return active
var delta=direction=='prev'?-1:1
var itemIndex=(activeIndex+delta)%this.$items.length
return this.$items.eq(itemIndex)}
Carousel.prototype.to=function(pos){var that=this
var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'))
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)})
if(activeIndex==pos)return this.pause().cycle()
return this.slide(pos>activeIndex?'next':'prev',this.$items.eq(pos))}
Carousel.prototype.pause=function(e){e||(this.paused=true)
if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end)
this.cycle(true)}
this.interval=clearInterval(this.interval)
return this}
Carousel.prototype.next=function(){if(this.sliding)return
return this.slide('next')}
Carousel.prototype.prev=function(){if(this.sliding)return
return this.slide('prev')}
Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active')
var $next=next||this.getItemForDirection(type,$active)
var isCycling=this.interval
var direction=type=='next'?'left':'right'
var that=this
if($next.hasClass('active'))return(this.sliding=false)
var relatedTarget=$next[0]
var slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
this.$element.trigger(slideEvent)
if(slideEvent.isDefaultPrevented())return
this.sliding=true
isCycling&&this.pause()
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)])
$nextIndicator&&$nextIndicator.addClass('active')}
var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd(Carousel.TRANSITION_DURATION)}else{$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger(slidEvent)}
isCycling&&this.cycle()
return this}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.carousel')
var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
var action=typeof option=='string'?option:options.slide
if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
var old=$.fn.carousel
$.fn.carousel=Plugin
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}
var clickHandler=function(e){var href
var $this=$(this)
var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))
if(!$target.hasClass('carousel'))return
var options=$.extend({},$target.data(),$this.data())
var slideIndex=$this.attr('data-slide-to')
if(slideIndex)options.interval=false
Plugin.call($target,options)
if(slideIndex){$target.data('bs.carousel').to(slideIndex)}
e.preventDefault()}
$(document).on('click.bs.carousel.data-api','[data-slide]',clickHandler).on('click.bs.carousel.data-api','[data-slide-to]',clickHandler)
$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this)
Plugin.call($carousel,$carousel.data())})})}(jQuery);+function($){'use strict';var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},Collapse.DEFAULTS,options)
this.$trigger=$('[data-toggle="collapse"][href="#'+element.id+'"],'+'[data-toggle="collapse"][data-target="#'+element.id+'"]')
this.transitioning=null
if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}
if(this.options.toggle)this.toggle()}
Collapse.VERSION='3.3.7'
Collapse.TRANSITION_DURATION=350
Collapse.DEFAULTS={toggle:true}
Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'}
Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return
var activesData
var actives=this.$parent&&this.$parent.children('.panel').children('.in, .collapsing')
if(actives&&actives.length){activesData=actives.data('bs.collapse')
if(activesData&&activesData.transitioning)return}
var startEvent=$.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
if(actives&&actives.length){Plugin.call(actives,'hide')
activesData||actives.data('bs.collapse',null)}
var dimension=this.dimension()
this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded',true)
this.$trigger.removeClass('collapsed').attr('aria-expanded',true)
this.transitioning=1
var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
this.transitioning=0
this.$element.trigger('shown.bs.collapse')}
if(!$.support.transition)return complete.call(this)
var scrollSize=$.camelCase(['scroll',dimension].join('-'))
this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])}
Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return
var startEvent=$.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var dimension=this.dimension()
this.$element[dimension](this.$element[dimension]())[0].offsetHeight
this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded',false)
this.$trigger.addClass('collapsed').attr('aria-expanded',false)
this.transitioning=1
var complete=function(){this.transitioning=0
this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')}
if(!$.support.transition)return complete.call(this)
this.$element
[dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)}
Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()}
Collapse.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(i,element){var $element=$(element)
this.addAriaAndCollapsedClass(getTargetFromTrigger($element),$element)},this)).end()}
Collapse.prototype.addAriaAndCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass('in')
$element.attr('aria-expanded',isOpen)
$trigger.toggleClass('collapsed',!isOpen).attr('aria-expanded',isOpen)}
function getTargetFromTrigger($trigger){var href
var target=$trigger.attr('data-target')||(href=$trigger.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
return $(target)}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.collapse')
var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data&&options.toggle&&/show|hide/.test(option))options.toggle=false
if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.collapse
$.fn.collapse=Plugin
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}
$(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var $this=$(this)
if(!$this.attr('data-target'))e.preventDefault()
var $target=getTargetFromTrigger($this)
var data=$target.data('bs.collapse')
var option=data?'toggle':$this.data()
Plugin.call($target,option)})}(jQuery);+function($){'use strict';var backdrop='.dropdown-backdrop'
var toggle='[data-toggle="dropdown"]'
var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
Dropdown.VERSION='3.3.7'
function getParent($this){var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=selector&&$(selector)
return $parent&&$parent.length?$parent:$this.parent()}
function clearMenus(e){if(e&&e.which===3)return
$(backdrop).remove()
$(toggle).each(function(){var $this=$(this)
var $parent=getParent($this)
var relatedTarget={relatedTarget:this}
if(!$parent.hasClass('open'))return
if(e&&e.type=='click'&&/input|textarea/i.test(e.target.tagName)&&$.contains($parent[0],e.target))return
$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.attr('aria-expanded','false')
$parent.removeClass('open').trigger($.Event('hidden.bs.dropdown',relatedTarget))})}
Dropdown.prototype.toggle=function(e){var $this=$(this)
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){$(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click',clearMenus)}
var relatedTarget={relatedTarget:this}
$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.trigger('focus').attr('aria-expanded','true')
$parent.toggleClass('open').trigger($.Event('shown.bs.dropdown',relatedTarget))}
return false}
Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if(!isActive&&e.which!=27||isActive&&e.which==27){if(e.which==27)$parent.find(toggle).trigger('focus')
return $this.trigger('click')}
var desc=' li:not(.disabled):visible a'
var $items=$parent.find('.dropdown-menu'+desc)
if(!$items.length)return
var index=$items.index(e.target)
if(e.which==38&&index>0)index--
if(e.which==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).trigger('focus')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.dropdown
$.fn.dropdown=Plugin
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle,Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','.dropdown-menu',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$dialog=this.$element.find('.modal-dialog')
this.$backdrop=null
this.isShown=null
this.originalBodyPad=null
this.scrollbarWidth=0
this.ignoreBackdropClick=false
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.VERSION='3.3.7'
Modal.TRANSITION_DURATION=300
Modal.BACKDROP_TRANSITION_DURATION=150
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.setScrollbar()
this.$body.addClass('modal-open')
this.escape()
this.resize()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.$dialog.on('mousedown.dismiss.bs.modal',function(){that.$element.one('mouseup.dismiss.bs.modal',function(e){if($(e.target).is(that.$element))that.ignoreBackdropClick=true})})
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(that.$body)}
that.$element.show().scrollTop(0)
that.adjustDialog()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in')
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$dialog.one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
this.resize()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal')
this.$dialog.off('mousedown.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(document!==e.target&&this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus')}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keydown.dismiss.bs.modal')}}
Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else{$(window).off('resize.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.$body.removeClass('modal-open')
that.resetAdjustments()
that.resetScrollbar()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$(document.createElement('div')).addClass('modal-backdrop '+animate).appendTo(this.$body)
this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false
return}
if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus():this.hide()},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
var callbackRemove=function(){that.removeBackdrop()
callback&&callback()}
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback){callback()}}
Modal.prototype.handleUpdate=function(){this.adjustDialog()}
Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})}
Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})}
Modal.prototype.checkScrollbar=function(){var fullWindowWidth=window.innerWidth
if(!fullWindowWidth){var documentElementRect=document.documentElement.getBoundingClientRect()
fullWindowWidth=documentElementRect.right-Math.abs(documentElementRect.left)}
this.bodyIsOverflowing=document.body.clientWidth<fullWindowWidth
this.scrollbarWidth=this.measureScrollbar()}
Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
this.originalBodyPad=document.body.style.paddingRight||''
if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)}
Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right',this.originalBodyPad)}
Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
Plugin.call($target,option,this)})}(jQuery);+function($){'use strict';var Tooltip=function(element,options){this.type=null
this.options=null
this.enabled=null
this.timeout=null
this.hoverState=null
this.$element=null
this.inState=null
this.init('tooltip',element,options)}
Tooltip.VERSION='3.3.7'
Tooltip.TRANSITION_DURATION=150
Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}}
Tooltip.prototype.init=function(type,element,options){this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.$viewport=this.options.viewport&&$($.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):(this.options.viewport.selector||this.options.viewport))
this.inState={click:false,hover:false,focus:false}
if(this.$element[0]instanceof document.constructor&&!this.options.selector){throw new Error('`selector` option must be specified when initializing '+this.type+' on the window.document object!')}
var triggers=this.options.trigger.split(' ')
for(var i=triggers.length;i--;){var trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
var eventOut=trigger=='hover'?'mouseleave':'focusout'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options}
Tooltip.prototype.getDelegateOptions=function(){var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
return options}
Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
if(obj instanceof $.Event){self.inState[obj.type=='focusin'?'focus':'hover']=true}
if(self.tip().hasClass('in')||self.hoverState=='in'){self.hoverState='in'
return}
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show)return self.show()
self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
Tooltip.prototype.isInStateTrue=function(){for(var key in this.inState){if(this.inState[key])return true}
return false}
Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
if(obj instanceof $.Event){self.inState[obj.type=='focusout'?'focus':'hover']=false}
if(self.isInStateTrue())return
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!inDom)return
var that=this
var $tip=this.tip()
var tipId=this.getUID(this.type)
this.setContent()
$tip.attr('id',tipId)
this.$element.attr('aria-describedby',tipId)
if(this.options.animation)$tip.addClass('fade')
var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace)placement=placement.replace(autoToken,'')||'top'
$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this)
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
this.$element.trigger('inserted.bs.'+this.type)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){var orgPlacement=placement
var viewportDim=this.getPosition(this.$viewport)
placement=placement=='bottom'&&pos.bottom+actualHeight>viewportDim.bottom?'top':placement=='top'&&pos.top-actualHeight<viewportDim.top?'bottom':placement=='right'&&pos.right+actualWidth>viewportDim.width?'left':placement=='left'&&pos.left-actualWidth<viewportDim.left?'right':placement
$tip.removeClass(orgPlacement).addClass(placement)}
var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
this.applyPlacement(calculatedOffset,placement)
var complete=function(){var prevHoverState=that.hoverState
that.$element.trigger('shown.bs.'+that.type)
that.hoverState=null
if(prevHoverState=='out')that.leave(that)}
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()}}
Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
var marginTop=parseInt($tip.css('margin-top'),10)
var marginLeft=parseInt($tip.css('margin-left'),10)
if(isNaN(marginTop))marginTop=0
if(isNaN(marginLeft))marginLeft=0
offset.top+=marginTop
offset.left+=marginLeft
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
$tip.addClass('in')
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight}
var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight)
if(delta.left)offset.left+=delta.left
else offset.top+=delta.top
var isVertical=/top|bottom/.test(placement)
var arrowDelta=isVertical?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight
var arrowOffsetPosition=isVertical?'offsetWidth':'offsetHeight'
$tip.offset(offset)
this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical)}
Tooltip.prototype.replaceArrow=function(delta,dimension,isVertical){this.arrow().css(isVertical?'left':'top',50*(1-delta / dimension)+'%').css(isVertical?'top':'left','')}
Tooltip.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')}
Tooltip.prototype.hide=function(callback){var that=this
var $tip=$(this.$tip)
var e=$.Event('hide.bs.'+this.type)
function complete(){if(that.hoverState!='in')$tip.detach()
if(that.$element){that.$element.removeAttr('aria-describedby').trigger('hidden.bs.'+that.type)}
callback&&callback()}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
$.support.transition&&$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()
this.hoverState=null
return this}
Tooltip.prototype.fixTitle=function(){var $e=this.$element
if($e.attr('title')||typeof $e.attr('data-original-title')!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
Tooltip.prototype.hasContent=function(){return this.getTitle()}
Tooltip.prototype.getPosition=function($element){$element=$element||this.$element
var el=$element[0]
var isBody=el.tagName=='BODY'
var elRect=el.getBoundingClientRect()
if(elRect.width==null){elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top})}
var isSvg=window.SVGElement&&el instanceof window.SVGElement
var elOffset=isBody?{top:0,left:0}:(isSvg?null:$element.offset())
var scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()}
var outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null
return $.extend({},elRect,scroll,outerDims,elOffset)}
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width / 2-actualWidth / 2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width / 2-actualWidth / 2}:placement=='left'?{top:pos.top+pos.height / 2-actualHeight / 2,left:pos.left-actualWidth}:{top:pos.top+pos.height / 2-actualHeight / 2,left:pos.left+pos.width}}
Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0}
if(!this.$viewport)return delta
var viewportPadding=this.options.viewport&&this.options.viewport.padding||0
var viewportDimensions=this.getPosition(this.$viewport)
if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll
var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight
if(topEdgeOffset<viewportDimensions.top){delta.top=viewportDimensions.top-topEdgeOffset}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}}else{var leftEdgeOffset=pos.left-viewportPadding
var rightEdgeOffset=pos.left+viewportPadding+actualWidth
if(leftEdgeOffset<viewportDimensions.left){delta.left=viewportDimensions.left-leftEdgeOffset}else if(rightEdgeOffset>viewportDimensions.right){delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset}}
return delta}
Tooltip.prototype.getTitle=function(){var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title}
Tooltip.prototype.getUID=function(prefix){do prefix+=~~(Math.random()*1000000)
while(document.getElementById(prefix))
return prefix}
Tooltip.prototype.tip=function(){if(!this.$tip){this.$tip=$(this.options.template)
if(this.$tip.length!=1){throw new Error(this.type+' `template` option must consist of exactly 1 top-level element!')}}
return this.$tip}
Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))}
Tooltip.prototype.enable=function(){this.enabled=true}
Tooltip.prototype.disable=function(){this.enabled=false}
Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
Tooltip.prototype.toggle=function(e){var self=this
if(e){self=$(e.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions())
$(e.currentTarget).data('bs.'+this.type,self)}}
if(e){self.inState.click=!self.inState.click
if(self.isInStateTrue())self.enter(self)
else self.leave(self)}else{self.tip().hasClass('in')?self.leave(self):self.enter(self)}}
Tooltip.prototype.destroy=function(){var that=this
clearTimeout(this.timeout)
this.hide(function(){that.$element.off('.'+that.type).removeData('bs.'+that.type)
if(that.$tip){that.$tip.detach()}
that.$tip=null
that.$arrow=null
that.$viewport=null
that.$element=null})}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tooltip
$.fn.tooltip=Plugin
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(jQuery);+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)}
if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
Popover.VERSION='3.3.7'
Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
Popover.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content').children().detach().end()[this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
$tip.removeClass('fade top bottom left right in')
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
Popover.prototype.getContent=function(){var $e=this.$element
var o=this.options
return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.arrow'))}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.popover
$.fn.popover=Plugin
$.fn.popover.Constructor=Popover
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(jQuery);+function($){'use strict';function ScrollSpy(element,options){this.$body=$(document.body)
this.$scrollElement=$(element).is(document.body)?$(window):$(element)
this.options=$.extend({},ScrollSpy.DEFAULTS,options)
this.selector=(this.options.target||'')+' .nav li > a'
this.offsets=[]
this.targets=[]
this.activeTarget=null
this.scrollHeight=0
this.$scrollElement.on('scroll.bs.scrollspy',$.proxy(this.process,this))
this.refresh()
this.process()}
ScrollSpy.VERSION='3.3.7'
ScrollSpy.DEFAULTS={offset:10}
ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)}
ScrollSpy.prototype.refresh=function(){var that=this
var offsetMethod='offset'
var offsetBase=0
this.offsets=[]
this.targets=[]
this.scrollHeight=this.getScrollHeight()
if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position'
offsetBase=this.$scrollElement.scrollTop()}
this.$body.find(this.selector).map(function(){var $el=$(this)
var href=$el.data('target')||$el.attr('href')
var $href=/^#./.test(href)&&$(href)
return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){that.offsets.push(this[0])
that.targets.push(this[1])})}
ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
var scrollHeight=this.getScrollHeight()
var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height()
var offsets=this.offsets
var targets=this.targets
var activeTarget=this.activeTarget
var i
if(this.scrollHeight!=scrollHeight){this.refresh()}
if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i)}
if(activeTarget&&scrollTop<offsets[0]){this.activeTarget=null
return this.clear()}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(offsets[i+1]===undefined||scrollTop<offsets[i+1])&&this.activate(targets[i])}}
ScrollSpy.prototype.activate=function(target){this.activeTarget=target
this.clear()
var selector=this.selector+'[data-target="'+target+'"],'+
this.selector+'[href="'+target+'"]'
var active=$(selector).parents('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate.bs.scrollspy')}
ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.scrollspy')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.scrollspy
$.fn.scrollspy=Plugin
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}
$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
Plugin.call($spy,$spy.data())})})}(jQuery);+function($){'use strict';var Tab=function(element){this.element=$(element)}
Tab.VERSION='3.3.7'
Tab.TRANSITION_DURATION=150
Tab.prototype.show=function(){var $this=this.element
var $ul=$this.closest('ul:not(.dropdown-menu)')
var selector=$this.data('target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
var $previous=$ul.find('.active:last a')
var hideEvent=$.Event('hide.bs.tab',{relatedTarget:$this[0]})
var showEvent=$.Event('show.bs.tab',{relatedTarget:$previous[0]})
$previous.trigger(hideEvent)
$this.trigger(showEvent)
if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented())return
var $target=$(selector)
this.activate($this.closest('li'),$ul)
this.activate($target,$target.parent(),function(){$previous.trigger({type:'hidden.bs.tab',relatedTarget:$this[0]})
$this.trigger({type:'shown.bs.tab',relatedTarget:$previous[0]})})}
Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active')
var transition=callback&&$.support.transition&&($active.length&&$active.hasClass('fade')||!!container.find('> .fade').length)
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',false)
element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded',true)
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu').length){element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',true)}
callback&&callback()}
$active.length&&transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next()
$active.removeClass('in')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tab')
if(!data)$this.data('bs.tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tab
$.fn.tab=Plugin
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function(){$.fn.tab=old
return this}
var clickHandler=function(e){e.preventDefault()
Plugin.call($(this),'show')}
$(document).on('click.bs.tab.data-api','[data-toggle="tab"]',clickHandler).on('click.bs.tab.data-api','[data-toggle="pill"]',clickHandler)}(jQuery);+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options)
this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
this.$element=$(element)
this.affixed=null
this.unpin=null
this.pinnedOffset=null
this.checkPosition()}
Affix.VERSION='3.3.7'
Affix.RESET='affix affix-top affix-bottom'
Affix.DEFAULTS={offset:0,target:window}
Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
var targetHeight=this.$target.height()
if(offsetTop!=null&&this.affixed=='top')return scrollTop<offsetTop?'top':false
if(this.affixed=='bottom'){if(offsetTop!=null)return(scrollTop+this.unpin<=position.top)?false:'bottom'
return(scrollTop+targetHeight<=scrollHeight-offsetBottom)?false:'bottom'}
var initializing=this.affixed==null
var colliderTop=initializing?scrollTop:position.top
var colliderHeight=initializing?targetHeight:height
if(offsetTop!=null&&scrollTop<=offsetTop)return'top'
if(offsetBottom!=null&&(colliderTop+colliderHeight>=scrollHeight-offsetBottom))return'bottom'
return false}
Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
return(this.pinnedOffset=position.top-scrollTop)}
Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var height=this.$element.height()
var offset=this.options.offset
var offsetTop=offset.top
var offsetBottom=offset.bottom
var scrollHeight=Math.max($(document).height(),$(document.body).height())
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top(this.$element)
if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element)
var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom)
if(this.affixed!=affix){if(this.unpin!=null)this.$element.css('top','')
var affixType='affix'+(affix?'-'+affix:'')
var e=$.Event(affixType+'.bs.affix')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.affixed=affix
this.unpin=affix=='bottom'?this.getPinnedOffset():null
this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix','affixed')+'.bs.affix')}
if(affix=='bottom'){this.$element.offset({top:scrollHeight-height-offsetBottom})}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.affix')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.affix
$.fn.affix=Plugin
$.fn.affix.Constructor=Affix
$.fn.affix.noConflict=function(){$.fn.affix=old
return this}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this)
var data=$spy.data()
data.offset=data.offset||{}
if(data.offsetBottom!=null)data.offset.bottom=data.offsetBottom
if(data.offsetTop!=null)data.offset.top=data.offsetTop
Plugin.call($spy,data)})})}(jQuery);;;(function(){var phpjs={array_filter:function(arr,func)
{var retObj={};for(var k in arr)
{if(func(arr[k]))
{retObj[k]=arr[k];}}
return retObj;},filemtime:function(file)
{var headers=this.get_headers(file,1);return(headers&&headers['Last-Modified']&&Date.parse(headers['Last-Modified'])/ 1000)||false;},get_headers:function(url,format)
{var req=window.ActiveXObject?new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest();if(!req)
{throw new Error('XMLHttpRequest not supported.');}
var tmp,headers,pair,i,j=0;req.open('HEAD',url,false);req.send(null);if(req.readyState<3)
{return false;}
tmp=req.getAllResponseHeaders();tmp=tmp.split('\n');tmp=this.array_filter(tmp,function(value)
{return value.substring(1)!=='';});headers=format?{}:[];for(i in tmp)
{if(format)
{pair=tmp[i].split(':');headers[pair.splice(0,1)]=pair.join(':').substring(1);}
else
{headers[j++]=tmp[i];}}
return headers;}};var cssRefresh=function(){this.reloadFile=function(links)
{for(var a=0,l=links.length;a<l;a++)
{var link=links[a],newTime=phpjs.filemtime(this.getRandom(link.href));if(link.last)
{if(link.last!=newTime)
{link.elem.setAttribute('href',this.getRandom(this.getHref(link.elem)));}}
link.last=newTime;}
setTimeout(function()
{this.reloadFile(links);},1000);};this.getHref=function(f)
{return f.getAttribute('href').split('?')[0];};this.getRandom=function(f)
{return f+'?x='+Math.random();};var files=document.getElementsByTagName('link'),links=[];for(var a=0,l=files.length;a<l;a++)
{var elem=files[a];links.push({'elem':elem,'href':this.getHref(elem),'last':false});}
this.reloadFile(links);};cssRefresh();})();;;window.yii=(function($){var pub={reloadableScripts:[],clickableSelector:'a, button, input[type="submit"], input[type="button"], input[type="reset"], '+'input[type="image"]',changeableSelector:'select, input, textarea',getCsrfParam:function(){return $('meta[name=csrf-param]').attr('content');},getCsrfToken:function(){return $('meta[name=csrf-token]').attr('content');},setCsrfToken:function(name,value){$('meta[name=csrf-param]').attr('content',name);$('meta[name=csrf-token]').attr('content',value);},refreshCsrfToken:function(){var token=pub.getCsrfToken();if(token){$('form input[name="'+pub.getCsrfParam()+'"]').val(token);}},confirm:function(message,ok,cancel){if(window.confirm(message)){!ok||ok();}else{!cancel||cancel();}},handleAction:function($e,event){var $form=$e.attr('data-form')?$('#'+$e.attr('data-form')):$e.closest('form'),method=!$e.data('method')&&$form?$form.attr('method'):$e.data('method'),action=$e.attr('href'),isValidAction=action&&action!=='#',params=$e.data('params'),areValidParams=params&&$.isPlainObject(params),pjax=$e.data('pjax'),usePjax=pjax!==undefined&&pjax!==0&&$.support.pjax,pjaxContainer,pjaxOptions={};if(usePjax){pjaxContainer=$e.data('pjax-container')||$e.closest('[data-pjax-container]');if(!pjaxContainer.length){pjaxContainer=$('body');}
pjaxOptions={container:pjaxContainer,push:!!$e.data('pjax-push-state'),replace:!!$e.data('pjax-replace-state'),scrollTo:$e.data('pjax-scrollto'),pushRedirect:$e.data('pjax-push-redirect'),replaceRedirect:$e.data('pjax-replace-redirect'),skipOuterContainers:$e.data('pjax-skip-outer-containers'),timeout:$e.data('pjax-timeout'),originalEvent:event,originalTarget:$e};}
if(method===undefined){if(isValidAction){usePjax?$.pjax.click(event,pjaxOptions):window.location.assign(action);}else if($e.is(':submit')&&$form.length){if(usePjax){$form.on('submit',function(e){$.pjax.submit(e,pjaxOptions);});}
$form.trigger('submit');}
return;}
var oldMethod,oldAction,newForm=!$form.length;if(!newForm){oldMethod=$form.attr('method');$form.attr('method',method);if(isValidAction){oldAction=$form.attr('action');$form.attr('action',action);}}else{if(!isValidAction){action=pub.getCurrentUrl();}
$form=$('<form/>',{method:method,action:action});var target=$e.attr('target');if(target){$form.attr('target',target);}
if(!/(get|post)/i.test(method)){$form.append($('<input/>',{name:'_method',value:method,type:'hidden'}));method='post';$form.attr('method',method);}
if(/post/i.test(method)){var csrfParam=pub.getCsrfParam();if(csrfParam){$form.append($('<input/>',{name:csrfParam,value:pub.getCsrfToken(),type:'hidden'}));}}
$form.hide().appendTo('body');}
var activeFormData=$form.data('yiiActiveForm');if(activeFormData){activeFormData.submitObject=$e;}
if(areValidParams){$.each(params,function(name,value){$form.append($('<input/>').attr({name:name,value:value,type:'hidden'}));});}
if(usePjax){$form.on('submit',function(e){$.pjax.submit(e,pjaxOptions);});}
$form.trigger('submit');$.when($form.data('yiiSubmitFinalizePromise')).then(function(){if(newForm){$form.remove();return;}
if(oldAction!==undefined){$form.attr('action',oldAction);}
$form.attr('method',oldMethod);if(areValidParams){$.each(params,function(name){$('input[name="'+name+'"]',$form).remove();});}});},getQueryParams:function(url){var pos=url.indexOf('?');if(pos<0){return{};}
var pairs=url.substring(pos+1).split('#')[0].split('&'),params={};for(var i=0,len=pairs.length;i<len;i++){var pair=pairs[i].split('=');var name=decodeURIComponent(pair[0].replace(/\+/g,'%20'));var value=decodeURIComponent(pair[1].replace(/\+/g,'%20'));if(!name.length){continue;}
if(params[name]===undefined){params[name]=value||'';}else{if(!$.isArray(params[name])){params[name]=[params[name]];}
params[name].push(value||'');}}
return params;},initModule:function(module){if(module.isActive!==undefined&&!module.isActive){return;}
if($.isFunction(module.init)){module.init();}
$.each(module,function(){if($.isPlainObject(this)){pub.initModule(this);}});},init:function(){initCsrfHandler();initRedirectHandler();initAssetFilters();initDataMethods();},getBaseCurrentUrl:function(){return window.location.protocol+'//'+window.location.host;},getCurrentUrl:function(){return window.location.href;}};function initCsrfHandler(){$.ajaxPrefilter(function(options,originalOptions,xhr){if(!options.crossDomain&&pub.getCsrfParam()){xhr.setRequestHeader('X-CSRF-Token',pub.getCsrfToken());}});pub.refreshCsrfToken();}
function initRedirectHandler(){$(document).ajaxComplete(function(event,xhr){var url=xhr&&xhr.getResponseHeader('X-Redirect');if(url){window.location.assign(url);}});}
function initAssetFilters(){var loadedScripts={};$('script[src]').each(function(){var url=getAbsoluteUrl(this.src);loadedScripts[url]=true;});$.ajaxPrefilter('script',function(options,originalOptions,xhr){if(options.dataType=='jsonp'){return;}
var url=getAbsoluteUrl(options.url),forbiddenRepeatedLoad=loadedScripts[url]===true&&!isReloadableAsset(url),cleanupRunning=loadedScripts[url]!==undefined&&loadedScripts[url]['xhrDone']===true;if(forbiddenRepeatedLoad||cleanupRunning){xhr.abort();return;}
if(loadedScripts[url]===undefined||loadedScripts[url]===true){loadedScripts[url]={xhrList:[],xhrDone:false};}
xhr.done(function(data,textStatus,jqXHR){if(loadedScripts[jqXHR.yiiUrl]['xhrDone']===true){return;}
loadedScripts[jqXHR.yiiUrl]['xhrDone']=true;for(var i=0,len=loadedScripts[jqXHR.yiiUrl]['xhrList'].length;i<len;i++){var singleXhr=loadedScripts[jqXHR.yiiUrl]['xhrList'][i];if(singleXhr&&singleXhr.readyState!==XMLHttpRequest.DONE){singleXhr.abort();}}
loadedScripts[jqXHR.yiiUrl]=true;}).fail(function(jqXHR,textStatus){if(textStatus==='abort'){return;}
delete loadedScripts[jqXHR.yiiUrl]['xhrList'][jqXHR.yiiIndex];var allFailed=true;for(var i=0,len=loadedScripts[jqXHR.yiiUrl]['xhrList'].length;i<len;i++){if(loadedScripts[jqXHR.yiiUrl]['xhrList'][i]){allFailed=false;}}
if(allFailed){delete loadedScripts[jqXHR.yiiUrl];}});xhr.yiiIndex=loadedScripts[url]['xhrList'].length;xhr.yiiUrl=url;loadedScripts[url]['xhrList'][xhr.yiiIndex]=xhr;});$(document).ajaxComplete(function(){var styleSheets=[];$('link[rel=stylesheet]').each(function(){var url=getAbsoluteUrl(this.href);if(isReloadableAsset(url)){return;}
$.inArray(url,styleSheets)===-1?styleSheets.push(url):$(this).remove();});});}
function initDataMethods(){var handler=function(event){var $this=$(this),method=$this.data('method'),message=$this.data('confirm'),form=$this.data('form');if(method===undefined&&message===undefined&&form===undefined){return true;}
if(message!==undefined){$.proxy(pub.confirm,this)(message,function(){pub.handleAction($this,event);});}else{pub.handleAction($this,event);}
event.stopImmediatePropagation();return false;};$(document).on('click.yii',pub.clickableSelector,handler).on('change.yii',pub.changeableSelector,handler);}
function isReloadableAsset(url){for(var i=0;i<pub.reloadableScripts.length;i++){var rule=getAbsoluteUrl(pub.reloadableScripts[i]);var match=new RegExp("^"+escapeRegExp(rule).split('\\*').join('.+')+"$").test(url);if(match===true){return true;}}
return false;}
function escapeRegExp(str){return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");}
function getAbsoluteUrl(url){return url.charAt(0)==='/'?pub.getBaseCurrentUrl()+url:url;}
return pub;})(window.jQuery);window.jQuery(function(){window.yii.initModule(window.yii);});;;yii.validation=(function($){var pub={isEmpty:function(value){return value===null||value===undefined||($.isArray(value)&&value.length===0)||value==='';},addMessage:function(messages,message,value){messages.push(message.replace(/\{value\}/g,value));},required:function(value,messages,options){var valid=false;if(options.requiredValue===undefined){var isString=typeof value=='string'||value instanceof String;if(options.strict&&value!==undefined||!options.strict&&!pub.isEmpty(isString?$.trim(value):value)){valid=true;}}else if(!options.strict&&value==options.requiredValue||options.strict&&value===options.requiredValue){valid=true;}
if(!valid){pub.addMessage(messages,options.message,value);}},'boolean':function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
var valid=!options.strict&&(value==options.trueValue||value==options.falseValue)||options.strict&&(value===options.trueValue||value===options.falseValue);if(!valid){pub.addMessage(messages,options.message,value);}},string:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
if(typeof value!=='string'){pub.addMessage(messages,options.message,value);return;}
if(options.is!==undefined&&value.length!=options.is){pub.addMessage(messages,options.notEqual,value);return;}
if(options.min!==undefined&&value.length<options.min){pub.addMessage(messages,options.tooShort,value);}
if(options.max!==undefined&&value.length>options.max){pub.addMessage(messages,options.tooLong,value);}},file:function(attribute,messages,options){var files=getUploadedFiles(attribute,messages,options);$.each(files,function(i,file){validateFile(file,messages,options);});},image:function(attribute,messages,options,deferredList){var files=getUploadedFiles(attribute,messages,options);$.each(files,function(i,file){validateFile(file,messages,options);if(typeof FileReader==="undefined"){return;}
var deferred=$.Deferred();pub.validateImage(file,messages,options,deferred,new FileReader(),new Image());deferredList.push(deferred);});},validateImage:function(file,messages,options,deferred,fileReader,image){image.onload=function(){validateImageSize(file,image,messages,options);deferred.resolve();};image.onerror=function(){messages.push(options.notImage.replace(/\{file\}/g,file.name));deferred.resolve();};fileReader.onload=function(){image.src=this.result;};fileReader.onerror=function(){deferred.resolve();};fileReader.readAsDataURL(file);},number:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
if(typeof value==='string'&&!options.pattern.test(value)){pub.addMessage(messages,options.message,value);return;}
if(options.min!==undefined&&value<options.min){pub.addMessage(messages,options.tooSmall,value);}
if(options.max!==undefined&&value>options.max){pub.addMessage(messages,options.tooBig,value);}},range:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
if(!options.allowArray&&$.isArray(value)){pub.addMessage(messages,options.message,value);return;}
var inArray=true;$.each($.isArray(value)?value:[value],function(i,v){if($.inArray(v,options.range)==-1){inArray=false;return false;}else{return true;}});if(options.not===undefined){options.not=false;}
if(options.not===inArray){pub.addMessage(messages,options.message,value);}},regularExpression:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
if(!options.not&&!options.pattern.test(value)||options.not&&options.pattern.test(value)){pub.addMessage(messages,options.message,value);}},email:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
var valid=true,regexp=/^((?:"?([^"]*)"?\s)?)(?:\s+)?(?:(<?)((.+)@([^>]+))(>?))$/,matches=regexp.exec(value);if(matches===null){valid=false;}else{var localPart=matches[5],domain=matches[6];if(options.enableIDN){localPart=punycode.toASCII(localPart);domain=punycode.toASCII(domain);value=matches[1]+matches[3]+localPart+'@'+domain+matches[7];}
if(localPart.length>64){valid=false;}else if((localPart+'@'+domain).length>254){valid=false;}else{valid=options.pattern.test(value)||(options.allowName&&options.fullPattern.test(value));}}
if(!valid){pub.addMessage(messages,options.message,value);}},url:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
if(options.defaultScheme&&!/:\/\//.test(value)){value=options.defaultScheme+'://'+value;}
var valid=true;if(options.enableIDN){var matches=/^([^:]+):\/\/([^\/]+)(.*)$/.exec(value);if(matches===null){valid=false;}else{value=matches[1]+'://'+punycode.toASCII(matches[2])+matches[3];}}
if(!valid||!options.pattern.test(value)){pub.addMessage(messages,options.message,value);}},trim:function($form,attribute,options){var $input=$form.find(attribute.input);var value=$input.val();if(!options.skipOnEmpty||!pub.isEmpty(value)){value=$.trim(value);$input.val(value);}
return value;},captcha:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
var hash=$('body').data(options.hashKey);hash=hash==null?options.hash:hash[options.caseSensitive?0:1];var v=options.caseSensitive?value:value.toLowerCase();for(var i=v.length-1,h=0;i>=0;--i){h+=v.charCodeAt(i);}
if(h!=hash){pub.addMessage(messages,options.message,value);}},compare:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
var compareValue,valid=true;if(options.compareAttribute===undefined){compareValue=options.compareValue;}else{compareValue=$('#'+options.compareAttribute).val();}
if(options.type==='number'){value=parseFloat(value);compareValue=parseFloat(compareValue);}
switch(options.operator){case'==':valid=value==compareValue;break;case'===':valid=value===compareValue;break;case'!=':valid=value!=compareValue;break;case'!==':valid=value!==compareValue;break;case'>':valid=value>compareValue;break;case'>=':valid=value>=compareValue;break;case'<':valid=value<compareValue;break;case'<=':valid=value<=compareValue;break;default:valid=false;break;}
if(!valid){pub.addMessage(messages,options.message,value);}},ip:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
var negation=null,cidr=null,matches=new RegExp(options.ipParsePattern).exec(value);if(matches){negation=matches[1]||null;value=matches[2];cidr=matches[4]||null;}
if(options.subnet===true&&cidr===null){pub.addMessage(messages,options.messages.noSubnet,value);return;}
if(options.subnet===false&&cidr!==null){pub.addMessage(messages,options.messages.hasSubnet,value);return;}
if(options.negation===false&&negation!==null){pub.addMessage(messages,options.messages.message,value);return;}
var ipVersion=value.indexOf(':')===-1?4:6;if(ipVersion==6){if(!(new RegExp(options.ipv6Pattern)).test(value)){pub.addMessage(messages,options.messages.message,value);}
if(!options.ipv6){pub.addMessage(messages,options.messages.ipv6NotAllowed,value);}}else{if(!(new RegExp(options.ipv4Pattern)).test(value)){pub.addMessage(messages,options.messages.message,value);}
if(!options.ipv4){pub.addMessage(messages,options.messages.ipv4NotAllowed,value);}}}};function getUploadedFiles(attribute,messages,options){if(typeof File==="undefined"){return[];}
var files=$(attribute.input,attribute.$form).get(0).files;if(!files){messages.push(options.message);return[];}
if(files.length===0){if(!options.skipOnEmpty){messages.push(options.uploadRequired);}
return[];}
if(options.maxFiles&&options.maxFiles<files.length){messages.push(options.tooMany);return[];}
return files;}
function validateFile(file,messages,options){if(options.extensions&&options.extensions.length>0){var index=file.name.lastIndexOf('.');var ext=!~index?'':file.name.substr(index+1,file.name.length).toLowerCase();if(!~options.extensions.indexOf(ext)){messages.push(options.wrongExtension.replace(/\{file\}/g,file.name));}}
if(options.mimeTypes&&options.mimeTypes.length>0){if(!validateMimeType(options.mimeTypes,file.type)){messages.push(options.wrongMimeType.replace(/\{file\}/g,file.name));}}
if(options.maxSize&&options.maxSize<file.size){messages.push(options.tooBig.replace(/\{file\}/g,file.name));}
if(options.minSize&&options.minSize>file.size){messages.push(options.tooSmall.replace(/\{file\}/g,file.name));}}
function validateMimeType(mimeTypes,fileType){for(var i=0,len=mimeTypes.length;i<len;i++){if(new RegExp(mimeTypes[i]).test(fileType)){return true;}}
return false;}
function validateImageSize(file,image,messages,options){if(options.minWidth&&image.width<options.minWidth){messages.push(options.underWidth.replace(/\{file\}/g,file.name));}
if(options.maxWidth&&image.width>options.maxWidth){messages.push(options.overWidth.replace(/\{file\}/g,file.name));}
if(options.minHeight&&image.height<options.minHeight){messages.push(options.underHeight.replace(/\{file\}/g,file.name));}
if(options.maxHeight&&image.height>options.maxHeight){messages.push(options.overHeight.replace(/\{file\}/g,file.name));}}
return pub;})(jQuery);;;
/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2016 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.4
*/!function($){function Inputmask(alias,options){return this instanceof Inputmask?($.isPlainObject(alias)?options=alias:(options=options||{},options.alias=alias),this.el=void 0,this.opts=$.extend(!0,{},this.defaults,options),this.maskset=void 0,this.noMasksCache=options&&void 0!==options.definitions,this.userOptions=options||{},this.events={},this.dataAttribute="data-inputmask",this.isRTL=this.opts.numericInput,void resolveAlias(this.opts.alias,options,this.opts)):new Inputmask(alias,options);}
function resolveAlias(aliasStr,options,opts){var aliasDefinition=opts.aliases[aliasStr];return aliasDefinition?(aliasDefinition.alias&&resolveAlias(aliasDefinition.alias,void 0,opts),$.extend(!0,opts,aliasDefinition),$.extend(!0,opts,options),!0):(null===opts.mask&&(opts.mask=aliasStr),!1);}
function generateMaskSet(opts,nocache){function generateMask(mask,metadata,opts){if(null!==mask&&""!==mask){if(1===mask.length&&opts.greedy===!1&&0!==opts.repeat&&(opts.placeholder=""),opts.repeat>0||"*"===opts.repeat||"+"===opts.repeat){var repeatStart="*"===opts.repeat?0:"+"===opts.repeat?1:opts.repeat;mask=opts.groupmarker.start+mask+opts.groupmarker.end+opts.quantifiermarker.start+repeatStart+","+opts.repeat+opts.quantifiermarker.end;}
var masksetDefinition;return void 0===Inputmask.prototype.masksCache[mask]||nocache===!0?(masksetDefinition={mask:mask,maskToken:Inputmask.prototype.analyseMask(mask,opts),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:metadata,maskLength:void 0},nocache!==!0&&(Inputmask.prototype.masksCache[opts.numericInput?mask.split("").reverse().join(""):mask]=masksetDefinition,masksetDefinition=$.extend(!0,{},Inputmask.prototype.masksCache[opts.numericInput?mask.split("").reverse().join(""):mask]))):masksetDefinition=$.extend(!0,{},Inputmask.prototype.masksCache[opts.numericInput?mask.split("").reverse().join(""):mask]),masksetDefinition;}}
var ms;if($.isFunction(opts.mask)&&(opts.mask=opts.mask(opts)),$.isArray(opts.mask)){if(opts.mask.length>1){opts.keepStatic=null===opts.keepStatic||opts.keepStatic;var altMask=opts.groupmarker.start;return $.each(opts.numericInput?opts.mask.reverse():opts.mask,function(ndx,msk){altMask.length>1&&(altMask+=opts.groupmarker.end+opts.alternatormarker+opts.groupmarker.start),altMask+=void 0===msk.mask||$.isFunction(msk.mask)?msk:msk.mask;}),altMask+=opts.groupmarker.end,generateMask(altMask,opts.mask,opts);}
opts.mask=opts.mask.pop();}
return opts.mask&&(ms=void 0===opts.mask.mask||$.isFunction(opts.mask.mask)?generateMask(opts.mask,opts.mask,opts):generateMask(opts.mask.mask,opts.mask,opts)),ms;}
function maskScope(actionObj,maskset,opts){function getMaskTemplate(baseOnInput,minimalPos,includeMode){minimalPos=minimalPos||0;var ndxIntlzr,test,testPos,maskTemplate=[],pos=0,lvp=getLastValidPosition();maxLength=void 0!==el?el.maxLength:void 0,maxLength===-1&&(maxLength=void 0);do baseOnInput===!0&&getMaskSet().validPositions[pos]?(testPos=getMaskSet().validPositions[pos],test=testPos.match,ndxIntlzr=testPos.locator.slice(),maskTemplate.push(includeMode===!0?testPos.input:includeMode===!1?test.nativeDef:getPlaceholder(pos,test))):(testPos=getTestTemplate(pos,ndxIntlzr,pos-1),test=testPos.match,ndxIntlzr=testPos.locator.slice(),(opts.jitMasking===!1||pos<lvp||"number"==typeof opts.jitMasking&&isFinite(opts.jitMasking)&&opts.jitMasking>pos)&&maskTemplate.push(includeMode===!1?test.nativeDef:getPlaceholder(pos,test))),pos++;while((void 0===maxLength||pos<maxLength)&&(null!==test.fn||""!==test.def)||minimalPos>pos);return""===maskTemplate[maskTemplate.length-1]&&maskTemplate.pop(),getMaskSet().maskLength=pos+1,maskTemplate;}
function getMaskSet(){return maskset;}
function resetMaskSet(soft){var maskset=getMaskSet();maskset.buffer=void 0,soft!==!0&&(maskset._buffer=void 0,maskset.validPositions={},maskset.p=0);}
function getLastValidPosition(closestTo,strict,validPositions){var before=-1,after=-1,valids=validPositions||getMaskSet().validPositions;void 0===closestTo&&(closestTo=-1);for(var posNdx in valids){var psNdx=parseInt(posNdx);valids[psNdx]&&(strict||null!==valids[psNdx].match.fn)&&(psNdx<=closestTo&&(before=psNdx),psNdx>=closestTo&&(after=psNdx));}
return before!==-1&&closestTo-before>1||after<closestTo?before:after;}
function stripValidPositions(start,end,nocheck,strict){function IsEnclosedStatic(pos){var posMatch=getMaskSet().validPositions[pos];if(void 0!==posMatch&&null===posMatch.match.fn){var prevMatch=getMaskSet().validPositions[pos-1],nextMatch=getMaskSet().validPositions[pos+1];return void 0!==prevMatch&&void 0!==nextMatch;}
return!1;}
var i,startPos=start,positionsClone=$.extend(!0,{},getMaskSet().validPositions),needsValidation=!1;for(getMaskSet().p=start,i=end-1;i>=startPos;i--)void 0!==getMaskSet().validPositions[i]&&(nocheck!==!0&&(!getMaskSet().validPositions[i].match.optionality&&IsEnclosedStatic(i)||opts.canClearPosition(getMaskSet(),i,getLastValidPosition(),strict,opts)===!1)||delete getMaskSet().validPositions[i]);for(resetMaskSet(!0),i=startPos+1;i<=getLastValidPosition();){for(;void 0!==getMaskSet().validPositions[startPos];)startPos++;if(i<startPos&&(i=startPos+1),void 0===getMaskSet().validPositions[i]&&isMask(i))i++;else{var t=getTestTemplate(i);needsValidation===!1&&positionsClone[startPos]&&positionsClone[startPos].match.def===t.match.def?(getMaskSet().validPositions[startPos]=$.extend(!0,{},positionsClone[startPos]),getMaskSet().validPositions[startPos].input=t.input,delete getMaskSet().validPositions[i],i++):positionCanMatchDefinition(startPos,t.match.def)?isValid(startPos,t.input||getPlaceholder(i),!0)!==!1&&(delete getMaskSet().validPositions[i],i++,needsValidation=!0):isMask(i)||(i++,startPos--),startPos++;}}
resetMaskSet(!0);}
function determineTestTemplate(tests,guessNextBest){for(var testPos,testPositions=tests,lvp=getLastValidPosition(),lvTest=getMaskSet().validPositions[lvp]||getTests(0)[0],lvTestAltArr=void 0!==lvTest.alternation?lvTest.locator[lvTest.alternation].toString().split(","):[],ndx=0;ndx<testPositions.length&&(testPos=testPositions[ndx],!(testPos.match&&(opts.greedy&&testPos.match.optionalQuantifier!==!0||(testPos.match.optionality===!1||testPos.match.newBlockMarker===!1)&&testPos.match.optionalQuantifier!==!0)&&(void 0===lvTest.alternation||lvTest.alternation!==testPos.alternation||void 0!==testPos.locator[lvTest.alternation]&&checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","),lvTestAltArr)))||guessNextBest===!0&&(null!==testPos.match.fn||/[0-9a-bA-Z]/.test(testPos.match.def)));ndx++);return testPos;}
function getTestTemplate(pos,ndxIntlzr,tstPs){return getMaskSet().validPositions[pos]||determineTestTemplate(getTests(pos,ndxIntlzr?ndxIntlzr.slice():ndxIntlzr,tstPs));}
function getTest(pos){return getMaskSet().validPositions[pos]?getMaskSet().validPositions[pos]:getTests(pos)[0];}
function positionCanMatchDefinition(pos,def){for(var valid=!1,tests=getTests(pos),tndx=0;tndx<tests.length;tndx++)if(tests[tndx].match&&tests[tndx].match.def===def){valid=!0;break;}
return valid;}
function getTests(pos,ndxIntlzr,tstPs){function resolveTestFromToken(maskToken,ndxInitializer,loopNdx,quantifierRecurse){function handleMatch(match,loopNdx,quantifierRecurse){function isFirstMatch(latestMatch,tokenGroup){var firstMatch=0===$.inArray(latestMatch,tokenGroup.matches);return firstMatch||$.each(tokenGroup.matches,function(ndx,match){if(match.isQuantifier===!0&&(firstMatch=isFirstMatch(latestMatch,tokenGroup.matches[ndx-1])))return!1;}),firstMatch;}
function resolveNdxInitializer(pos,alternateNdx,targetAlternation){var bestMatch,indexPos;return(getMaskSet().tests[pos]||getMaskSet().validPositions[pos])&&$.each(getMaskSet().tests[pos]||[getMaskSet().validPositions[pos]],function(ndx,lmnt){var alternation=void 0!==targetAlternation?targetAlternation:lmnt.alternation,ndxPos=void 0!==lmnt.locator[alternation]?lmnt.locator[alternation].toString().indexOf(alternateNdx):-1;(void 0===indexPos||ndxPos<indexPos)&&ndxPos!==-1&&(bestMatch=lmnt,indexPos=ndxPos);}),bestMatch?bestMatch.locator.slice((void 0!==targetAlternation?targetAlternation:bestMatch.alternation)+1):void 0!==targetAlternation?resolveNdxInitializer(pos,alternateNdx):void 0;}
function staticCanMatchDefinition(source,target){return null===source.match.fn&&null!==target.match.fn&&target.match.fn.test(source.match.def,getMaskSet(),pos,!1,opts,!1);}
if(testPos>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+getMaskSet().mask;if(testPos===pos&&void 0===match.matches)return matches.push({match:match,locator:loopNdx.reverse(),cd:cacheDependency}),!0;if(void 0!==match.matches){if(match.isGroup&&quantifierRecurse!==match){if(match=handleMatch(maskToken.matches[$.inArray(match,maskToken.matches)+1],loopNdx))return!0;}else if(match.isOptional){var optionalToken=match;if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse)){if(latestMatch=matches[matches.length-1].match,!isFirstMatch(latestMatch,optionalToken))return!0;insertStop=!0,testPos=pos;}}else if(match.isAlternator){var maltMatches,alternateToken=match,malternateMatches=[],currentMatches=matches.slice(),loopNdxCnt=loopNdx.length,altIndex=ndxInitializer.length>0?ndxInitializer.shift():-1;if(altIndex===-1||"string"==typeof altIndex){var amndx,currentPos=testPos,ndxInitializerClone=ndxInitializer.slice(),altIndexArr=[];if("string"==typeof altIndex)altIndexArr=altIndex.split(",");else for(amndx=0;amndx<alternateToken.matches.length;amndx++)altIndexArr.push(amndx);for(var ndx=0;ndx<altIndexArr.length;ndx++){if(amndx=parseInt(altIndexArr[ndx]),matches=[],ndxInitializer=resolveNdxInitializer(testPos,amndx,loopNdxCnt)||ndxInitializerClone.slice(),match=handleMatch(alternateToken.matches[amndx]||maskToken.matches[amndx],[amndx].concat(loopNdx),quantifierRecurse)||match,match!==!0&&void 0!==match&&altIndexArr[altIndexArr.length-1]<alternateToken.matches.length){var ntndx=$.inArray(match,maskToken.matches)+1;maskToken.matches.length>ntndx&&(match=handleMatch(maskToken.matches[ntndx],[ntndx].concat(loopNdx.slice(1,loopNdx.length)),quantifierRecurse),match&&(altIndexArr.push(ntndx.toString()),$.each(matches,function(ndx,lmnt){lmnt.alternation=loopNdx.length-1;})));}
maltMatches=matches.slice(),testPos=currentPos,matches=[];for(var ndx1=0;ndx1<maltMatches.length;ndx1++){var altMatch=maltMatches[ndx1],hasMatch=!1;altMatch.alternation=altMatch.alternation||loopNdxCnt;for(var ndx2=0;ndx2<malternateMatches.length;ndx2++){var altMatch2=malternateMatches[ndx2];if(("string"!=typeof altIndex||$.inArray(altMatch.locator[altMatch.alternation].toString(),altIndexArr)!==-1)&&(altMatch.match.def===altMatch2.match.def||staticCanMatchDefinition(altMatch,altMatch2))){hasMatch=altMatch.match.nativeDef===altMatch2.match.nativeDef,altMatch.alternation==altMatch2.alternation&&altMatch2.locator[altMatch2.alternation].toString().indexOf(altMatch.locator[altMatch.alternation])===-1&&(altMatch2.locator[altMatch2.alternation]=altMatch2.locator[altMatch2.alternation]+","+altMatch.locator[altMatch.alternation],altMatch2.alternation=altMatch.alternation,null==altMatch.match.fn&&(altMatch2.na=altMatch2.na||altMatch.locator[altMatch.alternation].toString(),altMatch2.na.indexOf(altMatch.locator[altMatch.alternation])===-1&&(altMatch2.na=altMatch2.na+","+altMatch.locator[altMatch.alternation])));break;}}
hasMatch||malternateMatches.push(altMatch);}}"string"==typeof altIndex&&(malternateMatches=$.map(malternateMatches,function(lmnt,ndx){if(isFinite(ndx)){var mamatch,alternation=lmnt.alternation,altLocArr=lmnt.locator[alternation].toString().split(",");lmnt.locator[alternation]=void 0,lmnt.alternation=void 0;for(var alndx=0;alndx<altLocArr.length;alndx++)mamatch=$.inArray(altLocArr[alndx],altIndexArr)!==-1,mamatch&&(void 0!==lmnt.locator[alternation]?(lmnt.locator[alternation]+=",",lmnt.locator[alternation]+=altLocArr[alndx]):lmnt.locator[alternation]=parseInt(altLocArr[alndx]),lmnt.alternation=alternation);if(void 0!==lmnt.locator[alternation])return lmnt;}})),matches=currentMatches.concat(malternateMatches),testPos=pos,insertStop=matches.length>0,ndxInitializer=ndxInitializerClone.slice();}else match=handleMatch(alternateToken.matches[altIndex]||maskToken.matches[altIndex],[altIndex].concat(loopNdx),quantifierRecurse);if(match)return!0;}else if(match.isQuantifier&&quantifierRecurse!==maskToken.matches[$.inArray(match,maskToken.matches)-1])for(var qt=match,qndx=ndxInitializer.length>0?ndxInitializer.shift():0;qndx<(isNaN(qt.quantifier.max)?qndx+1:qt.quantifier.max)&&testPos<=pos;qndx++){var tokenGroup=maskToken.matches[$.inArray(qt,maskToken.matches)-1];if(match=handleMatch(tokenGroup,[qndx].concat(loopNdx),tokenGroup)){if(latestMatch=matches[matches.length-1].match,latestMatch.optionalQuantifier=qndx>qt.quantifier.min-1,isFirstMatch(latestMatch,tokenGroup)){if(qndx>qt.quantifier.min-1){insertStop=!0,testPos=pos;break;}
return!0;}
return!0;}}else if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse))return!0;}else testPos++;}
for(var tndx=ndxInitializer.length>0?ndxInitializer.shift():0;tndx<maskToken.matches.length;tndx++)if(maskToken.matches[tndx].isQuantifier!==!0){var match=handleMatch(maskToken.matches[tndx],[tndx].concat(loopNdx),quantifierRecurse);if(match&&testPos===pos)return match;if(testPos>pos)break;}}
function mergeLocators(tests){var locator=[];return $.isArray(tests)||(tests=[tests]),tests.length>0&&(void 0===tests[0].alternation?(locator=determineTestTemplate(tests.slice()).locator.slice(),0===locator.length&&(locator=tests[0].locator.slice())):$.each(tests,function(ndx,tst){if(""!==tst.def)if(0===locator.length)locator=tst.locator.slice();else for(var i=0;i<locator.length;i++)tst.locator[i]&&locator[i].toString().indexOf(tst.locator[i])===-1&&(locator[i]+=","+tst.locator[i]);})),locator;}
function filterTests(tests){return opts.keepStatic&&pos>0&&tests.length>1+(""===tests[tests.length-1].match.def?1:0)&&tests[0].match.optionality!==!0&&tests[0].match.optionalQuantifier!==!0&&null===tests[0].match.fn&&!/[0-9a-bA-Z]/.test(tests[0].match.def)?[determineTestTemplate(tests)]:tests;}
var latestMatch,maskTokens=getMaskSet().maskToken,testPos=ndxIntlzr?tstPs:0,ndxInitializer=ndxIntlzr?ndxIntlzr.slice():[0],matches=[],insertStop=!1,cacheDependency=ndxIntlzr?ndxIntlzr.join(""):"";if(pos>-1){if(void 0===ndxIntlzr){for(var test,previousPos=pos-1;void 0===(test=getMaskSet().validPositions[previousPos]||getMaskSet().tests[previousPos])&&previousPos>-1;)previousPos--;void 0!==test&&previousPos>-1&&(ndxInitializer=mergeLocators(test),cacheDependency=ndxInitializer.join(""),testPos=previousPos);}
if(getMaskSet().tests[pos]&&getMaskSet().tests[pos][0].cd===cacheDependency)return filterTests(getMaskSet().tests[pos]);for(var mtndx=ndxInitializer.shift();mtndx<maskTokens.length;mtndx++){var match=resolveTestFromToken(maskTokens[mtndx],ndxInitializer,[mtndx]);if(match&&testPos===pos||testPos>pos)break;}}
return(0===matches.length||insertStop)&&matches.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:"",placeholder:""},locator:[],cd:cacheDependency}),void 0!==ndxIntlzr&&getMaskSet().tests[pos]?filterTests($.extend(!0,[],matches)):(getMaskSet().tests[pos]=$.extend(!0,[],matches),filterTests(getMaskSet().tests[pos]));}
function getBufferTemplate(){return void 0===getMaskSet()._buffer&&(getMaskSet()._buffer=getMaskTemplate(!1,1),void 0===getMaskSet().buffer&&getMaskSet()._buffer.slice()),getMaskSet()._buffer;}
function getBuffer(noCache){return void 0!==getMaskSet().buffer&&noCache!==!0||(getMaskSet().buffer=getMaskTemplate(!0,getLastValidPosition(),!0)),getMaskSet().buffer;}
function refreshFromBuffer(start,end,buffer){var i;if(start===!0)resetMaskSet(),start=0,end=buffer.length;else for(i=start;i<end;i++)delete getMaskSet().validPositions[i];for(i=start;i<end;i++)resetMaskSet(!0),buffer[i]!==opts.skipOptionalPartCharacter&&isValid(i,buffer[i],!0,!0);}
function casing(elem,test,pos){switch(opts.casing||test.casing){case"upper":elem=elem.toUpperCase();break;case"lower":elem=elem.toLowerCase();break;case"title":var posBefore=getMaskSet().validPositions[pos-1];elem=0===pos||posBefore&&posBefore.input===String.fromCharCode(Inputmask.keyCode.SPACE)?elem.toUpperCase():elem.toLowerCase();}
return elem;}
function checkAlternationMatch(altArr1,altArr2){for(var altArrC=opts.greedy?altArr2:altArr2.slice(0,1),isMatch=!1,alndx=0;alndx<altArr1.length;alndx++)if($.inArray(altArr1[alndx],altArrC)!==-1){isMatch=!0;break;}
return isMatch;}
function isValid(pos,c,strict,fromSetValid,fromAlternate){function isSelection(posObj){var selection=isRTL?posObj.begin-posObj.end>1||posObj.begin-posObj.end===1&&opts.insertMode:posObj.end-posObj.begin>1||posObj.end-posObj.begin===1&&opts.insertMode;return selection&&0===posObj.begin&&posObj.end===getMaskSet().maskLength?"full":selection;}
function _isValid(position,c,strict){var rslt=!1;return $.each(getTests(position),function(ndx,tst){for(var test=tst.match,loopend=c?1:0,chrs="",i=test.cardinality;i>loopend;i--)chrs+=getBufferElement(position-(i-1));if(c&&(chrs+=c),getBuffer(!0),rslt=null!=test.fn?test.fn.test(chrs,getMaskSet(),position,strict,opts,isSelection(pos)):(c===test.def||c===opts.skipOptionalPartCharacter)&&""!==test.def&&{c:test.placeholder||test.def,pos:position},rslt!==!1){var elem=void 0!==rslt.c?rslt.c:c;elem=elem===opts.skipOptionalPartCharacter&&null===test.fn?test.placeholder||test.def:elem;var validatedPos=position,possibleModifiedBuffer=getBuffer();if(void 0!==rslt.remove&&($.isArray(rslt.remove)||(rslt.remove=[rslt.remove]),$.each(rslt.remove.sort(function(a,b){return b-a;}),function(ndx,lmnt){stripValidPositions(lmnt,lmnt+1,!0);})),void 0!==rslt.insert&&($.isArray(rslt.insert)||(rslt.insert=[rslt.insert]),$.each(rslt.insert.sort(function(a,b){return a-b;}),function(ndx,lmnt){isValid(lmnt.pos,lmnt.c,!0,fromSetValid);})),rslt.refreshFromBuffer){var refresh=rslt.refreshFromBuffer;if(strict=!0,refreshFromBuffer(refresh===!0?refresh:refresh.start,refresh.end,possibleModifiedBuffer),void 0===rslt.pos&&void 0===rslt.c)return rslt.pos=getLastValidPosition(),!1;if(validatedPos=void 0!==rslt.pos?rslt.pos:position,validatedPos!==position)return rslt=$.extend(rslt,isValid(validatedPos,elem,!0,fromSetValid)),!1;}else if(rslt!==!0&&void 0!==rslt.pos&&rslt.pos!==position&&(validatedPos=rslt.pos,refreshFromBuffer(position,validatedPos,getBuffer().slice()),validatedPos!==position))return rslt=$.extend(rslt,isValid(validatedPos,elem,!0)),!1;return(rslt===!0||void 0!==rslt.pos||void 0!==rslt.c)&&(ndx>0&&resetMaskSet(!0),setValidPosition(validatedPos,$.extend({},tst,{input:casing(elem,test,validatedPos)}),fromSetValid,isSelection(pos))||(rslt=!1),!1);}}),rslt;}
function alternate(pos,c,strict){var lastAlt,alternation,altPos,prevAltPos,i,validPos,altNdxs,decisionPos,validPsClone=$.extend(!0,{},getMaskSet().validPositions),isValidRslt=!1,lAltPos=getLastValidPosition();for(prevAltPos=getMaskSet().validPositions[lAltPos];lAltPos>=0;lAltPos--)if(altPos=getMaskSet().validPositions[lAltPos],altPos&&void 0!==altPos.alternation){if(lastAlt=lAltPos,alternation=getMaskSet().validPositions[lastAlt].alternation,prevAltPos.locator[altPos.alternation]!==altPos.locator[altPos.alternation])break;prevAltPos=altPos;}
if(void 0!==alternation){decisionPos=parseInt(lastAlt);var decisionTaker=void 0!==prevAltPos.locator[prevAltPos.alternation||alternation]?prevAltPos.locator[prevAltPos.alternation||alternation]:altNdxs[0];decisionTaker.length>0&&(decisionTaker=decisionTaker.split(",")[0]);var possibilityPos=getMaskSet().validPositions[decisionPos],prevPos=getMaskSet().validPositions[decisionPos-1];$.each(getTests(decisionPos,prevPos?prevPos.locator:void 0,decisionPos-1),function(ndx,test){altNdxs=test.locator[alternation]?test.locator[alternation].toString().split(","):[];for(var mndx=0;mndx<altNdxs.length;mndx++){var validInputs=[],staticInputsBeforePos=0,staticInputsBeforePosAlternate=0,verifyValidInput=!1;if(decisionTaker<altNdxs[mndx]&&(void 0===test.na||$.inArray(altNdxs[mndx],test.na.split(","))===-1)){getMaskSet().validPositions[decisionPos]=$.extend(!0,{},test);var possibilities=getMaskSet().validPositions[decisionPos].locator;for(getMaskSet().validPositions[decisionPos].locator[alternation]=parseInt(altNdxs[mndx]),null==test.match.fn?(possibilityPos.input!==test.match.def&&(verifyValidInput=!0,possibilityPos.generatedInput!==!0&&validInputs.push(possibilityPos.input)),staticInputsBeforePosAlternate++,getMaskSet().validPositions[decisionPos].generatedInput=!/[0-9a-bA-Z]/.test(test.match.def),getMaskSet().validPositions[decisionPos].input=test.match.def):getMaskSet().validPositions[decisionPos].input=possibilityPos.input,i=decisionPos+1;i<getLastValidPosition(void 0,!0)+1;i++)validPos=getMaskSet().validPositions[i],validPos&&validPos.generatedInput!==!0&&/[0-9a-bA-Z]/.test(validPos.input)?validInputs.push(validPos.input):i<pos&&staticInputsBeforePos++,delete getMaskSet().validPositions[i];for(verifyValidInput&&validInputs[0]===test.match.def&&validInputs.shift(),resetMaskSet(!0),isValidRslt=!0;validInputs.length>0;){var input=validInputs.shift();if(input!==opts.skipOptionalPartCharacter&&!(isValidRslt=isValid(getLastValidPosition(void 0,!0)+1,input,!1,fromSetValid,!0)))break;}
if(isValidRslt){getMaskSet().validPositions[decisionPos].locator=possibilities;var targetLvp=getLastValidPosition(pos)+1;for(i=decisionPos+1;i<getLastValidPosition()+1;i++)validPos=getMaskSet().validPositions[i],(void 0===validPos||null==validPos.match.fn)&&i<pos+(staticInputsBeforePosAlternate-staticInputsBeforePos)&&staticInputsBeforePosAlternate++;pos+=staticInputsBeforePosAlternate-staticInputsBeforePos,isValidRslt=isValid(pos>targetLvp?targetLvp:pos,c,strict,fromSetValid,!0);}
if(isValidRslt)return!1;resetMaskSet(),getMaskSet().validPositions=$.extend(!0,{},validPsClone);}}});}
return isValidRslt;}
function trackbackAlternations(originalPos,newPos){var vp=getMaskSet().validPositions[newPos];if(vp)for(var targetLocator=vp.locator,tll=targetLocator.length,ps=originalPos;ps<newPos;ps++)if(void 0===getMaskSet().validPositions[ps]&&!isMask(ps,!0)){var tests=getTests(ps),bestMatch=tests[0],equality=-1;$.each(tests,function(ndx,tst){for(var i=0;i<tll&&(void 0!==tst.locator[i]&&checkAlternationMatch(tst.locator[i].toString().split(","),targetLocator[i].toString().split(",")));i++)equality<i&&(equality=i,bestMatch=tst);}),setValidPosition(ps,$.extend({},bestMatch,{input:bestMatch.match.placeholder||bestMatch.match.def}),!0);}}
function setValidPosition(pos,validTest,fromSetValid,isSelection){if(isSelection||opts.insertMode&&void 0!==getMaskSet().validPositions[pos]&&void 0===fromSetValid){var i,positionsClone=$.extend(!0,{},getMaskSet().validPositions),lvp=getLastValidPosition(void 0,!0);for(i=pos;i<=lvp;i++)delete getMaskSet().validPositions[i];getMaskSet().validPositions[pos]=$.extend(!0,{},validTest);var j,valid=!0,vps=getMaskSet().validPositions,needsValidation=!1,initialLength=getMaskSet().maskLength;for(i=j=pos;i<=lvp;i++){var t=positionsClone[i];if(void 0!==t)for(var posMatch=j;posMatch<getMaskSet().maskLength&&(null===t.match.fn&&vps[i]&&(vps[i].match.optionalQuantifier===!0||vps[i].match.optionality===!0)||null!=t.match.fn);){if(posMatch++,needsValidation===!1&&positionsClone[posMatch]&&positionsClone[posMatch].match.def===t.match.def)getMaskSet().validPositions[posMatch]=$.extend(!0,{},positionsClone[posMatch]),getMaskSet().validPositions[posMatch].input=t.input,fillMissingNonMask(posMatch),j=posMatch,valid=!0;else if(positionCanMatchDefinition(posMatch,t.match.def)){var result=isValid(posMatch,t.input,!0,!0);valid=result!==!1,j=result.caret||result.insert?getLastValidPosition():posMatch,needsValidation=!0;}else valid=t.generatedInput===!0;if(getMaskSet().maskLength<initialLength&&(getMaskSet().maskLength=initialLength),valid)break;}
if(!valid)break;}
if(!valid)return getMaskSet().validPositions=$.extend(!0,{},positionsClone),resetMaskSet(!0),!1;}else getMaskSet().validPositions[pos]=$.extend(!0,{},validTest);return resetMaskSet(!0),!0;}
function fillMissingNonMask(maskPos){for(var pndx=maskPos-1;pndx>-1&&!getMaskSet().validPositions[pndx];pndx--);var testTemplate,testsFromPos;for(pndx++;pndx<maskPos;pndx++)void 0===getMaskSet().validPositions[pndx]&&(opts.jitMasking===!1||opts.jitMasking>pndx)&&(testsFromPos=getTests(pndx,getTestTemplate(pndx-1).locator,pndx-1).slice(),""===testsFromPos[testsFromPos.length-1].match.def&&testsFromPos.pop(),testTemplate=determineTestTemplate(testsFromPos),testTemplate&&(testTemplate.match.def===opts.radixPointDefinitionSymbol||!isMask(pndx,!0)||$.inArray(opts.radixPoint,getBuffer())<pndx&&testTemplate.match.fn&&testTemplate.match.fn.test(getPlaceholder(pndx),getMaskSet(),pndx,!1,opts))&&(result=_isValid(pndx,testTemplate.match.placeholder||(null==testTemplate.match.fn?testTemplate.match.def:""!==getPlaceholder(pndx)?getPlaceholder(pndx):getBuffer()[pndx]),!0),result!==!1&&(getMaskSet().validPositions[result.pos||pndx].generatedInput=!0)));}
strict=strict===!0;var maskPos=pos;void 0!==pos.begin&&(maskPos=isRTL&&!isSelection(pos)?pos.end:pos.begin);var result=!1,positionsClone=$.extend(!0,{},getMaskSet().validPositions);if(fillMissingNonMask(maskPos),isSelection(pos)&&(handleRemove(void 0,Inputmask.keyCode.DELETE,pos),maskPos=getMaskSet().p),maskPos<getMaskSet().maskLength&&(result=_isValid(maskPos,c,strict),(!strict||fromSetValid===!0)&&result===!1)){var currentPosValid=getMaskSet().validPositions[maskPos];if(!currentPosValid||null!==currentPosValid.match.fn||currentPosValid.match.def!==c&&c!==opts.skipOptionalPartCharacter){if((opts.insertMode||void 0===getMaskSet().validPositions[seekNext(maskPos)])&&!isMask(maskPos,!0)){var testsFromPos=getTests(maskPos).slice();""===testsFromPos[testsFromPos.length-1].match.def&&testsFromPos.pop();var staticChar=determineTestTemplate(testsFromPos,!0);staticChar&&null===staticChar.match.fn&&(staticChar=staticChar.match.placeholder||staticChar.match.def,_isValid(maskPos,staticChar,strict),getMaskSet().validPositions[maskPos].generatedInput=!0);for(var nPos=maskPos+1,snPos=seekNext(maskPos);nPos<=snPos;nPos++)if(result=_isValid(nPos,c,strict),result!==!1){trackbackAlternations(maskPos,void 0!==result.pos?result.pos:nPos),maskPos=nPos;break;}}}else result={caret:seekNext(maskPos)};}
return result===!1&&opts.keepStatic&&!strict&&fromAlternate!==!0&&(result=alternate(maskPos,c,strict)),result===!0&&(result={pos:maskPos}),$.isFunction(opts.postValidation)&&result!==!1&&!strict&&fromSetValid!==!0&&(result=!!opts.postValidation(getBuffer(!0),result,opts)&&result),void 0===result.pos&&(result.pos=maskPos),result===!1&&(resetMaskSet(!0),getMaskSet().validPositions=$.extend(!0,{},positionsClone)),result;}
function isMask(pos,strict){var test;if(strict?(test=getTestTemplate(pos).match,""===test.def&&(test=getTest(pos).match)):test=getTest(pos).match,null!=test.fn)return test.fn;if(strict!==!0&&pos>-1){var tests=getTests(pos);return tests.length>1+(""===tests[tests.length-1].match.def?1:0);}
return!1;}
function seekNext(pos,newBlock){var maskL=getMaskSet().maskLength;if(pos>=maskL)return maskL;for(var position=pos;++position<maskL&&(newBlock===!0&&(getTest(position).match.newBlockMarker!==!0||!isMask(position))||newBlock!==!0&&!isMask(position)););return position;}
function seekPrevious(pos,newBlock){var tests,position=pos;if(position<=0)return 0;for(;--position>0&&(newBlock===!0&&getTest(position).match.newBlockMarker!==!0||newBlock!==!0&&!isMask(position)&&(tests=getTests(position),tests.length<2||2===tests.length&&""===tests[1].match.def)););return position;}
function getBufferElement(position){return void 0===getMaskSet().validPositions[position]?getPlaceholder(position):getMaskSet().validPositions[position].input;}
function writeBuffer(input,buffer,caretPos,event,triggerInputEvent){if(event&&$.isFunction(opts.onBeforeWrite)){var result=opts.onBeforeWrite(event,buffer,caretPos,opts);if(result){if(result.refreshFromBuffer){var refresh=result.refreshFromBuffer;refreshFromBuffer(refresh===!0?refresh:refresh.start,refresh.end,result.buffer||buffer),buffer=getBuffer(!0);}
void 0!==caretPos&&(caretPos=void 0!==result.caret?result.caret:caretPos);}}
input.inputmask._valueSet(buffer.join("")),void 0===caretPos||void 0!==event&&"blur"===event.type?renderColorMask(input,buffer,caretPos):caret(input,caretPos),triggerInputEvent===!0&&(skipInputEvent=!0,$(input).trigger("input"));}
function getPlaceholder(pos,test){if(test=test||getTest(pos).match,void 0!==test.placeholder)return test.placeholder;if(null===test.fn){if(pos>-1&&void 0===getMaskSet().validPositions[pos]){var prevTest,tests=getTests(pos),staticAlternations=[];if(tests.length>1+(""===tests[tests.length-1].match.def?1:0))for(var i=0;i<tests.length;i++)if(tests[i].match.optionality!==!0&&tests[i].match.optionalQuantifier!==!0&&(null===tests[i].match.fn||void 0===prevTest||tests[i].match.fn.test(prevTest.match.def,getMaskSet(),pos,!0,opts)!==!1)&&(staticAlternations.push(tests[i]),null===tests[i].match.fn&&(prevTest=tests[i]),staticAlternations.length>1&&/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)))return opts.placeholder.charAt(pos%opts.placeholder.length);}
return test.def;}
return opts.placeholder.charAt(pos%opts.placeholder.length);}
function checkVal(input,writeOut,strict,nptvl,initiatingEvent,stickyCaret){function isTemplateMatch(){var isMatch=!1,charCodeNdx=getBufferTemplate().slice(initialNdx,seekNext(initialNdx)).join("").indexOf(charCodes);if(charCodeNdx!==-1&&!isMask(initialNdx)){isMatch=!0;for(var bufferTemplateArr=getBufferTemplate().slice(initialNdx,initialNdx+charCodeNdx),i=0;i<bufferTemplateArr.length;i++)if(" "!==bufferTemplateArr[i]){isMatch=!1;break;}}
return isMatch;}
var inputValue=nptvl.slice(),charCodes="",initialNdx=0,result=void 0;if(resetMaskSet(),getMaskSet().p=seekNext(-1),!strict)if(opts.autoUnmask!==!0){var staticInput=getBufferTemplate().slice(0,seekNext(-1)).join(""),matches=inputValue.join("").match(new RegExp("^"+Inputmask.escapeRegex(staticInput),"g"));matches&&matches.length>0&&(inputValue.splice(0,matches.length*staticInput.length),initialNdx=seekNext(initialNdx));}else initialNdx=seekNext(initialNdx);if($.each(inputValue,function(ndx,charCode){if(void 0!==charCode){var keypress=new $.Event("keypress");keypress.which=charCode.charCodeAt(0),charCodes+=charCode;var lvp=getLastValidPosition(void 0,!0),lvTest=getMaskSet().validPositions[lvp],nextTest=getTestTemplate(lvp+1,lvTest?lvTest.locator.slice():void 0,lvp);if(!isTemplateMatch()||strict||opts.autoUnmask){var pos=strict?ndx:null==nextTest.match.fn&&nextTest.match.optionality&&lvp+1<getMaskSet().p?lvp+1:getMaskSet().p;result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,strict,pos),initialNdx=pos+1,charCodes="";}else result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,!0,lvp+1);if(!strict&&$.isFunction(opts.onBeforeWrite)&&(result=opts.onBeforeWrite(keypress,getBuffer(),result.forwardPosition,opts),result&&result.refreshFromBuffer)){var refresh=result.refreshFromBuffer;refreshFromBuffer(refresh===!0?refresh:refresh.start,refresh.end,result.buffer),resetMaskSet(!0),result.caret&&(getMaskSet().p=result.caret);}}}),writeOut){var caretPos=void 0,lvp=getLastValidPosition();document.activeElement===input&&(initiatingEvent||result)&&(caretPos=caret(input).begin,initiatingEvent&&result===!1&&(caretPos=seekNext(getLastValidPosition(caretPos))),result&&stickyCaret!==!0&&(caretPos<lvp+1||lvp===-1)&&(caretPos=opts.numericInput&&void 0===result.caret?seekPrevious(result.forwardPosition):result.forwardPosition)),writeBuffer(input,getBuffer(),caretPos,initiatingEvent||new $.Event("checkval"));}}
function unmaskedvalue(input){if(input&&void 0===input.inputmask)return input.value;var umValue=[],vps=getMaskSet().validPositions;for(var pndx in vps)vps[pndx].match&&null!=vps[pndx].match.fn&&umValue.push(vps[pndx].input);var unmaskedValue=0===umValue.length?"":(isRTL?umValue.reverse():umValue).join("");if($.isFunction(opts.onUnMask)){var bufferValue=(isRTL?getBuffer().slice().reverse():getBuffer()).join("");unmaskedValue=opts.onUnMask(bufferValue,unmaskedValue,opts)||unmaskedValue;}
return unmaskedValue;}
function caret(input,begin,end,notranslate){function translatePosition(pos){if(notranslate!==!0&&isRTL&&"number"==typeof pos&&(!opts.greedy||""!==opts.placeholder)){var bffrLght=getBuffer().join("").length;pos=bffrLght-pos;}
return pos;}
var range;if("number"!=typeof begin)return input.setSelectionRange?(begin=input.selectionStart,end=input.selectionEnd):window.getSelection?(range=window.getSelection().getRangeAt(0),range.commonAncestorContainer.parentNode!==input&&range.commonAncestorContainer!==input||(begin=range.startOffset,end=range.endOffset)):document.selection&&document.selection.createRange&&(range=document.selection.createRange(),begin=0-range.duplicate().moveStart("character",-input.inputmask._valueGet().length),end=begin+range.text.length),{begin:translatePosition(begin),end:translatePosition(end)};begin=translatePosition(begin),end=translatePosition(end),end="number"==typeof end?end:begin;var scrollCalc=parseInt(((input.ownerDocument.defaultView||window).getComputedStyle?(input.ownerDocument.defaultView||window).getComputedStyle(input,null):input.currentStyle).fontSize)*end;if(input.scrollLeft=scrollCalc>input.scrollWidth?scrollCalc:0,mobile||opts.insertMode!==!1||begin!==end||end++,input.setSelectionRange)input.selectionStart=begin,input.selectionEnd=end;else if(window.getSelection){if(range=document.createRange(),void 0===input.firstChild||null===input.firstChild){var textNode=document.createTextNode("");input.appendChild(textNode);}
range.setStart(input.firstChild,begin<input.inputmask._valueGet().length?begin:input.inputmask._valueGet().length),range.setEnd(input.firstChild,end<input.inputmask._valueGet().length?end:input.inputmask._valueGet().length),range.collapse(!0);var sel=window.getSelection();sel.removeAllRanges(),sel.addRange(range);}else input.createTextRange&&(range=input.createTextRange(),range.collapse(!0),range.moveEnd("character",end),range.moveStart("character",begin),range.select());renderColorMask(input,void 0,{begin:begin,end:end});}
function determineLastRequiredPosition(returnDefinition){var pos,testPos,buffer=getBuffer(),bl=buffer.length,lvp=getLastValidPosition(),positions={},lvTest=getMaskSet().validPositions[lvp],ndxIntlzr=void 0!==lvTest?lvTest.locator.slice():void 0;for(pos=lvp+1;pos<buffer.length;pos++)testPos=getTestTemplate(pos,ndxIntlzr,pos-1),ndxIntlzr=testPos.locator.slice(),positions[pos]=$.extend(!0,{},testPos);var lvTestAlt=lvTest&&void 0!==lvTest.alternation?lvTest.locator[lvTest.alternation]:void 0;for(pos=bl-1;pos>lvp&&(testPos=positions[pos],(testPos.match.optionality||testPos.match.optionalQuantifier||lvTestAlt&&(lvTestAlt!==positions[pos].locator[lvTest.alternation]&&null!=testPos.match.fn||null===testPos.match.fn&&testPos.locator[lvTest.alternation]&&checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","),lvTestAlt.toString().split(","))&&""!==getTests(pos)[0].def))&&buffer[pos]===getPlaceholder(pos,testPos.match));pos--)bl--;return returnDefinition?{l:bl,def:positions[bl]?positions[bl].match:void 0}:bl;}
function clearOptionalTail(buffer){for(var rl=determineLastRequiredPosition(),lmib=buffer.length-1;lmib>rl&&!isMask(lmib);lmib--);return buffer.splice(rl,lmib+1-rl),buffer;}
function isComplete(buffer){if($.isFunction(opts.isComplete))return opts.isComplete(buffer,opts);if("*"!==opts.repeat){var complete=!1,lrp=determineLastRequiredPosition(!0),aml=seekPrevious(lrp.l);if(void 0===lrp.def||lrp.def.newBlockMarker||lrp.def.optionality||lrp.def.optionalQuantifier){complete=!0;for(var i=0;i<=aml;i++){var test=getTestTemplate(i).match;if(null!==test.fn&&void 0===getMaskSet().validPositions[i]&&test.optionality!==!0&&test.optionalQuantifier!==!0||null===test.fn&&buffer[i]!==getPlaceholder(i,test)){complete=!1;break;}}}
return complete;}}
function handleRemove(input,k,pos,strict){function generalize(){if(opts.keepStatic){for(var validInputs=[],lastAlt=getLastValidPosition(-1,!0),positionsClone=$.extend(!0,{},getMaskSet().validPositions),prevAltPos=getMaskSet().validPositions[lastAlt];lastAlt>=0;lastAlt--){var altPos=getMaskSet().validPositions[lastAlt];if(altPos){if(altPos.generatedInput!==!0&&/[0-9a-bA-Z]/.test(altPos.input)&&validInputs.push(altPos.input),delete getMaskSet().validPositions[lastAlt],void 0!==altPos.alternation&&altPos.locator[altPos.alternation]!==prevAltPos.locator[altPos.alternation])break;prevAltPos=altPos;}}
if(lastAlt>-1)for(getMaskSet().p=seekNext(getLastValidPosition(-1,!0));validInputs.length>0;){var keypress=new $.Event("keypress");keypress.which=validInputs.pop().charCodeAt(0),EventHandlers.keypressEvent.call(input,keypress,!0,!1,!1,getMaskSet().p);}else getMaskSet().validPositions=$.extend(!0,{},positionsClone);}}
if((opts.numericInput||isRTL)&&(k===Inputmask.keyCode.BACKSPACE?k=Inputmask.keyCode.DELETE:k===Inputmask.keyCode.DELETE&&(k=Inputmask.keyCode.BACKSPACE),isRTL)){var pend=pos.end;pos.end=pos.begin,pos.begin=pend;}
k===Inputmask.keyCode.BACKSPACE&&(pos.end-pos.begin<1||opts.insertMode===!1)?(pos.begin=seekPrevious(pos.begin),void 0===getMaskSet().validPositions[pos.begin]||getMaskSet().validPositions[pos.begin].input!==opts.groupSeparator&&getMaskSet().validPositions[pos.begin].input!==opts.radixPoint||pos.begin--):k===Inputmask.keyCode.DELETE&&pos.begin===pos.end&&(pos.end=isMask(pos.end,!0)?pos.end+1:seekNext(pos.end)+1,void 0===getMaskSet().validPositions[pos.begin]||getMaskSet().validPositions[pos.begin].input!==opts.groupSeparator&&getMaskSet().validPositions[pos.begin].input!==opts.radixPoint||pos.end++),stripValidPositions(pos.begin,pos.end,!1,strict),strict!==!0&&generalize();var lvp=getLastValidPosition(pos.begin,!0);lvp<pos.begin?getMaskSet().p=seekNext(lvp):strict!==!0&&(getMaskSet().p=pos.begin);}
function initializeColorMask(input){function findCaretPos(clientx){var caretPos,e=document.createElement("span");for(var style in computedStyle)isNaN(style)&&style.indexOf("font")!==-1&&(e.style[style]=computedStyle[style]);e.style.textTransform=computedStyle.textTransform,e.style.letterSpacing=computedStyle.letterSpacing,e.style.position="absolute",e.style.height="auto",e.style.width="auto",e.style.visibility="hidden",e.style.whiteSpace="nowrap",document.body.appendChild(e);var itl,inputText=input.inputmask._valueGet(),previousWidth=0;for(caretPos=0,itl=inputText.length;caretPos<=itl;caretPos++){if(e.innerHTML+=inputText.charAt(caretPos)||"_",e.offsetWidth>=clientx){var offset1=clientx-previousWidth,offset2=e.offsetWidth-clientx;e.innerHTML=inputText.charAt(caretPos),offset1-=e.offsetWidth / 3,caretPos=offset1<offset2?caretPos-1:caretPos;break;}
previousWidth=e.offsetWidth;}
return document.body.removeChild(e),caretPos;}
function position(){colorMask.style.position="absolute",colorMask.style.top=offset.top+"px",colorMask.style.left=offset.left+"px",colorMask.style.width=parseInt(input.offsetWidth)-parseInt(computedStyle.paddingLeft)-parseInt(computedStyle.paddingRight)-parseInt(computedStyle.borderLeftWidth)-parseInt(computedStyle.borderRightWidth)+"px",colorMask.style.height=parseInt(input.offsetHeight)-parseInt(computedStyle.paddingTop)-parseInt(computedStyle.paddingBottom)-parseInt(computedStyle.borderTopWidth)-parseInt(computedStyle.borderBottomWidth)+"px",colorMask.style.lineHeight=colorMask.style.height,colorMask.style.zIndex=isNaN(computedStyle.zIndex)?-1:computedStyle.zIndex-1,colorMask.style.webkitAppearance="textfield",colorMask.style.mozAppearance="textfield",colorMask.style.Appearance="textfield";}
var offset=$(input).position(),computedStyle=(input.ownerDocument.defaultView||window).getComputedStyle(input,null);input.parentNode;colorMask=document.createElement("div"),document.body.appendChild(colorMask);for(var style in computedStyle)isNaN(style)&&"cssText"!==style&&style.indexOf("webkit")==-1&&(colorMask.style[style]=computedStyle[style]);input.style.backgroundColor="transparent",input.style.color="transparent",input.style.webkitAppearance="caret",input.style.mozAppearance="caret",input.style.Appearance="caret",position(),$(window).on("resize",function(e){offset=$(input).position(),computedStyle=(input.ownerDocument.defaultView||window).getComputedStyle(input,null),position();}),$(input).on("click",function(e){return caret(input,findCaretPos(e.clientX)),EventHandlers.clickEvent.call(this,[e]);}),$(input).on("keydown",function(e){e.shiftKey||opts.insertMode===!1||setTimeout(function(){renderColorMask(input);},0);});}
function renderColorMask(input,buffer,caretPos){function handleStatic(){static||null!==test.fn&&void 0!==testPos.input?static&&null!==test.fn&&void 0!==testPos.input&&(static=!1,maskTemplate+="</span>"):(static=!0,maskTemplate+="<span class='im-static''>");}
if(void 0!==colorMask){buffer=buffer||getBuffer(),void 0===caretPos?caretPos=caret(input):void 0===caretPos.begin&&(caretPos={begin:caretPos,end:caretPos});var maskTemplate="",static=!1;if(""!=buffer){var ndxIntlzr,test,testPos,pos=0,lvp=getLastValidPosition();do pos===caretPos.begin&&document.activeElement===input&&(maskTemplate+="<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"),getMaskSet().validPositions[pos]?(testPos=getMaskSet().validPositions[pos],test=testPos.match,ndxIntlzr=testPos.locator.slice(),handleStatic(),maskTemplate+=testPos.input):(testPos=getTestTemplate(pos,ndxIntlzr,pos-1),test=testPos.match,ndxIntlzr=testPos.locator.slice(),(opts.jitMasking===!1||pos<lvp||"number"==typeof opts.jitMasking&&isFinite(opts.jitMasking)&&opts.jitMasking>pos)&&(handleStatic(),maskTemplate+=getPlaceholder(pos,test))),pos++;while((void 0===maxLength||pos<maxLength)&&(null!==test.fn||""!==test.def)||lvp>pos);}
colorMask.innerHTML=maskTemplate;}}
function mask(elem){function isElementTypeSupported(input,opts){function patchValueProperty(npt){function patchValhook(type){if($.valHooks&&(void 0===$.valHooks[type]||$.valHooks[type].inputmaskpatch!==!0)){var valhookGet=$.valHooks[type]&&$.valHooks[type].get?$.valHooks[type].get:function(elem){return elem.value;},valhookSet=$.valHooks[type]&&$.valHooks[type].set?$.valHooks[type].set:function(elem,value){return elem.value=value,elem;};$.valHooks[type]={get:function(elem){if(elem.inputmask){if(elem.inputmask.opts.autoUnmask)return elem.inputmask.unmaskedvalue();var result=valhookGet(elem);return getLastValidPosition(void 0,void 0,elem.inputmask.maskset.validPositions)!==-1||opts.nullable!==!0?result:"";}
return valhookGet(elem);},set:function(elem,value){var result,$elem=$(elem);return result=valhookSet(elem,value),elem.inputmask&&$elem.trigger("setvalue"),result;},inputmaskpatch:!0};}}
function getter(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():getLastValidPosition()!==-1||opts.nullable!==!0?document.activeElement===this&&opts.clearMaskOnLostFocus?(isRTL?clearOptionalTail(getBuffer().slice()).reverse():clearOptionalTail(getBuffer().slice())).join(""):valueGet.call(this):"":valueGet.call(this);}
function setter(value){valueSet.call(this,value),this.inputmask&&$(this).trigger("setvalue");}
function installNativeValueSetFallback(npt){EventRuler.on(npt,"mouseenter",function(event){var $input=$(this),input=this,value=input.inputmask._valueGet();value!==getBuffer().join("")&&$input.trigger("setvalue");});}
var valueGet,valueSet;if(!npt.inputmask.__valueGet){if(opts.noValuePatching!==!0){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"==typeof"test".__proto__?function(object){return object.__proto__;}:function(object){return object.constructor.prototype;});var valueProperty=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt),"value"):void 0;valueProperty&&valueProperty.get&&valueProperty.set?(valueGet=valueProperty.get,valueSet=valueProperty.set,Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0})):"INPUT"!==npt.tagName&&(valueGet=function(){return this.textContent;},valueSet=function(value){this.textContent=value;},Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0}));}else document.__lookupGetter__&&npt.__lookupGetter__("value")&&(valueGet=npt.__lookupGetter__("value"),valueSet=npt.__lookupSetter__("value"),npt.__defineGetter__("value",getter),npt.__defineSetter__("value",setter));npt.inputmask.__valueGet=valueGet,npt.inputmask.__valueSet=valueSet;}
npt.inputmask._valueGet=function(overruleRTL){return isRTL&&overruleRTL!==!0?valueGet.call(this.el).split("").reverse().join(""):valueGet.call(this.el);},npt.inputmask._valueSet=function(value,overruleRTL){valueSet.call(this.el,null===value||void 0===value?"":overruleRTL!==!0&&isRTL?value.split("").reverse().join(""):value);},void 0===valueGet&&(valueGet=function(){return this.value;},valueSet=function(value){this.value=value;},patchValhook(npt.type),installNativeValueSetFallback(npt));}}
var elementType=input.getAttribute("type"),isSupported="INPUT"===input.tagName&&$.inArray(elementType,opts.supportsInputType)!==-1||input.isContentEditable||"TEXTAREA"===input.tagName;if(!isSupported)if("INPUT"===input.tagName){var el=document.createElement("input");el.setAttribute("type",elementType),isSupported="text"===el.type,el=null;}else isSupported="partial";return isSupported!==!1&&patchValueProperty(input),isSupported;}
var isSupported=isElementTypeSupported(elem,opts);if(isSupported!==!1&&(el=elem,$el=$(el),("rtl"===el.dir||opts.rightAlign)&&(el.style.textAlign="right"),("rtl"===el.dir||opts.numericInput)&&(el.dir="ltr",el.removeAttribute("dir"),el.inputmask.isRTL=!0,isRTL=!0),opts.colorMask===!0&&initializeColorMask(el),android&&(el.hasOwnProperty("inputmode")&&(el.inputmode=opts.inputmode,el.setAttribute("inputmode",opts.inputmode)),"rtfm"===opts.androidHack&&(opts.colorMask!==!0&&initializeColorMask(el),el.type="password")),EventRuler.off(el),isSupported===!0&&(EventRuler.on(el,"submit",EventHandlers.submitEvent),EventRuler.on(el,"reset",EventHandlers.resetEvent),EventRuler.on(el,"mouseenter",EventHandlers.mouseenterEvent),EventRuler.on(el,"blur",EventHandlers.blurEvent),EventRuler.on(el,"focus",EventHandlers.focusEvent),EventRuler.on(el,"mouseleave",EventHandlers.mouseleaveEvent),opts.colorMask!==!0&&EventRuler.on(el,"click",EventHandlers.clickEvent),EventRuler.on(el,"dblclick",EventHandlers.dblclickEvent),EventRuler.on(el,"paste",EventHandlers.pasteEvent),EventRuler.on(el,"dragdrop",EventHandlers.pasteEvent),EventRuler.on(el,"drop",EventHandlers.pasteEvent),EventRuler.on(el,"cut",EventHandlers.cutEvent),EventRuler.on(el,"complete",opts.oncomplete),EventRuler.on(el,"incomplete",opts.onincomplete),EventRuler.on(el,"cleared",opts.oncleared),opts.inputEventOnly!==!0&&(EventRuler.on(el,"keydown",EventHandlers.keydownEvent),EventRuler.on(el,"keypress",EventHandlers.keypressEvent)),EventRuler.on(el,"compositionstart",$.noop),EventRuler.on(el,"compositionupdate",$.noop),EventRuler.on(el,"compositionend",$.noop),EventRuler.on(el,"keyup",$.noop),EventRuler.on(el,"input",EventHandlers.inputFallBackEvent)),EventRuler.on(el,"setvalue",EventHandlers.setValueEvent),getBufferTemplate(),""!==el.inputmask._valueGet()||opts.clearMaskOnLostFocus===!1||document.activeElement===el)){var initialValue=$.isFunction(opts.onBeforeMask)?opts.onBeforeMask(el.inputmask._valueGet(),opts)||el.inputmask._valueGet():el.inputmask._valueGet();checkVal(el,!0,!1,initialValue.split(""));var buffer=getBuffer().slice();undoValue=buffer.join(""),isComplete(buffer)===!1&&opts.clearIncomplete&&resetMaskSet(),opts.clearMaskOnLostFocus&&document.activeElement!==el&&(getLastValidPosition()===-1?buffer=[]:clearOptionalTail(buffer)),writeBuffer(el,buffer),document.activeElement===el&&caret(el,seekNext(getLastValidPosition()));}}
maskset=maskset||this.maskset,opts=opts||this.opts;var undoValue,$el,maxLength,colorMask,valueBuffer,el=this.el,isRTL=this.isRTL,skipKeyPressEvent=!1,skipInputEvent=!1,ignorable=!1,mouseEnter=!1,EventRuler={on:function(input,eventName,eventHandler){var ev=function(e){if(void 0===this.inputmask&&"FORM"!==this.nodeName){var imOpts=$.data(this,"_inputmask_opts");imOpts?new Inputmask(imOpts).mask(this):EventRuler.off(this);}else{if("setvalue"===e.type||!(this.disabled||this.readOnly&&!("keydown"===e.type&&e.ctrlKey&&67===e.keyCode||opts.tabThrough===!1&&e.keyCode===Inputmask.keyCode.TAB))){switch(e.type){case"input":if(skipInputEvent===!0)return skipInputEvent=!1,e.preventDefault();break;case"keydown":skipKeyPressEvent=!1,skipInputEvent=!1;break;case"keypress":if(skipKeyPressEvent===!0)return e.preventDefault();skipKeyPressEvent=!0;break;case"click":if(iemobile||iphone){var that=this,args=arguments;return setTimeout(function(){eventHandler.apply(that,args);},0),!1;}}
var returnVal=eventHandler.apply(this,arguments);return returnVal===!1&&(e.preventDefault(),e.stopPropagation()),returnVal;}
e.preventDefault();}};input.inputmask.events[eventName]=input.inputmask.events[eventName]||[],input.inputmask.events[eventName].push(ev),$.inArray(eventName,["submit","reset"])!==-1?null!=input.form&&$(input.form).on(eventName,ev):$(input).on(eventName,ev);},off:function(input,event){if(input.inputmask&&input.inputmask.events){var events;event?(events=[],events[event]=input.inputmask.events[event]):events=input.inputmask.events,$.each(events,function(eventName,evArr){for(;evArr.length>0;){var ev=evArr.pop();$.inArray(eventName,["submit","reset"])!==-1?null!=input.form&&$(input.form).off(eventName,ev):$(input).off(eventName,ev);}
delete input.inputmask.events[eventName];});}}},EventHandlers={keydownEvent:function(e){function isInputEventSupported(eventName){var el=document.createElement("input"),evName="on"+eventName,isSupported=evName in el;return isSupported||(el.setAttribute(evName,"return;"),isSupported="function"==typeof el[evName]),el=null,isSupported;}
var input=this,$input=$(input),k=e.keyCode,pos=caret(input);if(k===Inputmask.keyCode.BACKSPACE||k===Inputmask.keyCode.DELETE||iphone&&k===Inputmask.keyCode.BACKSPACE_SAFARI||e.ctrlKey&&k===Inputmask.keyCode.X&&!isInputEventSupported("cut"))e.preventDefault(),handleRemove(input,k,pos),writeBuffer(input,getBuffer(!0),getMaskSet().p,e,input.inputmask._valueGet()!==getBuffer().join("")),input.inputmask._valueGet()===getBufferTemplate().join("")?$input.trigger("cleared"):isComplete(getBuffer())===!0&&$input.trigger("complete");else if(k===Inputmask.keyCode.END||k===Inputmask.keyCode.PAGE_DOWN){e.preventDefault();var caretPos=seekNext(getLastValidPosition());opts.insertMode||caretPos!==getMaskSet().maskLength||e.shiftKey||caretPos--,caret(input,e.shiftKey?pos.begin:caretPos,caretPos,!0);}else k===Inputmask.keyCode.HOME&&!e.shiftKey||k===Inputmask.keyCode.PAGE_UP?(e.preventDefault(),caret(input,0,e.shiftKey?pos.begin:0,!0)):(opts.undoOnEscape&&k===Inputmask.keyCode.ESCAPE||90===k&&e.ctrlKey)&&e.altKey!==!0?(checkVal(input,!0,!1,undoValue.split("")),$input.trigger("click")):k!==Inputmask.keyCode.INSERT||e.shiftKey||e.ctrlKey?opts.tabThrough===!0&&k===Inputmask.keyCode.TAB?(e.shiftKey===!0?(null===getTest(pos.begin).match.fn&&(pos.begin=seekNext(pos.begin)),pos.end=seekPrevious(pos.begin,!0),pos.begin=seekPrevious(pos.end,!0)):(pos.begin=seekNext(pos.begin,!0),pos.end=seekNext(pos.begin,!0),pos.end<getMaskSet().maskLength&&pos.end--),pos.begin<getMaskSet().maskLength&&(e.preventDefault(),caret(input,pos.begin,pos.end))):e.shiftKey||opts.insertMode===!1&&(k===Inputmask.keyCode.RIGHT?setTimeout(function(){var caretPos=caret(input);caret(input,caretPos.begin);},0):k===Inputmask.keyCode.LEFT&&setTimeout(function(){var caretPos=caret(input);caret(input,isRTL?caretPos.begin+1:caretPos.begin-1);},0)):(opts.insertMode=!opts.insertMode,caret(input,opts.insertMode||pos.begin!==getMaskSet().maskLength?pos.begin:pos.begin-1));opts.onKeyDown.call(this,e,getBuffer(),caret(input).begin,opts),ignorable=$.inArray(k,opts.ignorables)!==-1;},keypressEvent:function(e,checkval,writeOut,strict,ndx){var input=this,$input=$(input),k=e.which||e.charCode||e.keyCode;if(!(checkval===!0||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||ignorable))return k===Inputmask.keyCode.ENTER&&undoValue!==getBuffer().join("")&&(undoValue=getBuffer().join(""),setTimeout(function(){$input.trigger("change");},0)),!0;if(k){46===k&&e.shiftKey===!1&&","===opts.radixPoint&&(k=44);var forwardPosition,pos=checkval?{begin:ndx,end:ndx}:caret(input),c=String.fromCharCode(k);getMaskSet().writeOutBuffer=!0;var valResult=isValid(pos,c,strict);if(valResult!==!1&&(resetMaskSet(!0),forwardPosition=void 0!==valResult.caret?valResult.caret:checkval?valResult.pos+1:seekNext(valResult.pos),getMaskSet().p=forwardPosition),writeOut!==!1){var self=this;if(setTimeout(function(){opts.onKeyValidation.call(self,k,valResult,opts);},0),getMaskSet().writeOutBuffer&&valResult!==!1){var buffer=getBuffer();writeBuffer(input,buffer,opts.numericInput&&void 0===valResult.caret?seekPrevious(forwardPosition):forwardPosition,e,checkval!==!0),checkval!==!0&&setTimeout(function(){isComplete(buffer)===!0&&$input.trigger("complete");},0);}}
if(e.preventDefault(),checkval)return valResult.forwardPosition=forwardPosition,valResult;}},pasteEvent:function(e){var tempValue,input=this,ev=e.originalEvent||e,$input=$(input),inputValue=input.inputmask._valueGet(!0),caretPos=caret(input);isRTL&&(tempValue=caretPos.end,caretPos.end=caretPos.begin,caretPos.begin=tempValue);var valueBeforeCaret=inputValue.substr(0,caretPos.begin),valueAfterCaret=inputValue.substr(caretPos.end,inputValue.length);if(valueBeforeCaret===(isRTL?getBufferTemplate().reverse():getBufferTemplate()).slice(0,caretPos.begin).join("")&&(valueBeforeCaret=""),valueAfterCaret===(isRTL?getBufferTemplate().reverse():getBufferTemplate()).slice(caretPos.end).join("")&&(valueAfterCaret=""),isRTL&&(tempValue=valueBeforeCaret,valueBeforeCaret=valueAfterCaret,valueAfterCaret=tempValue),window.clipboardData&&window.clipboardData.getData)inputValue=valueBeforeCaret+window.clipboardData.getData("Text")+valueAfterCaret;else{if(!ev.clipboardData||!ev.clipboardData.getData)return!0;inputValue=valueBeforeCaret+ev.clipboardData.getData("text/plain")+valueAfterCaret;}
var pasteValue=inputValue;if($.isFunction(opts.onBeforePaste)){if(pasteValue=opts.onBeforePaste(inputValue,opts),pasteValue===!1)return e.preventDefault();pasteValue||(pasteValue=inputValue);}
return checkVal(input,!1,!1,isRTL?pasteValue.split("").reverse():pasteValue.toString().split("")),writeBuffer(input,getBuffer(),seekNext(getLastValidPosition()),e,undoValue!==getBuffer().join("")),isComplete(getBuffer())===!0&&$input.trigger("complete"),e.preventDefault();},inputFallBackEvent:function(e){var input=this,inputValue=input.inputmask._valueGet();if(getBuffer().join("")!==inputValue){var caretPos=caret(input);if(inputValue=inputValue.replace(new RegExp("("+Inputmask.escapeRegex(getBufferTemplate().join(""))+")*"),""),iemobile){var inputChar=inputValue.replace(getBuffer().join(""),"");if(1===inputChar.length){var keypress=new $.Event("keypress");return keypress.which=inputChar.charCodeAt(0),EventHandlers.keypressEvent.call(input,keypress,!0,!0,!1,getMaskSet().validPositions[caretPos.begin-1]?caretPos.begin:caretPos.begin-1),!1;}}
if(caretPos.begin>inputValue.length&&(caret(input,inputValue.length),caretPos=caret(input)),getBuffer().length-inputValue.length!==1||inputValue.charAt(caretPos.begin)===getBuffer()[caretPos.begin]||inputValue.charAt(caretPos.begin+1)===getBuffer()[caretPos.begin]||isMask(caretPos.begin)){for(var lvp=getLastValidPosition()+1,bufferTemplate=getBufferTemplate().join("");null===inputValue.match(Inputmask.escapeRegex(bufferTemplate)+"$");)bufferTemplate=bufferTemplate.slice(1);inputValue=inputValue.replace(bufferTemplate,""),inputValue=inputValue.split(""),checkVal(input,!0,!1,inputValue,e,caretPos.begin<lvp),isComplete(getBuffer())===!0&&$(input).trigger("complete");}else e.keyCode=Inputmask.keyCode.BACKSPACE,EventHandlers.keydownEvent.call(input,e);e.preventDefault();}},setValueEvent:function(e){var input=this,value=input.inputmask._valueGet();checkVal(input,!0,!1,($.isFunction(opts.onBeforeMask)?opts.onBeforeMask(value,opts)||value:value).split("")),undoValue=getBuffer().join(""),(opts.clearMaskOnLostFocus||opts.clearIncomplete)&&input.inputmask._valueGet()===getBufferTemplate().join("")&&input.inputmask._valueSet("");},focusEvent:function(e){var input=this,nptValue=input.inputmask._valueGet();opts.showMaskOnFocus&&(!opts.showMaskOnHover||opts.showMaskOnHover&&""===nptValue)&&(input.inputmask._valueGet()!==getBuffer().join("")?writeBuffer(input,getBuffer(),seekNext(getLastValidPosition())):mouseEnter===!1&&caret(input,seekNext(getLastValidPosition()))),opts.positionCaretOnTab===!0&&EventHandlers.clickEvent.apply(input,[e,!0]),undoValue=getBuffer().join("");},mouseleaveEvent:function(e){var input=this;if(mouseEnter=!1,opts.clearMaskOnLostFocus&&document.activeElement!==input){var buffer=getBuffer().slice(),nptValue=input.inputmask._valueGet();nptValue!==input.getAttribute("placeholder")&&""!==nptValue&&(getLastValidPosition()===-1&&nptValue===getBufferTemplate().join("")?buffer=[]:clearOptionalTail(buffer),writeBuffer(input,buffer));}},clickEvent:function(e,tabbed){function doRadixFocus(clickPos){if(""!==opts.radixPoint){var vps=getMaskSet().validPositions;if(void 0===vps[clickPos]||vps[clickPos].input===getPlaceholder(clickPos)){if(clickPos<seekNext(-1))return!0;var radixPos=$.inArray(opts.radixPoint,getBuffer());if(radixPos!==-1){for(var vp in vps)if(radixPos<vp&&vps[vp].input!==getPlaceholder(vp))return!1;return!0;}}}
return!1;}
var input=this;setTimeout(function(){if(document.activeElement===input){var selectedCaret=caret(input);if(tabbed&&(selectedCaret.begin=selectedCaret.end),selectedCaret.begin===selectedCaret.end)switch(opts.positionCaretOnClick){case"none":break;case"radixFocus":if(doRadixFocus(selectedCaret.begin)){var radixPos=$.inArray(opts.radixPoint,getBuffer().join(""));caret(input,opts.numericInput?seekNext(radixPos):radixPos);break;}
default:var clickPosition=selectedCaret.begin,lvclickPosition=getLastValidPosition(clickPosition,!0),lastPosition=seekNext(lvclickPosition);if(clickPosition<lastPosition)caret(input,isMask(clickPosition)||isMask(clickPosition-1)?clickPosition:seekNext(clickPosition));else{var placeholder=getPlaceholder(lastPosition);(""!==placeholder&&getBuffer()[lastPosition]!==placeholder&&getTest(lastPosition).match.optionalQuantifier!==!0||!isMask(lastPosition)&&getTest(lastPosition).match.def===placeholder)&&(lastPosition=seekNext(lastPosition)),caret(input,lastPosition);}}}},0);},dblclickEvent:function(e){var input=this;setTimeout(function(){caret(input,0,seekNext(getLastValidPosition()));},0);},cutEvent:function(e){var input=this,$input=$(input),pos=caret(input),ev=e.originalEvent||e,clipboardData=window.clipboardData||ev.clipboardData,clipData=isRTL?getBuffer().slice(pos.end,pos.begin):getBuffer().slice(pos.begin,pos.end);clipboardData.setData("text",isRTL?clipData.reverse().join(""):clipData.join("")),document.execCommand&&document.execCommand("copy"),handleRemove(input,Inputmask.keyCode.DELETE,pos),writeBuffer(input,getBuffer(),getMaskSet().p,e,undoValue!==getBuffer().join("")),input.inputmask._valueGet()===getBufferTemplate().join("")&&$input.trigger("cleared");},blurEvent:function(e){var $input=$(this),input=this;if(input.inputmask){var nptValue=input.inputmask._valueGet(),buffer=getBuffer().slice();undoValue!==buffer.join("")&&setTimeout(function(){$input.trigger("change"),undoValue=buffer.join("");},0),""!==nptValue&&(opts.clearMaskOnLostFocus&&(getLastValidPosition()===-1&&nptValue===getBufferTemplate().join("")?buffer=[]:clearOptionalTail(buffer)),isComplete(buffer)===!1&&(setTimeout(function(){$input.trigger("incomplete");},0),opts.clearIncomplete&&(resetMaskSet(),buffer=opts.clearMaskOnLostFocus?[]:getBufferTemplate().slice())),writeBuffer(input,buffer,void 0,e));}},mouseenterEvent:function(e){var input=this;mouseEnter=!0,document.activeElement!==input&&opts.showMaskOnHover&&input.inputmask._valueGet()!==getBuffer().join("")&&writeBuffer(input,getBuffer());},submitEvent:function(e){undoValue!==getBuffer().join("")&&$el.trigger("change"),opts.clearMaskOnLostFocus&&getLastValidPosition()===-1&&el.inputmask._valueGet&&el.inputmask._valueGet()===getBufferTemplate().join("")&&el.inputmask._valueSet(""),opts.removeMaskOnSubmit&&(el.inputmask._valueSet(el.inputmask.unmaskedvalue(),!0),setTimeout(function(){writeBuffer(el,getBuffer());},0));},resetEvent:function(e){setTimeout(function(){$el.trigger("setvalue");},0);}};if(void 0!==actionObj)switch(actionObj.action){case"isComplete":return el=actionObj.el,isComplete(getBuffer());case"unmaskedvalue":return void 0!==el&&void 0===actionObj.value||(valueBuffer=actionObj.value,valueBuffer=($.isFunction(opts.onBeforeMask)?opts.onBeforeMask(valueBuffer,opts)||valueBuffer:valueBuffer).split(""),checkVal(void 0,!1,!1,isRTL?valueBuffer.reverse():valueBuffer),$.isFunction(opts.onBeforeWrite)&&opts.onBeforeWrite(void 0,getBuffer(),0,opts)),unmaskedvalue(el);case"mask":mask(el);break;case"format":return valueBuffer=($.isFunction(opts.onBeforeMask)?opts.onBeforeMask(actionObj.value,opts)||actionObj.value:actionObj.value).split(""),checkVal(void 0,!1,!1,isRTL?valueBuffer.reverse():valueBuffer),$.isFunction(opts.onBeforeWrite)&&opts.onBeforeWrite(void 0,getBuffer(),0,opts),actionObj.metadata?{value:isRTL?getBuffer().slice().reverse().join(""):getBuffer().join(""),metadata:maskScope.call(this,{action:"getmetadata"},maskset,opts)}:isRTL?getBuffer().slice().reverse().join(""):getBuffer().join("");case"isValid":actionObj.value?(valueBuffer=actionObj.value.split(""),checkVal(void 0,!1,!0,isRTL?valueBuffer.reverse():valueBuffer)):actionObj.value=getBuffer().join("");for(var buffer=getBuffer(),rl=determineLastRequiredPosition(),lmib=buffer.length-1;lmib>rl&&!isMask(lmib);lmib--);return buffer.splice(rl,lmib+1-rl),isComplete(buffer)&&actionObj.value===getBuffer().join("");case"getemptymask":return getBufferTemplate().join("");case"remove":if(el){$el=$(el),el.inputmask._valueSet(unmaskedvalue(el)),EventRuler.off(el);var valueProperty;Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(valueProperty=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el),"value"),valueProperty&&el.inputmask.__valueGet&&Object.defineProperty(el,"value",{get:el.inputmask.__valueGet,set:el.inputmask.__valueSet,configurable:!0})):document.__lookupGetter__&&el.__lookupGetter__("value")&&el.inputmask.__valueGet&&(el.__defineGetter__("value",el.inputmask.__valueGet),el.__defineSetter__("value",el.inputmask.__valueSet)),el.inputmask=void 0;}
return el;case"getmetadata":if($.isArray(maskset.metadata)){var maskTarget=getMaskTemplate(!0,0,!1).join("");return $.each(maskset.metadata,function(ndx,mtdt){if(mtdt.mask===maskTarget)return maskTarget=mtdt,!1;}),maskTarget;}
return maskset.metadata;}}
var ua=navigator.userAgent,mobile=/mobile/i.test(ua),iemobile=/iemobile/i.test(ua),iphone=/iphone/i.test(ua)&&!iemobile,android=/android/i.test(ua)&&!iemobile;return Inputmask.prototype={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:$.noop,onincomplete:$.noop,oncleared:$.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:$.noop,onBeforeMask:null,onBeforePaste:function(pastedValue,opts){return $.isFunction(opts.onBeforeMask)?opts.onBeforeMask(pastedValue,opts):pastedValue;},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:$.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:void 0,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password"],definitions:{"9":{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:null,canClearPosition:$.noop,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,androidHack:!1},masksCache:{},mask:function(elems){function importAttributeOptions(npt,opts,userOptions,dataAttribute){function importOption(option,optionData){optionData=void 0!==optionData?optionData:npt.getAttribute(dataAttribute+"-"+option),null!==optionData&&("string"==typeof optionData&&(0===option.indexOf("on")?optionData=window[optionData]:"false"===optionData?optionData=!1:"true"===optionData&&(optionData=!0)),userOptions[option]=optionData);}
var option,dataoptions,optionData,p,attrOptions=npt.getAttribute(dataAttribute);if(attrOptions&&""!==attrOptions&&(attrOptions=attrOptions.replace(new RegExp("'","g"),'"'),dataoptions=JSON.parse("{"+attrOptions+"}")),dataoptions){optionData=void 0;for(p in dataoptions)if("alias"===p.toLowerCase()){optionData=dataoptions[p];break;}}
importOption("alias",optionData),userOptions.alias&&resolveAlias(userOptions.alias,userOptions,opts);for(option in opts){if(dataoptions){optionData=void 0;for(p in dataoptions)if(p.toLowerCase()===option.toLowerCase()){optionData=dataoptions[p];break;}}
importOption(option,optionData);}
return $.extend(!0,opts,userOptions),opts;}
var that=this;return"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,$.each(elems,function(ndx,el){var scopedOpts=$.extend(!0,{},that.opts);importAttributeOptions(el,scopedOpts,$.extend(!0,{},that.userOptions),that.dataAttribute);var maskset=generateMaskSet(scopedOpts,that.noMasksCache);void 0!==maskset&&(void 0!==el.inputmask&&el.inputmask.remove(),el.inputmask=new Inputmask(),el.inputmask.opts=scopedOpts,el.inputmask.noMasksCache=that.noMasksCache,el.inputmask.userOptions=$.extend(!0,{},that.userOptions),el.inputmask.el=el,el.inputmask.maskset=maskset,$.data(el,"_inputmask_opts",scopedOpts),maskScope.call(el.inputmask,{action:"mask"}));}),elems&&elems[0]?elems[0].inputmask||this:this;},option:function(options,noremask){return"string"==typeof options?this.opts[options]:"object"==typeof options?($.extend(this.userOptions,options),this.el&&noremask!==!0&&this.mask(this.el),this):void 0;},unmaskedvalue:function(value){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"unmaskedvalue",value:value});},remove:function(){return maskScope.call(this,{action:"remove"});},getemptymask:function(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"getemptymask"});},hasMaskedValue:function(){return!this.opts.autoUnmask;},isComplete:function(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"isComplete"});},getmetadata:function(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"getmetadata"});},isValid:function(value){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"isValid",value:value});},format:function(value,metadata){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"format",value:value,metadata:metadata});},analyseMask:function(mask,opts){function MaskToken(isGroup,isOptional,isQuantifier,isAlternator){this.matches=[],this.openGroup=isGroup||!1,this.isGroup=isGroup||!1,this.isOptional=isOptional||!1,this.isQuantifier=isQuantifier||!1,this.isAlternator=isAlternator||!1,this.quantifier={min:1,max:1};}
function insertTestDefinition(mtoken,element,position){var maskdef=opts.definitions[element];position=void 0!==position?position:mtoken.matches.length;var prevMatch=mtoken.matches[position-1];if(maskdef&&!escaped){maskdef.placeholder=$.isFunction(maskdef.placeholder)?maskdef.placeholder(opts):maskdef.placeholder;for(var prevalidators=maskdef.prevalidator,prevalidatorsL=prevalidators?prevalidators.length:0,i=1;i<maskdef.cardinality;i++){var prevalidator=prevalidatorsL>=i?prevalidators[i-1]:[],validator=prevalidator.validator,cardinality=prevalidator.cardinality;mtoken.matches.splice(position++,0,{fn:validator?"string"==typeof validator?new RegExp(validator):new function(){this.test=validator;}():new RegExp("."),cardinality:cardinality?cardinality:1,optionality:mtoken.isOptional,newBlockMarker:void 0===prevMatch||prevMatch.def!==(maskdef.definitionSymbol||element),casing:maskdef.casing,def:maskdef.definitionSymbol||element,placeholder:maskdef.placeholder,nativeDef:element}),prevMatch=mtoken.matches[position-1];}
mtoken.matches.splice(position++,0,{fn:maskdef.validator?"string"==typeof maskdef.validator?new RegExp(maskdef.validator):new function(){this.test=maskdef.validator;}():new RegExp("."),cardinality:maskdef.cardinality,optionality:mtoken.isOptional,newBlockMarker:void 0===prevMatch||prevMatch.def!==(maskdef.definitionSymbol||element),casing:maskdef.casing,def:maskdef.definitionSymbol||element,placeholder:maskdef.placeholder,nativeDef:element});}else mtoken.matches.splice(position++,0,{fn:null,cardinality:0,optionality:mtoken.isOptional,newBlockMarker:void 0===prevMatch||prevMatch.def!==element,casing:null,def:opts.staticDefinitionSymbol||element,placeholder:void 0!==opts.staticDefinitionSymbol?element:void 0,nativeDef:element}),escaped=!1;}
function verifyGroupMarker(maskToken){maskToken&&maskToken.matches&&$.each(maskToken.matches,function(ndx,token){var nextToken=maskToken.matches[ndx+1];(void 0===nextToken||void 0===nextToken.matches||nextToken.isQuantifier===!1)&&token&&token.isGroup&&(token.isGroup=!1,insertTestDefinition(token,opts.groupmarker.start,0),token.openGroup!==!0&&insertTestDefinition(token,opts.groupmarker.end)),verifyGroupMarker(token);});}
function defaultCase(){if(openenings.length>0){if(currentOpeningToken=openenings[openenings.length-1],insertTestDefinition(currentOpeningToken,m),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup=!1;openenings.length>0?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator);}}else insertTestDefinition(currentToken,m);}
function reverseTokens(maskToken){function reverseStatic(st){return st===opts.optionalmarker.start?st=opts.optionalmarker.end:st===opts.optionalmarker.end?st=opts.optionalmarker.start:st===opts.groupmarker.start?st=opts.groupmarker.end:st===opts.groupmarker.end&&(st=opts.groupmarker.start),st;}
maskToken.matches=maskToken.matches.reverse();for(var match in maskToken.matches){var intMatch=parseInt(match);if(maskToken.matches[match].isQuantifier&&maskToken.matches[intMatch+1]&&maskToken.matches[intMatch+1].isGroup){var qt=maskToken.matches[match];maskToken.matches.splice(match,1),maskToken.matches.splice(intMatch+1,0,qt);}
void 0!==maskToken.matches[match].matches?maskToken.matches[match]=reverseTokens(maskToken.matches[match]):maskToken.matches[match]=reverseStatic(maskToken.matches[match]);}
return maskToken;}
for(var match,m,openingToken,currentOpeningToken,alternator,lastMatch,groupToken,tokenizer=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,escaped=!1,currentToken=new MaskToken(),openenings=[],maskTokens=[];match=tokenizer.exec(mask);)if(m=match[0],escaped)defaultCase();else switch(m.charAt(0)){case opts.escapeChar:escaped=!0;break;case opts.optionalmarker.end:case opts.groupmarker.end:if(openingToken=openenings.pop(),openingToken.openGroup=!1,void 0!==openingToken)if(openenings.length>0){if(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(openingToken),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup=!1;openenings.length>0?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator);}}else currentToken.matches.push(openingToken);else defaultCase();break;case opts.optionalmarker.start:openenings.push(new MaskToken((!1),(!0)));break;case opts.groupmarker.start:openenings.push(new MaskToken((!0)));break;case opts.quantifiermarker.start:var quantifier=new MaskToken((!1),(!1),(!0));m=m.replace(/[{}]/g,"");var mq=m.split(","),mq0=isNaN(mq[0])?mq[0]:parseInt(mq[0]),mq1=1===mq.length?mq0:isNaN(mq[1])?mq[1]:parseInt(mq[1]);if("*"!==mq1&&"+"!==mq1||(mq0="*"===mq1?0:1),quantifier.quantifier={min:mq0,max:mq1},openenings.length>0){var matches=openenings[openenings.length-1].matches;match=matches.pop(),match.isGroup||(groupToken=new MaskToken((!0)),groupToken.matches.push(match),match=groupToken),matches.push(match),matches.push(quantifier);}else match=currentToken.matches.pop(),match.isGroup||(groupToken=new MaskToken((!0)),groupToken.matches.push(match),match=groupToken),currentToken.matches.push(match),currentToken.matches.push(quantifier);break;case opts.alternatormarker:openenings.length>0?(currentOpeningToken=openenings[openenings.length-1],lastMatch=currentOpeningToken.matches.pop()):lastMatch=currentToken.matches.pop(),lastMatch.isAlternator?openenings.push(lastMatch):(alternator=new MaskToken((!1),(!1),(!1),(!0)),alternator.matches.push(lastMatch),openenings.push(alternator));break;default:defaultCase();}
for(;openenings.length>0;)openingToken=openenings.pop(),currentToken.matches.push(openingToken);return currentToken.matches.length>0&&(verifyGroupMarker(currentToken),maskTokens.push(currentToken)),opts.numericInput&&reverseTokens(maskTokens[0]),maskTokens;}},Inputmask.extendDefaults=function(options){$.extend(!0,Inputmask.prototype.defaults,options);},Inputmask.extendDefinitions=function(definition){$.extend(!0,Inputmask.prototype.defaults.definitions,definition);},Inputmask.extendAliases=function(alias){$.extend(!0,Inputmask.prototype.defaults.aliases,alias);},Inputmask.format=function(value,options,metadata){return Inputmask(options).format(value,metadata);},Inputmask.unmask=function(value,options){return Inputmask(options).unmaskedvalue(value);},Inputmask.isValid=function(value,options){return Inputmask(options).isValid(value);},Inputmask.remove=function(elems){$.each(elems,function(ndx,el){el.inputmask&&el.inputmask.remove();});},Inputmask.escapeRegex=function(str){var specials=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return str.replace(new RegExp("(\\"+specials.join("|\\")+")","gim"),"\\$1");},Inputmask.keyCode={ALT:18,BACKSPACE:8,BACKSPACE_SAFARI:127,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91,X:88},window.Inputmask=Inputmask,Inputmask;}(jQuery),function($,Inputmask){return void 0===$.fn.inputmask&&($.fn.inputmask=function(fn,options){var nptmask,input=this[0];if(void 0===options&&(options={}),"string"==typeof fn)switch(fn){case"unmaskedvalue":return input&&input.inputmask?input.inputmask.unmaskedvalue():$(input).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove();});case"getemptymask":return input&&input.inputmask?input.inputmask.getemptymask():"";case"hasMaskedValue":return!(!input||!input.inputmask)&&input.inputmask.hasMaskedValue();case"isComplete":return!input||!input.inputmask||input.inputmask.isComplete();case"getmetadata":return input&&input.inputmask?input.inputmask.getmetadata():void 0;case"setvalue":$(input).val(options),input&&void 0===input.inputmask&&$(input).triggerHandler("setvalue");break;case"option":if("string"!=typeof options)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(options);});if(input&&void 0!==input.inputmask)return input.inputmask.option(options);break;default:return options.alias=fn,nptmask=new Inputmask(options),this.each(function(){nptmask.mask(this);});}else{if("object"==typeof fn)return nptmask=new Inputmask(fn),void 0===fn.mask&&void 0===fn.alias?this.each(function(){return void 0!==this.inputmask?this.inputmask.option(fn):void nptmask.mask(this);}):this.each(function(){nptmask.mask(this);});if(void 0===fn)return this.each(function(){nptmask=new Inputmask(options),nptmask.mask(this);});}}),$.fn.inputmask;}(jQuery,Inputmask),function($,Inputmask){}(jQuery,Inputmask),function($,Inputmask){function isLeapYear(year){return isNaN(year)||29===new Date(year,2,0).getDate();}
return Inputmask.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+escapedSeparator+"[01])");},val2:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[1-9]|[12][0-9])"+escapedSeparator+"(0[1-9]|1[012]))|(30"+escapedSeparator+"(0[13-9]|1[012]))|(31"+escapedSeparator+"(0[13578]|1[02]))");}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(chrs,minyear,maxyear){if(isNaN(chrs))return!1;var enteredyear=parseInt(chrs.concat(minyear.toString().slice(chrs.length))),enteredyear2=parseInt(chrs.concat(maxyear.toString().slice(chrs.length)));return!isNaN(enteredyear)&&(minyear<=enteredyear&&enteredyear<=maxyear)||!isNaN(enteredyear2)&&(minyear<=enteredyear2&&enteredyear2<=maxyear);},determinebaseyear:function(minyear,maxyear,hint){var currentyear=new Date().getFullYear();if(minyear>currentyear)return minyear;if(maxyear<currentyear){for(var maxYearPrefix=maxyear.toString().slice(0,2),maxYearPostfix=maxyear.toString().slice(2,4);maxyear<maxYearPrefix+hint;)maxYearPrefix--;var maxxYear=maxYearPrefix+maxYearPostfix;return minyear>maxxYear?minyear:maxxYear;}
if(minyear<=currentyear&&currentyear<=maxyear){for(var currentYearPrefix=currentyear.toString().slice(0,2);maxyear<currentYearPrefix+hint;)currentYearPrefix--;var currentYearAndHint=currentYearPrefix+hint;return currentYearAndHint<minyear?minyear:currentYearAndHint;}
return currentyear;},onKeyDown:function(e,buffer,caretPos,opts){var $input=$(this);if(e.ctrlKey&&e.keyCode===Inputmask.keyCode.RIGHT){var today=new Date();$input.val(today.getDate().toString()+(today.getMonth()+1).toString()+today.getFullYear().toString()),$input.trigger("setvalue");}},getFrontValue:function(mask,buffer,opts){for(var start=0,length=0,i=0;i<mask.length&&"2"!==mask.charAt(i);i++){var definition=opts.definitions[mask.charAt(i)];definition?(start+=length,length=definition.cardinality):length++;}
return buffer.join("").substr(start,length);},postValidation:function(buffer,currentResult,opts){var dayMonthValue,year,bufferStr=buffer.join("");return 0===opts.mask.indexOf("y")?(year=bufferStr.substr(0,4),dayMonthValue=bufferStr.substr(4,11)):(year=bufferStr.substr(6,11),dayMonthValue=bufferStr.substr(0,6)),currentResult&&(dayMonthValue!==opts.leapday||isLeapYear(year));},definitions:{"1":{validator:function(chrs,maskset,pos,strict,opts){var isValid=opts.regex.val1.test(chrs);return strict||isValid||chrs.charAt(1)!==opts.separator&&"-./".indexOf(chrs.charAt(1))===-1||!(isValid=opts.regex.val1.test("0"+chrs.charAt(0)))?isValid:(maskset.buffer[pos-1]="0",{refreshFromBuffer:{start:pos-1,end:pos},pos:pos,c:chrs.charAt(0)});},cardinality:2,prevalidator:[{validator:function(chrs,maskset,pos,strict,opts){var pchrs=chrs;isNaN(maskset.buffer[pos+1])||(pchrs+=maskset.buffer[pos+1]);var isValid=1===pchrs.length?opts.regex.val1pre.test(pchrs):opts.regex.val1.test(pchrs);if(!strict&&!isValid){if(isValid=opts.regex.val1.test(chrs+"0"))return maskset.buffer[pos]=chrs,maskset.buffer[++pos]="0",{pos:pos,c:"0"};if(isValid=opts.regex.val1.test("0"+chrs))return maskset.buffer[pos]="0",pos++,{pos:pos};}
return isValid;},cardinality:1}]},"2":{validator:function(chrs,maskset,pos,strict,opts){var frontValue=opts.getFrontValue(maskset.mask,maskset.buffer,opts);frontValue.indexOf(opts.placeholder[0])!==-1&&(frontValue="01"+opts.separator);var isValid=opts.regex.val2(opts.separator).test(frontValue+chrs);return strict||isValid||chrs.charAt(1)!==opts.separator&&"-./".indexOf(chrs.charAt(1))===-1||!(isValid=opts.regex.val2(opts.separator).test(frontValue+"0"+chrs.charAt(0)))?isValid:(maskset.buffer[pos-1]="0",{refreshFromBuffer:{start:pos-1,end:pos},pos:pos,c:chrs.charAt(0)});},cardinality:2,prevalidator:[{validator:function(chrs,maskset,pos,strict,opts){isNaN(maskset.buffer[pos+1])||(chrs+=maskset.buffer[pos+1]);var frontValue=opts.getFrontValue(maskset.mask,maskset.buffer,opts);frontValue.indexOf(opts.placeholder[0])!==-1&&(frontValue="01"+opts.separator);var isValid=1===chrs.length?opts.regex.val2pre(opts.separator).test(frontValue+chrs):opts.regex.val2(opts.separator).test(frontValue+chrs);return strict||isValid||!(isValid=opts.regex.val2(opts.separator).test(frontValue+"0"+chrs))?isValid:(maskset.buffer[pos]="0",pos++,{pos:pos});},cardinality:1}]},y:{validator:function(chrs,maskset,pos,strict,opts){return opts.isInYearRange(chrs,opts.yearrange.minyear,opts.yearrange.maxyear);},cardinality:4,prevalidator:[{validator:function(chrs,maskset,pos,strict,opts){var isValid=opts.isInYearRange(chrs,opts.yearrange.minyear,opts.yearrange.maxyear);if(!strict&&!isValid){var yearPrefix=opts.determinebaseyear(opts.yearrange.minyear,opts.yearrange.maxyear,chrs+"0").toString().slice(0,1);if(isValid=opts.isInYearRange(yearPrefix+chrs,opts.yearrange.minyear,opts.yearrange.maxyear))return maskset.buffer[pos++]=yearPrefix.charAt(0),{pos:pos};if(yearPrefix=opts.determinebaseyear(opts.yearrange.minyear,opts.yearrange.maxyear,chrs+"0").toString().slice(0,2),isValid=opts.isInYearRange(yearPrefix+chrs,opts.yearrange.minyear,opts.yearrange.maxyear))return maskset.buffer[pos++]=yearPrefix.charAt(0),maskset.buffer[pos++]=yearPrefix.charAt(1),{pos:pos};}
return isValid;},cardinality:1},{validator:function(chrs,maskset,pos,strict,opts){var isValid=opts.isInYearRange(chrs,opts.yearrange.minyear,opts.yearrange.maxyear);if(!strict&&!isValid){var yearPrefix=opts.determinebaseyear(opts.yearrange.minyear,opts.yearrange.maxyear,chrs).toString().slice(0,2);if(isValid=opts.isInYearRange(chrs[0]+yearPrefix[1]+chrs[1],opts.yearrange.minyear,opts.yearrange.maxyear))return maskset.buffer[pos++]=yearPrefix.charAt(1),{pos:pos};if(yearPrefix=opts.determinebaseyear(opts.yearrange.minyear,opts.yearrange.maxyear,chrs).toString().slice(0,2),isValid=opts.isInYearRange(yearPrefix+chrs,opts.yearrange.minyear,opts.yearrange.maxyear))return maskset.buffer[pos-1]=yearPrefix.charAt(0),maskset.buffer[pos++]=yearPrefix.charAt(1),maskset.buffer[pos++]=chrs.charAt(0),{refreshFromBuffer:{start:pos-3,end:pos},pos:pos};}
return isValid;},cardinality:2},{validator:function(chrs,maskset,pos,strict,opts){return opts.isInYearRange(chrs,opts.yearrange.minyear,opts.yearrange.maxyear);},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[13-9]|1[012])"+escapedSeparator+"[0-3])|(02"+escapedSeparator+"[0-2])");},val2:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[1-9]|1[012])"+escapedSeparator+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+escapedSeparator+"30)|((0[13578]|1[02])"+escapedSeparator+"31)");},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(e,buffer,caretPos,opts){var $input=$(this);if(e.ctrlKey&&e.keyCode===Inputmask.keyCode.RIGHT){var today=new Date();$input.val((today.getMonth()+1).toString()+today.getDate().toString()+today.getFullYear().toString()),$input.trigger("setvalue");}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(e,buffer,caretPos,opts){var $input=$(this);if(e.ctrlKey&&e.keyCode===Inputmask.keyCode.RIGHT){var today=new Date();$input.val(today.getFullYear().toString()+(today.getMonth()+1).toString()+today.getDate().toString()),$input.trigger("setvalue");}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(chrs,maskset,pos,strict,opts){if("24"===opts.hourFormat&&24===parseInt(chrs,10))return maskset.buffer[pos-1]="0",maskset.buffer[pos]="0",{refreshFromBuffer:{start:pos-1,end:pos},c:"0"};var isValid=opts.regex.hrs.test(chrs);if(!strict&&!isValid&&(chrs.charAt(1)===opts.timeseparator||"-.:".indexOf(chrs.charAt(1))!==-1)&&(isValid=opts.regex.hrs.test("0"+chrs.charAt(0))))return maskset.buffer[pos-1]="0",maskset.buffer[pos]=chrs.charAt(0),pos++,{refreshFromBuffer:{start:pos-2,end:pos},pos:pos,c:opts.timeseparator};if(isValid&&"24"!==opts.hourFormat&&opts.regex.hrs24.test(chrs)){var tmp=parseInt(chrs,10);return 24===tmp?(maskset.buffer[pos+5]="a",maskset.buffer[pos+6]="m"):(maskset.buffer[pos+5]="p",maskset.buffer[pos+6]="m"),tmp-=12,tmp<10?(maskset.buffer[pos]=tmp.toString(),maskset.buffer[pos-1]="0"):(maskset.buffer[pos]=tmp.toString().charAt(1),maskset.buffer[pos-1]=tmp.toString().charAt(0)),{refreshFromBuffer:{start:pos-1,end:pos+6},c:maskset.buffer[pos]};}
return isValid;},cardinality:2,prevalidator:[{validator:function(chrs,maskset,pos,strict,opts){var isValid=opts.regex.hrspre.test(chrs);return strict||isValid||!(isValid=opts.regex.hrs.test("0"+chrs))?isValid:(maskset.buffer[pos]="0",pos++,{pos:pos});},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(chrs,maskset,pos,strict,opts){var isValid=opts.regex.mspre.test(chrs);return strict||isValid||!(isValid=opts.regex.ms.test("0"+chrs))?isValid:(maskset.buffer[pos]="0",pos++,{pos:pos});},cardinality:1}]},t:{validator:function(chrs,maskset,pos,strict,opts){return opts.regex.ampm.test(chrs+"m");},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"mm/dd/yyyy hh:mm xm":{mask:"1/2/y h:s t\\m",placeholder:"mm/dd/yyyy hh:mm xm",alias:"datetime12",regex:{val2pre:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[13-9]|1[012])"+escapedSeparator+"[0-3])|(02"+escapedSeparator+"[0-2])");},val2:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[1-9]|1[012])"+escapedSeparator+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+escapedSeparator+"30)|((0[13578]|1[02])"+escapedSeparator+"31)");},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(e,buffer,caretPos,opts){var $input=$(this);if(e.ctrlKey&&e.keyCode===Inputmask.keyCode.RIGHT){var today=new Date();$input.val((today.getMonth()+1).toString()+today.getDate().toString()+today.getFullYear().toString()),$input.trigger("setvalue");}}},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[1-9]|1[012])"+escapedSeparator+"[0-3])");},val2:function(separator){var escapedSeparator=Inputmask.escapeRegex.call(this,separator);return new RegExp("((0[1-9]|1[012])"+escapedSeparator+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+escapedSeparator+"30)|((0[1-6])"+escapedSeparator+"31)");},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0}}),Inputmask;}(jQuery,Inputmask),function($,Inputmask){return Inputmask.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Fa-f]",cardinality:1,casing:"upper"}}),Inputmask.extendAliases({url:{definitions:{i:{validator:".",cardinality:1}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(chrs,maskset,pos,strict,opts){return pos-1>-1&&"."!==maskset.buffer[pos-1]?(chrs=maskset.buffer[pos-1]+chrs,chrs=pos-2>-1&&"."!==maskset.buffer[pos-2]?maskset.buffer[pos-2]+chrs:"0"+chrs):chrs="00"+chrs,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);},cardinality:1}},onUnMask:function(maskedValue,unmaskedValue,opts){return maskedValue;},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(pastedValue,opts){return pastedValue=pastedValue.toLowerCase(),pastedValue.replace("mailto:","");},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"},"-":{validator:"[0-9A-Za-z-]",cardinality:1,casing:"lower"}},onUnMask:function(maskedValue,unmaskedValue,opts){return maskedValue;},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",cardinality:1,casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),Inputmask;}(jQuery,Inputmask),function($,Inputmask){return Inputmask.extendAliases({numeric:{mask:function(opts){function autoEscape(txt){for(var escapedTxt="",i=0;i<txt.length;i++)escapedTxt+=opts.definitions[txt.charAt(i)]||opts.optionalmarker.start===txt.charAt(i)||opts.optionalmarker.end===txt.charAt(i)||opts.quantifiermarker.start===txt.charAt(i)||opts.quantifiermarker.end===txt.charAt(i)||opts.groupmarker.start===txt.charAt(i)||opts.groupmarker.end===txt.charAt(i)||opts.alternatormarker===txt.charAt(i)?"\\"+txt.charAt(i):txt.charAt(i);return escapedTxt;}
if(0!==opts.repeat&&isNaN(opts.integerDigits)&&(opts.integerDigits=opts.repeat),opts.repeat=0,opts.groupSeparator===opts.radixPoint&&("."===opts.radixPoint?opts.groupSeparator=",":","===opts.radixPoint?opts.groupSeparator=".":opts.groupSeparator="")," "===opts.groupSeparator&&(opts.skipOptionalPartCharacter=void 0),opts.autoGroup=opts.autoGroup&&""!==opts.groupSeparator,opts.autoGroup&&("string"==typeof opts.groupSize&&isFinite(opts.groupSize)&&(opts.groupSize=parseInt(opts.groupSize)),isFinite(opts.integerDigits))){var seps=Math.floor(opts.integerDigits / opts.groupSize),mod=opts.integerDigits%opts.groupSize;opts.integerDigits=parseInt(opts.integerDigits)+(0===mod?seps-1:seps),opts.integerDigits<1&&(opts.integerDigits="*");}
opts.placeholder.length>1&&(opts.placeholder=opts.placeholder.charAt(0)),"radixFocus"===opts.positionCaretOnClick&&""===opts.placeholder&&opts.integerOptional===!1&&(opts.positionCaretOnClick="lvp"),opts.definitions[";"]=opts.definitions["~"],opts.definitions[";"].definitionSymbol="~",opts.numericInput===!0&&(opts.positionCaretOnClick="radixFocus"===opts.positionCaretOnClick?"lvp":opts.positionCaretOnClick,opts.digitsOptional=!1,isNaN(opts.digits)&&(opts.digits=2),opts.decimalProtect=!1);var mask="[+]";if(mask+=autoEscape(opts.prefix),mask+=opts.integerOptional===!0?"~{1,"+opts.integerDigits+"}":"~{"+opts.integerDigits+"}",void 0!==opts.digits){opts.decimalProtect&&(opts.radixPointDefinitionSymbol=":");var dq=opts.digits.toString().split(",");isFinite(dq[0]&&dq[1]&&isFinite(dq[1]))?mask+=(opts.decimalProtect?":":opts.radixPoint)+";{"+opts.digits+"}":(isNaN(opts.digits)||parseInt(opts.digits)>0)&&(mask+=opts.digitsOptional?"["+(opts.decimalProtect?":":opts.radixPoint)+";{1,"+opts.digits+"}]":(opts.decimalProtect?":":opts.radixPoint)+";{"+opts.digits+"}");}
return mask+=autoEscape(opts.suffix),mask+="[-]",opts.greedy=!1,null!==opts.min&&(opts.min=opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.min=opts.min.replace(opts.radixPoint,"."))),null!==opts.max&&(opts.max=opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.max=opts.max.replace(opts.radixPoint,"."))),mask;},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowPlus:!0,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",postFormat:function(buffer,pos,opts){opts.numericInput===!0&&(buffer=buffer.reverse(),isFinite(pos)&&(pos=buffer.join("").length-pos-1));var i,l;pos=pos>=buffer.length?buffer.length-1:pos<0?0:pos;var charAtPos=buffer[pos],cbuf=buffer.slice();charAtPos===opts.groupSeparator&&(cbuf.splice(pos--,1),charAtPos=cbuf[pos]);var isNegative=cbuf.join("").match(new RegExp("^"+Inputmask.escapeRegex(opts.negationSymbol.front)));isNegative=null!==isNegative&&1===isNegative.length,pos>(isNegative?opts.negationSymbol.front.length:0)+opts.prefix.length&&pos<cbuf.length-opts.suffix.length&&(cbuf[pos]="!");var bufVal=cbuf.join(""),bufValOrigin=cbuf.join();if(isNegative&&(bufVal=bufVal.replace(new RegExp("^"+Inputmask.escapeRegex(opts.negationSymbol.front)),""),bufVal=bufVal.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back)+"$"),"")),bufVal=bufVal.replace(new RegExp(Inputmask.escapeRegex(opts.suffix)+"$"),""),bufVal=bufVal.replace(new RegExp("^"+Inputmask.escapeRegex(opts.prefix)),""),bufVal.length>0&&opts.autoGroup||bufVal.indexOf(opts.groupSeparator)!==-1){var escapedGroupSeparator=Inputmask.escapeRegex(opts.groupSeparator);bufVal=bufVal.replace(new RegExp(escapedGroupSeparator,"g"),"");var radixSplit=bufVal.split(charAtPos===opts.radixPoint?"!":opts.radixPoint);if(bufVal=""===opts.radixPoint?bufVal:radixSplit[0],charAtPos!==opts.negationSymbol.front&&(bufVal=bufVal.replace("!","?")),bufVal.length>opts.groupSize)for(var reg=new RegExp("([-+]?[\\d?]+)([\\d?]{"+opts.groupSize+"})");reg.test(bufVal)&&""!==opts.groupSeparator;)bufVal=bufVal.replace(reg,"$1"+opts.groupSeparator+"$2"),bufVal=bufVal.replace(opts.groupSeparator+opts.groupSeparator,opts.groupSeparator);bufVal=bufVal.replace("?","!"),""!==opts.radixPoint&&radixSplit.length>1&&(bufVal+=(charAtPos===opts.radixPoint?"!":opts.radixPoint)+radixSplit[1]);}
bufVal=opts.prefix+bufVal+opts.suffix,isNegative&&(bufVal=opts.negationSymbol.front+bufVal+opts.negationSymbol.back);var needsRefresh=bufValOrigin!==bufVal.split("").join(),newPos=$.inArray("!",bufVal);if(newPos===-1&&(newPos=pos),needsRefresh){for(buffer.length=bufVal.length,i=0,l=bufVal.length;i<l;i++)buffer[i]=bufVal.charAt(i);buffer[newPos]=charAtPos;}
return newPos=opts.numericInput&&isFinite(pos)?buffer.join("").length-newPos-1:newPos,opts.numericInput&&(buffer=buffer.reverse(),$.inArray(opts.radixPoint,buffer)<newPos&&buffer.join("").length-opts.suffix.length!==newPos&&(newPos-=1)),{pos:newPos,refreshFromBuffer:needsRefresh,buffer:buffer,isNegative:isNegative};},onBeforeWrite:function(e,buffer,caretPos,opts){var rslt;if(e&&("blur"===e.type||"checkval"===e.type||"keydown"===e.type)){var maskedValue=opts.numericInput?buffer.slice().reverse().join(""):buffer.join(""),processValue=maskedValue.replace(opts.prefix,"");processValue=processValue.replace(opts.suffix,""),processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(processValue=processValue.replace(opts.radixPoint,"."));var isNegative=processValue.match(new RegExp("[-"+Inputmask.escapeRegex(opts.negationSymbol.front)+"]","g"));if(isNegative=null!==isNegative&&1===isNegative.length,processValue=processValue.replace(new RegExp("[-"+Inputmask.escapeRegex(opts.negationSymbol.front)+"]","g"),""),processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back)+"$"),""),isNaN(opts.placeholder)&&(processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder),"g"),"")),processValue=processValue===opts.negationSymbol.front?processValue+"0":processValue,""!==processValue&&isFinite(processValue)){var floatValue=parseFloat(processValue),signedFloatValue=isNegative?floatValue*-1:floatValue;if(null!==opts.min&&isFinite(opts.min)&&signedFloatValue<parseFloat(opts.min)?(floatValue=Math.abs(opts.min),isNegative=opts.min<0,maskedValue=void 0):null!==opts.max&&isFinite(opts.max)&&signedFloatValue>parseFloat(opts.max)&&(floatValue=Math.abs(opts.max),isNegative=opts.max<0,maskedValue=void 0),processValue=floatValue.toString().replace(".",opts.radixPoint).split(""),isFinite(opts.digits)){var radixPosition=$.inArray(opts.radixPoint,processValue),rpb=$.inArray(opts.radixPoint,maskedValue);radixPosition===-1&&(processValue.push(opts.radixPoint),radixPosition=processValue.length-1);for(var i=1;i<=opts.digits;i++)opts.digitsOptional||void 0!==processValue[radixPosition+i]&&processValue[radixPosition+i]!==opts.placeholder.charAt(0)?rpb!==-1&&void 0!==maskedValue[rpb+i]&&(processValue[radixPosition+i]=processValue[radixPosition+i]||maskedValue[rpb+i]):processValue[radixPosition+i]="0";processValue[processValue.length-1]===opts.radixPoint&&delete processValue[processValue.length-1];}
if(floatValue.toString()!==processValue&&floatValue.toString()+"."!==processValue||isNegative)return processValue=(opts.prefix+processValue.join("")).split(""),!isNegative||0===floatValue&&"blur"===e.type||(processValue.unshift(opts.negationSymbol.front),processValue.push(opts.negationSymbol.back)),opts.numericInput&&(processValue=processValue.reverse()),rslt=opts.postFormat(processValue,opts.numericInput?caretPos:caretPos-1,opts),rslt.buffer&&(rslt.refreshFromBuffer=rslt.buffer.join("")!==buffer.join("")),rslt;}}
if(opts.autoGroup)return rslt=opts.postFormat(buffer,opts.numericInput?caretPos:caretPos-1,opts),rslt.caret=caretPos<(rslt.isNegative?opts.negationSymbol.front.length:0)+opts.prefix.length||caretPos>rslt.buffer.length-(rslt.isNegative?opts.negationSymbol.back.length:0)?rslt.pos:rslt.pos+1,rslt;},regex:{integerPart:function(opts){return new RegExp("["+Inputmask.escapeRegex(opts.negationSymbol.front)+"+]?\\d+");},integerNPart:function(opts){return new RegExp("[\\d"+Inputmask.escapeRegex(opts.groupSeparator)+Inputmask.escapeRegex(opts.placeholder.charAt(0))+"]+");}},signHandler:function(chrs,maskset,pos,strict,opts){if(!strict&&opts.allowMinus&&"-"===chrs||opts.allowPlus&&"+"===chrs){var matchRslt=maskset.buffer.join("").match(opts.regex.integerPart(opts));if(matchRslt&&matchRslt[0].length>0)return maskset.buffer[matchRslt.index]===("-"===chrs?"+":opts.negationSymbol.front)?"-"===chrs?""!==opts.negationSymbol.back?{pos:0,c:opts.negationSymbol.front,remove:0,caret:pos,insert:{pos:maskset.buffer.length-1,c:opts.negationSymbol.back}}:{pos:0,c:opts.negationSymbol.front,remove:0,caret:pos}:""!==opts.negationSymbol.back?{pos:0,c:"+",remove:[0,maskset.buffer.length-1],caret:pos}:{pos:0,c:"+",remove:0,caret:pos}:maskset.buffer[0]===("-"===chrs?opts.negationSymbol.front:"+")?"-"===chrs&&""!==opts.negationSymbol.back?{remove:[0,maskset.buffer.length-1],caret:pos-1}:{remove:0,caret:pos-1}:"-"===chrs?""!==opts.negationSymbol.back?{pos:0,c:opts.negationSymbol.front,caret:pos+1,insert:{pos:maskset.buffer.length,c:opts.negationSymbol.back}}:{pos:0,c:opts.negationSymbol.front,caret:pos+1}:{pos:0,c:chrs,caret:pos+1};}
return!1;},radixHandler:function(chrs,maskset,pos,strict,opts){if(!strict&&opts.numericInput!==!0&&chrs===opts.radixPoint&&void 0!==opts.digits&&(isNaN(opts.digits)||parseInt(opts.digits)>0)){var radixPos=$.inArray(opts.radixPoint,maskset.buffer),integerValue=maskset.buffer.join("").match(opts.regex.integerPart(opts));if(radixPos!==-1&&maskset.validPositions[radixPos])return maskset.validPositions[radixPos-1]?{caret:radixPos+1}:{pos:integerValue.index,c:integerValue[0],caret:radixPos+1};if(!integerValue||"0"===integerValue[0]&&integerValue.index+1!==pos)return maskset.buffer[integerValue?integerValue.index:pos]="0",{pos:(integerValue?integerValue.index:pos)+1,c:opts.radixPoint};}
return!1;},leadingZeroHandler:function(chrs,maskset,pos,strict,opts,isSelection){if(!strict){var buffer=maskset.buffer.slice("");if(buffer.splice(0,opts.prefix.length),buffer.splice(buffer.length-opts.suffix.length,opts.suffix.length),opts.numericInput===!0){var buffer=buffer.reverse(),bufferChar=buffer[0];if("0"===bufferChar&&void 0===maskset.validPositions[pos-1])return{pos:pos,remove:buffer.length-1};}else{pos-=opts.prefix.length;var radixPosition=$.inArray(opts.radixPoint,buffer),matchRslt=buffer.slice(0,radixPosition!==-1?radixPosition:void 0).join("").match(opts.regex.integerNPart(opts));if(matchRslt&&(radixPosition===-1||pos<=radixPosition)){var decimalPart=radixPosition===-1?0:parseInt(buffer.slice(radixPosition+1).join(""));if(0===matchRslt[0].indexOf(""!==opts.placeholder?opts.placeholder.charAt(0):"0")&&(matchRslt.index+1===pos||isSelection!==!0&&0===decimalPart))return maskset.buffer.splice(matchRslt.index+opts.prefix.length,1),{pos:matchRslt.index+opts.prefix.length,remove:matchRslt.index+opts.prefix.length};if("0"===chrs&&pos<=matchRslt.index&&matchRslt[0]!==opts.groupSeparator)return!1;}}}
return!0;},definitions:{"~":{validator:function(chrs,maskset,pos,strict,opts,isSelection){var isValid=opts.signHandler(chrs,maskset,pos,strict,opts);if(!isValid&&(isValid=opts.radixHandler(chrs,maskset,pos,strict,opts),!isValid&&(isValid=strict?new RegExp("[0-9"+Inputmask.escapeRegex(opts.groupSeparator)+"]").test(chrs):new RegExp("[0-9]").test(chrs),isValid===!0&&(isValid=opts.leadingZeroHandler(chrs,maskset,pos,strict,opts,isSelection),isValid===!0)))){var radixPosition=$.inArray(opts.radixPoint,maskset.buffer);isValid=radixPosition!==-1&&(opts.digitsOptional===!1||maskset.validPositions[pos])&&opts.numericInput!==!0&&pos>radixPosition&&!strict?{pos:pos,remove:pos}:{pos:pos};}
return isValid;},cardinality:1},"+":{validator:function(chrs,maskset,pos,strict,opts){var isValid=opts.signHandler(chrs,maskset,pos,strict,opts);return!isValid&&(strict&&opts.allowMinus&&chrs===opts.negationSymbol.front||opts.allowMinus&&"-"===chrs||opts.allowPlus&&"+"===chrs)&&(isValid=!(!strict&&"-"===chrs)||(""!==opts.negationSymbol.back?{pos:pos,c:"-"===chrs?opts.negationSymbol.front:"+",caret:pos+1,insert:{pos:maskset.buffer.length,c:opts.negationSymbol.back}}:{pos:pos,c:"-"===chrs?opts.negationSymbol.front:"+",caret:pos+1})),isValid;},cardinality:1,placeholder:""},"-":{validator:function(chrs,maskset,pos,strict,opts){var isValid=opts.signHandler(chrs,maskset,pos,strict,opts);return!isValid&&strict&&opts.allowMinus&&chrs===opts.negationSymbol.back&&(isValid=!0),isValid;},cardinality:1,placeholder:""},":":{validator:function(chrs,maskset,pos,strict,opts){var isValid=opts.signHandler(chrs,maskset,pos,strict,opts);if(!isValid){var radix="["+Inputmask.escapeRegex(opts.radixPoint)+"]";isValid=new RegExp(radix).test(chrs),isValid&&maskset.validPositions[pos]&&maskset.validPositions[pos].match.placeholder===opts.radixPoint&&(isValid={caret:pos+1});}
return isValid;},cardinality:1,placeholder:function(opts){return opts.radixPoint;}}},onUnMask:function(maskedValue,unmaskedValue,opts){if(""===unmaskedValue&&opts.nullable===!0)return unmaskedValue;var processValue=maskedValue.replace(opts.prefix,"");return processValue=processValue.replace(opts.suffix,""),processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),""),opts.unmaskAsNumber?(""!==opts.radixPoint&&processValue.indexOf(opts.radixPoint)!==-1&&(processValue=processValue.replace(Inputmask.escapeRegex.call(this,opts.radixPoint),".")),Number(processValue)):processValue;},isComplete:function(buffer,opts){var maskedValue=buffer.join(""),bufClone=buffer.slice();if(opts.postFormat(bufClone,0,opts),bufClone.join("")!==maskedValue)return!1;var processValue=maskedValue.replace(opts.prefix,"");return processValue=processValue.replace(opts.suffix,""),processValue=processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(processValue=processValue.replace(Inputmask.escapeRegex(opts.radixPoint),".")),isFinite(processValue);},onBeforeMask:function(initialValue,opts){if(opts.numericInput===!0&&(initialValue=initialValue.split("").reverse().join("")),""!==opts.radixPoint&&isFinite(initialValue)){var vs=initialValue.split("."),groupSize=""!==opts.groupSeparator?parseInt(opts.groupSize):0;2===vs.length&&(vs[0].length>groupSize||vs[1].length>groupSize)&&(initialValue=initialValue.toString().replace(".",opts.radixPoint));}
var kommaMatches=initialValue.match(/,/g),dotMatches=initialValue.match(/\./g);if(dotMatches&&kommaMatches?dotMatches.length>kommaMatches.length?(initialValue=initialValue.replace(/\./g,""),initialValue=initialValue.replace(",",opts.radixPoint)):kommaMatches.length>dotMatches.length?(initialValue=initialValue.replace(/,/g,""),initialValue=initialValue.replace(".",opts.radixPoint)):initialValue=initialValue.indexOf(".")<initialValue.indexOf(",")?initialValue.replace(/\./g,""):initialValue=initialValue.replace(/,/g,""):initialValue=initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"),""),0===opts.digits&&(initialValue.indexOf(".")!==-1?initialValue=initialValue.substring(0,initialValue.indexOf(".")):initialValue.indexOf(",")!==-1&&(initialValue=initialValue.substring(0,initialValue.indexOf(",")))),""!==opts.radixPoint&&isFinite(opts.digits)&&initialValue.indexOf(opts.radixPoint)!==-1){var valueParts=initialValue.split(opts.radixPoint),decPart=valueParts[1].match(new RegExp("\\d*"))[0];if(parseInt(opts.digits)<decPart.toString().length){var digitsFactor=Math.pow(10,parseInt(opts.digits));initialValue=initialValue.replace(Inputmask.escapeRegex(opts.radixPoint),"."),initialValue=Math.round(parseFloat(initialValue)*digitsFactor)/ digitsFactor,initialValue=initialValue.toString().replace(".",opts.radixPoint);}}
return opts.numericInput===!0&&(initialValue=initialValue.split("").reverse().join("")),initialValue.toString();},canClearPosition:function(maskset,position,lvp,strict,opts){var positionInput=maskset.validPositions[position].input,canClear=positionInput!==opts.radixPoint||null!==maskset.validPositions[position].match.fn&&opts.decimalProtect===!1||isFinite(positionInput)||position===lvp||positionInput===opts.groupSeparator||positionInput===opts.negationSymbol.front||positionInput===opts.negationSymbol.back;return canClear;},onKeyDown:function(e,buffer,caretPos,opts){var $input=$(this);if(e.ctrlKey)switch(e.keyCode){case Inputmask.keyCode.UP:$input.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(opts.step)),$input.trigger("setvalue");break;case Inputmask.keyCode.DOWN:$input.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(opts.step)),$input.trigger("setvalue");}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowPlus:!1,allowMinus:!1}}),Inputmask;}(jQuery,Inputmask),function($,Inputmask){function maskSort(a,b){var maska=(a.mask||a).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),maskb=(b.mask||b).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),maskas=(a.mask||a).split("#")[0],maskbs=(b.mask||b).split("#")[0];return 0===maskbs.indexOf(maskas)?-1:0===maskas.indexOf(maskbs)?1:maska.localeCompare(maskb);}
var analyseMaskBase=Inputmask.prototype.analyseMask;return Inputmask.prototype.analyseMask=function(mask,opts){function reduceVariations(masks,previousVariation,previousmaskGroup){previousVariation=previousVariation||"",previousmaskGroup=previousmaskGroup||maskGroups,""!==previousVariation&&(previousmaskGroup[previousVariation]={});for(var variation="",maskGroup=previousmaskGroup[previousVariation]||previousmaskGroup,i=masks.length-1;i>=0;i--)mask=masks[i].mask||masks[i],variation=mask.substr(0,1),maskGroup[variation]=maskGroup[variation]||[],maskGroup[variation].unshift(mask.substr(1)),masks.splice(i,1);for(var ndx in maskGroup)maskGroup[ndx].length>500&&reduceVariations(maskGroup[ndx].slice(),ndx,maskGroup);}
function rebuild(maskGroup){var mask="",submasks=[];for(var ndx in maskGroup)$.isArray(maskGroup[ndx])?1===maskGroup[ndx].length?submasks.push(ndx+maskGroup[ndx]):submasks.push(ndx+opts.groupmarker.start+maskGroup[ndx].join(opts.groupmarker.end+opts.alternatormarker+opts.groupmarker.start)+opts.groupmarker.end):submasks.push(ndx+rebuild(maskGroup[ndx]));return mask+=1===submasks.length?submasks[0]:opts.groupmarker.start+submasks.join(opts.groupmarker.end+opts.alternatormarker+opts.groupmarker.start)+opts.groupmarker.end;}
var maskGroups={};opts.phoneCodes&&opts.phoneCodes.length>1e3&&(mask=mask.substr(1,mask.length-2),reduceVariations(mask.split(opts.groupmarker.end+opts.alternatormarker+opts.groupmarker.start)),mask=rebuild(maskGroups));var mt=analyseMaskBase.call(this,mask,opts);return mt;},Inputmask.extendAliases({abstractphone:{groupmarker:{start:"<",end:">"},countrycode:"",phoneCodes:[],mask:function(opts){return opts.definitions={"#":opts.definitions[9]},opts.phoneCodes.sort(maskSort);},keepStatic:!0,onBeforeMask:function(value,opts){var processedValue=value.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(processedValue.indexOf(opts.countrycode)>1||processedValue.indexOf(opts.countrycode)===-1)&&(processedValue="+"+opts.countrycode+processedValue),processedValue;},onUnMask:function(maskedValue,unmaskedValue,opts){return unmaskedValue;},inputmode:"tel"}}),Inputmask;}(jQuery,Inputmask),function($,Inputmask){return Inputmask.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(buffer,opts){return new RegExp(opts.regex).test(buffer.join(""));},definitions:{r:{validator:function(chrs,maskset,pos,strict,opts){function RegexToken(isGroup,isQuantifier){this.matches=[],this.isGroup=isGroup||!1,this.isQuantifier=isQuantifier||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0;}
function analyseRegex(){var match,m,currentToken=new RegexToken(),opengroups=[];for(opts.regexTokens=[];match=opts.tokenizer.exec(opts.regex);)switch(m=match[0],m.charAt(0)){case"(":opengroups.push(new RegexToken((!0)));break;case")":groupToken=opengroups.pop(),opengroups.length>0?opengroups[opengroups.length-1].matches.push(groupToken):currentToken.matches.push(groupToken);break;case"{":case"+":case"*":var quantifierToken=new RegexToken((!1),(!0));m=m.replace(/[{}]/g,"");var mq=m.split(","),mq0=isNaN(mq[0])?mq[0]:parseInt(mq[0]),mq1=1===mq.length?mq0:isNaN(mq[1])?mq[1]:parseInt(mq[1]);if(quantifierToken.quantifier={min:mq0,max:mq1},opengroups.length>0){var matches=opengroups[opengroups.length-1].matches;match=matches.pop(),match.isGroup||(groupToken=new RegexToken((!0)),groupToken.matches.push(match),match=groupToken),matches.push(match),matches.push(quantifierToken);}else match=currentToken.matches.pop(),match.isGroup||(groupToken=new RegexToken((!0)),groupToken.matches.push(match),match=groupToken),currentToken.matches.push(match),currentToken.matches.push(quantifierToken);break;default:opengroups.length>0?opengroups[opengroups.length-1].matches.push(m):currentToken.matches.push(m);}
currentToken.matches.length>0&&opts.regexTokens.push(currentToken);}
function validateRegexToken(token,fromGroup){var isvalid=!1;fromGroup&&(regexPart+="(",openGroupCount++);for(var mndx=0;mndx<token.matches.length;mndx++){var matchToken=token.matches[mndx];if(matchToken.isGroup===!0)isvalid=validateRegexToken(matchToken,!0);else if(matchToken.isQuantifier===!0){var crrntndx=$.inArray(matchToken,token.matches),matchGroup=token.matches[crrntndx-1],regexPartBak=regexPart;if(isNaN(matchToken.quantifier.max)){for(;matchToken.repeaterPart&&matchToken.repeaterPart!==regexPart&&matchToken.repeaterPart.length>regexPart.length&&!(isvalid=validateRegexToken(matchGroup,!0)););isvalid=isvalid||validateRegexToken(matchGroup,!0),isvalid&&(matchToken.repeaterPart=regexPart),regexPart=regexPartBak+matchToken.quantifier.max;}else{for(var i=0,qm=matchToken.quantifier.max-1;i<qm&&!(isvalid=validateRegexToken(matchGroup,!0));i++);regexPart=regexPartBak+"{"+matchToken.quantifier.min+","+matchToken.quantifier.max+"}";}}else if(void 0!==matchToken.matches)for(var k=0;k<matchToken.length&&!(isvalid=validateRegexToken(matchToken[k],fromGroup));k++);else{var testExp;if("["==matchToken.charAt(0)){testExp=regexPart,testExp+=matchToken;for(var j=0;j<openGroupCount;j++)testExp+=")";var exp=new RegExp("^("+testExp+")$");isvalid=exp.test(bufferStr);}else for(var l=0,tl=matchToken.length;l<tl;l++)if("\\"!==matchToken.charAt(l)){testExp=regexPart,testExp+=matchToken.substr(0,l+1),testExp=testExp.replace(/\|$/,"");for(var j=0;j<openGroupCount;j++)testExp+=")";var exp=new RegExp("^("+testExp+")$");if(isvalid=exp.test(bufferStr))break;}
regexPart+=matchToken;}
if(isvalid)break;}
return fromGroup&&(regexPart+=")",openGroupCount--),isvalid;}
var bufferStr,groupToken,cbuffer=maskset.buffer.slice(),regexPart="",isValid=!1,openGroupCount=0;null===opts.regexTokens&&analyseRegex(),cbuffer.splice(pos,0,chrs),bufferStr=cbuffer.join("");for(var i=0;i<opts.regexTokens.length;i++){var regexToken=opts.regexTokens[i];if(isValid=validateRegexToken(regexToken,regexToken.isGroup))break;}
return isValid;},cardinality:1}}}}),Inputmask;}(jQuery,Inputmask);;;(function($){$.fn.yiiActiveForm=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}else{$.error('Method '+method+' does not exist on jQuery.yiiActiveForm');return false;}};var events={beforeValidate:'beforeValidate',afterValidate:'afterValidate',beforeValidateAttribute:'beforeValidateAttribute',afterValidateAttribute:'afterValidateAttribute',beforeSubmit:'beforeSubmit',ajaxBeforeSend:'ajaxBeforeSend',ajaxComplete:'ajaxComplete',afterInit:'afterInit'};var defaults={encodeErrorSummary:true,errorSummary:'.error-summary',validateOnSubmit:true,errorCssClass:'has-error',successCssClass:'has-success',validatingCssClass:'validating',ajaxParam:'ajax',ajaxDataType:'json',validationUrl:undefined,scrollToError:true,scrollToErrorOffset:0};var attributeDefaults={id:undefined,name:undefined,container:undefined,input:undefined,error:'.help-block',encodeError:true,validateOnChange:true,validateOnBlur:true,validateOnType:false,validationDelay:500,enableAjaxValidation:false,validate:undefined,status:0,cancelled:false,value:undefined,updateAriaInvalid:true};var submitDefer;var setSubmitFinalizeDefer=function($form){submitDefer=$.Deferred();$form.data('yiiSubmitFinalizePromise',submitDefer.promise());};var submitFinalize=function($form){if(submitDefer){submitDefer.resolve();submitDefer=undefined;$form.removeData('yiiSubmitFinalizePromise');}};var methods={init:function(attributes,options){return this.each(function(){var $form=$(this);if($form.data('yiiActiveForm')){return;}
var settings=$.extend({},defaults,options||{});if(settings.validationUrl===undefined){settings.validationUrl=$form.attr('action');}
$.each(attributes,function(i){attributes[i]=$.extend({value:getValue($form,this)},attributeDefaults,this);watchAttribute($form,attributes[i]);});$form.data('yiiActiveForm',{settings:settings,attributes:attributes,submitting:false,validated:false,options:getFormOptions($form)});$form.bind('reset.yiiActiveForm',methods.resetForm);if(settings.validateOnSubmit){$form.on('mouseup.yiiActiveForm keyup.yiiActiveForm',':submit',function(){$form.data('yiiActiveForm').submitObject=$(this);});$form.on('submit.yiiActiveForm',methods.submitForm);}
var event=$.Event(events.afterInit);$form.trigger(event);});},add:function(attribute){var $form=$(this);attribute=$.extend({value:getValue($form,attribute)},attributeDefaults,attribute);$form.data('yiiActiveForm').attributes.push(attribute);watchAttribute($form,attribute);},remove:function(id){var $form=$(this),attributes=$form.data('yiiActiveForm').attributes,index=-1,attribute=undefined;$.each(attributes,function(i){if(attributes[i]['id']==id){index=i;attribute=attributes[i];return false;}});if(index>=0){attributes.splice(index,1);unwatchAttribute($form,attribute);}
return attribute;},validateAttribute:function(id){var attribute=methods.find.call(this,id);if(attribute!=undefined){validateAttribute($(this),attribute,true);}},find:function(id){var attributes=$(this).data('yiiActiveForm').attributes,result=undefined;$.each(attributes,function(i){if(attributes[i]['id']==id){result=attributes[i];return false;}});return result;},destroy:function(){return this.each(function(){$(this).unbind('.yiiActiveForm');$(this).removeData('yiiActiveForm');});},data:function(){return this.data('yiiActiveForm');},validate:function(forceValidate){if(forceValidate){$(this).data('yiiActiveForm').submitting=true;}
var $form=$(this),data=$form.data('yiiActiveForm'),needAjaxValidation=false,messages={},deferreds=deferredArray(),submitting=data.submitting&&!forceValidate;if(data.submitting){var event=$.Event(events.beforeValidate);$form.trigger(event,[messages,deferreds]);if(event.result===false){data.submitting=false;submitFinalize($form);return;}}
$.each(data.attributes,function(){this.$form=$form;if(!$(this.input).is(":disabled")){this.cancelled=false;if(data.submitting||this.status===2||this.status===3){var msg=messages[this.id];if(msg===undefined){msg=[];messages[this.id]=msg;}
var event=$.Event(events.beforeValidateAttribute);$form.trigger(event,[this,msg,deferreds]);if(event.result!==false){if(this.validate){this.validate(this,getValue($form,this),msg,deferreds,$form);}
if(this.enableAjaxValidation){needAjaxValidation=true;}}else{this.cancelled=true;}}}});$.when.apply(this,deferreds).always(function(){for(var i in messages){if(0===messages[i].length){delete messages[i];}}
if(needAjaxValidation&&($.isEmptyObject(messages)||data.submitting)){var $button=data.submitObject,extData='&'+data.settings.ajaxParam+'='+$form.attr('id');if($button&&$button.length&&$button.attr('name')){extData+='&'+$button.attr('name')+'='+$button.attr('value');}
$.ajax({url:data.settings.validationUrl,type:$form.attr('method'),data:$form.serialize()+extData,dataType:data.settings.ajaxDataType,complete:function(jqXHR,textStatus){$form.trigger(events.ajaxComplete,[jqXHR,textStatus]);},beforeSend:function(jqXHR,settings){$form.trigger(events.ajaxBeforeSend,[jqXHR,settings]);},success:function(msgs){if(msgs!==null&&typeof msgs==='object'){$.each(data.attributes,function(){if(!this.enableAjaxValidation||this.cancelled){delete msgs[this.id];}});updateInputs($form,$.extend(messages,msgs),submitting);}else{updateInputs($form,messages,submitting);}},error:function(){data.submitting=false;submitFinalize($form);}});}else if(data.submitting){setTimeout(function(){updateInputs($form,messages,submitting);},200);}else{updateInputs($form,messages,submitting);}});},submitForm:function(){var $form=$(this),data=$form.data('yiiActiveForm');if(data.validated){data.submitting=false;var event=$.Event(events.beforeSubmit);$form.trigger(event);if(event.result===false){data.validated=false;submitFinalize($form);return false;}
updateHiddenButton($form);return true;}else{setSubmitFinalizeDefer($form);if(data.settings.timer!==undefined){clearTimeout(data.settings.timer);}
data.submitting=true;methods.validate.call($form);return false;}},resetForm:function(){var $form=$(this);var data=$form.data('yiiActiveForm');setTimeout(function(){$.each(data.attributes,function(){this.value=getValue($form,this);this.status=0;var $container=$form.find(this.container);$container.removeClass(data.settings.validatingCssClass+' '+
data.settings.errorCssClass+' '+
data.settings.successCssClass);$container.find(this.error).html('');});$form.find(data.settings.errorSummary).hide().find('ul').html('');},1);},updateMessages:function(messages,summary){var $form=$(this);var data=$form.data('yiiActiveForm');$.each(data.attributes,function(){updateInput($form,this,messages);});if(summary){updateSummary($form,messages);}},updateAttribute:function(id,messages){var attribute=methods.find.call(this,id);if(attribute!=undefined){var msg={};msg[id]=messages;updateInput($(this),attribute,msg);}}};var watchAttribute=function($form,attribute){var $input=findInput($form,attribute);if(attribute.validateOnChange){$input.on('change.yiiActiveForm',function(){validateAttribute($form,attribute,false);});}
if(attribute.validateOnBlur){$input.on('blur.yiiActiveForm',function(){if(attribute.status==0||attribute.status==1){validateAttribute($form,attribute,true);}});}
if(attribute.validateOnType){$input.on('keyup.yiiActiveForm',function(e){if($.inArray(e.which,[16,17,18,37,38,39,40])!==-1){return;}
if(attribute.value!==getValue($form,attribute)){validateAttribute($form,attribute,false,attribute.validationDelay);}});}};var unwatchAttribute=function($form,attribute){findInput($form,attribute).off('.yiiActiveForm');};var validateAttribute=function($form,attribute,forceValidate,validationDelay){var data=$form.data('yiiActiveForm');if(forceValidate){attribute.status=2;}
$.each(data.attributes,function(){if(this.value!==getValue($form,this)){this.status=2;forceValidate=true;}});if(!forceValidate){return;}
if(data.settings.timer!==undefined){clearTimeout(data.settings.timer);}
data.settings.timer=setTimeout(function(){if(data.submitting||$form.is(':hidden')){return;}
$.each(data.attributes,function(){if(this.status===2){this.status=3;$form.find(this.container).addClass(data.settings.validatingCssClass);}});methods.validate.call($form);},validationDelay?validationDelay:200);};var deferredArray=function(){var array=[];array.add=function(callback){this.push(new $.Deferred(callback));};return array;};var buttonOptions=['action','target','method','enctype'];var getFormOptions=function($form){var attributes={};for(var i=0;i<buttonOptions.length;i++){attributes[buttonOptions[i]]=$form.attr(buttonOptions[i]);}
return attributes;};var applyButtonOptions=function($form,$button){for(var i=0;i<buttonOptions.length;i++){var value=$button.attr('form'+buttonOptions[i]);if(value){$form.attr(buttonOptions[i],value);}}};var restoreButtonOptions=function($form){var data=$form.data('yiiActiveForm');for(var i=0;i<buttonOptions.length;i++){$form.attr(buttonOptions[i],data.options[buttonOptions[i]]||null);}};var updateInputs=function($form,messages,submitting){var data=$form.data('yiiActiveForm');if(data===undefined){return false;}
if(submitting){var errorAttributes=[];$.each(data.attributes,function(){if(!$(this.input).is(":disabled")&&!this.cancelled&&updateInput($form,this,messages)){errorAttributes.push(this);}});$form.trigger(events.afterValidate,[messages,errorAttributes]);updateSummary($form,messages);if(errorAttributes.length){if(data.settings.scrollToError){var top=$form.find($.map(errorAttributes,function(attribute){return attribute.input;}).join(',')).first().closest(':visible').offset().top-data.settings.scrollToErrorOffset;if(top<0){top=0;}else if(top>$(document).height()){top=$(document).height();}
var wtop=$(window).scrollTop();if(top<wtop||top>wtop+$(window).height()){$(window).scrollTop(top);}}
data.submitting=false;}else{data.validated=true;if(data.submitObject){applyButtonOptions($form,data.submitObject);}
$form.submit();if(data.submitObject){restoreButtonOptions($form);}}}else{$.each(data.attributes,function(){if(!this.cancelled&&(this.status===2||this.status===3)){updateInput($form,this,messages);}});}
submitFinalize($form);};var updateHiddenButton=function($form){var data=$form.data('yiiActiveForm');var $button=data.submitObject||$form.find(':submit:first');if($button.length&&$button.attr('type')=='submit'&&$button.attr('name')){var $hiddenButton=$('input[type="hidden"][name="'+$button.attr('name')+'"]',$form);if(!$hiddenButton.length){$('<input>').attr({type:'hidden',name:$button.attr('name'),value:$button.attr('value')}).appendTo($form);}else{$hiddenButton.attr('value',$button.attr('value'));}}};var updateInput=function($form,attribute,messages){var data=$form.data('yiiActiveForm'),$input=findInput($form,attribute),hasError=false;if(!$.isArray(messages[attribute.id])){messages[attribute.id]=[];}
$form.trigger(events.afterValidateAttribute,[attribute,messages[attribute.id]]);attribute.status=1;if($input.length){hasError=messages[attribute.id].length>0;var $container=$form.find(attribute.container);var $error=$container.find(attribute.error);updateAriaInvalid($form,attribute,hasError);if(hasError){if(attribute.encodeError){$error.text(messages[attribute.id][0]);}else{$error.html(messages[attribute.id][0]);}
$container.removeClass(data.settings.validatingCssClass+' '+data.settings.successCssClass).addClass(data.settings.errorCssClass);}else{$error.empty();$container.removeClass(data.settings.validatingCssClass+' '+data.settings.errorCssClass+' ').addClass(data.settings.successCssClass);}
attribute.value=getValue($form,attribute);}
return hasError;};var updateSummary=function($form,messages){var data=$form.data('yiiActiveForm'),$summary=$form.find(data.settings.errorSummary),$ul=$summary.find('ul').empty();if($summary.length&&messages){$.each(data.attributes,function(){if($.isArray(messages[this.id])&&messages[this.id].length){var error=$('<li/>');if(data.settings.encodeErrorSummary){error.text(messages[this.id][0]);}else{error.html(messages[this.id][0]);}
$ul.append(error);}});$summary.toggle($ul.find('li').length>0);}};var getValue=function($form,attribute){var $input=findInput($form,attribute);var type=$input.attr('type');if(type==='checkbox'||type==='radio'){var $realInput=$input.filter(':checked');if(!$realInput.length){$realInput=$form.find('input[type=hidden][name="'+$input.attr('name')+'"]');}
return $realInput.val();}else{return $input.val();}};var findInput=function($form,attribute){var $input=$form.find(attribute.input);if($input.length&&$input[0].tagName.toLowerCase()==='div'){return $input.find('input');}else{return $input;}};var updateAriaInvalid=function($form,attribute,hasError){if(attribute.updateAriaInvalid){$form.find(attribute.input).attr('aria-invalid',hasError?'true':'false');}}})(window.jQuery);;