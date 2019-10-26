describe(suite + ': Styling', () => {
    it('can set a td class based on a pre-defined condition (#700)', () => {
        setOptions({
            cellClasses: {
                name: [
                    {
                        class: 'small-area',
                        condition: (row) => {
                            return row.meta && row.meta.area < 500
                        }
                    },
                    {
                        class: 'small-population',
                        condition: (row) => {
                            return row.meta && row.meta.population < 10000
                        }
                    }
                ]
            }
        });

        expect(wrapper.find('tbody tr:nth-child(2) td:nth-child(2)').classes()).toContain('small-area');
        expect(wrapper.find('tbody tr:nth-child(4) td:nth-child(2)').classes()).toContain('small-population');

    });
});
