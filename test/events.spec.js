describe(suite + ': Events', () => {
    it('fires a row click event and passes the overall index (#689)', (done) => {
        var isClient = suite.includes('Client');

        // can't paginate on server table without some mocking
        if (isClient) {
            vm().setPage(3);
        }

        vm().$nextTick(function() {
        click("tbody tr:nth-child(3)");
        run(function() {
            eventEmitted('row-click');
            var data = getEventData('row-click');
            expect(data.index).toEqual(isClient ? 23 : 3);
            expect(data.row).toBeTruthy();
            expect(data.event).toBeTruthy();
        }, done);
        });
    });


});
