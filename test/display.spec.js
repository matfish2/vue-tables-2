describe(suite +': Basic Display (default options)', () => {

	var records = 50;

	it('Discerns the headings based on the columns prop', () => {
		see('Code','table thead tr:first-child th:first-child');
		see('Name','table thead tr:first-child th:nth-child(2)');
		see('Uri', 'table thead tr:first-child th:nth-child(3)');
	})

	it('Displays the data in its original order', (done) =>{

		run(function() {
			see('ZW','table tbody tr:first-child td:first-child');
			see('Zambia','table tbody tr:nth-child(2) td:nth-child(2)');
			see("http://api.lobbyfacts.eu/api/1/country/243",'table tbody tr:nth-child(3) td:nth-child(3)');
		}, done);

	});

	it(`Displays by default 10 records per page`, ()=>{
		expect(vm().limit).toEqual(10);
		count('table tbody tr', 10);	
	});

	it('Displays the count', (done)=>{
		run(function() {
			see(`${records} records`);			
		}, done);
	});

	it('Displays a generic filter', ()=>{
		exists('.VueTables__search input');
	});



})