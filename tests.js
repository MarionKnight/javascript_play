var primes = require('./primes');

function assert() {
  console.log(primes.isPrime(1) == false);
}

assert();