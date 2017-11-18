describe(suite + ': Sorting', function() {
	
	it('sorts initially by orderBy option', (done)=>{

		see('Zimb', 'tbody tr:first-child td:nth-child(2)');
		exists('table thead tr:first-child th:nth-child(2) .glyphicon.glyphicon-sort');

		createWrapper({
			orderBy:{
				column:'name',
				ascending:true
			}
		});

		run(function() {
			exists('table thead tr:first-child th:nth-child(2) .glyphicon.glyphicon-chevron-up');
			see('Serbia', 'tbody tr:first-child td:nth-child(2)');
		}, done, 100);

	});

	it('sorts in response to click on heading cell', (done)=>{
		
		see('Zimb', 'tbody tr:first-child td:nth-child(2)');
		exists('table thead tr:first-child th:nth-child(2) .glyphicon.glyphicon-sort');
		
		click('table thead tr:first-child th:first-child'); // code - ASC

		run(function() {
			exists('table thead tr:first-child th:first-child .glyphicon.glyphicon-chevron-up');
			see('United Arab', 'tbody tr:first-child td:nth-child(2)');
		}, done, 500);

	});

	it('sorts in response to a method call', (done)=>{
		
		see('Zimb', 'tbody tr:first-child td:nth-child(2)');
		exists('table thead tr:first-child th:nth-child(2) .glyphicon.glyphicon-sort');
		
		vm().setOrder('code', true);

		run(function() {
			exists('table thead tr:first-child th:first-child .glyphicon.glyphicon-chevron-up');
			see('United Arab', 'tbody tr:first-child td:nth-child(2)');
		}, done, 500);

	});

});