import RLChildRowToggler from "./renderless/RLChildRowToggler";

export default {
    name: 'VtChildRowToggler',
    props:['rowId'],
    components: {RLChildRowToggler},
    render(h) {
        return <r-l-child-row-toggler row-id={this.rowId}  scopedSlots={
            {
                default: function (props) {
                    return props.override ? h(props.override, {
                        attrs: { props }
                    }) : <td tabindex="0" on-keypress={(e) => {
                        if (e.key === 'Enter') {
                            props.toggle();
                        }
                    }} on-click={props.toggle}>
                        <span class={`VueTables__child-row-toggler ` + props.class()}></span>
                    </td>
                }
            }
        }
        >
        </r-l-child-row-toggler>
    }
}


