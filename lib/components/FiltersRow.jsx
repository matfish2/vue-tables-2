import RLFiltersRow from "./renderless/RLFiltersRow";
import TextFilter from "./TextFilter";
import ListFilter from "./ListFilter";
import DateFilter from "./DateFilter";

export default {
    name: 'FiltersRow',
    components: {RLFiltersRow, TextFilter, ListFilter, DateFilter},
    render() {
        return <r-l-filters-row scopedSlots={
            {
                default: function (props) {

                    var filters = [];

                    if (props.hasChildRow && props.opts.childRowTogglerFirst && props.opts.showChildRowToggler)
                        filters.push(<th></th>);

                    props.columns.map(column => {

                        var filter = '';

                        if (props.filterable(column)) {
                            filter = h(props.filterType(column), {
                                props: {
                                    column
                                }
                            })
                            // switch (true) {
                            //     case props.isTextFilter(column):
                            //         filter = <text-filter column={column}/>;
                            //         break;
                            //     case props.isDateFilter(column):
                            //         filter = <date-filter column={column}/>;
                            //         break;
                            //     case props.isListFilter(column):
                            //         filter = <list-filter column={column}/>
                            //         break;
                            // }
                        }

                        if (typeof props.slots[`filter__${column}`] !== 'undefined') {
                            filter = filter ? <div>{filter}{props.$slots[`filter__${column}`]}</div> : props.slots[`filter__${column}`];
                        }

                        filters.push(<th class={props.columnClass(column)}>
                            {!!filter ? <div class="VueTables__column-filter" class={'VueTables__' + column + '-filter-wrapper'}>
                                {filter}
                            </div> : ''}
                        </th>);

                    });

                    if (props.hasChildRow && !props.opts.childRowTogglerFirst && props.opts.showChildRowToggler)
                        filters.push(<th></th>);

                    return <tr class="VueTables__filters-row">
                        {filters}
                    </tr>

                }
            }
        }
        >
        </r-l-filters-row>
    }
}
