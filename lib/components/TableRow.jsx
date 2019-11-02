import RLTableRow from "./renderless/RLTableRow";
import TableCell from "./TableCell";

export default {
    name: 'TableRow',
    props: ['row'],
    components: { RLTableRow, TableCell },
    render() {
        return <r-l-table-row row={this.row} scopedSlots={
            {
                default: function (props) {
                    return <tr class={props.rowAttrs.class} {...{attrs: props.rowAttrs.attrs}}>
                        {props.columns.map( column => <table-cell column={column}/>)}
                    </tr>
                }
            }
        }
        >
        </r-l-table-row>
    }
}
