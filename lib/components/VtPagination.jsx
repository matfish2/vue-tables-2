import RLPagination from "./renderless/RLPagination";
import Pagination from "vue-pagination-2";

export default {
    name: 'VtPagination',
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
                        records={props.records}
                        per-page={props.perPage}
                        value={props.page}
                        onInput={page=> props.setPage(page)}
                        >
                    </pagination>
                }
            }
        }
            >

            </r-l-pagination>
        }
}
