module.exports = function(h) {
    return (perpageValues, classes, name, perPage) => {
        var perpageId = 'VueTables__limit_' + name;
        
        return perpageValues.length>1?<div class="VueTables__limit-field">
      <label class={classes.label} for={perpageId}>{this.display('limit')}</label>
      {perPage(perpageValues, classes.select, perpageId)}
      </div>:'';
    }
}