import PerPageSelector from './PerPageSelector'
import TableComponent from './Table'
import Pagination from "./Pagination";
import DropdownPagination from "./DropdownPagination";
import GenericFilter from "./GenericFilter";
import ColumnsDropdown from "./ColumnsDropdown";

export default {
    name: 'DataTableComponent',
    components: {
        PerPageSelector,
        TableComponent,
        Pagination,
        DropdownPagination,
        ColumnsDropdown,
        GenericFilter
    },
    props: {
        columns: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: true
        },
        name: {
            type: String,
            required: false
        },
        options: {
            type: Object,
            required: false,
            default: function () {
                return {};
            }
        }
    },
    methods: {
        setFilter(val) {
            this.$refs.table.setFilter(val);
        },
        setPage(val) {
            this.$refs.table.setPage(val);
        }
    },
    computed: {
        filteredData() {
            return this.$refs.table.filteredData;
        },
        allFilteredData() {
            return this.$refs.table.allFilteredData
        },
    },
    provide() {
        return {
            scopedSlots: () => this.$scopedSlots,
            slots: () => this.$slots
        }
    },
    model: {
        prop: "data"
    },
    render(h) {
        return <r-l-data-table data={this.data} columns={this.columns} name={this.name} options={this.options} ref="table" scopedSlots={
            {
                default: function (props) {
                    return <div class={"VueTables VueTables--" + props.source}>
                        <div class={props.theme.row}>
                            <div class={props.theme.column}>
                                {props.opts.filterByColumn ? '' : <generic-filter/>}
                                <per-page-selector/>
                                {props.opts.columnsDropdown ? <columns-dropdown/> : ''}
                                {props.opts.dropdownPagination ? <dropdown-pagination/> : ''}
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table-component/>
                        </div>
                        <pagination/>
                    </div>
                }
            }
        }
        >

        </r-l-data-table>
    }
}



