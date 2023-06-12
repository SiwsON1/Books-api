const formatFullname = require('../formatFullname.js');

const expect = require('chai').expect;

describe('formatFullname', () => {

    it('should return proper case sensitive fullName', () => {
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
        expect(formatFullname('john doe')).to.equal('John Doe');
        expect(formatFullname('JohN DoE')).to.equal('John Doe');
        expect(formatFullname('jOHn dOe')).to.equal('John Doe');
  
    });
    it('should return an error if "fullName" was not provided', () => {

        expect(formatFullname('')).to.equal('Error');
      });

    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
  
    });

    it('should return an error if "fullName" arg is not divided into exactly 2 other strings', () => {
        expect(formatFullname('john')).to.equal('Error');
        expect(formatFullname('John Doe Test')).to.equal('Error');
        expect(formatFullname('JOHNdoe')).to.equal('Error');
        expect(formatFullname('j')).to.equal('Error');
        expect(formatFullname('John Doe Testo macabre')).to.equal('Error');
  
    });
});