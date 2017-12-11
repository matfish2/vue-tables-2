global.moment = require('moment');

// setup JSDOM
require('jsdom-global')()

// make expect available globally
global.expect = require('expect')

global.vm = function() {
	return wrapper.vm;
}

global.see = function(text, selector) {

	var el = selector?wrapper.find(selector):wrapper;

	expect(el.text()).toContain(text);

}

global.not_see = function(text, selector) {
	var el = selector?wrapper.find(selector):wrapper;

	expect(el.text()).not.toContain(text);	
}

global.getHeading = function(cellIndex) {
	return wrapper.find('table thead tr:first-child th:nth-child(' + cellIndex + ')')
}

global.seeInHeadings = function(text, cellIndex) {
	see(text, 'table thead tr:first-child th:nth-child(' + cellIndex + ')');
}

global.exists = function(selector, scope = null) {
	var w = scope?wrapper.find(scope):wrapper;
	expect(w.contains(selector)).toBe(true);
}

global.not_exists = function(selector) {
	expect(wrapper.contains(selector)).toBe(false);
}

global.count = function(selector, count) {
	expect(wrapper.findAll(selector)).toHaveLength(count);
}

global.setOptions = function(options) {
	wrapper.setProps({options});
}

global.click = function(selector) {
	wrapper.find(selector).trigger('click');
}

global.type = function(selector, text) {
	var w = wrapper.find(selector);
	w.element.value = text;
	w.trigger('keyup');
}

global.select = function(selector, option) {
	var w = wrapper.find(selector);
	w.element.value = option;
	w.trigger('change');	
}

global.withVuex = function() {
	return typeof useVuex!='undefined';
}

global.getEventData = function(event) {

	return wrapper.emitted()[event][0][0];

}

global.eventEmitted = function(event, payload) {

	var emitted = wrapper.emitted(); 

	expect(emitted[event]).toBeTruthy();
	
	if (payload) expect(emitted[event][0][0]).toEqual(payload);
}

global.enterQuery = function(key, selector, query, method, fieldType='input') {
	if (method==='UI') {
		fieldType==='input'?type(selector,query):select(selector, query);
	} else {
		var value = key?{[key]:query}:query;			
		vm().setFilter(value);
	}
}

global.gotoPage = function(page) {
	click('.VuePagination ul li:nth-child('  + (page+2) + ') a'); 
}


