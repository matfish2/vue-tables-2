import RLGroupRow from "./renderless/RLGroupRow";

export default {
    name: 'VtGroupRow',
    components: {RLGroupRow},
    props:['row'],
    render() {
        return <r-l-group-row row={this.row} scopedSlots={
            {
                default: function (props) {
                    return props.override ? h(props.override, {attrs: {props}}) : <tr class={props.theme.groupTr} on-click={props.toggleGroupDirection}>
                        <td colspan={props.colspan}>
                            {props.canToggleGroup ? <button
                                    class={props.theme.button}
                                    on-click={props.toggleGroup.bind(this, props.groupValue)}>{props.groupValue}<span class={props.groupToggleIcon(props.groupValue)}></span></button> : ''}
                            {!props.canToggleGroup ? <span>{props.groupValue}</span> : ''}
                            {props.slot}
                        </td>
                    </tr>
                }
            }
        }>
        </r-l-group-row>
    }
}
