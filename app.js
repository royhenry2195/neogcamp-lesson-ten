const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");


function submitHandler(){
    var ip = Number( input1.value);
    var qty = Number(input2.value);
    var cur = Number(input3.value);

    calProfitAndLoss(ip , qty , cur);
     
}

function calProfitAndLoss(intial , qty , current){
    if (intial > current) {
        var loss = (intial - current) * qty;
        var lossPercentage = (loss/ intial) *  100;
        output.innertext = "Loss is : " + loss + " loss Percentage is : " + lossPercentage;
    }
    else if (current > intial) {
        var profit = (current - intial ) * qty;
        var profitPercentage = (profit/ intial) *  100;
        output.innertext = "profit is : " + profit + " profit Percentage is : " + profitPercentage;
    }
   
}


btn.addEventListener("click" , calProfitAndLoss);