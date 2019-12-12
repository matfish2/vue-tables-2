import RLChildRowToggler from "./renderless/RLChildRowToggler";

export default {
    name: 'ChildRowToggler',
    props:['rowId'],
    components: {RLChildRowToggler},
    render() {
        return <r-l-child-row-toggler row-id={this.rowId}  scopedSlots={
            {
                default: function (props) {
                    return <td tabindex="0" on-keypress={(e) => {
                        if (e.key === 'Enter') {
                            props.toggleChildRow.bind(this, props.rowId)();
                        }
                    }} on-click={props.toggleChildRow.bind(this, props.rowId)}>
                        <span class={`VueTables__child-row-toggler ` + props.childRowTogglerClass(props.rowId)}></span>
                    </td>
                }
            }
        }
        >
        </r-l-child-row-toggler>
    }
}


