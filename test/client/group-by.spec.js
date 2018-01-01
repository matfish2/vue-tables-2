describe(suite + ': Row grouping', () => {
    
    beforeEach(() => {
        createWrapper({groupBy:'continent'});        
    });
    
    it('can group the dataset by a specific column', (done) => {
        run(()=>{
            see('Africa','tbody tr:first-child');
        }, done);
    });
    
    it('can sort by group when clicking on a group title', (done) => {
        see('Africa','tbody tr:first-child');
        
        click('tbody tr:first-child');
        
        run(()=>{
            see('South America','tbody tr:first-child');
        }, done);
        
    });
});