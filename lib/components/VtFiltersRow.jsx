import RLFiltersRow from "./renderless/RLFiltersRow";
import VtTextFilter from "./VtTextFilter";
import VtListFilter from "./VtListFilter";
import VtDateFilter from "./VtDateFilter";

export default {
    name: 'VtFiltersRow',
    components: {RLFiltersRow, VtTextFilter, VtListFilter, VtDateFilter},
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
                        }

                        if (typeof props.slots[`filter__${column}`] !== 'undefined') {
                            filter = filter ? <div>{filter}{props.slots[`filter__${column}`]}</div> : props.slots[`filter__${column}`];
                        }

                        filters.push(<th class={props.columnClass(column)}>
                            {!!filter ? <div class="VueTables__column-filter" class={'VueTables__' + column + '-filter-wrapper'}>
                                {filter}
                            </div> : ''}
                        </th>);

                    });

                    if (props.hasChildRow && !props.opts.childRowTogglerFirst && props.opts.showChildRowToggler)
                        filters.push(<th></th>);

                    return props.override ? h(props.override, {
                            attrs: { props }
                        }) : <tr class="VueTables__filters-row">
                        {filters}
                    </tr>

                }
            }
        }
        >
        </r-l-filters-row>
    }
}
