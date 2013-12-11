var timer_module = require('./timer_module');

function assert(statement, expectation) {
  console.log("expect", statement, "to be", expectation)
  console.log("...", eval(statement) == expectation)
}

assert(timer_module.timer(60), 60)