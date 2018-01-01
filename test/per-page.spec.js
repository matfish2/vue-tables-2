describe(suite + ': Per page selection', ()=>{

	it('emits an event when a per page limit is selected',done=>{

		select("select[name=limit]", "25");

		run(()=>{
			eventEmitted('limit', 25);
		},done);
	});

	it('hides the per page control when there is only one item to select (regression test for #377)', (done)=>{
		exists('.VueTables__limit');
		
		setOptions({
			perPageValues:[25]
		});

		run(()=>{
			not_exists('.VueTables__limit');
		}, done);
	});
});