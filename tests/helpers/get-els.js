module.exports = function(table) {
  return {
      table:table.find(".VueTables__table"),
      paginationLinks:table.find(".VuePagination__pagination li"),
      search:table.find(".VueTables__search").eq(0),
      headings:table.find("thead .VueTables__heading"),
      ths:table.find(".VueTables__table thead tr:first-child th"),
      rows:table.find(".VueTables__table tbody tr"),
      limit: table.find(".VueTables__limit")
  }
}
