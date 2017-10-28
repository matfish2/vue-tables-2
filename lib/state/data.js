export default function(useVuex, source, page = 1) {

  if (useVuex) return {
    vuex: true,
    activeState: false
  }

  let data =  {
    vuex: false,
    activeState: false,
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
  }

  if (source=='server') data.data = []

    return data;
}
