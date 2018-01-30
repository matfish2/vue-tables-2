describe(suite + ': Response', () => {
    it('can use a response adapter', (done) => {
        setOptions({
            responseAdapter(resp) { 

                var data = this.getResponseData(resp);

                return { 
                    data:{
                        data: data.data, 
                        count: data.count 
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
                
                var data = this.getResponseData(resp);

                return {                     
                    data: data.data, 
                    count: data.count, 
                    other:'More data'
                } 
            }
        });
        
        run(()=> {
            var resp = getEventData('loaded');
            
            if (!resp) return; // vuex commits not yet implemented

            var data = vm().opts.responseAdapter.call(vm(), resp);
            expect(data.data.length).toEqual(10);
            expect(data.count).toEqual(50);
            expect(data.other).toEqual('More data');
        },done);
        
    });

});