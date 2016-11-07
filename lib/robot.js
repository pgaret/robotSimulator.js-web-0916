'use strict';

const compass = ['north', 'east', 'south', 'west']

class Robot {
  // implement your solution here!
  constructor(bearing){
    this.bearing = bearing;
  }

  orient(direction) {
    return compass.includes(direction) ? this.bearing = direction : "Invalid Robot Bearing"
  }

  turnRight() {
    
  }


}
