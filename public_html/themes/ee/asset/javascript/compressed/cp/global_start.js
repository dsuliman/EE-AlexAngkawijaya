/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
!function(e){"use strict";EE.namespace=function(e){var t=e.split("."),n=EE;"EE"===t[0]&&(t=t.slice(1));for(var i=0,o=t.length;i<o;i+=1)"undefined"==typeof n[t[i]]&&(n[t[i]]={}),n=n[t[i]];return n},EE.namespace("EE.cp"),e.ajaxPrefilter(function(t,n,i){var o=EE.CSRF_TOKEN,a=t.type.toUpperCase();_.has(t,"error")||i.fail(function(e,t,n){_.defer(function(){throw n})}),"POST"==a&&t.crossDomain===!1&&i.setRequestHeader("X-CSRF-TOKEN",o);var s={eexid:function(e){e&&EE.cp.setCsrfToken(e)},"csrf-token":function(e){e&&EE.cp.setCsrfToken(e)},"ee-redirect":function(e){window.location=EE.BASE+"&"+e.replace("//","/")},"ee-broadcast":function(t){EE.cp.broadcastEvents[t](),e(window).trigger("broadcast",t)}},r=e.merge(s,n.eeResponseHeaders||{});i.complete(function(e){t.crossDomain===!1&&_.each(r,function(t,n){var i=e.getResponseHeader("X-"+n);i&&t(i)})})}),EE.grid_cache=[],window.Grid={bind:function(){EE.grid_cache.push(arguments)}};window.FluidField={_eventHandlers:[],on:function(e,t,n){void 0==this._eventHandlers[t]&&(this._eventHandlers[t]=[]),this._eventHandlers[t][e]=n},fireEvent:function(e,t,n){void 0!==this._eventHandlers[t]&&void 0!==this._eventHandlers[t][e]&&this._eventHandlers[t][e].apply(this,n)}},window.FieldManager={_eventHandlers:[],on:function(e,t){void 0==this._eventHandlers[e]&&(this._eventHandlers[e]=[]),this._eventHandlers[e].push(t)},fireEvent:function(e,t){for(var n=this._eventHandlers[e]||[],i=0;i<n.length;i++)n[i](t)}};e(document).ready(function(){!1 in document.createElement("input")&&EE.insert_placeholders(),EE.cp.cleanUrls(),EE.cp.bindCpMessageClose(),EE.cp.bindSortableFolderLists(),EE.cp.addLastToChecklists(),EE.cp.bindPostLinks()}),EE.cp.bindPostLinks=function(){e("body").on("click","a[data-post-url]",function(t){t.preventDefault();var n=e("<form/>",{action:e(this).data("postUrl"),method:"post"});n.append(e("<input/>",{name:"csrf_token",value:EE.CSRF_TOKEN})),n.appendTo("body").submit()})},EE.cp.addLastToChecklists=function(){e("ul.nested-list li").removeClass("last"),e("ul.nested-list").each(function(){e("li:last-child",this).not("ul.toolbar li").last().addClass("last")})},EE.cp.bindCpMessageClose=function(){e("body").on("click","div.alert a.close",function(t){t.preventDefault(),e(this).parent().hide()})},EE.cp.bindSortableFolderLists=function(){e(".sidebar .folder-list.reorderable").sortable({axis:"y",containment:"parent",handle:"a",cancel:"ul.toolbar",items:"> li",sort:EE.sortable_sort_helper,stop:function(t,n){var i,o=e(this).data("name");if(void 0!==EE.cp.folderList.eventHandlers[o])for(i=0;i<EE.cp.folderList.eventHandlers[o].length;i++)EE.cp.folderList.eventHandlers[o][i](e(this))}})},EE.cp.folderList={eventHandlers:[],onSort:function(e,t){void 0==this.eventHandlers[e]&&(this.eventHandlers[e]=[]),this.eventHandlers[e].push(t)}},EE.cp.setCsrfToken=function(t,n){e('input[name="XID"]').val(t),e('input[name="csrf_token"]').val(t),EE.XID=t,EE.CSRF_TOKEN=t,n||e(window).trigger("broadcast.setCsrfToken",t)},e(window).bind("broadcast.setCsrfToken",function(e,t){EE.cp.setCsrfToken(t,!0)});var t=/[&?](S=[A-Za-z0-9]+)/;EE.cp.setBasePath=function(n,i){var n=n.replace(/&amp;/g,"&"),o=n.match(t)||["",""],a=EE.BASE.match(t)||["",""],s=function(e,t){if(t)return t.replace(a[1],o[1])};e("a").attr("href",s),e("form").attr("action",s),"function"==typeof window.history.pushState&&window.history.replaceState(null,document.title,window.location.href.replace(a[1],o[1])),EE.BASE=n,i||e(window).trigger("broadcast.setBasePath",n)},e(window).bind("broadcast.setBasePath",function(e,t){EE.cp.setBasePath(t,!0)}),e(window).bind("broadcast.setRememberMe",function(e,t){EE.hasRememberMe=t}),EE.cp.refreshSessionData=function(t,n){n&&EE.cp.setBasePath(n),e.getJSON(EE.BASE+"&C=login&M=refresh_csrf_token",function(e){EE.cp.setBasePath(e.base)})};var n=/(.*?)[?](.*?&)?(D=cp(?:&C=[^&]+(?:&M=[^&]+)?)?)(?:&(.+))?$/,i=/&?[DCM]=/g,o=/^&+/,a=/&+$/,s=/(^|&)S=0(&|$)/;EE.cp.cleanUrl=function(e,t){t=t||e,t=t||"",t=t.toString().replace(/^(\S*?)S=(\S+?)&(\S*?)$/g,"$1$3&S=$2");var r=n.exec(t);if(r){var c=r[3].replace(i,"/"),l=r[2]||"",d=r[4]||"",u=r[1]+"?"+c,h=d.replace(s,"")+"&"+l.replace(s,"");return h=h.replace(o,"").replace(a,""),h&&(u+="&"+h),u.replace(a,"")}},EE.cp.cleanUrls=function(){e("a:not([href^=javascript])").attr("href",EE.cp.cleanUrl),e("form").attr("action",EE.cp.cleanUrl)},EE.insert_placeholders=function(){e('input[type="text"]').each(function(){if(this.placeholder){var t=e(this),n=this.placeholder,i=t.css("color");""==t.val()&&t.data("user_data","n"),t.focus(function(){t.css("color",i),t.val()===n&&(t.val(""),t.data("user_data","y"))}).blur(function(){""!==t.val()&&t.val!==n||(t.val(n).css("color","#888"),t.data("user_data","n"))}).trigger("blur")}})},EE.cp.broadcastEvents=function(){var t,n,i=1e3,o=18e5,a=27e5,s=3e6;e(document).ready(function(){t=e("#idle-modal"),n=e(".overlay"),t.find("form").on("interact",_.throttle(EE.cp.refreshSessionData,6e5)),t.find("form").on("submit",function(){return e.ajax({type:"POST",url:this.action,data:e(this).serialize(),dataType:"json",success:function(t){return"success"!=t.messageType?void alert(t.message):(c.login(),EE.cp.refreshSessionData(null,t.base),void e(window).trigger("broadcast.idleState","login"))},error:function(e){alert(e.message)}}),!1})});var r={hasFocus:!0,modalActive:!1,pingReceived:!1,lastActive:e.now(),lastRefresh:e.now(),setActiveTime:function(){!this.modalActive&&this.modalThresholdReached()||(this.refreshThresholdReached()&&this.doRefresh(),this.lastActive=e.now())},modalThresholdReached:function(){var t=e.now()-this.lastActive,n=this.hasFocus&&t>o||!this.hasFocus&&t>a;return this.modalActive===!1&&n===!0},refreshThresholdReached:function(){var t=e.now()-this.lastRefresh;return t>s},doRefresh:function(){this.lastRefresh=e.now(),EE.cp.refreshSessionData()},resolve:function(){return EE.hasRememberMe?void(this.refreshThresholdReached()&&this.doRefresh()):(this.modalThresholdReached()?(c.modal(),e(window).trigger("broadcast.idleState","modal"),e.get(EE.BASE+"&C=login&M=lock_cp")):this.hasFocus&&this.pingReceived===!1&&e(window).trigger("broadcast.idleState","active"),void(this.pingReceived=!1))}},c={active:function(){r.setActiveTime()},focus:function(){r.setActiveTime(),r.hasFocus=!0},blur:function(){r.setActiveTime(),r.hasFocus=!1},interact:function(){r.hasFocus&&r.setActiveTime()},modal:function(){r.modalActive||(t.trigger("modal:open"),t.on("modal:close",function(e){r.modalActive&&(e.preventDefault(),c.logout())}),r.modalActive=!0),r.setActiveTime()},login:function(){r.modalActive=!1,t.trigger("modal:close"),t.find(":password").val(""),r.setActiveTime()},logout:function(){window.location=EE.BASE+"&C=login&M=logout"}},l={_t:null,init:function(){e(window).trigger("broadcast.setBasePath",EE.BASE),e(window).trigger("broadcast.setCsrfToken",EE.CSRF_TOKEN),e(window).trigger("broadcast.setRememberMe",EE.hasRememberMe),e(window).trigger("broadcast.idleState","login"),this._bindEvents(),this.track()},_bindEvents:function(){var t=e.proxy(this,"track");e(window).on("broadcast.idleState",function(e,n){switch(n){case"active":r.pingReceived=!0,t(n);break;case"modal":case"login":case"logout":c[n]()}}),e(window).bind("blur",_.partial(t,"blur")),e(window).bind("focus",_.partial(t,"focus"));var n="DOMMouseScroll keydown mousedown mousemove mousewheel touchmove touchstart";e(document).on(n.split(" ").join(".idleState "),_.throttle(_.partial(t,"interact"),500)),e(".logOutButton").click(function(){e(window).trigger("broadcast.idleState","modal")})},track:function(t){clearTimeout(this._t),this._t=setTimeout(e.proxy(this,"track"),i),t&&c[t](),r.resolve()}};return l.init(),c}()}(jQuery);