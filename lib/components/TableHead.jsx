import RLTableHead from "./renderless/RLTableHead";
import HeadingsRow from "./HeadingsRow"

export default {
    name: 'TableBody',
    components: {RLTableHead, HeadingsRow},
    render() {
        return <r-l-table-head scopedSlots={
            {
                default: function (props) {
                    return <thead>
                        <headings-row/>

                    </thead>
                }
            }
        }
        >
        </r-l-table-head>
    }
}
