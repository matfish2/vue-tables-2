"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLSortControl',
  inject: ['column', 'theme', 'sortable', 'hasMultiSort', 'orderBy', 'userMultiSorting', 'sortableChevronClass', 'componentsOverride'],
  render: function render() {
    return this.$scopedSlots["default"]({
      sortable: this.sortable(this.column),
      "class": "VueTables__sort-icon ".concat(this.theme.right, " ").concat(this.sortableChevronClass(this.column)),
      sortStatus: this.getSortStatus(),
      override: this.componentsOverride.sortControl
    });
  },
  computed: {
    OrderBy: function OrderBy() {
      return this.orderBy();
    },
    UserMultiSorting: function UserMultiSorting() {
      return this.userMultiSorting();
    }
  },
  methods: {
    getSortStatus: function getSortStatus() {
      var _this = this;

      if (this.hasMultiSort && this.OrderBy.column && this.UserMultiSorting[this.OrderBy.column]) {
        var col = this.UserMultiSorting[this.OrderBy.column].filter(function (c) {
          return c.column === _this.column;
        })[0];
        if (col) return {
          sorted: true,
          asc: col.asc
        };
      }

      if (this.column === this.OrderBy.column) {
        return {
          sorted: true,
          asc: this.OrderBy.ascending
        };
      }

      return {
        sorted: false,
        asc: false
      };
    }
  }
};
exports["default"] = _default;