var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currrentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

//Exercise 6
submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currrentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

//Exercice 5
function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        //loss calculation
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        console.log(`Loss is ${loss} and the percent is ${lossPercentage}%`);


        
    } else if (current > initial) {
        //profit calculation
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        console.log(`Profit is ${profit} and the percent is ${profitPercentage}%`);
    } else {
        //rest of the calculation
        console.log('No pain no gain.');
    }
}

calculateProfitAndLoss(100, 10, 10);
calculateProfitAndLoss(20, 10, 100);
calculateProfitAndLoss(10, 10, 10);