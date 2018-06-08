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