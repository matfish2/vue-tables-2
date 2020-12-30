import RLDateFilter from "./renderless/RLDateFilter";

export default {
    name: 'VtDateFilter',
    props: ['column'],
    components: {RLDateFilter},
    render(h) {
        return <r-l-date-filter column={this.column} scopedSlots={
            {
                default: (props) => {
                    return props.override ? h(props.override, {
                        attrs: {props}
                    }) : <div class="VueTables__date-filter" id={'VueTables__' + this.column + '-filter'}>
                        <span class="VueTables__filter-placeholder">{props.placeholder}</span>
                    </div>
                }
            }
        }>
        </r-l-date-filter>
    }
}

