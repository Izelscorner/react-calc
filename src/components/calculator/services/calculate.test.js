import Calculate from './calculate.js'

describe('Calculate Function', () => {

    let calculate =  new Calculate();

    test('Reset state values', () => {
        calculate.reset();
        let result = calculate.result; 
        expect(result.current).toEqual(null);
        expect(result.outcome).toEqual(null);
        expect(result.operator).toEqual(null);
    })

    test('Pass first number', () => {
        calculate.process('1');
        let result = calculate.result;

        expect(result.current).toEqual('1');
    })

    test('Pass two numbers concurrently', () => {
        calculate.reset();
        calculate.process('1');
        calculate.process('1');
        let result = calculate.result;

        expect(result.current).toEqual('11');
    })

    test('Pass an first operator', () => {
        calculate.reset();
        calculate.process('1');
        calculate.process('+');
        let result = calculate.result;
        
        expect(result.operator).toEqual('+');
        expect(result.current).toEqual(null);
    })

    test('Pass a second  operator', () => {
        calculate.reset();
        calculate.process('5');
        calculate.process('+');
        calculate.process('5');
        calculate.process('=');
        let result = calculate.result;
        expect(result.outcome).toEqual(10);
    })

    test('Float Number', () => {
        calculate.reset();
        calculate.process('5');
        calculate.process('.');
        calculate.process('5');
        calculate.process('+');
        calculate.process('5');
        calculate.process('=');
        let result = calculate.result;
        expect(result.outcome).toEqual(10.5);
    })

    test('Concurrent operatord', () => {
        calculate.reset();
        calculate.process('5');
        calculate.process('+');
        calculate.process('5');
        calculate.process('=');
        calculate.process('-');
        calculate.process('3');
        calculate.process('=');
        calculate.process('*');
        calculate.process('3');
        calculate.process('+');
        calculate.process('4');
        calculate.process('=');
        calculate.process('/');
        calculate.process('5');
        calculate.process('=');

        let result = calculate.result;
        expect(result.outcome).toEqual(5);
    })

})