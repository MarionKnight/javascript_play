var primes = require('./primes');

function assert(statement, expectation) {
  console.log("expect", statement, "==", expectation, "to be true");
  console.log(eval(statement) == expectation);
}

assert("primes.isPrime(1)", false);
