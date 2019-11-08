import RLPerPageSelector from "./renderless/RLPerPageSelector";

export default {
    name: 'PerPageSelector',
    components: {RLPerPageSelector},
    render() {
        return <r-l-per-page-selector scopedSlots={
            {
                default: function (props) {
                    return props.perPageValues.length > 1 ? <div
                        class={`${props.theme.field} ${props.theme.inline} ${
                            props.theme.right
                        } VueTables__limit`}
                    >
                        <div class="VueTables__limit-field">
                            <label class={props.labelClass} for={`VueTables__limit_${props.id}`}>
                                {props.display('limit')}
                            </label>
                            <select id={props.selectAttrs.id} class={props.selectAttrs.class} value={props.selectAttrs.value} on-change={props.selectEvents.change}
                            >
                                {props.perPageValues.map(val => {
                                    return <option value={val}>{val}</option>
                                })}
                            </select></div>
                    </div> : ''
                }
            }
        }
        >

        </r-l-per-page-selector>
    }
}
