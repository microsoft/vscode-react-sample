
class TodoData {

    constructor(text, id) {
        this.text = text;
        this.timestamp = new Date().toLocaleDateString();
        this.id = id;
    }

}

export default TodoData;