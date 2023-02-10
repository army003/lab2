export const binaryOperation=(num1, num2, operation)=>{
    if (!/^[01]+$/.test(num1) || !/^[01]+$/.test(num2)) {
        return "Error: inputs must be binary strings";
      }
    
      num1 = parseInt(num1, 2);
      num2 = parseInt(num2, 2);
    
      switch (operation) {
        case '+':
          return (num1 + num2).toString(2);
        case '-':
          return (num1 - num2).toString(2);
        case '*':
          return (num1 * num2).toString(2);
        case '/':
          return (num1 / num2).toString(2);
        default:
          return "Error: operation must be one of '+', '-', '*', or '/'";
      }
}