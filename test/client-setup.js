
import Vue from 'vue'
import { mount } from 'vue-test-utils'
import ClientTable from '../compiled/v-client-table'
import data from './example-data'

global.suite = 'Client';

global.run = function(cb, done) {
	cb();
	done();
}

global.wrapper = mount(ClientTable.install(Vue), {
	propsData:{
		columns:['code','name','uri'],
		data
	}
});
