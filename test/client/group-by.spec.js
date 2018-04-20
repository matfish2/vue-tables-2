describe(suite + ': Row grouping', () => {
    
    
    it('can group the dataset by a specific column', (done) => {
        createWrapper({groupBy:'continent'});   
        run(()=>{
            see('Africa','tbody tr:first-child');
        }, done);
    });
    
    it('can sort by group when clicking on a group title', (done) => {
        createWrapper({groupBy:'continent'});        
        
        see('Africa','tbody tr:first-child');
        
        click('tbody tr:first-child');
        
        run(()=>{
            see('South America','tbody tr:first-child');
        }, done);
        
    });

    it('can make groups collapsible', ()=>{
        createWrapper({groupBy:'continent',collapseGroups:true});        
        
        see('Africa','tbody tr:first-child');
        exists('tbody tr:first-child span.glyphicon');
        not_exists('tbody tr:nth-child(2) td:nth-child(2)');
    });
});