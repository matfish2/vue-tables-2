describe(suite + ": Filters", () => {
	
	const triggers = ['UI','Method call'];
	
	triggers.forEach(trigger=>{
		it(trigger + ': sends a generic filter request', (done)=>{
			
			createWrapper({
				debounce:0,
				filterByColumn:false
			});
			
			enterQuery(null,'.VueTables__search input','zimb', trigger);
			
			setTimeout(()=>{
				expect(vm().query).toEqual('zimb');
				requestHas('query','zimb');
				done();
			},100);
			
		});
		
		it(trigger + ': sends text columns request', (done) => {
			
			createWrapper({
				debounce:0,
				filterByColumn:true
			});
			
			enterQuery('name','[name=vf__name]', 'zim', trigger);
			enterQuery('code','[name=vf__code]', 'zw',trigger);
			
			setTimeout(()=>{
				expect(vm().filteredQuery).toEqual({name:'zim',code:'zw'});
				requestHas('query',{name:'zim',code:'zw'});
				done();
			},100);
			
		});
		
		it(trigger + ": does not send empty filters by default", (done)=>{
			
			createWrapper({
				debounce:0,
				filterByColumn:true
			});
	
			enterQuery('name','[name=vf__name]', '', trigger);
			run(()=>{
				expect(vm().filteredQuery).toEqual({});
			},done);
		});

		it(trigger + ": can send empty filters using sendEmptyFilters", (done)=>{
			
			createWrapper({
				debounce:0,
				filterByColumn:true,
				sendEmptyFilters:true
			});
	
			enterQuery('name','[name=vf__name]', '', trigger);
			run(()=>{
				expect(vm().filteredQuery).toEqual({code:'',name:'',uri:''});
			},done);
		});
		
			
		it(trigger + ': sends list columns request', (done)=>{
			
			createWrapper({
				filterByColumn:true, 
				debounce:0,
				listColumns:{
					id:[
						{
							id:245,
							text:'Zimbabwe'
						},
						{
							id:244,
							text:'Zambia'
						}
					]
				}}, ['id','name','code','uri']);
				
				enterQuery('id','.VueTables__filters-row select[name="vf__id"]', "244", trigger, 'select');
				
				setTimeout(()=>{
					expect(vm().query.id).toEqual("244");
					requestHas('query',{
						id:"244"				
					});
					done();
				},100);
				
				
			});
			
		});
		
	});