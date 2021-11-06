const Relationship = require('./Relationship');
const RelationshipBrowser = require('./RelationshipBrowser');

class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }
  addParentAndChild(parent, child) {
    this.data.push({ from: parent, type: Relationship.Parent, to: child });
  }

  findAllChildrenOf(name) {
    return this.data
      .filter((r) => r.from.name === name && r.type === Relationship.Parent)
      .map((r) => r.to);
  }
}
module.exports = Relationships;
