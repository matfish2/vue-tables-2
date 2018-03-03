
import Vue from 'vue'
import Vuex from 'vuex'
import { mount } from 'vue-test-utils'
import ClientTable from '../../compiled/v-client-table'
import {Event} from '../../compiled/index.js';
import data from './example-data'
import clone from 'clone'

global.VueEvent = Event;
global.suite = 'Client';
global.source = 'client';

if (withVuex()) {
	suite+=" - Vuex";	
	Vue.use(Vuex);
}

global.run = function(cb, done, timeout = 0) {
	setTimeout(()=>{
		cb();
		done();
	},timeout);
}

beforeEach(function() {
	createWrapper();
});

global.createWrapper = function(options = {debounce:0}, columns = null, slots = {}, dataOverride = null) {
	
	var d = clone(data);

	let params = {
		propsData:{
			name:'client',
			columns:columns?columns:['code','name','uri'],
			data:dataOverride?dataOverride:d,
			options
		},
		slots
	};

	if (withVuex()) {
		params.store =  new Vuex.Store();	
	}

	global.wrapper = mount(ClientTable.install(Vue,{},withVuex()), params);

	return wrapper;
}

