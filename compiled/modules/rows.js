"use strict";

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("babel-helper-vue-jsx-merge-props"));

var _clone = _interopRequireDefault(require("clone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (h) {
  var _this = this;

  return function (classes) {
    var data;

    if (_this.source === 'client') {
      data = _this.filteredData;

      if (!data.length && _this.source === 'client' && _this.page !== 1) {
        // data was dynamically removed go to last page
        _this.setPage(_this.totalPages ? _this.totalPages : 1);
      }
    } else {
      data = _this.tableData;
    }

    if (data.length === 0) {
      var colspan = _this.allColumns.length;
      if (_this.hasChildRow && _this.opts.showChildRowToggler) colspan++;
      return h("tr", {
        "class": "VueTables__no-results"
      }, [h("td", {
        "class": "text-center",
        attrs: {
          tabindex: "0",
          colspan: _this.colspan
        }
      }, [_this.display(_this.loading ? 'loading' : 'noResults')])]);
    }

    var rows = [];
    var columns;
    var rowKey = _this.opts.uniqueKey;
    var rowAttributes;
    var rowClass;
    var recordCount = (_this.Page - 1) * _this.limit;
    var currentGroup;
    var groupSlot;
    var groupValue;
    var groupByContent;
    data.map(function (row, index) {
      if (_this.opts.groupBy && _this.source === 'client' && row[_this.opts.groupBy] !== currentGroup) {
        groupSlot = _this.getGroupSlot(row[_this.opts.groupBy]);
        groupValue = row[_this.opts.groupBy];
        groupByContent = _this.opts.toggleGroups ? h("button", {
          "class": classes.button,
          on: {
            "click": _this.toggleGroup.bind(_this, groupValue)
          }
        }, [groupValue, h("span", {
          "class": _this.groupToggleIcon(groupValue)
        })]) : groupValue;
        rows.push(h("tr", {
          "class": classes.groupTr,
          on: {
            "click": _this._toggleGroupDirection.bind(_this)
          }
        }, [h("td", {
          attrs: {
            colspan: _this.colspan
          }
        }, [groupByContent, groupSlot])]));
        currentGroup = row[_this.opts.groupBy];
      }

      if (_this.opts.toggleGroups && _this.collapsedGroups.includes(currentGroup)) {
        return;
      }

      index = recordCount + index + 1;
      columns = [];
      var update;
      var isEditing;
      var setEditing;
      var revertValue;

      if (_this.hasChildRow && _this.opts.showChildRowToggler) {
        var childRowToggler = h("td", {
          attrs: {
            tabindex: "0"
          },
          on: {
            "keypress": function keypress(e) {
              if (e.key === 'Enter') {
                _this.toggleChildRow.bind(_this, row[rowKey])();
              }
            },
            "click": _this.toggleChildRow.bind(_this, row[rowKey])
          }
        }, [h("span", {
          "class": "VueTables__child-row-toggler " + _this.childRowTogglerClass(row[rowKey])
        })]);
        if (_this.opts.childRowTogglerFirst) columns.push(childRowToggler);
      }

      _this.allColumns.map(function (column) {
        var rowTemplate = _this.$scopedSlots && _this.$scopedSlots[column];

        if (rowTemplate) {
          var rowTemplateData = {
            row: row,
            column: column,
            index: index
          };
        }

        if (_this.opts.editableColumns.includes(column)) {
          rowTemplateData.update = updateValue(row, column).bind(_this);
          rowTemplateData.isEditing = editing(row, column).bind(_this);
          rowTemplateData.setEditing = setEdit(row, column).bind(_this);
          rowTemplateData.revertValue = revertVal(row, column).bind(_this);
        }

        columns.push(h("td", {
          "class": "".concat(_this.columnClass(column), " ").concat(_this._cellClasses(column, row)).trim(),
          attrs: {
            tabindex: "0"
          }
        }, [rowTemplate ? rowTemplate(rowTemplateData) : _this.render(row, column, index, h)]));
      });

      if (_this.hasChildRow && !_this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) columns.push(childRowToggler);
      rowClass = _this.opts.rowClassCallback ? _this.opts.rowClassCallback(row) : '';
      rowAttributes = _this.opts.rowAttributesCallback ? _this.opts.rowAttributesCallback(row) : {};
      rows.push(h("tr", (0, _babelHelperVueJsxMergeProps["default"])([{
        attrs: rowAttributes
      }, {
        "class": "VueTables__row ".concat(rowClass),
        on: {
          "click": _this.rowWasClicked.bind(_this, row, index)
        }
      }]), [columns, " "]));
      rows.push(_this.hasChildRow && _this.openChildRows.includes(row[rowKey]) ? h("tr", {
        "class": "VueTables__child-row ".concat(rowClass)
      }, [h("td", {
        attrs: {
          colspan: _this.colspan,
          tabindex: "0"
        }
      }, [_this._getChildRowTemplate(h, row, index)])]) : h());
    });
    return rows;
  };
};

function setEdit(row, column) {
  return function (editing) {
    var _this2 = this;

    if (editing) {
      this.editing.push({
        id: row[this.opts.uniqueKey],
        column: column,
        originalValue: row[column]
      });
    } else {
      this.editing = this.editing.filter(function (e) {
        return e.id !== row[_this2.opts.uniqueKey];
      });
    }
  };
}

function editing(row, column) {
  return function () {
    var _this3 = this;

    return this.editing.find(function (e) {
      return e.id === row[_this3.opts.uniqueKey] && e.column === column;
    });
  };
}

function revertVal(row, column) {
  return function () {
    var _this4 = this;

    var origVal = this.editing.find(function (e) {
      return e.id === row[_this4.opts.uniqueKey];
    }).originalValue;
    row[column] = origVal;
  };
}

function updateValue(row, column) {
  return function (e) {
    var _this5 = this;

    var oldVal = row[column];
    row[column] = getValue(e);
    var data = (0, _clone["default"])(this.data).map(function (r) {
      if (r[_this5.opts.uniqueKey] === row[_this5.opts.uniqueKey]) {
        return row;
      }

      return r;
    });
    this.$emit('input', data);
    this.$emit('update', {
      row: row,
      column: column,
      oldVal: oldVal,
      newVal: row[column]
    });
  };
}

function getValue(val) {
  if (val.target) {
    return val.target.type === 'checkbox' ? val.target.checked : val.target.value;
  }

  return val;
}