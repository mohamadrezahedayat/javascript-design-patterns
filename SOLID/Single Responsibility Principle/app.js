const Journal = require('./Journal');
const PersistanceManager = require('./PersistanceManager');

let journal = new Journal();
journal.addEntry('I cried today.');
journal.addEntry('I ate a bug.');
journal.addEntry('I ate an apple.');
journal.addEntry('I drive car.');
journal.addEntry('I broke a glass.');

journal.removeEntry(7);
journal.removeEntry(3);
console.log(journal.toString());

let p = new PersistanceManager();
p.saveToFile(journal, 'journal.txt');
