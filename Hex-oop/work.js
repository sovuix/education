  class Time {
  // BEGIN (write your solution here)
    static fromString(str){
      const[hours, minutes] = str.split(':');
      return new Time(hours, minutes);
    }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}

// const time = new Time(10, 15);
const time = Time.fromString('10:23');
console.log(`The time is ${time} `);
