const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calculateBtn = document.querySelector("#bmi-calculate");
const outputBox = document.querySelector("#output");

function bmiCalculator(h,w) {
    var h = height.value;
    var w = weight.value;
    var bmiProcess = ((Number(w)) * 10000)/(Number(h) * Number(h));

    var bmiP = bmiProcess.toFixed(2);

    return bmiP;
}  

function bmiOutput(message){
    var output = bmiCalculator();
    if(output < 18.5){
      var message = outputBox.innerText = "Your BMI is: " + output + ". You are underweight! Eat healthy!";
    }
    else if (output >= 18.5 && output <= 24.9){
        var message =  outputBox.innerText = "Your BMI is: " + output + ". You have a normal weight!😊";
    }
    else if(output >= 25 && output <=29.9){
        var message =  outputBox.innerText = "Your BMI is: " + output + ". You are overweight! Eat healthy and exercise regularly!";
    }
    else if (output >= 30){
        var message =   outputBox.innerText = "Your BMI is: " + output + ". You are obese!😨 Consult a dietician and workout daily!";
    }

    return message;
}

function clickEventHandler(){
   var bmiResult = bmiOutput();
//    outputBox.innerText =  bmiResult;
}
    

calculateBtn.addEventListener("click", clickEventHandler)