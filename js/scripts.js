


const goCheck = function (sumOfAll){
  if (sumOfAll >= 0 && sumOfAll <= 3){ 
    return true;
  }
  else {
    return false;
  }

}

const javaScriptCheck = function (sumOfAll){
  if (sumOfAll >= 4 && sumOfAll <= 6){
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
  if (sumOfAll >= 10 && sumOfAll <= 11){
    return true;
  }
  else {
    return false;
  }
}

const rustCheck = function (sumOfAll){
  if (sumOfAll >= 12 && sumOfAll <= 13){
    return true;
  }
  else {
    return false;
  }
}

const swiftCheck = function (sumOfAll){
  if (sumOfAll >= 14 && sumOfAll <= 16){
    return true;
  }
  else {
    return false;
  }
}
  //const Go = (sum 0-3)
  //const javaS = (sum 4-6)
  //const python = (sum 7-9)
  //const ruby = (sum 10-11)
  //const rust = (sum 12-13)
  //const swift = (sum 14-16)
  //const sum = fridge + aliens + planet + chickenRoad
  //sum total of equations is 16, two of the numbers are going to have to be 3 instead of value of 2

$(document).ready(function(){
  $("form#programPerson").submit(function(event) {
    event.preventDefault ();

    const num1 = parseInt($(".fridgeIssue").val());
    const num2 = parseInt($(".alienProb").val());
    const num3 = parseInt($(".planetProb").val());
    const num4 = parseInt($(".chickenProb").val());
    const sumOfAll = (num1 + num2 + num3 + num4)

    if (goCheck (sumOfAll)) {
      $("#programLang1").show();
      $("#programLang2").hide();
      $("#programLang3").hide();
      $("#programLang4").hide();
      $("#programLang5").hide();
      $("#programLang6").hide();
      return ("#userName")
      //GO result 
      }
      else if (javaScriptCheck (sumOfAll)) {
        $("#programLang1").hide();
        $("#programLang2").show();
        $("#programLang3").hide();
        $("#programLang4").hide();
        $("#programLang5").hide();
        $("#programLang6").hide();
        return ("#userName")
        //JavaScript result 
        }
      else if (pythonCheck (sumOfAll)) {
        $("#programLang1").hide();
        $("#programLang2").hide();
        $("#programLang3").show();
        $("#programLang4").hide();
        $("#programLang5").hide();
        $("#programLang6").hide();
        return ("#userName")
        //Python result 
        }
      else if (rubyCheck (sumOfAll)) {
        $("#programLang1").hide();
        $("#programLang2").hide();
        $("#programLang3").hide();
        $("#programLang4").show();
        $("#programLang5").hide();
        $("#programLang6").hide();
        return ("#userName")
        //Ruby result 
        }
      else if (rustCheck (sumOfAll)) {
        $("#programLang1").hide();
        $("#programLang2").hide();
        $("#programLang3").hide();
        $("#programLang4").hide();
        $("#programLang5").show();
        $("#programLang6").hide();
        return ("#userName")
        //Rust result
        } 
      else {
        $("#programLang1").hide();
        $("#programLang2").hide();
        $("#programLang3").hide();
        $("#programLang4").hide();
        $("#programLang5").hide();
        $("#programLang6").show();
        return ("#userName")
        //Swift result 
        }
  });
});