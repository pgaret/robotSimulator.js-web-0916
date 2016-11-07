'use strict';

const compass = ['north', 'east', 'south', 'west']

class Robot {
  // implement your solution here!
  constructor(bearing, coordinates){
    this.bearing = bearing;
    this.coordinates = coordinates;
  }

  orient(direction) {
    if (compass.includes(direction)){
      this.bearing = direction
    }
    else {
      throw new Error("Invalid Robot Bearing");
    }
  }

  turnRight() {
    this.orient(compass[(compass.indexOf(this.bearing)+1)%compass.length]);
  }

  turnLeft() {
    this.orient(compass[(compass.indexOf(this.bearing)+3)%compass.length]);
  }

  at(x, y) {
    this.coordinates = [x, y];
  }

  advance() {
    switch(this.bearing){
      case "west":
        this.coordinates[0] -= 1;
        break;
      case "east":
        this.coordinates[0] += 1;
        break;
      case "north":
        this.coordinates[1] += 1;
        break;
      case "south":
        this.coordinates[1] -= 1;
        break;
    }
  }

  instructions(instr) {
    let letrs = instr.split("").map((letter)=> {
      switch(letter){
        case "L":
          return "turnLeft";
          break;
        case "R":
          return "turnRight";
          break;
        case "A":
          return "advance";
          break;
      }
    })
    return letrs;
  }

  place(stats){
    this.at(stats.x, stats.y);
    this.orient(stats.direction);
  }

  evaluate(instr){
    this.instructions(instr).forEach((fn)=>{
      this[fn]()
    })
  }

}
