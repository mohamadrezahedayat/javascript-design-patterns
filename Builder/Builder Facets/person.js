class Person {
  constructor() {
    // address
    this.streetAddress = this.postcode = this.city = '';

    // employment
    this.companyName = this.position = this.annualIncome = 0;
  }
  toString() {
    return (
      `Person Lives at ${this.streetAddress}, ${this.city}, ${this.postcode}\n` +
      `and works at ${this.companyName} as a ${this.position} earns ${this.annualIncome}$ per year.`
    );
  }
}
module.exports = Person;
