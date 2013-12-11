var primes = require('./primes');

function assert(statement, expectation) {
  console.log("expect", statement, "to be", expectation);
  console.log("...", eval(statement) == expectation);
}

assert("primes.isPrime(1)", false);
assert("primes.isPrime(2)", true);
assert("primes.isPrime(3)", true);
assert("primes.isPrime(4)", false);
assert("primes.isPrime(3571)", true);
assert("primes.isPrime(3570)", false);

assert("primes.printPrimes(2)", "[ 2 ]");
console.log(primes.printPrimes(2));