import RLTableHead from "./renderless/RLTableHead";
import HeadingsRow from "./HeadingsRow"
import FiltersRow from "./FiltersRow";

export default {
    name: 'TableBody',
    components: {RLTableHead, HeadingsRow, FiltersRow},
    render() {
        return <r-l-table-head scopedSlots={
            {
                default: function (props) {
                    return <thead>
                        <headings-row/>
                        {props.opts.filterByColumn && props.opts.filterable ? <filters-row/> : ''}
                    </thead>
                }
            }
        }
        >
        </r-l-table-head>
    }
}
