export default function(useVuex, source) {

    if (useVuex) return {}

    let data =  {
     count:0,
     customQueries:{},
     query:null,
     page:1,
     limit:10,
     windowWidth:window.innerWidth,
     orderBy: {
      column:'id',
      ascending:true
    }
  }

  if (source=='server') data.data = []

  return data;
}
