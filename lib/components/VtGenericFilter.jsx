import RLGenericFilter from "./renderless/RLGenericFilter";

export default {
    name: 'VtGenericFilter',
    components: {RLGenericFilter},
    render() {
        return <r-l-generic-filter scopedSlots={
            {
                default: function (props) {

                    return props.override ? h(props.override, {
                            attrs: {
                                props
                            }
                        }) :
                        <div class="VueTables__search-field">
                            <label for={`VueTables__search_${props.id}`} class={props.theme.label}>
                                {props.display("filter")}
                            </label>

                            <input class={`VueTables__search__input ${props.theme.input} ${props.theme.small}`}
                                   ref="filter"
                                   type="text"
                                   placeholder={props.display('filterPlaceholder')}
                                   on-keyup={props.search(props.opts.debounce)}
                                   id={`VueTables__search_${props.id}`}
                                   autocomplete="off"
                            />
                        </div>
                }
            }
        }
        >
        </r-l-generic-filter>
    },
    methods:{
        focus() {
            this.$refs.filter.focus()
        },
        blur() {
            this.$refs.filter.blur()
        }
    }
}
