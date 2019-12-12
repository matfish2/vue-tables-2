import RLPagination from "./renderless/RLPagination";
import Pagination from "vue-pagination-2";
import merge from 'merge';

export default {
    name: 'VTPagination',
    components: {RLPagination, Pagination},
    render(h) {
        return <r-l-pagination scopedSlots={
            {
                default: function (props) {
                    return props.override ? h(
                        props.override,
                        {
                            attrs: {props}
                        }
                    ) : <pagination
                        options={props.optionsObj}
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
