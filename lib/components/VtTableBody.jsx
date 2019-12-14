import RLTableBody from "./renderless/RLTableBody";
import VtNoResultsRow from "./VtNoResultsRow";
import VtTableRow from "./VtTableRow";
import VtChildRow from "./VtChildRow"

export default {
    name: 'VtTableBody',
    components: {RLTableBody, VtNoResultsRow, VtTableRow, VtChildRow},
    render() {
        return <r-l-table-body scopedSlots={
            {
                default: function (props) {
                    if (props.data.length === 0) {
                        return <vt-no-results-row/>
                    }

                    var rows = [];

                    props.data.forEach((row, index) => {
                        rows.push(<vt-table-row row={row} index={index}/>)
                        if (props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])) {
                            rows.push(<vt-child-row row={row} index={index}/>)
                        }
                    });

                    return props.override ? h(props.override, {
                        attrs: {props}
                    }) : <tbody>
                    {props.slots.prependBody}
                    {rows}
                    {props.slots.appendBody}
                    </tbody>
                }
            }
        }
        >
        </r-l-table-body>
    }
}
