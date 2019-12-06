"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (table, hasChildRow, isChildRowTogglerFirst, resizeableColumns) {
  var row = table.getElementsByTagName("tr")[0],
      cols = row ? Array.from(row.children) : undefined;
  if (!cols) return;

  if (_typeof(resizeableColumns) === 'object') {
    cols = cols.filter(function (col) {
      return resizeableColumns.includes(col.id.split('--')[1]);
    });
  }

  table.style.overflow = "hidden";
  var tableHeight = table.offsetHeight;
  var i = hasChildRow && isChildRowTogglerFirst ? 1 : 0;
  var till = hasChildRow && !isChildRowTogglerFirst ? cols.length - 2 : cols.length;

  for (; i < till; i++) {
    var div = createDiv(tableHeight);
    div.className = "resize-handle";
    cols[i].appendChild(div);
    cols[i].style.position = "relative";
    setListeners(div);
  }

  function setListeners(div) {
    var pageX, curCol, nxtCol, curColWidth, nxtColWidth;
    div.addEventListener("mousedown", function (e) {
      e.preventDefault();
      e.stopPropagation();
      curCol = e.target.parentElement;
      nxtCol = curCol.nextElementSibling;
      pageX = e.pageX;
      var padding = paddingDiff(curCol);
      curColWidth = curCol.offsetWidth - padding;
      if (nxtCol) nxtColWidth = nxtCol.offsetWidth - padding;
    }); // div.addEventListener("mouseover", function(e) {
    //   e.target.style.borderRight = "2px solid #0000ff";
    // });

    div.addEventListener("mouseout", function (e) {
      e.target.style.borderRight = "";
    });
    document.addEventListener("mousemove", function (e) {
      if (curCol) {
        var diffX = e.pageX - pageX;
        if (nxtCol) nxtCol.style.width = nxtColWidth - diffX + "px";
        curCol.style.width = curColWidth + diffX + "px";
      }
    });
    document.addEventListener("mouseup", function (e) {
      if (e.target.nodeName === 'INPUT') return;
      e.preventDefault();
      e.stopPropagation();
      curCol = undefined;
      nxtCol = undefined;
      pageX = undefined;
      nxtColWidth = undefined;
      curColWidth = undefined;
    });
  }

  function createDiv(height) {
    var div = document.createElement("div");
    div.style.top = 0;
    div.style.right = 0;
    div.style.width = "5px";
    div.style.position = "absolute";
    div.style.cursor = "col-resize";
    div.style.userSelect = "none";
    div.style.height = height + "px";
    return div;
  }

  function paddingDiff(col) {
    if (getStyleVal(col, "box-sizing") == "border-box") {
      return 0;
    }

    var padLeft = getStyleVal(col, "padding-left");
    var padRight = getStyleVal(col, "padding-right");
    return parseInt(padLeft) + parseInt(padRight);
  }

  function getStyleVal(elm, css) {
    return window.getComputedStyle(elm, null).getPropertyValue(css);
  }
};