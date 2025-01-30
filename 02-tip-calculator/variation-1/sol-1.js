const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

function calcAverage(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    count++;
  }

  const average = sum / count;
  return average;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const totals = [];
const tips = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(tips);
console.log(totals);
console.log(calcAverage(bills));
