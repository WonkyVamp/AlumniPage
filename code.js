const years = document.querySelectorAll('.year');
const content=document.querySelector('#members');


const details = {
  2019:[
    {name:'devesh'},
    {name:'navya'},
    {name:'deveshfjio'},
    {name:'navyahfweuf'},
    {name:'deveshfjio'},
    {name:'navyahfweuf'},
    {name:'deveshfjio'},
    {name:'navyahfweuf'},
    {name:'deveshfjio'},
    {name:'navyahfweuf'}
  ],
  2018:[
    {name:'deveshfjio'},
    {name:'navyahfweuf'}
  ]
};
function memberclick()
{
  document.querySelector('#members').classList.remove("displayinactive");
  document.querySelector('#members').classList.add("displayactive");
  document.querySelector('#events').classList.remove("displayactive");
  document.querySelector('#events').classList.add("displayinactive");

}

function eventclick()
{
  document.querySelector('#events').classList.remove("displayinactive");
  document.querySelector('#events').classList.add("displayactive");
  document.querySelector('#members').classList.remove("displayactive");
  document.querySelector('#members').classList.add("displayinactive");
}

function reset()
{
  years.forEach(li=>li.classList.remove("active"));
}
function handleevent(event)
{
reset();
 event.target.classList.add("active");
 var clickedyear=event.target.innerText;
 var html = "";

 details[clickedyear].forEach(person=>{html+=`<div class="card">${person.name}</div>`});
 content.innerHTML=html;
}
years.forEach(li=>li.addEventListener('click',handleevent));
