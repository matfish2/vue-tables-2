var sinon = require('sinon');

describe(suite + ': Custom Filters', ()=>{

    it("triggers the callback only once per row (regression test for #513)", (done)=>{

        var spy = sinon.spy();

        createWrapper({
            customFilters:[
                {
                    name:'alpha',
                    callback:spy
                }
            ]
        });

        if (withVuex()) {
            vm().$store.commit('client/SET_CUSTOM_FILTER', {filter:'alpha', value:'a'});
        } else {
            VueEvent.$emit('vue-tables.client.filter::alpha', 'a');
        }

        sinon.assert.callCount(spy, 0);
        
       run(()=>{
            sinon.assert.callCount(spy, 50);
       }, done);        
    });
});