export default class PropsProvider {
    constructor(context) {
        this.context = context;
    }

    getComponentProps(props) {
        return {
            groups : this.getAddProductGroup(props),
        }
    }

    getAddProductGroup(props) {
        const { addTodo } = props;  
        return {
            addTodo
        }
    }
}