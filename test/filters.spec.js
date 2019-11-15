describe(suite + ": Filters (Common)", function() {
  it("can display column filters", () => {
    createWrapper({ filterByColumn: true });

    exists(".VueTables__filters-row");
    exists('[name="vf__code"]');
    exists('[name="vf__name"]');
    exists('[name="vf__uri"]');
  });

  it("can display list filters", () => {
    createWrapper(
      {
        filterByColumn: true,
        listColumns: {
          id: [
            {
              id: 245,
              text: "Zimbabwe"
            },
            {
              id: 244,
              text: "Zambia"
            }
          ]
        }
      },
      ["id", "name", "code", "uri"]
    );

    exists('.VueTables__filters-row select[name="vf__id"]');
    see(
      "Select id",
      '.VueTables__filters-row select[name="vf__id"] option:first-child'
    );
    see(
      "Zimbabwe",
      '.VueTables__filters-row select[name="vf__id"] option:nth-child(2)'
    );
    see(
      "Zambia",
      '.VueTables__filters-row select[name="vf__id"] option:nth-child(3)'
    );
  });

  it("can hide some options in list filters", () => {
    createWrapper(
      {
        filterByColumn: true,
        listColumns: {
          id: [
            {
              id: 245,
              text: "Zimbabwe"
            },
            {
              id: 244,
              text: "Zambia",
              hide: true
            },
            {
              id: 243,
              text: "Yemen"
            }
          ]
        }
      },
      ["id", "name", "code", "uri"]
    );

    see(
      "Select id",
      '.VueTables__filters-row select[name="vf__id"] option:first-child'
    );
    see(
      "Zimbabwe",
      '.VueTables__filters-row select[name="vf__id"] option:nth-child(2)'
    );
    not_see("Zambia", '.VueTables__filters-row select[name="vf__id"]');
    see(
      "Yemen",
      '.VueTables__filters-row select[name="vf__id"] option:nth-child(3)'
    );
  });

  // it('can display date filters', ()=>{
  //
  // 	createWrapper({
  // 		filterByColumn:true,
  // 		dateColumns:['created_at']
  // 	}, ['code','name','uri','created_at']);
  //
  // 	exists('#VueTables__created_at-filter.VueTables__date-filter');
  //
  // });

  it("can hide the generic filter (regression test for #377)", () => {
    exists(".VueTables__search-field");

    setOptions({
      filterable: false
    });

    not_exists(".VueTables__search-field");
  });

  it("can set an initial query - Generic Filter", () => {
    createWrapper({
      initFilters: {
        GENERIC: "ZW"
      }
    });

    var el = wrapper.find(".VueTables__search-field input");
    expect(el.element.value).toEqual("ZW");
  });

  it("can set an initial query - Per Column Filters", () => {
    createWrapper({
      filterByColumn: true,
      initFilters: {
        code: "ZW"
      }
    });

    var el = wrapper.find("input[name=vf__code]");
    expect(el.element.value).toEqual("ZW");
  });
});
