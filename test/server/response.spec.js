describe(suite + ': Response', () => {
    it('can use a response adapter', (done) => {
        setOptions({
            responseAdapter(resp) { 
                return { 
                    data:{
                        data: resp.data, 
                        count: resp.count 
                    }
                } 
            }
        });
        
        run(()=> {
            var data = getEventData('loaded');

            if (!data) return; // vuex commits not yet implemented
            
            var response = vm().opts.responseAdapter.call(vm(), data);

            expect(response.data.data.length).toEqual(10);
            expect(response.data.count).toEqual(50);
            
        },done);
    });
    
    it('sends through the "loaded" event additional properties other than data and count (Regression test for issue #338).', (done)=>{
        setOptions({
            responseAdapter(resp) { 
                return {                     
                    data: resp.data, 
                    count: resp.count, 
                    other:'More data'
                } 
            }
        });
        
        run(()=> {
            var data = getEventData('loaded');
            
            if (!data) return; // vuex commits not yet implemented

            var response = vm().opts.responseAdapter.call(vm(), data);
            expect(response.data.length).toEqual(10);
            expect(response.count).toEqual(50);
            expect(response.other).toEqual('More data');
        },done);
        
    });

});