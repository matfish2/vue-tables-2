module.exports = {
  watchers: {
    limit: function(val) {
      console.log("watcher " + val);
      that.setPage.bind(that,1, true)
    }
  }
}
