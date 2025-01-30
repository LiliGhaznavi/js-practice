const mark = new Object({
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    bmi = Math.round((this.mass / (this.height * this.height)) * 10) / 10;
    return bmi;
  },
});

const john = new Object({
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    bmi = Math.round((this.mass / (this.height * this.height)) * 10) / 10;
    return bmi;
  },
});

if (john["calcBMI"]() > mark["calcBMI"]()) {
  console.log(
    `${john["fullName"]}'s BMI (${john["calcBMI"]()}) is higher than ${
      mark["fullName"]
    }'s (${mark["calcBMI"]()})!`
  );
} else if (mark["calcBMI"]() > john["calcBMI"]()) {
  console.log(
    `${mark["fullName"]}'s BMI (${mark["calcBMI"]()}) is higher than ${
      john["fullName"]
    }'s (${john["calcBMI"]()})!`
  );
}
