import RLTableBody from "./renderless/RLTableBody";
import VtNoResultsRow from "./VtNoResultsRow";
import VtTableRow from "./VtTableRow";
import VtGroupRow from "./VtGroupRow";
import VtChildRow from "./VtChildRow"

export default {
    name: 'VtTableBody',
    components: {RLTableBody, VtNoResultsRow, VtTableRow, VtChildRow, VtGroupRow},
    render() {
        return <r-l-table-body scopedSlots={
            {
                default: function (props) {
                    var rows = [];
                    var currentGroup;

                    props.data.forEach((row, index) => {
                        if (props.groupBy && props.source === 'client' && row[props.groupBy] !== currentGroup) {
                            rows.push(<vt-group-row row={row}/>)
                            currentGroup = row[props.groupBy]
                        }

                        if (props.canToggleGroups && props.collapsedGroups.includes(currentGroup)) {
                            return;
                        }

                        rows.push(<vt-table-row row={row} index={props.initialIndex + index + 1}/>)
                        if (props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])) {
                            rows.push(<vt-child-row row={row} index={props.initialIndex + index + 1}/>)
                        }
                    });

                    return props.override ? h(props.override, {
                        attrs: {props}
                    }) : <tbody>
                    {props.slots.prependBody}
                    {props.data.length===0 ? <vt-no-results-row/> : ''}
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
