import RLTableBody from "./renderless/RLTableBody";
import NoResultsRow from "./NoResultsRow";
import TableRow from "./TableRow";
import ChildRow from "./ChildRow"

export default {
    name: 'TableBody',
    components: {RLTableBody, NoResultsRow, TableRow, ChildRow},
    render() {
        return <r-l-table-body scopedSlots={
            {
                default: function (props) {
                    if (props.data.length === 0) {
                        return <no-results-row/>
                    }

                    var rows = [];

                    props.data.forEach((row, index) => {
                        rows.push(<table-row row={row} index={index}/>)
                        if (props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])) {
                            rows.push(<child-row row={row} index={index}/>)
                        }
                    });

                    return <tbody>
                    {rows}
                    </tbody>
                }
            }
        }
        >
        </r-l-table-body>
    }
}
