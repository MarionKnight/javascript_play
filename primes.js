exports.isPrime = function (n) {
  if (n == 1) return false;
  var s = Math.sqrt(n);
  for (var i = 2; i <= s; i++) {
    if (n % i == 0) return false
  }
  return true
}

exports.printPrimes = function (n) {
  var primes = [];
  if (n <= 1) return;
  for (var i = 2; i <= n; i++) {
    if (exports.isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}