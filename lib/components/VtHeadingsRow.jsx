import RLHeadingsRow from "./renderless/RLHeadingsRow";
import VtTableHeading from "./VtTableHeading";

export default {
    name: 'VtHeadingsRow',
    components: {RLHeadingsRow, VtTableHeading},
    render() {
        return <r-l-headings-row scopedSlots={
            {
                default: function (props) {

                    var headings = [];

                    if (props.childRowTogglerFirst) {
                        headings.push(<th/>);
                    }

                    props.columns.map(function (column) {
                        headings.push(
                            <vt-table-heading column={column}/>
                        );
                    });

                    if (props.childRowTogglerLast) {
                        headings.push(<th/>);
                    }

                    return <tr>
                        {headings}
                    </tr>
                }
            }
        }>
        </r-l-headings-row>
    }
}
