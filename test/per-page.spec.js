describe(suite + ': Per page selection', ()=>{

	it('emits an event when a per page limit is selected',done=>{

		select("select[name=limit]", "25");

		run(()=>{
			eventEmitted('limit', 25);
		},done);
	});
});