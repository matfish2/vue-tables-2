import RLTable from "./renderless/RLTable";
import VtTableHead from "./VtTableHead";
import VtTableBody from "./VtTableBody";

export default {
    name: 'VtTable',
    components: {RLTable, VtTableHead, VtTableBody},
    render() {
        return <r-l-table scopedSlots={
            {
                default: function (props) {

                    var caption = props.caption ? <caption>{props.caption}</caption> : '';

                    return props.override ? h(props.override, {attrs: {props}}) :
                        <table
                            class={props.tableAttrs.class}
                            summary={props.tableAttrs.summary}
                        >
                            {caption}
                            <vt-table-head/>
                            {props.slots.beforeBody}
                            <vt-table-body/>
                            {props.slots.afterBody}
                        </table>
                }
            }
        }
            >
            </r-l-table>
        }
}
