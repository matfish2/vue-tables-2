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
		
		it(trigger + ': can search nested data structures (object)', (done) => {
			createTable();

			enterQuery(null,'.VueTables__search input','33', trigger);

			run(function() {
				count("tbody tr", 1);
				see('John',"tbody tr:first-child td:nth-child(1)");			
			}, done, 100);

		});

		it(trigger + ': can recursively search nested data structures (array)', (done) => {
			createTable();

			enterQuery(null,'.VueTables__search input','golf', trigger);

			run(function() {
				count("tbody tr", 2);
				see('Miriam',"tbody tr:first-child td:nth-child(1)");
				see('Sandra',"tbody tr:nth-child(2) td:nth-child(1)");									
			}, done, 100);

		});

		it(trigger + ': can recursively search nested data structures (object)', (done) => {
			createTable();

			enterQuery(null,'.VueTables__search input','trudy', trigger);

			run(function() {
				count("tbody tr", 2);
				see('Sandra',"tbody tr:first-child td:nth-child(1)");
				see('John',"tbody tr:nth-child(2) td:nth-child(1)");									
			}, done, 100);

		});

		it(trigger + ': can search nested data structures (filter by column)', (done) => {
			createTable(true);

			enterQuery('meta','[name=vf__meta]', '10',trigger);
			
			run(function() {
				count("tbody tr", 1);
				see('Sandra',"tbody tr:first-child td:nth-child(1)");			
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

		it('UI: list filter is case insensitive (regression test for #415)', (done)=>{
			createWrapper({
				filterByColumn:true, 
				debounce:0,
				listColumns:{
					code:[
						{
							id:'Eh',
							text:'EH'
						},
						{
							id:'Zw',
							text:'ZW'
						},
						{
							id:'zm',
							text:'ZM'
						}
					]
				}}, ['id','name','code','uri']);
				
				vm().$nextTick(()=>{
					see('Zimb',"tbody tr:first-child td:nth-child(2)");	
					
					enterQuery('id','.VueTables__filters-row select[name="vf__code"]', 'Eh', 'UI', 'select');
					
					run(function() {
						count("tbody tr", 1);
						see('Western',"tbody tr:first-child td:nth-child(2)");			
					}, done, 100);
				});
				
				
			});
		
			it('allows the user access to the entire filtered dataset (#492)', (done)=>{
				createWrapper();
				vm().setFilter('k');
	
				run(()=>{
					expect(vm().allFilteredData.length).toEqual(11);
				},done);
	
			});
	});

	function createTable(filterByColumn) {
		createWrapper({debounce:0, filterByColumn},['name','meta'], {}, [
			{
				name:'Miriam',
				meta:{
					age: 35,
					job: 'Lawyer',
					hobbies:['Writing','Reading','Golf']
				}
			},
			{
				name:'Sandra',
				meta:{
					age: 43,
					job: 'Salesman',
					hobbies:['Tennis','Golf'],
					children:[
						{
						name:'Trudy',
						age:10
					},
					{
						name:'Josh',
						age:8
					}
				]
				}
			},
			{
				name:'Bill',
				meta:{
					age: 25,
					job: 'Waiter',
					hobbies:['Painting','Singing'],
					children:[
						{
						name:'Uriel',
						age:11
					},
					{
						name:'Amitai',
						age:9
					}
				]
				}
			},
			{
				name:'John',
				meta:{
					age: 33,
					job: 'Developer',
					hobbies:['Horseback riding','Motorbikes'],
					children:[
						{
						name:'Trudy',
						age:12
					},
					{
						name:'Anna',
						age:9
					},
					{
						name:'Sara',
						age:6
					}
				]
				}
			}
		]);
		
	}