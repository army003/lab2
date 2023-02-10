const hexNums = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const hexLetts = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

export const dToO = (number, result, system) => {
  const n = parseInt(number);
  const nextN = n % system;
  switch (system) {
    case 8:
      if (n === 0) {
        return 0;
      } else {
        result.push(String(nextN));
        return dToO(parseInt(n / system), result, system);
      }
    case 2:
      result.push(String(n % 2));
      console.log("result", result);
      return n === 1 || n === 0 ? 0 : dToO(parseInt(n / 2), result, system);
    case 16:
      console.log("result", result);
      if (n === 0) {
        return 0;
      } else if (n === 1) {
        result.push(String(n));
        break;
      } else {
        if (String(nextN).length === 2) {
          hexNums.map(
            (num, index) =>
              num === nextN && result.push(String(hexLetts[index]))
          );
        } else {
          result.push(String(nextN));
        }
        return dToO(parseInt(n / system), result, system);
      }
    default:
      break;
  }
};

