import Vue from 'vue'
import { mount } from 'vue-test-utils'
import ClientTable from '../../compiled/v-client-table'

describe('Client Table - Basic Display', () => {

	global.wrapper = mount(ClientTable.install(Vue), {
		propsData:{
			columns:['name','age','favorite_game'],
			data:[
			{id:1, name:"John",age:20, favorite_game:"Mortal Combat"},
			{id:2, name:"Jane",age:24, favorite_game:"Rocket League"},
			{id:3, name:"Susan",age:16, favorite_game:"Doom"},
			{id:4, name:"Chris",age:55, favorite_game:"Call of Duty"},
			{id:5, name:"Dan",age:40, favorite_game:"Assasain's Creed"}
			]
		}
	});

	it('Discrens the headings based on the columns prop', () => {
		see('Name','table thead tr:first-child th:first-child');
		see('Age','table thead tr:first-child th:nth-child(2)');
		see('Favorite game', 'table thead tr:first-child th:nth-child(3)');
	})

	it('Displays the data in its original order', () =>{
		see('John','table tbody tr:first-child td:first-child');
		see(24,'table tbody tr:nth-child(2) td:nth-child(2)');
		see('Doom','table tbody tr:nth-child(3) td:nth-child(3)');
		count('table tbody tr', 5);
	});

	it('Displays the count', ()=>{
		see('5 records');
	});

	it('Displays a generic filter', ()=>{
		exists('.VueTables__search input');
	});



})