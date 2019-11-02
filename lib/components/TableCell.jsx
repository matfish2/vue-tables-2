import RLTableCell from "./renderless/RLTableCell";

export default {
    name: 'TableCell',
    props: ['column'],
    components: { RLTableCell },
    render() {
        return <r-l-table-cell column={this.column} scopedSlots={
            {
                default: function (props) {
                    return <td>
                        {props.row[props.column]}
                    </td>
                }
            }
        }
        >
        </r-l-table-cell>
    }
}
