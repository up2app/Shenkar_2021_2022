
const Todo = ({ todo }) => {

    const startDate = new Date(todo.startDate);

    const ShowDueTo = () => {
        let due = '';

        if (todo.DueTo != '')
            due = new Date(todo.DueTo);

        if(due != '')   
            alert(`${due.toLocaleDateString()} ${due.toLocaleTimeString()}`);
        else    
            alert(`date unavailable`);
    }

    return (
        <div>
            <p>{todo.name}</p>
            <p>{todo.desc}</p>
            <p>
                {
                    todo.startDate != '' ?
                        <span>{startDate.toLocaleDateString()} {startDate.toLocaleTimeString()}<br /></span>
                        : <span>date unavailable<br /></span>
                }
                <button onClick={ShowDueTo}>Show Due to</button>
            </p>
        </div>
    )
}

export default Todo;