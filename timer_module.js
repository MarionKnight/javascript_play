var MakeTimer = {
  start_time: function() {
    t_start = (new Date()).getTime()
    console.log(t_start)
  },
  pause_time: function() {
    t_pause = (new Date()).getTime()
  },
  reset_time: function() {
    t_reset = (new Date()).getTime()
  },
  elapsed_time: function() {
    return (new Date()).getTime() - t_reset
  }
}

MakeTimer.start_time();
MakeTimer.reset_time();
test = MakeTimer.elapsed_time();
console.log(test);