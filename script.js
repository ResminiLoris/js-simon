// preparazione

var cpuNumbers = [];

function getRandomNumber(min,max){
    max++;
    return Math.floor(Math.random() * (max - min) + min);
}

function isValidNumber(num) {
    if(!num || isNaN(num) || num.trim() === ''){
        return false;
    }
    return true;
}

function getUserNumber(){
    var num = prompt('scegli un numero da 1 a 100');
    while(!isValidNumber(num) || num < 1 || num > 100){
    alert('questo non è un numero valido');
    userChoice = prompt('scegli un numero da 1 a 100');
    }
    return parseInt(num)
}

while(cpuNumbers.length < 5){
    var randomNumber = getRandomNumber(1,10);
    if(!cpuNumbers.includes(randomNumber)){
        cpuNumbers.push(randomNumber);
    }
}

console.log(cpuNumbers);

// fase di gioco

alert(cpuNumbers);


setTimeout(function(){
    var tentativiUtente = [];
    var numeriIndovinati = [];

    while (tentativiUtente.length < 5){
        var userChoice = getUserNumber();

        if(!tentativiUtente.includes(userChoice)){
            tentativiUtente.push(userChoice);
        if (cpuNumbers.includes(userChoice)){
            numeriIndovinati.push(userChoice);
        }
        

        }else {
            alert('hai gia scelto questo numero!')
        }
    }

    alert('hai indovinato ' + numeriIndovinati.length + ' numeri: ' + numeriIndovinati);
}, 3000)
