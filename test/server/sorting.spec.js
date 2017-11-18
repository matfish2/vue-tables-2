describe(suite + ': Sorting', function() {
	
	it('sorts initially by orderBy option', (done)=>{

		exists('table thead tr:first-child th:nth-child(2) .glyphicon.glyphicon-sort');

		createWrapper({
			orderBy:{
				column:'name',
				ascending:true
			}
		});

		run(function() {
			exists('table thead tr:first-child th:nth-child(2) .glyphicon.glyphicon-chevron-up');
			requestHas('orderBy','name');
			requestHas('ascending', 1);
		}, done);

	});

	it('sorts in response to click on heading cell', (done)=>{
		
		see('Zimb', 'tbody tr:first-child td:nth-child(2)');
		exists('table thead tr:first-child th:nth-child(2) .glyphicon.glyphicon-sort');
		
		click('table thead tr:first-child th:first-child'); // code - ASC

		run(function() {
			exists('table thead tr:first-child th:first-child .glyphicon.glyphicon-chevron-up');
			requestHas('orderBy','code');
			requestHas('ascending', 1);
		}, done);

	});

	it('sorts in response to a method call', (done)=>{
		
		see('Zimb', 'tbody tr:first-child td:nth-child(2)');
		exists('table thead tr:first-child th:nth-child(2) .glyphicon.glyphicon-sort');
		
		vm().setOrder('uri', false);

		run(function() {
			exists('table thead tr:first-child th:nth-child(3) .glyphicon.glyphicon-chevron-down');
			requestHas('orderBy','uri');
			requestHas('ascending', 0);
		}, done);

	});

});