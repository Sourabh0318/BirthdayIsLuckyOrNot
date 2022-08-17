const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#button");
const outputBox = document.querySelector('#output-box');

function compareValue(sum, luckyNumber){
    if(sum%luckyNumber == 0){
        outputBox.innerText = "Yay! Your Birthday is Lucky..🤑";
    }else{
        outputBox.innerText = "Oops! Your Birthday is not lucky..🥺";
    }
}

function checkBirthdayIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob){
        compareValue(sum, luckyNumber.value);
    }else{
        outputBox.innerText = "Please Enter the value..😠"
    }
}


function calculateSum(dob){
    dob = dob.replaceAll('-','');
    let sum = 0;
    for(let index=0; index<dob.length; index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

checkBtn.addEventListener('click', checkBirthdayIsLucky);
