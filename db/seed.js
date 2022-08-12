// * leave as is * //

const { rebuildDB } = require('./seedData');

rebuildDB()
  .catch(console.error)
