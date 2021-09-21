import RLTableRow from "./renderless/RLTableRow";
import VtTableCell from "./VtTableCell";
import VtChildRowToggler from "./VtChildRowToggler";

export default {
    name: 'VtTableRow',
    props: ['row', 'index'],
    components: {RLTableRow, VtTableCell, VtChildRowToggler },
    render() {
        return <r-l-table-row row={this.row} index={this.index} scopedSlots={
            {
                default: function (props) {
                    return props.override ? h(props.override, {attrs:{props}}) : <tr class={`VueTables__row ` + props.rowAttrs.class} {...{attrs: props.rowAttrs.attrs}}
                                                                                     onClick={props.rowEvents.click}
                    onDblclick={props.rowEvents.click}>
                        {props.childRowTogglerFirst ? <vt-child-row-toggler row-id={props.rowId}/> : ''}
                        {props.columns.map(column => <vt-table-cell column={column}/>)}
                        {props.childRowTogglerLast ? <vt-child-row-toggler row-id={props.rowId}/> : ''}
                    </tr>
                }
            }
        }
        >
        </r-l-table-row>
    }
}
