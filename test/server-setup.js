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
			data:data.slice(0,10),
			count:data.length
		}
	});

	global.wrapper = mount(ServerTable.install(Vue), {
		propsData:{
			columns:['code','name','uri'],
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

