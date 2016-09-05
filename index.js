const five = require("johnny-five");
const keypress = require("keypress");
const board = new five.Board();

board.on("ready", function() {
  let led = new five.Led(13);
  const controller = function(ch, key) {
    if(key.name == "up") {
      led.on();
    } else if(key.name == "down") {
      led.off();
    }
  };

  keypress(process.stdin);

  process.stdin.on("keypress", controller);
  process.stdin.setRawMode(true);
  process.stdin.resume();
});