import RLGenericFilter from "./renderless/RLGenericFilter";

export default {
    name: 'GenericFilter',
    components: {RLGenericFilter},
    render() {
        return <r-l-generic-filter scopedSlots={
            {
                default: function (props) {

                    return <div
                        class={`${props.theme.field} ${props.theme.inline} ${
                            props.theme.left
                        } VueTables__search`}
                    >
                        <div class="VueTables__search-field">
                            <label for={`VueTables__search_${props.id}`} class={props.theme.label}>
                                {props.display("filter")}
                            </label>

                            <input class={`VueTables__search__input ${props.theme.input} ${props.theme.small}`}
                                   type="text"
                                   value={props.query}
                                   placeholder={props.display('filterPlaceholder')}
                                   on-keyup={props.search(props.debounce)}
                                   id={`VueTables__search_${props.id}`}
                            />
                        </div>
                    </div>
                }
            }
        }
        >
        </r-l-generic-filter>
    }
}
