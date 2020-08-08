export default class PropsProvider {
    constructor(context) {
        this.context = context;
    }

    getComponentProps(props) {
        return {
            AddProps        : this.getAddTodoComponentProps(props),
            FilterProps     : this.getFilterProps(props),
            TodoProps       : this.getTodoProps(props),
            TodoListProps   : this.getTodoListProps(props)
        }
    }

    getAddTodoComponentProps(props) {
        const { addTodo } = props;  
        return {
            addTodo
        }
    }

    getFilterProps(props) {
        const { visibilityFilter, filter } = props;
        return {
            visibilityFilter,
            filter
        }
    }

    getTodoProps(props) {
        const { toggle } = props;
        return {
            toggle
        }
    }

    getTodoListProps(props) {
        const { todoArray } = props;
        return {
            todoArray
        }
    }
}