class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];

    update() {
      "The status of the elevator is: " + this.log,
  };

    log() {
      if (floorUp > this.floor) {
      console.log("Direction: Going Up");
      else
      console.log("Direction: Going Down")
      }

      "Floor: " + this.floor
    }

  }



  start() { } //setInterval,  calls Update every second and eventually calls log.
  stop() { } //clears the Interval

  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }
}

module.exports = Elevator;
