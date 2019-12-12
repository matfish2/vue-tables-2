import RLColumnsDropdown from "./renderless/RLColumnsDropdown";
import dropdownWrapper from "../modules/dropdown-wrapper"

export default {
    name: 'ColumnsDropdown',
    components: {RLColumnsDropdown},
    render(h) {
        return <r-l-columns-dropdown scopedSlots={
            {
                default: function (props) {

                    if (props.override) {
                        return h(props.override, {
                            attrs:{props}
                        })
                    }

                    var content;
                    var cols = props.origColumns.map(column => {
                        content = <a class={props.theme.dropdown.item}
                                     href="#"
                                     onClick={() => props.toggleColumn(column)}>
                            <input type="checkbox" value={column}
                                   disabled={props.onlyColumn(column)}
                                   checked={props.origColumns.includes(column)}/>
                            {props.getHeading(column)}
                        </a>;

                        return props.theme.framework === 'bulma' ? content : <li>
                            {content}
                        </li>
                    });

                    return <div class="VueTables__columns-dropdown-wrapper">

                        <div class={`${props.theme.dropdown.container} ${props.theme.right} VueTables__columns-dropdown`}>
                            <button type="button" class={`${props.theme.button} ${props.theme.dropdown.trigger}`}
                                    on-click={props.toggleColumnsDropdown}>
                                {props.display('columns')}
                                <span class={`${props.theme.icon} ${props.theme.small}`}>
                                    <i class={props.theme.dropdown.caret}></i>
                                 </span>
                            </button>

                            {dropdownWrapper(h, props.theme.dropdown, cols, props.displayColumnsDropdown)}

                        </div>
                    </div>
                }
            }
        }
        >
        </r-l-columns-dropdown>
    }
}
