window.onload = function() {
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;
    let minuteAppend = document.querySelector('#minutes')
    let secondsAppend = document.querySelector('#seconds')
    let millisecondsAppend = document.querySelector('#milliseconds')
    let startBtn = document.querySelector('#start')
    let stopBtn = document.querySelector('#stop')
    let resetBtn = document.querySelector('#reset')
    let Interval

    const startTimer = () => {
        milliseconds++;
        if(milliseconds <= 9){
            millisecondsAppend.innerHTML = '0' + milliseconds;
        }
        if(milliseconds > 9){
            millisecondsAppend.innerHTML = milliseconds;
        }
        if(milliseconds > 99){
            seconds++;
            secondsAppend.innerHTML = '0' + seconds;
            milliseconds = 0;
            millisecondsAppend.innerHTML = '0' + 0;
        }
        if(seconds > 9 ){
            secondsAppend.innerHTML = seconds;
        }
        if(seconds > 59){
            minutes++;
            minuteAppend.innerHTML = '0' + minutes;
            seconds = 0;
            secondsAppend.innerHTML = '0' + 0;
        }
        const box = document.getElementsByTagName('main')[0];
        box.style.boxShadow = '-1px 1px 145px 65px #00FFFF,25px 0px 20px -20px #00FFFF,0px 25px 20px -20px #00FFFF,-25px 0px 20px -20px #00FFFF';
        console.log(box.innerHTML);
    }

    startBtn.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);
    });

    stopBtn.addEventListener('click', () => {
        clearInterval(Interval);
        
    });

    resetBtn.addEventListener('click', () => {
        clearInterval(Interval);
        milliseconds = '00';
        millisecondsAppend.innerHTML = milliseconds;
        seconds = '00';
        secondsAppend.innerHTML = seconds;
        minutes = '00';
        minuteAppend.innerHTML = minutes;
        const box = document.getElementsByTagName('main')[0];
        box.style.boxShadow = 'none';

    })

}