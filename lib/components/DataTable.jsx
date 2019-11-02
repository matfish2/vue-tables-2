import PerPageSelector from './PerPageSelector'
import TableComponent from './Table'

export default {
    name: 'DataTableComponent',
    components: {
        PerPageSelector,
        TableComponent
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
    render(h) {
        return <r-l-data-table data={this.data} columns={this.columns} name={this.name} options={this.options} scopedSlots={
            {
                default: function (props) {
                    return <div class={"VueTables VueTables--" + props.source}>
                        <div class={props.theme.row}>
                            <div class={props.theme.column}>

                                <per-page-selector/>


                            </div>
                        </div>
                        <div class="table-responsive">
                            <table-component/>
                        </div>
                    </div>
                }
            }
        }
        >

        </r-l-data-table>
    }
}



