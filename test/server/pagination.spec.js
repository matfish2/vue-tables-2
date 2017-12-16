describe(suite + ' :Pagination', ()=>{

	it('Changes the page in response to a user click', (done)=>{

		gotoPage(2);

		run(()=>{
			requestHas('page',2);
		},done);

	});

	it('Changes the page in response to a method call', (done)=>{

		vm().setPage(2);

		run(()=>{
			requestHas('page',2);
		},done);

	});

	it('allows for setting an initial page', (done)=>{
		createWrapper({
			initialPage:3
		});

		run(()=>{
			requestHas('page',3);
		}, done)
	});

	it('can use dropdown pagination', (done)=>{
		setOptions({
			pagination:{
				dropdown: true
			}
		});

		select('.dropdown-pagination', "2");

		run(()=>{
			requestHas('page',"2");			
		},done);
	});


});