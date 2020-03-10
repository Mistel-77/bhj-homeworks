const reduceNumber = function(){
    const timer = document.getElementById("timer");
    if (timer.textContent > 0) {
        timer.textContent -=1;
        } else {
        clearInterval(intervalID);
        alert('Вы победили в конкурсе!');
    }
}

intervalID = setInterval(reduceNumber, 1000);