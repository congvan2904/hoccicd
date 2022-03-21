const { it, expect } = require('@jest/globals')
const sum = require('./tinhtong')
const kq = sum(1, 1)
console.log(kq)
it('1+1=2', () => {
    expect(kq).toBe(2);
    expect(sum(5, 6)).toEqual(11)

})