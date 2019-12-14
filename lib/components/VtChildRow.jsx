import RLChildRow from "./renderless/RLChildRow";

export default {
    name: 'VtChildRow',
    props: ['row', 'index'],
    components: {RLChildRow},
    render() {
        return <r-l-child-row row={this.row} index={this.index} scopedSlots={
            {
                default: function (props) {
                    return props.override ? h(props.override,
                        {
                            attrs: { props }
                        }) : <tr class={'VueTables__child-row ' + props.class}>
                        <td colspan={props.colspan}>
                            {props.childRow}
                        </td>
                    </tr>
                }
            }
        }
        >
        </r-l-child-row>
    }
}
