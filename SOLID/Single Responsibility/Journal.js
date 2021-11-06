class Journal {
  constructor() {
    this.entries = {};
    this.count = 0;
  }
  addEntry(text) {
    let c = ++this.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }
  removeEntry(index) {
    delete this.entries[index];
    if (index > this.count) {
      console.error(`index ${index} not exist!`);
      return;
    }
    let c = --this.count;
    return c;
  }
  toString() {
    return Object.values(this.entries).join('\n');
  }
}

module.exports = Journal;
