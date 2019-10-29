module.exports = function(h) {
  return right => {
    var that = this;
    var sortControl = require("./sort-control")(h, right);

    var headings = [];

    if (
      this.hasChildRow &&
      this.opts.childRowTogglerFirst &&
      this.opts.showChildRowToggler
    )
      headings.push(<th />);

    this.allColumns.map(
      function(column) {
        headings.push(
          <th
            on-keypress={function(e) {
              if (e.key === "Enter") {
                that.orderByColumn.bind(that, column, e)();
              }
            }}
            on-click={function(e) {
              if (e.target.className !== "resize-handle") {
                that.orderByColumn.bind(that, column, e)();
              }
            }}
            class={this.sortableClass(column)}
            tabindex="0"
          >
            <span
              class="VueTables__heading"
              title={this.getHeadingTooltip(column, h)}
            >
              {this.getHeading(column, h)}
            </span>
            {sortControl.call(this, column)}
          </th>
        );
      }.bind(this)
    );

    if (
      this.hasChildRow &&
      !this.opts.childRowTogglerFirst &&
      this.opts.showChildRowToggler
    )
      headings.push(<th />);

    return headings;
  };
};
