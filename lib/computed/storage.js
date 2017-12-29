module.exports = function() {
  return this.opts.storage==='local' && typeof localStorage!==undefined?localStorage:sessionStorage;
}
