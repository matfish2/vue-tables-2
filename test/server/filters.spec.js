describe(suite + ": Filters", () => {

	it('sends a generic filter request', (done)=>{

		setOptions({
			debounce:0
		});

		type('.VueTables__search input','zimb');
		setTimeout(()=>{
			expect(vm().query).toEqual('zimb');
			requestHas('query','zimb');
			done();
		},100);

	});

	it('sends column filters request', (done) => {
		
		createWrapper({
			debounce:0,
			filterByColumn:true
		});

		type('[name=vf__name]', 'zim');
		type('[name=vf__code]', 'zw');

		setTimeout(()=>{
			expect(vm().query).toEqual({name:'zim',code:'zw',uri:''});
			requestHas('query',{name:'zim',code:'zw',uri:''});
			done();
		},100);


	});
});