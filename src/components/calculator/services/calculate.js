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
    } else {
      // Operator
      if (this.result["current"]) {
        this.calculate();
      }

      this.result["operator"] = value;
      this.result["current"] = null;
    }
  }

  calculate() {
    let outcoume = this.result["outcome"];
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

    this.result["outcome"] = outcoume;
  }
}
