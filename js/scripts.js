


const goCheck = function (sumOfAll){
  if (sumOfAll ){ 
    return true;
  }
  else {
    return false;
  }

}

const javaScriptCheck = function (sumOfAll){
  if (sumOfAll >= 0 && sumOfAll <= 3){
    return true;
  }
  else {
    return false;
  }
}

const pythonCheck = function (sumOfAll){
  if (sumOfAll >= 4 && sumOfAll <= 5){
    return true;
  }
  else {
    return false;
  }
}

const rubyCheck = function (sumOfAll){
  if (sumOfAll){
    return true;
  }
  else {
    return false;
  }
}

const rustCheck = function (sumOfAll){
  if (sumOfAll){
    return true;
  }
  else {
    return false;
  }
}

const swiftCheck = function (sumOfAll){
  if (sumOfAll){
    return true;
  }
  else {
    return false;
  }
}
  //const Go = ()
  //const javaS = (sum 0-3 )
  //const python = (sum 4-6 )
  //const ruby = (sum 7-10 )
  //const rust = (sum 11-14 )
  //const swift = (sum 15-16 )
  //const sum = fridge + aliens + planet + chickenRoad
  // sum total of equations is 16, two of the numbers are going to have to be 3 instead of value of 2

$(document).ready(function(){
  $("form#programPerson").submit(event){
    event.preventDefault ();

    const num1 = parseInt($(".fridgeIssue").val());
    const num2 = parseInt($(".alienProb").val());
    const num3 = parseInt($(".planetProb").val());
    const num4 = parseInt($(".chickenProb").val());
    const sumOfAll = (num1 + num2 + num3 + num4)

    if () {
      $("#programLang1").show();
      $("#programLang2").show();
      $("#programLang3").show();
      $("#programLang4").show();
      $("#programLang5").show();
      $("#programLang6").show();
    }
  });
});