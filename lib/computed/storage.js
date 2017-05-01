module.exports = function() {
  return this.opts.storage==='local'?localStorage:sessionStorage;
}
