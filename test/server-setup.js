import Vue from 'vue'
import { mount } from 'vue-test-utils'
import ServerTable from '../compiled/v-server-table.js'

global.suite = 'Server';
global.axios = require('axios');
global.moxios = require('moxios');

import data from './example-data';

beforeEach(()=>{
	moxios.install(axios);

	moxios.stubRequest(/get\-data.*/, {
		status:200,
		response:{
			data,
			count:5
		}
	});

	global.wrapper = mount(ServerTable.install(Vue), {
		propsData:{
			columns:['name','age','favorite_game'],
			url:'get-data'
		}
	});

	
});


afterEach(()=>{
	moxios.uninstall(axios);
});

global.run = function(cb, done) {
	moxios.wait(()=>{
		cb();
		done();
	});
}

