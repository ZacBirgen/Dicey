var ones = false;

function rollDice(position){
    let liz = [];
    var min = Infinity;
    var total = 0;

    for (let i = 0; i < 4; i++){
        do {
            var x = Math.floor(Math.random() * 6) + 1;
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
}

function rollAllDice() {
    for (let i of ["first", "second", "third", "fourth", "fifth", "sixth"]){
        rollDice(i)
    }
}

function rerollOnes(){
    if (ones){
        ones = false;
    }else{
        document.write(ones)//For Testing
        ones = true;
    }
}