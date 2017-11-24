import Vue from 'vue'
import Vuex from 'vuex'
import { mount } from 'vue-test-utils'
import ServerTable from '../../compiled/v-server-table.js'

global.suite = 'Server';
global.axios = require('axios');
global.moxios = require('moxios');

import data from './example-data';

if (withVuex()) {
	Vue.use(Vuex);
	suite+=' - Vuex';
}

beforeEach(()=>{
	moxios.install(axios);

	moxios.stubRequest(/get\-data.*/, {
		status:200,
		response:{
			data:data.slice(0,10),
			count:data.length
		}
	});
	
	createWrapper();

});

afterEach(()=>{
	moxios.uninstall(axios);
});

global.run = function(cb, done, timeout = 0) {
	moxios.wait(()=>{
		cb();
		done();
	}, timeout);
}

global.requestHas = function(key, value) {
	var request = moxios.requests.mostRecent();
	expect(request.config.params[key]).toEqual(value);	
}


global.createWrapper = function(options = {}, columns = null) {

	var params = {
		propsData:{
			name:'server',
			columns:columns?columns:['code','name','uri'],
			url:'get-data',
			options
		}
	};

	if (withVuex()) {
		params.store = new Vuex.Store();
	}

	global.wrapper = mount(ServerTable.install(Vue, {} ,withVuex()), params);
}
