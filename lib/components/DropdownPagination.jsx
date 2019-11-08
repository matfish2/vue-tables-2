import RLPagination from "./renderless/RLPagination";
import merge from 'merge';

export default {
    name: 'VTPagination',
    components: {RLPagination},
    render() {
        return <r-l-pagination scopedSlots={
            {
                default: function (props) {
                    var id = "VueTables__dropdown-pagination_" + props.name;

                    var pages = [];

                    for (var pag = 1; pag <= props.totalPages; pag++) {
                        pages.push(<option value={pag}>{pag}</option>)
                    }

                    return <select class={`${props.theme.select} dropdown-pagination`}
                                   v-show={props.totalPages > 1}
                                   name="page"
                                   ref="page"
                                   value={props.page}
                                   on-change={ e => props.setPage(e.target.value) }
                                   id={id}
                    >
                        {pages}
                    </select>
                }
            }
        }
        >

        </r-l-pagination>
    }
}
