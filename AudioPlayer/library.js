function ID(idName){
	return document.getElementById(idName);
}

function randomNumber(lower,upper){
  let num = Math.round(Math.random()*upper);
  if(num < lower){
    num += lower;
  }
  return num;
}
function additionOfTwoNumber(num1,num2){
	return num1 + num2;
}
function differenceOfTwoNumber(num1,num2){
	return num1 - num2;
}
function productOfTwoNumber(num1,num2){
	return num1 * num2;
}
function divisionOfTwoNumber(num1,num2){
	return num1 + num2;
}
function modulusOfTwoNumber(num1,num2){
	return num1 % num2;
}
function squareOfTwoNumber(num1,num2){
	return num1 ** num2;
}



























// function bintodec(bin){
// dec = 0;
// for (let i = 0; i < bin.length; i++) {
// dec+=Number(bin[i])*2**(bin.length -1 -i)
// }
// return dec;
// }
// console.log(bintodec('101110111001 101110110010 101111001011 100000 101110101010 101110011010 101110011001 101111001101 101110010101 101110110011 101110111110 '))
