const years = document.querySelectorAll('.year');
const members = document.querySelector('#members');
const events = document.querySelector('#events');

const eventsJSON = 
{
    2019:
    [
        {name:'2019 ABC EVENT'},
        {name:'2019 DEF EVENT'},
        {name:'2019 GHI EVENT'},
    ],

    2018:
    [
        {name:'2018 ABC EVENT'},
        {name:'2018 DEF EVENT'},
        {name:'2018 GHI EVENT'},
    ],

    2017:
    [
        {name:'2017 ABC EVENT'},
        {name:'2017 DEF EVENT'},
        {name:'2017 GHI EVENT'},
    ],

    2016:
    [
        {name:'2016 ABC EVENT'},
        {name:'2016 DEF EVENT'},
        {name:'2016 GHI EVENT'},
    ],

    2015:
    [
        {name:'2015 ABC EVENT'},
        {name:'2015 DEF EVENT'},
        {name:'2015 GHI EVENT'},
    ],

    2014:
    [
        {name:'2014 ABC EVENT'},
        {name:'2014 DEF EVENT'},
        {name:'2014 GHI EVENT'},
    ],
};

const membersJSON = 
{
    2019:
    [
        {name:'2019 ABC'},
        {name:'2019 DEF'},
        {name:'2019 GHI'},
        {name:'2019 JKL'},
        {name:'2019 MNO'}
    ],

    2018:
    [
        {name:'2018 ABC'},
        {name:'2018 DEF'},
        {name:'2018 GHI'},
        {name:'2018 JKL'},
        {name:'2018 MNO'}
    ],
    
    2017:
    [
        {name:'2017 ABC'},
        {name:'2017 DEF'},
        {name:'2017 GHI'},
        {name:'2017 JKL'},
        {name:'2017 MNO'}
    ],
    
    2016:
    [
        {name:'2016 ABC'},
        {name:'2016 DEF'},
        {name:'2016 GHI'},
        {name:'2016 JKL'},
        {name:'2016 MNO'}
    ],
        
    2015:
    [
        {name:'2015 ABC'},
        {name:'2015 DEF'},
        {name:'2015 GHI'},
        {name:'2015 JKL'},
        {name:'2015 MNO'}
    ],
    
    2014:
    [
        {name:'2014 ABC'},
        {name:'2014 DEF'},
        {name:'2014 GHI'},
        {name:'2014 JKL'},
        {name:'2014 MNO'}
    ],
    
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
    var clickedyear = event.target.innerText;

    var member_HTML = "";
    var event_HTML = "";

    membersJSON[clickedyear].forEach(person=>{member_HTML+=`<div class="memberCard">${person.name}</div>`});
    members.innerHTML=member_HTML;

    eventsJSON[clickedyear].forEach(event=>{event_HTML+=`<div class="eventCard">${event.name}</div>`});
    events.innerHTML=event_HTML;
}

years.forEach(li=>li.addEventListener('click',handleevent));
