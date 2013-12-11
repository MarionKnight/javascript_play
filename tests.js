var primes = require('./primes');

function assert(statement, expectation) {
  console.log("expect", statement, "==", expectation, "to be true");
  console.log(eval(statement) == expectation);
}

assert("primes.isPrime(1)", false);
assert("primes.isPrime(2)", true);
assert("primes.isPrime(3)", true);
assert("primes.isPrime(4)", false);

