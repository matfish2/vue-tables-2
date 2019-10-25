describe(suite + ': Accessibility', function() {
    it('allows for adding a summary attribute for accessibility reasons (#711)', done => {
		setOptions({
			summary:'Cute table'
		});

		run(function() {
			var summary = wrapper.find('table').attributes().summary;
			expect(summary).toBe('Cute table');
		},done);

	});

    it('allows for adding a caption (#711)', done => {
		setOptions({
			caption:'Best table ever'
		});

		run(function() {
			see('Best table ever','table caption');
		},done);

	});
});

