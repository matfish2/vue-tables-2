describe(source + ': Dates', ()=>{
    it('can convert date strings to moment objects and display them using a predefined format', (done)=>{
        createWrapper({
            dateColumns:['created_at'],            
            toMomentFormat:'YYYY-MM-DDTh:mm:ss',
            dateFormat:'DD-MM-YY HH:mm:ss'
        },['name','created_at']);

        run(function() {
            see('24-04-15 01:46:50',"tbody tr:first-child td:nth-child(2)");			
        }, done);
    });

    it('does not convert to moment falsy values (regression test for #443)', (done) => {

        createWrapper({
            dateColumns:['created_at'],            
            toMomentFormat:'YYYY-MM-DDTh:mm:ss',
            dateFormat:'DD-MM-YY HH:mm:ss'
        },['name','created_at'],null,[
        {
            name:'NULL',
            created_at:null
        },
        {
            name:'Empty string',
            created_at:''
        },
        {
            name:'Undefined',
            created_at:undefined
        }
    ]);

        run(function() {
            not_see('undefined',"tbody tr:first-child td:nth-child(2)");
            not_see('undefined',"tbody tr:nth-child(2) td:nth-child(2)");			
            not_see('undefined',"tbody tr:nth-child(3) td:nth-child(2)");	
            
            see('',"tbody tr:first-child td:nth-child(2)");
            see('',"tbody tr:nth-child(2) td:nth-child(2)");			
            see('',"tbody tr:nth-child(3) td:nth-child(2)");	
           
        }, done);
    });
});