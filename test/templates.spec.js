describe(suite + ': Templates',()=>{

	it('allows for using jsx column templates', done => {

		setOptions({
			templates:{
				uri(h, row) {
					return <a class='country-link' href='{row.uri}'>{row.name}</a>
				}
			}
		});

		run(function() {
			exists('a.country-link');
		},done);
	});

});