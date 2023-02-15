function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }else {
        // console.log("pin not 4 digits");
        return getPin();
    }
}



function generatePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById("generatePin").addEventListener("click", function(){
    const pin = getPin();
    const showPin = document.getElementById("showPin");
    showPin.value = pin;
})


document.getElementById("calculator").addEventListener("click", function(event){
    const label = event.target.innerText;
    const typeNumberField = document.getElementById("typeNumbers");
    const typeNumber = typeNumberField.value;
    if(isNaN(label)){
        if(label === "C"){
            typeNumberField.value = "";
        }else if(label === "<"){
            const digits = typeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }else {
        const newTypeNumber = typeNumber + label;
        typeNumberField.value = newTypeNumber;
    }
})


document.getElementById("submit").addEventListener("click", function(){
    const showPin = document.getElementById("showPin");
    const showPinValue = showPin.value;
    
    const typeNumber = document.getElementById("typeNumbers");
    const typeNumberValue = typeNumber.value;

    const success = document.getElementById("success");
    const unsuccess = document.getElementById("unsuccess");
    
    if(showPinValue === typeNumberValue){
        success.style.display = "block";
        unsuccess.style.display = "none";
    }else {
        unsuccess.style.display = "block";
        success.style.display = "none";
    }
    typeNumber.value = '';

})