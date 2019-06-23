export default class Calculate {
  constructor() {
    this.result = { current: null, outcome: null, operator: null };
  }

  reset() {
    Object.keys(this.result).forEach(key => (this.result[key] = null));
  }

  process(value) {
    if (Number.isInteger(parseInt(value)) || value === ".") {
      // Number
      this.result["current"] = this.result["current"]
        ? this.result["current"] + value
        : value;
    } else if (this.result["current"]) {
      // Operator
      this.calculate();
      this.result["operator"] = value;
      this.result["current"] = null;
    } else if (this.result["operator"] === '=') {
      this.result["operator"] = value;
    }
  }

  deleteChar() {
    if(this.result["current"] && this.result["current"].length > 0) {
      this.result["current"] =this.result["current"].slice(0, -1);
    } else {
      this.result["current"]  = 0;
    }
  }

  calculate() {
    let outcoume = parseFloat(this.result["outcome"]);
    let current  = parseFloat(this.result["current"]);
    
    switch (this.result["operator"]) {
      case "+":
        outcoume = outcoume + current;
        break;
      case "-":
        outcoume = outcoume - current;
        break;
      case "/":
        outcoume = outcoume / current;
        break;
      case "*":
        outcoume = outcoume * current;
        break;
      default:
        outcoume = current;
        break;
    }

    this.result["outcome"] = outcoume.toString();
  }
}
