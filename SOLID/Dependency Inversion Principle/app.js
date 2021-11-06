const Person = require('./Person');
const Relationship = require('./Relationship');
const Relationships = require('./Relationships');
const Research = require('./Research');

const parent = new Person('John');
const child1 = new Person('Chris');
const child2 = new Person('matt');

// low level module
const rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

// high level module
new Research(rels);
