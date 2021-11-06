const Relationship = require('./Relationship');

class Research {
  constructor(browser) {
    for (const p of browser.findAllChildrenOf('John')) {
      console.log(`John has a Child called ${p.name}`);
    }
  }
}
module.exports = Research;
