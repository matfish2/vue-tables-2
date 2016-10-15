module.exports = function(h, that) {

  var perpageValues = require('./per-page-values.jsx')(h, that);

  return  <div class="form-group form-inline pull-right VueTables__limit">
        <label>{that.display('limit')}</label>
        <select class="form-control"
          name="limit"
          value={that.limit}
          on-change={that.setLimit.bind(that)}
          >
          {perpageValues}
        </select>
      </div>
}
