import RLTableHeading from "./renderless/RLTableHeading";
import SortControl from "./SortControl";

export default {
    name: 'TableHeading',
    props:['column'],
    components: {RLTableHeading, SortControl},
    render() {
        return <r-l-table-heading column={this.column} scopedSlots={
            {
                default: function (props) {
                    return <th
                        on-keypress={props.thEvents.keypress}
                        on-click={props.thEvents.click}
                        class={props.thAttrs.class}
                        tabindex={props.thAttrs.tabIndex}
                    >
            <span
                class="VueTables__heading"
                title={props.title}
            >
              {props.heading}
            </span>
                        <sort-control/>
                    </th>
                }
            }
        }
        >
        </r-l-table-heading>
    }
}
