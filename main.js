const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const lap = document.getElementById('lap');

let interval;
let i = 0;

start.onclick = () =>{
    interval = setInterval(()=>{
     i++;
     time.textContent=i/100;
    }, 10)
    start.disabled = true;
};

stop.onclick = () =>
{
    clearInterval(interval);
    start.disabled=false;
}


reset.onclick =() =>
{
    clearInterval(interval);
    i=0;
    time.textContent = i;
    start.disabled = false;
    box.textContent = '';
}

lap.onclick = () =>{
    const box = document.getElementById('box');
    const krugi = document.createElement('li');
    krugi.textContent = `${time.textContent}`;
    box.appendChild(krugi);
    time++;
}
   