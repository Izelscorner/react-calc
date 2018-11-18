export default class Calculate {
    constructor() {
        this.result = {current : null, outcome: null, operator: null};
    }
    
    reset() {
        Object.keys(this.result).forEach(key => this.result[key] = null)
    }

    process(value) {
        if(Number.isInteger(parseInt(value)) || value === '.' ){ // Number
              this.result['current'] = this.result['current'] ? this.result['current']  + value : value;
        } 
        else  {  // Operator         
            if(this.result['current']) { 
                this.calculate();
            }
            
            this.result['operator'] = value;
            this.result['current'] = null;
        }
    }  
    
    calculate() {
        switch(this.result['operator']) {
          case '+':
            this.result['outcome'] = this.result['outcome'] + parseFloat(this.result['current']);
            break;
          case '-':
            this.result['outcome'] = this.result['outcome'] - parseFloat(this.result['current']);
            break;
          case '/':
            this.result['outcome'] = this.result['outcome'] / parseFloat(this.result['current']);
            break;
          case '*':
            this.result['outcome'] = this.result['outcome'] * parseFloat(this.result['current']);
            break;
          default:
            this.result['outcome'] =  parseFloat(this.result['current']);
            break;
        } 

        this.result['operator'] = null;
    }
}