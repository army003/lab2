export const decimalOperations=(num1, num2, operation)=> {

    if (isNaN(num1) || isNaN(num2)) {
      return "Error: inputs must be numbers";
    }
  
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return "Error: operation must be one of '+', '-', '*', or '/'";
    }
  }