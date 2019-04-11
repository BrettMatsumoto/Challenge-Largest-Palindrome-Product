/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here

  const checkPalindrome = function(x, y, digits) {
    if (palindromeNumber.split().reverse() === palindromeNumber.split()) {
      return Number(palindromeNumber);
    }

    while (palindromeNumber.split().reverse() !== palindromeNumber.split()) {
      x = Math.pow(10, digits) - 1;
      y = Math.pow(10, digits) - 1;
      product = x * y;
      console.log(x);
      console.log(y);
    }
  };
  checkPalindrome(factor_0, factor_1);

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber,
  };
};
