var ClientTable = require('./compiled/v-client-table');
var ServerTable = require('./compiled/v-server-table');
var Event = require('./compiled/bus');

module.exports = {
  ClientTable:ClientTable,
  ServerTable:ServerTable,
  Event:Event
};
