import RLFiltersRow from "./renderless/RLFiltersRow";

export default {
    name: 'FiltersRow',
    components: {RLFiltersRow},
    render() {
        return <r-l-filters-row scopedSlots={
            {
                default: function (props) {
                    return <tr>

                    </tr>
                }
            }
        }
        >
        </r-l-filters-row>
    }
}
