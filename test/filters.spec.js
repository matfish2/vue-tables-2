describe(suite  + ': Filters (Common)', function() {
	it('can display column filters', ()=>{

		createWrapper({filterByColumn:true});

		exists('.VueTables__filters-row');
		exists('[name="vf__code"]');
		exists('[name="vf__name"]');
		exists('[name="vf__uri"]');

	});

	it('can display list filters', ()=>{

		createWrapper({
			filterByColumn:true, 
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

		
			exists('.VueTables__filters-row select[name="vf__id"]');
			see('Select id', '.VueTables__filters-row select[name="vf__id"] option:first-child');
			see('Zimbabwe', '.VueTables__filters-row select[name="vf__id"] option:nth-child(2)');
			see('Zambia', '.VueTables__filters-row select[name="vf__id"] option:nth-child(3)');

	});
	
});