import merge from 'merge';

export default function(useVuex, source, page = 1) {

  let data =  {
    vuex: true,
    activeState: false,
    userColumnsDisplay: [],
    userControlsColumns: false,
    displayColumnsDropdown: false,
    collapsedGroups:[]
  }

  if (useVuex) return data;
  
  data = merge(data, {
    vuex: false,
    count:0,
    customQueries:{},
    query:null,
    page,
    limit:10,
    windowWidth:window.innerWidth,
    orderBy: {
      column:false,
      ascending:true
    }
  }); 

  if (source=='server') data.data = []

    return data;
}
