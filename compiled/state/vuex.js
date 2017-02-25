'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (source) {

  var extra = source == 'server' ? serverExtra() : clientExtra();

  return _merge2.default.recursive(true, {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    computed: {
      state: function state() {
        return this.$store.state[this.name];
      },
      Page: function Page() {
        return this.state.page;
      },
      count: function count() {
        return this.state.count;
      },
      Columns: function Columns() {
        return this.state.columns;
      },
      tableData: function tableData() {
        return this.state.data;
      },
      page: function page() {
        return this.state.page;
      },
      limit: function limit() {
        return this.state.limit;
      },
      customQueries: function customQueries() {
        return this.state.customQueries;
      },
      query: function query() {
        return this.state.query;
      },
      orderBy: function orderBy() {
        return {
          column: this.state.sortBy,
          ascending: this.state.ascending
        };
      }
    },
    methods: {
      commit: function commit(action, payload, silent) {
        silent = { silent: silent };
        return this.$store.commit(this.name + '/' + action, payload, silent);
      },
      orderByColumn: function orderByColumn(column) {

        if (!this.sortable(column)) return;

        this.commit('SORT', { column: column, ascending: undefined });
      },
      setLimit: function setLimit(e) {
        var limit = parseInt(e.target.value);
        this.commit('SET_LIMIT', limit);
      },
      setOrder: function setOrder(column, ascending) {
        this.commit('SORT', { column: column, ascending: ascending });
      },
      setPage: function setPage(page, silent) {

        if (!page) {
          page = this.$refs.page.value;
        }

        this.commit('PAGINATE', page, silent);
      }

    }
  }, extra);
};

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function serverExtra() {
  return {
    methods: {
      setData: function setData(_ref) {
        var data = _ref.data;
        var count = _ref.count;

        this.commit('SET_DATA', { data: data, count: count });
        this.commit('LOADED', { data: data, count: count });
      }
    }
  };
}

function clientExtra() {
  return {};
}