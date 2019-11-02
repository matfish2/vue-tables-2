import RLTableRow from "./renderless/RLTableRow";
import TableCell from "./TableCell";

export default {
    name: 'TableRow',
    props: ['row','index'],
    components: { RLTableRow, TableCell },
    render() {
        return <r-l-table-row row={this.row} index={this.index} scopedSlots={
            {
                default: function (props) {

                    var childRowToggler = <td>+</td>;
                    return <tr class={`VueTables__row ` + props.rowAttrs.class} {...{attrs: props.rowAttrs.attrs}} on-click={props.rowEvents.click}>
                        {childRowToggler}
                        {props.columns.map( column => <table-cell column={column}/>)}
                    </tr>
                }
            }
        }
        >
        </r-l-table-row>
    }
}
