const dateOfBirthday = document.querySelector("#dateofbirthday");
const luckyNumber = document.querySelector("#luckynumber");
const checkNumberButton = document.querySelector("#checknumber");
const outputbox = document.querySelector("#output-box");



function comparevalue(sum,mynumber){
    if(sum%mynumber===0) {
        outputbox.innerText="Your Birthday Is Lucky ❤️‍🔥";
    }else {
        outputbox.innerText="your Brithday is not Lucky 😥";
    }
}

function checkBirthdayDateIsLucky() {
    const dob = dateOfBirthday.value;
    const sum = calculatesum(dob)
    comparevalue(sum,luckyNumber.value)

}

function calculatesum(dob) {
    dob = dob.replaceAll("-","")
    let sum = 0;
    for(let index= 0; index<dob.length; index++){
        sum = sum + Number(dob.charAt(index));
        
    }

    return sum;

}




checkNumberButton.addEventListener("click", checkBirthdayDateIsLucky)

