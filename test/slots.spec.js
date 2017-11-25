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

});