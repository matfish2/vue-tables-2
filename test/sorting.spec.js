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
});