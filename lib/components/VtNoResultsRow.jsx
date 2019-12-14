import RLNoResultsRow from "./renderless/RLNoResultsRow";

export default {
    name: 'VtNoResultsRow',
    components: {RLNoResultsRow},
    render() {
        return <r-l-no-results-row scopedSlots={
            {
                default: function (props) {
                    return props.override ? h(props.override, {attrs:{props}}) : <tr class="VueTables__no-results">
                        <td class="text-center" tabindex="0"
                            colspan={props.colspan}>
                            {props.display(props.loading ? 'loading' : 'noResults')}
                        </td>
                    </tr>
                }
            }
        }>
        </r-l-no-results-row>
    }
}
