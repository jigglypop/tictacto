(()=>{let e="one";const t=document.querySelector(".modal"),n=document.querySelectorAll(".init"),o=document.querySelectorAll(".box"),s=document.querySelector(".span"),c=document.querySelectorAll(".title"),l=document.querySelectorAll(".titletext"),i=t.querySelector(".modaltext"),a=document.querySelector(".boxs"),r=document.querySelector(".play");setTimeout((()=>{c.forEach((e=>e.classList.add("change"))),l.forEach((e=>e.classList.add("change"))),setTimeout((()=>{o.forEach((e=>e.classList.add("change"))),setTimeout((()=>{r.style.display="flex"}),500)}),500)}),500);for(let c of n)c.addEventListener("click",(()=>{e="one",t.style.display="none",s.innerText="1",o.forEach((e=>{e.classList.remove("one"),e.classList.remove("two"),e.classList.add("none"),e.innerText=""}))}));a.addEventListener("click",(function(n){const o=n.target.id;n.target.classList.contains("box")&&(o.split("_"),(async n=>{if(await(t=>new Promise((n=>{t.classList.contains("none")?(t.classList.remove("none"),t.classList.add(e),"one"===e?(t.innerText="o",s.innerText="2"):(t.innerText="x",s.innerText="1"),n(!0)):n(!1)})))(n)){await new Promise((t=>{e="one"===e?"two":"one",t(e)}));const o=await(t=>new Promise((n=>{let o=!1,s={1:["123","147","159"],2:["123","258"],3:["123","357","369"],4:["147","456"],5:["159","357","258","456"],6:["369","456"],7:["147","789","357"],8:["258","789"],9:["159","369","789"]}[t.id];for(let t of s){const n=document.getElementById(`${t[0]}`),s=document.getElementById(`${t[1]}`),c=document.getElementById(`${t[2]}`);let l="";if(l="one"===e?"two":"one",n.classList.contains(l)&&s.classList.contains(l)&&c.classList.contains(l)){o=!0;break}}"one"===e&&!0===o?n([!0,"플레이어 2승리"]):"two"===e&&!0===o&&n([!0,"플레이어 1승리"]),n([!1,""])})))(n);!0===o[0]&&(i.innerText=o[1],t.style.display="flex")}})(n.target))}))})();