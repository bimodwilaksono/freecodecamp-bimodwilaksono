function checkCashRegister(price, cash, cid) {
  let changeMoney = (cash - price) * 100;
  let totalCid = cid
    .map((el) => el[1])
    .reduce((acc, curr) => acc + curr * 100, 0);

  //unitCurrency dikalikan 100
  const unitCurrency = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 100000,
  };

  //Kondisi 1, totalCid < changeMoney
  if (totalCid < changeMoney) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  //Kondisi 2, totalCid = changeMoney
  else if (totalCid === changeMoney) {
    return { status: "CLOSED", change: cid };
  }

  //Kondisi 3, totalCid > changeMoney, akan dikembalikan dari yang terbesar ke kecil
  else {
    let moneyWillToChange = [];
    cid.reverse().forEach((unit) => {
      let newConditionOfUnit = [unit[0], 0];

      let nameOfUnit = unit[0];
      let countOfUnit = unit[1] * 100;

      while (changeMoney >= unitCurrency[nameOfUnit] && countOfUnit > 0) {
        changeMoney -= unitCurrency[nameOfUnit];
        countOfUnit -= unitCurrency[nameOfUnit];
        newConditionOfUnit[1] += unitCurrency[nameOfUnit] / 100;
      }

      if (newConditionOfUnit[1] > 0) {
        moneyWillToChange.push(newConditionOfUnit);
      }
    });

    if (changeMoney > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: moneyWillToChange };
  }
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
