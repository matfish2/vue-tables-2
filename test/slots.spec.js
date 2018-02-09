describe(suite + ': Slots', () => {
    
    it('can insert custom content before the filters row', () => {
        createWrapper({filterByColumn:true}, null, {
            beforeFilters:'<tr><th>I am the before filters slot</th></tr>'
        });
        
        see('I am the before filters slot', 'table thead tr:nth-child(2) th');            
    });
    
    
    it('can insert custom content after the filters row', () => {
        createWrapper({filterByColumn:true}, null, {
            afterFilters:'<tr><th>I am the after filters slot</th></tr>'
        });
        
        see('I am the after filters slot', 'table thead tr:nth-child(3) th');            
    });
    
    it('can insert custom content before the <tbody> tag', () => {
        createWrapper({}, null, {
            beforeBody:'<tbody><tr><td>I am the before body slot</td></tr></tbody>'
        });
        
        count('tbody',2);
        see('I am the before body slot', 'table tbody tr td');            
    });
    
    it('can prepend custom content to the <tbody> tag', () => {
        createWrapper({}, null, {
            prependBody:'<tr><td>I am prepended to the body</td></tr>'
        });
        
        count('tbody',1);
        see('I am prepended to the body', 'table tbody tr:first-child td');            
    });
    
    
    it('can append custom content to the <tbody> tag', () => {
        createWrapper({}, null, {
            appendBody:'<tr><td>I am appended to the body</td></tr>'
        });
        
        count('tbody',1);
        see('I am appended to the body', 'table tbody tr:last-child td');            
    });
    
    
    it('can insert custom content after the <tbody> tag', () => {
        createWrapper({}, null, {
            afterBody:'<tfoot><tr><td>I am the before body slot</td></tr></tfoot>'
        });
        
        count('tbody',1);
        see('I am the before body slot', 'table tfoot tr td');            
        
    });
    


    it('can insert custom content after the <tbody> tag', () => {
        createWrapper({}, null, {
            afterBody:'<tfoot><tr><td>I am the before body slot</td></tr></tfoot>'
        });
        
        count('tbody',1);
        see('I am the before body slot', 'table tfoot tr td');            
        
    });

    it('can insert custom content before the global filter', () => {
        createWrapper({}, null, {
            beforeFilter:'<i class="material-icons input-group-addon">search</i>'
        });
        
        exists('.material-icons', '.VueTables__search');            
        
    });
    
    it('can insert custom content after the global filter', () => {
        createWrapper({}, null, {
            afterFilter:'<i class="material-icons input-group-addon">search</i>'
        });
        
        exists('.material-icons', '.VueTables__search');            
        
        
    });
    
    it('can insert custom content before the per page control', (done) => {
        createWrapper({}, null, {
            beforeLimit:'<i class="material-icons input-group-addon">list</i>'
        });
        
        run(()=>{
            exists('.material-icons', '.VueTables__limit');            
        }, done);
        
    });
    
    it('can insert custom content after the per page control', (done) => {
        createWrapper({}, null, {
            afterLimit:'<i class="material-icons input-group-addon">list</i>'
        });
        
        run(()=>{
            exists('.material-icons', '.VueTables__limit');            
        }, done);        
        
    });


    it('can insert content before the table wrapper', ()=>{
        createWrapper({}, null, {
            beforeTable:'<div class="before-table">I was added before the table</div>'
        });

        exists('.before-table');            
        
    });

    it('can insert content after the table wrapper', ()=>{
        createWrapper({}, null, {
            afterTable:'<div class="after-table">I was added after the table</div>'
        });

        exists('.after-table');            
        
    });

    
    
});