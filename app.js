(function(){
"use strict";
const items=[
{id:1,title:"Бананы",category:"Товары",price:"120 сом/кг",city:"Ош",description:"Демо-предложение фруктов"},
{id:2,title:"Домашние яблоки",category:"Товары",price:"90 сом/кг",city:"Ош",description:"Демо-предложение фруктов"},
{id:3,title:"Ремонт телефона",category:"Услуги",price:"от 500 сом",city:"Ош",description:"Диагностика и ремонт — демо"},
{id:4,title:"Настольная лампа",category:"Товары",price:"1 200 сом",city:"Бишкек",description:"Демонстрационное объявление"},
{id:5,title:"Сумка",category:"Товары",price:"850 сом",city:"Бишкек",description:"Демонстрационное объявление"},
{id:6,title:"Помощник на день",category:"Работа",price:"1 500 сом/день",city:"Ош",description:"Демо-предложение работы"},
{id:7,title:"Комната в аренду",category:"Аренда",price:"8 000 сом/месяц",city:"Ош",description:"Демо-объявление об аренде"}
];
let category="Все";
let nextId=8;
const $=id=>document.getElementById(id);
const safe=value=>String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function render(){
const q=$("query").value.trim().toLocaleLowerCase("ru");
const city=$("city").value;
const filtered=items.filter(item=>
(category==="Все"||item.category===category)&&
(city==="Все города"||item.city===city)&&
(!q||(item.title+" "+item.category+" "+item.city+" "+item.description+" "+item.price).toLocaleLowerCase("ru").includes(q))
);
$("resultCount").textContent=filtered.length+" найдено";
if(!filtered.length){
$("results").innerHTML='<div class="panel empty">Пока ничего не найдено.<br>Попробуй другое слово, категорию или город.</div>';
return;
}
$("results").innerHTML=filtered.map(item=>`
<article class="listing">
<div class="listing-top"><div><h3>${safe(item.title)}</h3><div class="meta">${safe(item.category)} · ${safe(item.city)}</div></div><div class="price">${safe(item.price)}</div></div>
<p class="muted" style="margin:10px 0 0">${safe(item.description||"Описание не добавлено")}</p>
<div class="listing-actions"><button class="secondary" data-details="${item.id}">Подробнее</button><button class="primary" data-contact="${item.id}">Связаться</button></div>
</article>`).join("");
}
function showPage(id){
document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===id));
document.querySelectorAll(".nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===id));
window.scrollTo({top:0,behavior:"smooth"});
if(id==="homePage")render();
}
document.querySelectorAll(".nav button").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));
document.querySelectorAll(".chip").forEach(b=>b.addEventListener("click",()=>{
category=b.dataset.category;
document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("active",c===b));
render();
}));
$("searchBtn").addEventListener("click",render);
$("query").addEventListener("keydown",e=>{if(e.key==="Enter")render()});
$("city").addEventListener("change",render);
$("goSearch").addEventListener("click",()=>showPage("homePage"));
$("coreBtn").addEventListener("click",()=>{
const choice=prompt("Быстрый переход:\n1 — Поиск\n2 — Исследовать\n3 — Разместить\n4 — Профиль");
const pages={"1":"homePage","2":"explorePage","3":"publishPage","4":"profilePage"};
if(pages[choice])showPage(pages[choice]);
});
$("publishForm").addEventListener("submit",e=>{
e.preventDefault();
const title=$("itemTitle").value.trim();
const price=$("itemPrice").value.trim();
if(!title||!price)return;
items.unshift({
id:nextId++,title,price,category:$("itemCategory").value,
city:$("itemCity").value,
description:$("itemDescription").value.trim()||"Описание не добавлено"
});
$("query").value="";
$("city").value="Все города";
category="Все";
document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("active",c.dataset.category==="Все"));
$("publishForm").reset();
showPage("homePage");
alert("Добавлено в демоверсию. Пока объявление не опубликовано в интернете для других пользователей.");
});
$("results").addEventListener("click",e=>{
const details=e.target.closest("[data-details]");
const contact=e.target.closest("[data-contact]");
if(details){
const item=items.find(i=>i.id===Number(details.dataset.details));
if(item)alert(item.title+"\nКатегория: "+item.category+"\nГород: "+item.city+"\nЦена: "+item.price+"\n\n"+item.description+"\n\nДемо-режим: продавец пока не подключён.");
}
if(contact){
const item=items.find(i=>i.id===Number(contact.dataset.contact));
if(item)alert("Связь с продавцом ещё не подключена.\n\nWORLD FIND пока работает как прототип без серверной базы и реальных аккаунтов.");
}
});
render();
})();
