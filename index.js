const cards = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        console.log('Thank you, ${cards[i]} for the wonderfull surprice gift');
        debugger;
    }

    return cards;
    
}
writeCards(cards);

function countDown(){
    for (let count = 10; count < 10; count++){
        console.log('${count}');
        debugger;
    }
}
countDown();

for (let number = 0; number < 4; number++) {
    console.log('${number}, Expected countdown (4) to log ${number+1}');
    debugger;
}