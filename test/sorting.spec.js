describe(suite + ": Sorting (common)", ()=>{

	it('defaults to all columns being sortable', ()=>{
	
		exists('table thead tr:first-child th:first-child .glyphicon.glyphicon-sort');
		exists('table thead tr:first-child th:nth-child(2) .glyphicon.glyphicon-sort');
		exists('table thead tr:first-child th:nth-child(3) .glyphicon.glyphicon-sort');

	});

	it('allows for specifying sortable columns', ()=>{
		setOptions({
			sortable:['name','code']
		});

		exists('table thead tr:first-child th:first-child .glyphicon.glyphicon-sort');
		exists('table thead tr:first-child th:nth-child(2) .glyphicon.glyphicon-sort');
		not_exists('table thead tr:first-child th:nth-child(3) .glyphicon.glyphicon-sort');

	});

	
	it('allows setting the initial sort order to descending per column (#465)', (done)=>{

		setOptions({
			descOrderColumns:['code']
		});

		click('table thead tr:first-child th:first-child'); // code - DESC
		
		run(()=>{
			exists('table thead tr:first-child th:first-child .glyphicon.glyphicon-chevron-down');
			see('ZW', 'tbody tr:first-child td:nth-child(1)');
		}, done);
	});

});