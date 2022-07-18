let cuyear = new Date().getFullYear();
let nextyear = new Date(`1 january ${cuyear + 1} 00:00:00`)
let nextyeartoday = new Date(`7 july ${cuyear + 1} 00:00:00`)



function upco(){

    let cutime = new Date();
    let diff =nextyear-cutime;
    let daysleft = Math.floor(diff/1000/60/60/24);
    let hoursleft = Math.floor(diff/1000/60/60)%24;
    let minutesleft = Math.floor(diff/1000/60)%24;
    let secondsleft = Math.floor(diff/1000)%60;

    if(minutesleft < 10){
        minutesleft="0"+minutesleft
    }
    if(secondsleft<10){
        secondsleft="0"+secondsleft
    }
    if(hoursleft<10){
        hoursleft="0"+hoursleft
    }
    document.getElementById('days').innerHTML=daysleft
    document.getElementById('hours').innerHTML=hoursleft
    document.getElementById('minutes').innerHTML=minutesleft
    document.getElementById('seconds').innerHTML=secondsleft
}
upco()
setInterval(() => upco(),500)

function today(){
    document.getElementById('year').innerHTML=new Date().getFullYear();

    let mo=new Date().getMonth()+1
    let d=new Date().getDate();
    let h =new Date().getHours();
    let m =new Date().getMinutes();
    let s =new Date().getSeconds();
    if(mo < 10){
        mo="0"+mo
    }    
    if(d < 10){
        d="0"+d
    }
    if(h < 10){
        h="0"+h
    }
    if(m<10){
        m="0"+m
    }
    if(s<10){
        s="0"+s
    }
    document.getElementById('mounth').innerHTML=mo;
    document.getElementById('day').innerHTML=d;
    document.getElementById('hour').innerHTML=h;
    document.getElementById('minute').innerHTML=m;
    document.getElementById('second').innerHTML=s;
}
today()
setInterval(() => today(),500)

function nexttoday(){
    let cutime = new Date();
    let diff =nextyeartoday-cutime;
    let daysleft = Math.floor(diff/1000/60/60/24);
    let hoursleft = Math.floor(diff/1000/60/60)%24;
    let minutesleft = Math.floor(diff/1000/60)%24;
    let secondsleft = Math.floor(diff/1000)%60;

    if(minutesleft < 10){
        minutesleft="0"+minutesleft
    }
    if(secondsleft<10){
        secondsleft="0"+secondsleft
    }
    if(hoursleft<10){
        hoursleft="0"+hoursleft
    }
    document.getElementById('dayto').innerHTML=daysleft
    document.getElementById('hourto').innerHTML=hoursleft
    document.getElementById('minuteto').innerHTML=minutesleft
    document.getElementById('secondto').innerHTML=secondsleft
}
nexttoday()
setInterval(() => nexttoday(),500)