class Hand {
  constructor(elem) {
    this.elem = elem;
    this.rounds = 0;
    this.lastAngle = 0;
  }
  rotate(angle) {
    if (angle < this.lastAngle) {
      this.rounds += 1;
    }
    this.elem.style.transform = `rotate(${this.rounds * 360 + angle}deg)`;
    this.lastAngle = angle;
  }
}

const HourHand = new Hand(document.getElementById("hour"));
const MinuteHand = new Hand(document.getElementById("minute"));
const SecondHand = new Hand(document.getElementById("second"));

const updateFace = time => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  HourHand.rotate((hours + minutes / 60 + seconds / 3600) * 30);
  MinuteHand.rotate((minutes + seconds / 60) * 6);
  SecondHand.rotate(seconds * 6);
};

const tick = () => {
  updateFace(new Date());
  setTimeout(tick, 1000);
};
tick();
