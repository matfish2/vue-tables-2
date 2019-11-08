import RLListFilter from "./renderless/RLListFilter";

export default {
    name: 'ListFilter',
    props: ['column'],
    components: {RLListFilter},
    render() {
        return <r-l-list-filter column={this.column} scopedSlots={
            {
                default: (props) => {

                    var options = [];
                    let selected;

                    props.items.map(option => {
                        selected = String(option.id) === String(props.query[this.column]) && props.query[this.column] !== '';
                        options.push(<option value={option.id} selected={selected}>{option.text}</option>)
                    })

                    return <div class="VueTables__list-filter"
                                id={'VueTables__' + this.column + '-filter'}>
                        <select class={props.theme.select}
                                on-change={props.search(false)}
                                name={props.getColumnName(this.column)}
                                value={props.query[this.column]}>
                            <option value="">{props.display('defaultOption', {column: props.headings[this.column] ? props.headings[this.column] : this.column})}</option>
                            {options}
                        </select>
                    </div>
                }
            }
        }>
        </r-l-list-filter>
    }
}

