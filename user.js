(()=>{"use strict";const o=location.search.split("=")[1]||1;var t;console.log(o),(t="users/"+o,fetch(`https://jsonplaceholder.typicode.com/${t}`).then((o=>{if(!o.ok)throw new Error(o.statusText);return o.json()}))).then((o=>{console.log(o)})).catch((o=>console.log(o)))})();