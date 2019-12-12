import RLSortControl from './renderless/RLSortControl'

export default {
    name: 'SortControl',
    components: {RLSortControl},
    render() {
        return <r-l-sort-control scopedSlots={
            {
                default: function (props) {
                    return props.sortable ? (props.override ? h(props.override,{
                        attrs:{
                            props
                        }
                    }) : <span class={props.class}></span>) : ''
                }
            }
        }
        >
        </r-l-sort-control>
    }
}
