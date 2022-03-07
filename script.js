let countDate = new Date('jul 15, 2022 00:00:00').getTime();

//CRIANDO A FUNÇÃO DE TEMPO
function countDown(){
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second*60;
    let hour = minute*60;
    let day = hour*24;

    let d = Math.floor(gap/(day));
    let h = Math.floor((gap%(day))/(hour));
    let m = Math.floor((gap%(hour))/(minute));
    let s = Math.floor((gap%(minute))/(second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}

setInterval(function(){
    countDown();
},1000)