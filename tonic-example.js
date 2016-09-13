// Well, You can't really draw a table without a document, but as a POC both objects should have an `installed:true` property, indicating we are good to go

var Vue = require("vue")
var VueTables = require("vue-tables")

Vue.use(VueTables.client)
Vue.use(VueTables.server)

console.log(VueTables.client)
VueTables.server
