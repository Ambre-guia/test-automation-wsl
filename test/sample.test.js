import { expect } from 'chai';

describe('Sample Test', () => {
    it ('it shorld return -1 when the value is not present', () => {
        const arr = [1, 2, 3];
        expect(arr.indexOf(4)).to.equal(-1);
    });
    it ('it should return the index when the value is present', () => {
        const arr = [1, 2, 3];
        expect(arr.indexOf(2)).to.equal(1);
    });
});