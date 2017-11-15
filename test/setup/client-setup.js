
import Vue from 'vue'
import Vuex from 'vuex'
import { mount } from 'vue-test-utils'
import ClientTable from '../../compiled/v-client-table'
import {Event} from '../../compiled/index.js';
import data from './example-data'

global.VueEvent = Event;
global.suite = 'Client';

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

global.createWrapper = function(options = {}, columns = null) {

	let params = {
		propsData:{
			name:'client',
			columns:columns?columns:['code','name','uri'],
			data,
			options
		}
	};

	if (withVuex()) {
		params.store =  new Vuex.Store();	
	}

	global.wrapper = mount(ClientTable.install(Vue,{},withVuex()), params);
}

