import RLTableBody from "./renderless/RLTableBody";
import NoResultsRow from "./NoResultsRow";
import TableRow from "./TableRow";

export default {
    name: 'TableBody',
    components: {RLTableBody, NoResultsRow, TableRow},
    render() {
        return <r-l-table-body scopedSlots={
            {
                default: function (props) {
                    if (props.data.length === 0) {
                        return <no-results-row/>
                    }

                    return <tbody>
                     {props.data.map(row => <table-row row={row}/>)}
                    </tbody>
                }
            }
        }
        >
        </r-l-table-body>
    }
}
