import childRow from './setup/ChildRow.vue';
import {mount} from 'vue-test-utils';

describe(suite + ': Child row', () => {

	var firstRowToggler = 'table tbody tr td:first-child span'; 
	
	beforeEach(()=>{
		setOptions({
			childRow
		});

	});

	it('generates a child row when toggler is clicked, and removes it when clicked again', (done) =>{
		
		click(firstRowToggler); 

		run(function() {
			see('My Child Row ZW','table tbody tr:nth-child(2)');
			click(firstRowToggler);
			see('Zambia','table tbody tr:nth-child(2)');
		},done);

	});

	it('only opens the clicked row', (done) => {
		
		click(firstRowToggler);

		run(function() {
			count('.VueTables__child-row',1);
		},done);

	});

	it('displays the correct toggler icon', (done) => {
		run(function() {
			count('.VueTables__child-row-toggler--closed', 10);
			click(firstRowToggler);
			count('.VueTables__child-row-toggler--closed', 9);
			exists('table tbody tr:first-child .VueTables__child-row-toggler--open');
		},done);
	});

	it('can programmaticaly open a child row', (done)=>{

		vm().toggleChildRow(245);

		run(function() {
			count('.VueTables__child-row',1);
		},done);
	});

	it('can programmaticaly close a child row', (done)=>{

		click(firstRowToggler);
		
		count('.VueTables__child-row',1);

		vm().toggleChildRow(245);

		run(function() {
			count('.VueTables__child-row',0);
		},done);
	});

	it('can use a user-defined key as a unique id', (done)=>{

		setOptions({
			childRow,
			uniqueKey:'code'
		});

		vm().toggleChildRow('ZW');

		run(function() {
			count('.VueTables__child-row',1);
		},done);

	});

	it('can position the toggler in the last column', (done)=>{

		setOptions({
			childRow,
			childRowTogglerFirst:false
		});

		run(function() {
			not_exists('table tbody tr td:first-child .VueTables__child-row-toggler');
			exists('table tbody tr td:last-child .VueTables__child-row-toggler');
		},done);


	});

	// it.only('only mount the clicked row, without remounting other open rows (regression test for issue #272)', (done)=>{

	// 	// The issue only occurs with open rows that come AFTER the clicked row 

	// 	const FIRST_ROW_ID = 245;
	// 	const SECOND_ROW_ID = 244;

	// 	vm().toggleChildRow(SECOND_ROW_ID); 

	// 	setTimeout(()=>{
	// 		vm().toggleChildRow(FIRST_ROW_ID);
	// 	},100);

	// 	run(()=>{			
	// 		console.log(wrapper.emitted());
	// 		expect(wrapper.emitted().mounted_child_row.length).toBe(2);
	// 	},done,1000);

	// });

});