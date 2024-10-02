import Joi from 'joi';
let x1 = { a: 1 }, x2 = { a: '2' }, x3 = { a: 'fail' };
let cases = [x1, x2, x3];
let schema1 = Joi.object({
    a: Joi.number()
});
let schema2 = Joi.object({
    a: Joi.number().strict()
});
function f(x) {
    return x?.error ? 'FAIL' : 'ok';
}
console.log('Validerar testfall utan strict:');
cases.forEach(c => {
    console.log('-> ', f(schema1.validate(c)));
});
console.log('');
console.log('-------------------------------');
console.log('Validerar testfall med strict:');
cases.forEach(c => {
    console.log('-> ', f(schema2.validate(c)));
});
