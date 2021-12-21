
import './todo.css';

const Todo = ({ todo, toggle }) => {
    const startDate = new Date(todo.startDate);







    // const ShowDueTo = () => {
    //     let due = '';

    //     if (todo.DueTo != '')
    //         due = new Date(todo.DueTo);

    //     if (due != '')
    //         alert(`${due.toLocaleDateString()} ${due.toLocaleTimeString()}`);
    //     else
    //         alert(`date unavailable`);
    // }

    return (
        <li className={todo.isDone ? 'done': null}>
            <input type="checkbox" value={todo.isDone} checked={todo.isDone} onChange={()=>toggle(todo.id)}/>
            <span>
                <span className="big-text">{todo.name}</span>
                <span className="small-text">{todo.desc}</span>
                <span className="hidden date">
                    {
                        todo.startDate != '' ?
                            `${startDate.toLocaleDateString()} ${startDate.toLocaleTimeString()}`
                            : "date unavailable"
                    }
                    {/* <button onClick={ShowDueTo}>Show Due to</button> */}
                </span>
            </span>
        </li>
    )
}

export default Todo;