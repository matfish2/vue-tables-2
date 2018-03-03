var clone = require('clone');

describe(suite + ': Pagination', ()=>{

	it('Changes the page in response to a user click', (done)=>{

		gotoPage(2);

		run(()=>{
			see('United States Virgin Islands','tbody tr:first-child td:nth-child(2)');
		},done);

	});

	it('Changes the page in response to a method call', (done)=>{

		vm().setPage(2);

		run(()=>{
			see('United States Virgin Islands','tbody tr:first-child td:nth-child(2)');
		},done);
	});

	it('allows for setting an initial page', (done)=>{
		
		createWrapper({
			initialPage:3
		});

		run(()=>{
			see('Tunisia','tbody tr:first-child td:nth-child(2)');			
		}, done)
	});

	it('can use dropdown pagination', (done)=>{
		setOptions({
			pagination:{
				dropdown: true
			}
		});

		select('.dropdown-pagination', 2);

		run(()=>{
			see('United States Virgin Islands','tbody tr:first-child td:nth-child(2)');
		},done);
	});

	it('navigates to the last page if the current page no longer has data due to dynamically removing rows (regression test for #442)', (done)=> {
		var data = clone(vm().data);
		vm().setPage(5);
		vm().data.splice(-25);

		run(()=>{
			see('3','.VuePagination__pagination li.active');
			count('tbody tr',5);
		},done);
	});


});