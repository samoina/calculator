// $(document).ready(function () {
//   $("form .btn").click(function (event) {

//     let numOne = parseInt(document.getElementById("numOne").value);
//     let numTwo = parseInt(document.getElementById("numTwo").value);

//     let answer=0;

//     let add = function (dig1, dig2) {
//       answer = dig1 + dig2;
//       return answer;
//     };

//     let answerInput = add(numOne, numTwo);
//     $(".answer").append(answerInput);
//     $("#total").show();

//     event.preventDefault();
//   });
// });

//<------BACK-END------------>

let answer = 0;
let answerSubtract = 0;
let answerMultiply = 0;
let answerDivide = 0;

let add = function (dig1, dig2) {
  answer = dig1 + dig2;
  return answer;
};

let subtract = function (dig1, dig2) {
  answerSubtract = dig1 - dig2;
  return answerSubtract;
}

let multiply = function(numOne, numTwo) {
  answerMultiply = numOne * numTwo;
  return answerMultiply;
}

let divide = function(numOne, numTwo) {
  answerDivide = numOne/numTwo;
  return answerDivide;
}


//<--------USER END----------->
$(document).ready(function () {
  $("#add .btn").click(function (event) {
    let numOne = parseInt(document.getElementById("numOne").value);
    let numTwo = parseInt(document.getElementById("numTwo").value);

    let answerInput = add(numOne, numTwo);
    $(".answer").text(answerInput);
    $("#total").show();

    event.preventDefault();
  });


  $("#subtract .btn").click(function (event) {
    let numOne = parseInt(document.getElementById("digOne").value);
    let numTwo = parseInt(document.getElementById("digTwo").value);

    let answerSubtract = subtract(numOne, numTwo);
    $(".answerSubtract").text(answerSubtract);
    $("#totalSubtract").show();

    event.preventDefault();
  });

  $("#multiply .btn").click(function(event) {
    let multiplyOne = parseInt(document.getElementById("multOne").value);
    let multiplyTwo = parseInt(document.getElementById("multTwo").value);

    let answerInput = multiply(multiplyOne, multiplyTwo);

    $(".answerMultiply").text(answerInput);
    $("#totalMultiply").show();

    event.preventDefault();
  });

  $("#divide .btn").click(function(event) {
    let divideOne = parseInt(document.getElementById("divOne").value);
    let divideTwo = parseInt(document.getElementById("divTwo").value);

    let answerInput = divide(divideOne, divideTwo);

    $(".answerDivide").text(answerInput);
    $("#totalDivide").show();

    event.preventDefault();
  });
});
