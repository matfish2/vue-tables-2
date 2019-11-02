import RLTableCell from "./renderless/RLTableCell";

export default {
    name: 'TableCell',
    props: ['column'],
    components: { RLTableCell },
    render() {
        return <r-l-table-cell column={this.column} scopedSlots={
            {
                default: (props) => {
                    return <td>
                        {props.content}
                    </td>
                }
            }
        }
        >
        </r-l-table-cell>
    }
}
