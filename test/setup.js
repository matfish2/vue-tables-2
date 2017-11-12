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

global.exists = function(selector) {
	expect(wrapper.contains(selector)).toBe(true);
}


global.count = function(selector, count) {
	expect(wrapper.findAll(selector)).toHaveLength(count);
}



