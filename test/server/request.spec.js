describe('Server: Request', () => {
	it('sends a request when initialized to the URL defined by the consumer with the right parameters', ()=>{
		
		var request = moxios.requests.mostRecent();

		expect(request.config.url).toEqual(vm().url);

		expect(request.config.params).toEqual(
		{ 
			query: '', 
			limit: 10, 
			ascending: 1, 
			page: 1, 
			byColumn: 0 
		}); 
		// orderBy is not sent by default, unless the consumer defined a column to sort by using the orderBy option

	});
});