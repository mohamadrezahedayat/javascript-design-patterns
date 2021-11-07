const PersonBuilder = require('./personBuilder');

const person = new PersonBuilder().lives
  .at('123 London Road')
  .in('London')
  .withPostcode('SW12BC')
  .works.at('Facebook')
  .asA('Developer')
  .earning('123000')
  .build();

console.log(person.toString());
