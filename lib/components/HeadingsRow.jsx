import RLHeadingsRow from "./renderless/RLHeadingsRow";
import TableHeading from "./TableHeading";

export default {
    name: 'HeadingsRow',
    components: {RLHeadingsRow, TableHeading},
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
                            <table-heading column={column}/>
                        );
                    });

                    return <tr>
                        {headings}
                    </tr>
                }
            }
        }>
        </r-l-headings-row>
    }
}
