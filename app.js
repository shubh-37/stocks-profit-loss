var initialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var evaluateBtn = document.querySelector("#evaluate-btn");
var output = document.querySelector("#output");

function calculate(initialPrice,quantity,currentPrice){
    var initialValue = initialPrice * quantity;
    var currentValue = currentPrice * quantity;
    var absoluteVal = currentValue - initialValue;
    var percentageVal = (absoluteVal/initialValue)*100;
    return [absoluteVal, percentageVal];
}



function clickHandler(){
    //getting inputs
    var initialPriceInput = initialPrice.value;
    var quantityInput = quantity.value;
    var currentPriceInput = currentPrice.value;
    //input validators
    if(initialPriceInput&&quantityInput&&currentPriceInput){
        if(initialPriceInput > 0 && quantityInput > 0 && currentPriceInput > 0){
                //processing the input
        var [calculateValue, percentageValue] = calculate(initialPriceInput,quantityInput,currentPriceInput);

        //processing the input as well as rendering the output
    if(calculateValue > 0){
        output.style.display = "block";
        output.style.color = "green";
        output.innerText = `Yay you made net profit of ${calculateValue} and your percentage profit is ${percentageValue}% 🥳`
    }else if(calculateValue === 0){
        output.style.display = "block";
        output.innerText = "No pain no gain and, no gain no pain 🧐";
    }else{
        output.style.display = "block";
        output.style.color = "red";
        output.innerText = `Oops, you made net loss of ${calculateValue} and your percentage loss is ${percentageValue}% 😔`
    }
        }else{
            //error handler
            output.innerText = "Please enter positive values to proceed!";
        }
    }else{
        // error handler
        output.innerText = "Please enter all the inputs to get the result!";
        output.style.display = "block";
    }
    
}

evaluateBtn.addEventListener("click", clickHandler)