import './TodoItem.css';

function TodoItem(props) {
    return (
        <li>
            <span
                className={`Icon-container Icon Icon-check ${props.completed && "Icon-check--active"}`}
                onClick={props.onComplete}
            >
                ✔
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
            <span
                className='Icon-container close'
                onClick={props.onDelete}
            >❌
            </span>
        </li>
    );
}

export { TodoItem };