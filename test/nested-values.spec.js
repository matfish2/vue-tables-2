
describe(suite + ': Nested Values', ()=>{
    
    beforeEach(()=>{
        createWrapper({debounce:0},['id','name','meta.population','meta.area','meta.fauna.lions']);    
    });

    it.only('can display nested values', (done)=>{
        run(()=>{
            see('123456','table tbody tr:first-child td:nth-child(3)');
            see('5123','table tbody tr:first-child td:nth-child(5)');
        }, done);
    });
});