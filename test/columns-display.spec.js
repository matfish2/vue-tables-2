describe(suite + ': Columns Display', () => {

    var dropdown = '.VueTables__columns-dropdown';
    
    beforeEach(()=>{
        setOptions({
            columnsDropdown: true
        });
    });

    it('can optionally add a columns display dropdown', () => {

        setOptions({
            columnsDropdown: false
        });

        not_exists(dropdown);

        setOptions({
            columnsDropdown: true
        });

        exists(dropdown);
    });

    it('Toggles the dropdown', ()=>{

        expect(vm().displayColumnsDropdown).toBe(false);

        click('.dropdown-toggle');

        expect(vm().displayColumnsDropdown).toBe(true);
        
    });


    it('Checks all columns by default', ()=>{
        var els = getCheckboxes();

        els.forEach(el => {
            expect(el.element.checked).toBe(true);
        });

    });

    it('can toggle columns', ()=>{
        var els = getCheckboxes();

        see('Code','table thead tr:first-child th:first-child');
        count('table thead tr:first-child th',3);
        
        toggleColumn(1);

        var first = els.shift();

        expect(first.element.checked).toBe(false);

        els.forEach(el => {
            expect(el.element.checked).toBe(true);
        });

        not_see('Code','table thead tr:first-child th:first-child');
        see('Name','table thead tr:first-child th:first-child');
        count('table thead tr:first-child th',2);

        toggleColumn(1);

        see('Code','table thead tr:first-child th:first-child');
        count('table thead tr:first-child th',3);
        
    });

    it('When a column is hidden it does NOT pass the filter value to the next column (Regression test for #529)', (done)=>{
        createWrapper({
            filterByColumn:true,
            debounce:0,
            columnsDropdown:true
        });

        enterQuery('code','[name=vf__code]', 'ZW','UI');
        see('Code','table thead tr:first-child th:first-child');        
        expect(wrapper.find('table thead tr:nth-child(2) th:first-child input').element.value).toEqual('ZW');
        toggleColumn(1);
        vm().$nextTick(()=>{
            expect(wrapper.find('table thead tr:nth-child(2) th:first-child input').element.name).toEqual('vf__name');      
            expect(wrapper.find('table thead tr:nth-child(2) th:first-child input').element.value).not.toEqual('ZW');
            done();
        });
             
    })

    it('disables the checked checkbox when only one column remains', () => {
        toggleColumn(1);
        toggleColumn(2);

        var els = getCheckboxes();

        expect(els[2].element.disabled).toBe(true);
        
        els[2].element.disabled = false;

        toggleColumn(3);

        count('table thead tr:first-child th',1);
    
    });


});

function getCheckboxes() {
    return wrapper.find('ul.dropdown-menu').findAll('input').wrappers;
}

function toggleColumn(num) {
    click(`ul.dropdown-menu li:nth-child(${num}) a`);    
}