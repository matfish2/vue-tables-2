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
                    var childRowToggler = props.hasChildRow && props.opts.showChildRowToggler ? <th></th> : '';
                    return <tr class={`VueTables__row ` + props.rowAttrs.class} {...{attrs: props.rowAttrs.attrs}} on-click={props.rowEvents.click}>
                        {props.opts.childRowTogglerFirst ? childRowToggler : ''}
                        {props.columns.map( column => <table-cell column={column}/>)}
                        {!props.opts.childRowTogglerFirst ? childRowToggler : ''}
                    </tr>
                }
            }
        }
        >
        </r-l-table-row>
    }
}
