function flexCalc(operator, ...numbers) {
  // If fewer than 2 numbers, add default 0
  if (numbers.length === 0) {
    numbers = [0, 0];
  } else if (numbers.length === 1) {
    numbers.push(0);
  }

  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const num = numbers[i];

    switch (operator) {
      case '+':
        result += num;
        break;

      case '-':
        result -= num;
        break;

      case '*':
        result *= num;
        break;

      case '/':
        if (num === 0) {
          return "Error: Division by zero";
        }
        result /= num;
        break;

      default:
        return "Invalid operator";
    }
  }

  return result;
}function flexCalc(operator, ...numbers) {
  // If fewer than 2 numbers, add default 0
  if (numbers.length === 0) {
    numbers = [0, 0];
  } else if (numbers.length === 1) {
    numbers.push(0);
  }

  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const num = numbers[i];

    switch (operator) {
      case '+':
        result += num;
        break;

      case '-':
        result -= num;
        break;

      case '*':
        result *= num;
        break;

      case '/':
        if (num === 0) {
          return "Error: Division by zero";
        }
        result /= num;
        break;

      default:
        return "Invalid operator";
    }
  }

  return result;
}
