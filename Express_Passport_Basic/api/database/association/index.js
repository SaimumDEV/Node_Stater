const oneToOne = require('./one_to_one');
const oneToMany = require('./one_to_many');
const manyToMany = require('./many_to_many');

function connect() {
  oneToOne.initialize();
  oneToMany.initialize();
  manyToMany.initialize();
}

module.exports = {
  connect: connect,
};
