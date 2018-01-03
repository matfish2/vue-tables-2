describe(suite + ': Filters', ()=>{
	
	const triggers = ['UI','Method call'];
	
	triggers.forEach(trigger=>{
		it(trigger + ': filters by generic filter', (done)=>{
			
			count("tbody tr", 10);
			see('Zimb',"tbody tr:first-child td:nth-child(2)");	
			
			
			enterQuery(null,'.VueTables__search input','yemen', trigger);
			
			run(function() {
				count("tbody tr", 1);
				see('Yemen',"tbody tr:first-child td:nth-child(2)");			
			}, done, 100);
		});
		
		it.only(trigger + ': can search nested data structures', (done) => {
			createWrapper({},['name','meta'], {}, [
				{
					name:'Miriam',
					meta:{
						age: 35,
						job: 'Lawyer'
					}
				},
				{
					name:'Sandra',
					meta:{
						age: 43,
						job: 'Salesman'
					}
				},
				{
					name:'Bill',
					meta:{
						age: 25,
						job: 'Waiter'
					}
				},
				{
					name:'John',
					meta:{
						age: 33,
						job: 'Developer'
					}
				}
			]);
			
			enterQuery('meta', 33);

			run(function() {
				count("tbody tr", 1);
				see('John',"tbody tr:first-child td:nth-child(1)");			
			}, done, 100);

		});
		
		it(trigger + ': filters by text column filter', (done)=>{
			
			createWrapper({
				debounce:0,
				filterByColumn:true
			});
			vm().$nextTick(()=>{
				count("tbody tr", 10);
				see('Zimb',"tbody tr:first-child td:nth-child(2)");	
				
				enterQuery('code','[name=vf__code]', 'ye',trigger);
				enterQuery('name','[name=vf__name]', 'yem', trigger);
				
				run(function() {
					count("tbody tr", 1);
					see('Yemen',"tbody tr:first-child td:nth-child(2)");			
				}, done, 100);
			});
			
			
		});
		
		it(trigger + ': filters by list column filter', (done)=>{
			createWrapper({
				filterByColumn:true, 
				debounce:0,
				listColumns:{
					id:[
						{
							id:242,
							text:'Western Sahara'
						},
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
				
				vm().$nextTick(()=>{
					see('Zimb',"tbody tr:first-child td:nth-child(2)");	
					
					enterQuery('id','.VueTables__filters-row select[name="vf__id"]', 242, trigger, 'select');
					
					run(function() {
						count("tbody tr", 1);
						see('Western',"tbody tr:first-child td:nth-child(2)");			
					}, done, 100);
				});
				
				
			});
			
		});
		
		
	});