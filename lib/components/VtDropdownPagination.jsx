import RLDropdownPagination from "./renderless/RLDropdownPagination";

export default {
    name: 'VTDropdownPagination',
    components: {RLDropdownPagination},
    render() {
        return <r-l-dropdown-pagination scopedSlots={
            {
                default: function (props) {
                    var id = "VueTables__dropdown-pagination_" + props.name;

                    var pages = [];

                    for (var pag = 1; pag <= props.totalPages; pag++) {
                        pages.push(<option value={pag}>{pag}</option>)
                    }

                    return props.override ? h(props.override, {
                        attrs: {props},
                    }) : <select class={`${props.theme.select} dropdown-pagination`}
                                 name="page"
                                 ref="page"
                                 value={props.page}
                                 on-change={e => props.setPage(e.target.value)}
                                 id={id}
                        >
                            {pages}
                        </select>
                }
            }
        }
        >

        </r-l-dropdown-pagination>
    }
}
