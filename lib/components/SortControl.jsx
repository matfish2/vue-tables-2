import RLSortControl from './renderless/RLSortControl'

export default {
    name: 'SortControl',
    components: {RLSortControl},
    render() {
        return <r-l-sort-control scopedSlots={
            {
                default: function (props) {
                    return props.sortable ? <span class={props.class}></span> : ''
                }
            }
        }
        >
        </r-l-sort-control>
    }
}
