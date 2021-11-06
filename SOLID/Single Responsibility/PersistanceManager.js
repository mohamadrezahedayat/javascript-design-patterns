const fs = require('fs');

class PersistenceManager {
  preProcess(journal) {
    //do some thing
  }

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

module.exports = PersistenceManager;
