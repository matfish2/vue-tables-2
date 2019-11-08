import RLPagination from "./renderless/RLPagination";
import Pagination from "vue-pagination-2";
import merge from 'merge';

export default {
    name: 'VTPagination',
    components: {RLPagination, Pagination},
    render() {
        return <r-l-pagination scopedSlots={
            {
                default: function (props) {
                    var options = {
                        theme: merge(props.theme.pagination, {
                            wrapper: `${props.theme.row} ${props.theme.column} ${props.theme.contentCenter}`,
                            nav: props.theme.center,
                            count: `${props.theme.center} ${props.theme.column}`
                        }),
                        chunk: props.options.chunk,
                        chunksNavigation: props.options.nav,
                        edgeNavigation: props.options.edge,
                        texts: {
                            count: props.texts.count,
                            first: props.texts.first,
                            last: props.texts.last
                        }
                    }

                    return <pagination
                        ref="pagination"
                        options={options}
                        for={props.name}
                        vuex={props.vuex}
                        records={props.records}
                        per-page={props.perPage}
                        page={props.page}
                        onPaginate={page => props.setPage(page)}>
                    </pagination>
                }
            }
        }
        >

        </r-l-pagination>
    }
}
