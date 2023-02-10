var ones = false;
var show = true;

function rollDice(position){
    let liz = [];
    var min = Infinity;
    var total = 0;
    var rolls = "</b>";

    for (let i = 0; i < 4; i++){
        do {
            var x = Math.floor(Math.random() * 6) + 1;
            if (ones && x == 1){
                rolls += "<br><s>1</s>";
            }else{
                rolls += "<br>" + x;
            }
        }while (ones && x == 1);
        liz.push(x);
    }
    
    for (let i = 0; i < 4; i++){
        if (liz[i] < min){
            min = liz[i];
        }
    }

    for (let i = 0; i < 4; i++){
        if(liz[i] == min){
            min = 0;
        }else{
            total += liz[i];
        }
    }
    document.getElementById(position).innerHTML = total;
    document.getElementById("rolls" + position).innerHTML = "<b>" + total + rolls;
}

function rollAllDice() {
    let but = ["first", "second", "third", "fourth", "fifth", "sixth"];
    for (let i of ["first", "second", "third", "fourth", "fifth", "sixth"]){
        /*anim(but);*/
        rollDice(i);
        /*but.shift();*/
    }
}

function rerollOnes(){
    if (ones){
        ones = false;
    }else{
        ones = true;
    }
}
/*
function sleep(milliseconds) {
    const start = Date.now();
    let now = null;
    do{
        now = Date.now();
    } while (now - start < milliseconds)
}

function anim(places){
    const total = 2000;
    const frames = 5;
    let char = ["?", "!", "@", "#", "$", "&", "%", "|", "/", "*"];
    var lastchar = "";
    var nowchar = "";
    for (let i = 0; i < frames; i++){
        do{
            nowchar = char[Math.floor(Math.random() * 10)];
        } while(nowchar === lastchar);
        lastchar = nowchar;
        for (let j of places){
            document.getElementById(j).innerHTML = nowchar;
            document.getElementById("rolls" + j).innerHTML = nowchar;
        }
        sleep(2000)
    }
}*/

function showToggle(){
    if (show) {
        show = false;
        document.getElementById("showButton").innerHTML = "Hide Rolls";
    }else{
        show = true;
        document.getElementById("showButton").innerHTML = "Show Rolls";
    }
    
}