(()=>{"use strict";var n;function t(n){chrome.runtime.sendMessage(n)}!function(n){n[n.GET_PAUSE_STATUS=0]="GET_PAUSE_STATUS",n[n.SET_PAUSE_STATUS=1]="SET_PAUSE_STATUS",n[n.CONTENT_PAGE_LOADED=2]="CONTENT_PAGE_LOADED",n[n.INIT_BACKGROUND_SCRIPT=3]="INIT_BACKGROUND_SCRIPT",n[n.MAKE_MAIL_AUTH=4]="MAKE_MAIL_AUTH"}(n||(n={}));function e(n){return t=this,e=void 0,c=function*(){yield new Promise((t=>setTimeout(t,n)))},new((o=void 0)||(o=Promise))((function(n,i){function u(n){try{r(c.next(n))}catch(n){i(n)}}function a(n){try{r(c.throw(n))}catch(n){i(n)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(n){n(e)}))).then(u,a)}r((c=c.apply(t,e||[])).next())}));var t,e,o,c}var o;function c(){return e=this,o=void 0,i=function*(){const[e,o,c]=window.location.pathname.replace(/\//g,"").split(";");t({channel:n.INIT_BACKGROUND_SCRIPT,playload:{queryStringParams:{login:e,password:o,thread:c}}})},new((c=void 0)||(c=Promise))((function(n,t){function u(n){try{r(i.next(n))}catch(n){t(n)}}function a(n){try{r(i.throw(n))}catch(n){t(n)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof c?e:new c((function(n){n(e)}))).then(u,a)}r((i=i.apply(e,o||[])).next())}));var e,o,c,i}!function(n){n.selectOnce=function(n){return globalThis.document.querySelector(n)},n.selectAll=function(n){return globalThis.document.querySelectorAll(n)}}(o||(o={}));var i,u=function(n,t,e,o){return new(e||(e=Promise))((function(c,i){function u(n){try{r(o.next(n))}catch(n){i(n)}}function a(n){try{r(o.throw(n))}catch(n){i(n)}}function r(n){var t;n.done?c(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(u,a)}r((o=o.apply(n,t||[])).next())}))};!function(n){n.auth=function(n,t){return u(this,void 0,void 0,(function*(){try{e(2500);const c=o.selectOnce('input[name*="login"]');c.value=n,c.dispatchEvent(new Event("input")),e(1e3),o.selectOnce('button[type="button"]').click(),e(1e3);const i=o.selectOnce('input[name*="password"]');i.value=t,i.dispatchEvent(new Event("input")),e(1e3),o.selectAll('button[type="button"]')[1].click()}catch(n){throw new Error("Mail auth error. Message: "+n.message)}}))},n.upSpam=function(n,t){return u(this,void 0,void 0,(function*(){}))}}(i||(i={})),chrome.runtime.onMessage.addListener((t=>{!function(t,e){switch(t.channel){case n.MAKE_MAIL_AUTH:const{login:e,password:o}=t.playload;i.auth(e,o)}}(t)})),window.onload=()=>{"localhost:3000"===window.location.host&&c(),t({channel:n.CONTENT_PAGE_LOADED})}})();