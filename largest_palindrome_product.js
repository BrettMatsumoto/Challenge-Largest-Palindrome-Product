/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function (digits) {
  var factor_0 = '9';
  var factor_1 = '9';
  var palindromeNumber = 0;

  // do your work here

  while (factor_0.length && factor_1.length < digits) {
    factor_0 += factor_0;
    factor_1 += factor_1;
  }
  let factor0ToNumber = Number(factor_0);
  let factor1ToNumber = Number(factor_1);

  console.log('factor0 as number: ' + factor0ToNumber);
  console.log('factor1 as number: ' + factor1ToNumber);

  palindromeNumber = factor0ToNumber * factor1ToNumber;

  console.log('palindrome as Number: ' + palindromeNumber);

  let palindromeString = palindromeNumber.toString();
  console.log('Palindrome as String: ' + palindromeString);

  for (let i = 0; i <= palindromeString.length; i++){
    if (palindromeString[i] !== palindromeString[palindromeString.length - i]){
      factor0ToNumber--
      i = 0;
      console.log(factor0ToNumber);
    }
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};