import RLTableHead from "./renderless/RLTableHead";
import VtHeadingsRow from "./VtHeadingsRow"
import VtFiltersRow from "./VtFiltersRow";

export default {
    name: 'VtTableHead',
    components: {RLTableHead, VtHeadingsRow, VtFiltersRow},
    render() {
        return <r-l-table-head scopedSlots={
            {
                default: function (props) {
                    return props.override ? h(props.override, {attrs: {props}}) : <thead>
                    {props.slots.prependHead}
                    <vt-headings-row/>
                    {props.slots.beforeFilters}
                    {props.opts.filterByColumn && props.opts.filterable ? <vt-filters-row/> : ''}
                    {props.slots.afterFilters}
                    </thead>
                }
            }
        }
            >
            </r-l-table-head>
        }
}
