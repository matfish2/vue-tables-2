describe('Server: Request', () => {

	var initialParams = { 
		query: '', 
		limit: 10, 
		ascending: 1, 
		page: 1, 
		byColumn: 0 
	};

	it('sends a request when initialized to the URL defined by the consumer with the right parameters', ()=>{
		
		var request = moxios.requests.mostRecent();

		expect(request.config.url).toEqual(vm().url);

		expect(request.config.params).toEqual(initialParams);

		// orderBy is not sent by default, unless the consumer defined a column to sort by using the orderBy option

	});

	it('Allows for modifying the request keys', (done) => {
		
		setOptions({
			requestKeys:{
				query:'filter',
				limit:'perPage'
			}
		});

		vm().getData(true).then(()=>{

			done();

			var request = moxios.requests.mostRecent();	

			expect(request.config.params).toEqual(
			{ 
				filter: '', 
				perPage: 10, 
				ascending: 1, 
				page: 1, 
				byColumn: 0 
			}); 
		});


	});

	it('can use a custom request function', (done)=>{

		var response = {data:[],count:0};

		setOptions({
			requestFunction(data) {
				return new Promise(function(resolve, reject) {

					setTimeout(()=>{
						resolve(response);
						done();
					},100);

				});
			}
		});


		vm().getData(true).then((res)=>{
			expect(res).toEqual(response);
		});

	});

	it('can use a request adapter', (done)=>{


		setOptions({
			requestAdapter(data) {
				return {data};
			}
		});

		vm().getData(true).then(()=>{

			done();

			var request = moxios.requests.mostRecent();	

			expect(request.config.params).toEqual({data:initialParams}); 

		});


	});

});