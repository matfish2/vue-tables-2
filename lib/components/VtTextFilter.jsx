import RLTextFilter from "./renderless/RLTextFilter";

export default {
    name: 'VtTextFilter',
    props: ['column'],
    components: {RLTextFilter},
    render() {
        return <r-l-text-filter column={this.column} scopedSlots={
            {
                default: (props) => {
                    return props.override ? h(props.override, {
                        attrs: {props}
                    }) : <input
                        on-keyup={props.search(props.debounce)}
                        class={props.theme.input}
                        name={props.getColumnName(this.column)}
                        type="text"
                        placeholder={props.display('filterBy', {column: props.getHeading(this.column)})}
                        autocomplete="off"
                    />
                }
            }
        }>
            </r-l-text-filter>
        }
    }

