(()=>{"use strict";const t=location.search.split("=")[1]||1,e=document.querySelector(".js-user-table");!async function(){try{const o=function({website:t,email:e,id:n,name:o,username:r,company:s,address:d,phone:c}){return`<tr data-userid='${n}'>\n  <th scope="row">1</th>\n  <td>${o}</td>\n  <td>${r}</td>\n  <td>${e}</td>\n  <td>${d.city}</td>\n  <td>${c}</td>\n  <td>${t} </td>\n  <td>${s.name}</td>\n</tr>`}(await(n="users/"+t,fetch(`https://jsonplaceholder.typicode.com/${n}`).then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}))));!function(t,e){e.insertAdjacentHTML("beforeend",t)}(o,e),console.log(o)}catch(t){console.log(t)}var n}()})();