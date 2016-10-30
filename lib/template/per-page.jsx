module.exports = function(h, that) {

  var perpageValues = require('./per-page-values.jsx')(h, that);

  if (perpageValues.length > 1) {
    var id = 'VueTables__limit_' + that.id;
    return  <div class="form-group form-inline pull-right VueTables__limit">
          <label for={id}>{that.display('limit')}</label>
          <select class="form-control"
            name="limit"
            value={that.limit}
            on-change={that.setLimit.bind(that)}
            id={id}
            >
            {perpageValues}
          </select>
        </div>
  }

  return '';
}
