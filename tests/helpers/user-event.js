  var get_els = require('../helpers/get-els');

module.exports = function(setValues, test, done) {

    promise = $.Deferred();
    setValues(vm);

    setTimeout(function() {
      promise.resolve();
    },0);

    promise.then(function() {
      els = get_els($("#" + entity));
      test(els);
    }).always(done);

   }
