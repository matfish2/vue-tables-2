describe(suite + ': Events', () => {

    var isClient = suite.includes('Client');

    it('fires a row click event and passes the overall index (#689)', (done) => {

        // can't paginate on server table without some mocking
        if (isClient) {
            vm().setPage(3);
        }

        vm().$nextTick(function() {
        click("tbody tr:nth-child(3)");
        run(function() {
            eventEmitted('row-click');
            var data = getEventData('row-click');
            // console.log(data.row.);
            expect(data.index).toEqual(isClient ? 23 : 3);
            expect(data.row).toBeTruthy();
            expect(data.event).toBeTruthy();
        }, done);
        });
    });


	it ('fire a "pagination" event (#813), done=>{
		// can't paginate on server table without some mocking
        if (isClient) {
            vm().setPage(3);
        vm().$nextTick(function() {
        run(function() {
            eventEmitted('pagination');
            var data = getEventData('pagination');
            expect(data).toEqual(3);
        }, done);
        });
        }


	})

});
