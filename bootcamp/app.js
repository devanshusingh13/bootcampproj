const countdown = () => {     
    const newdate = new Date("jan 31,2022 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = newdate - now;
    
    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;
    
    const textdays = Math.floor(diff/ day);
    const texthours = Math.floor((diff % day)/hour);
    const textminutes = Math.floor((diff % hour)/minute);  
    const textsecs = Math.floor((diff % minute)/second);
    
    document.querySelector(".day").innerText = textdays;
    document.querySelector(".hour").innerText = texthours;
    document.querySelector(".min").innerText = textminutes;
    document.querySelector(".sec").innerText = textsecs;
};
setInterval(countdown,1000);