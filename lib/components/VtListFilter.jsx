import RLListFilter from "./renderless/RLListFilter";

export default {
    name: 'VtListFilter',
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

                    return props.override ? h(props.override, {attrs:{props}}) : <div class="VueTables__list-filter"
                                id={'VueTables__' + this.column + '-filter'}>
                        <select class={props.theme.select}
                                on-change={props.search(false)}
                                name={props.name}
                                value={props.value}>
                            <option value="">{props.defaultOption}</option>
                            {options}
                        </select>
                    </div>
                }
            }
        }>
        </r-l-list-filter>
    }
}

