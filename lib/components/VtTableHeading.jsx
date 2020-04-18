import RLTableHeading from "./renderless/RLTableHeading";
import VtSortControl from "./VtSortControl";

export default {
    name: 'VtTableHeading',
    props: ['column'],
    components: {RLTableHeading, VtSortControl},
    render() {
        return <r-l-table-heading column={this.column} scopedSlots={
            {
                default: function (props) {
                    return props.override ? h(props.override, {attrs: {props}}) : <th
                        on-keypress={props.thEvents.keypress}
                        on-click={props.thEvents.click}
                        class={props.thAttrs.class}
                        title={props.thAttrs.title}
                        tabindex={props.thAttrs.tabIndex}
                    >
            <span
                class="VueTables__heading"
                title={props.title}
            >
              {props.heading}
            </span>
                <vt-sort-control/>
            </th>
                }
            }
        }
        >
        </r-l-table-heading>
    }
}
