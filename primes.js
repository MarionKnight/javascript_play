exports.isPrime = function (n) {
  if (n == 1) return false;
  var s = Math.sqrt(n);
  console.log( Math.sqrt(n) );
  for (var i = 2; i <= s; i++) {
    console.log(n % i)
    if (n % i == 0) console.log("notprime")
  }
  return true
}

