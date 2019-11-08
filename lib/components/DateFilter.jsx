import RLDateFilter from "./renderless/RLDateFilter";

export default {
    name: 'DateFilter',
    props: ['column'],
    components: {RLDateFilter},
    render() {
        return <r-l-date-filter column={this.column} scopedSlots={
            {
                default: (props) => {
                    return <div class="VueTables__date-filter" id={'VueTables__' + this.column + '-filter'}>
                        <span class="VueTables__filter-placeholder">{props.display('filterBy', {column: props.getHeading(this.column)})}</span>
                    </div>
                }
            }
        }>
        </r-l-date-filter>
    }
}

