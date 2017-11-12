describe(suite +': Basic Display', () => {

	it('Discerns the headings based on the columns prop', () => {
		see('Name','table thead tr:first-child th:first-child');
		see('Age','table thead tr:first-child th:nth-child(2)');
		see('Favorite game', 'table thead tr:first-child th:nth-child(3)');
	})

	it('Displays the data in its original order', (done) =>{

		run(function() {
			see('John','table tbody tr:first-child td:first-child');
			see(24,'table tbody tr:nth-child(2) td:nth-child(2)');
			see('Doom','table tbody tr:nth-child(3) td:nth-child(3)');
			count('table tbody tr', 5);	
		}, done);


	});

	it('Displays the count', (done)=>{
		run(function() {
			see('5 records');			
		}, done);
	});

	it('Displays a generic filter', ()=>{
		exists('.VueTables__search input');
	});



})