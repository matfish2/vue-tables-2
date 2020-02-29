describe(suite + ": Custom Queries", () => {
  it('exposes the Renderless ServerTable', () => {
    createWrapper({
      debounce: 0,
      customFilters: [
        'foo'
      ],
      initFilters: {
        foo: 'bar'
      }
    })

    expect(vm().customQueries).toEqual({
      foo: 'bar'
    })

    expect(vm().customQueries).toEqual(vm().$refs.table.customQueries)

    vm().customQueries.foo = 'baz'

    expect(vm().$refs.table.customQueries.foo).toEqual('baz')
  })
})
