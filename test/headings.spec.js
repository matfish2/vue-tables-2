describe(suite + ': Headings', () => {
    it('can set custom headings for the columns', () => {
        setOptions({
            headings:{
                name:'Country Name',
                code:'Country Code'
            }
        });

        seeInHeadings('Country Code', 1);
        seeInHeadings('Country Name',2);
        seeInHeadings('Uri', 3);

    });

    it('can use html in headings - render function (JSX)', ()=>{
        setOptions({
            headings:{
                name(h) {
                    return <h2>Country</h2>
                }
            }
        });

        expect(getHeading(2).html()).toContain('<h2>Country</h2>');

    });
});