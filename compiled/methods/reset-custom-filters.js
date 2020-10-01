"use strict";

module.exports = function () {
  for (var key in this.$refs.table.customQueries) {
    this.$refs.table.customQueries[key] = null;
  }

  this.$refs.table.updateState('customQueries', this.customQueries);
  this.$refs.table.refresh();
};