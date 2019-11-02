import RLTable from "./renderless/RLTable";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default {
    name: 'TableComponent',
    components: {RLTable, TableHead, TableBody},
    render() {
        return <r-l-table scopedSlots={
            {
                default: function (props) {

                    var caption = props.caption ? <caption>{props.caption}</caption> : '';

                    return <table
                        class={props.tableAttrs.class}
                        summary={props.tableAttrs.summary}
                    >
                        {caption}
                        <table-head/>
                        <table-body/>
                    </table>
                }
            }
        }
        >
        </r-l-table>
    }
}
