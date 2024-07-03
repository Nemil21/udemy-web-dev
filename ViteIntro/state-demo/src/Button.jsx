export default function Button({ text = "Click Me", onClick }) {
    return <button onClick={onClick} className="Button">{text}</button>
}

//this onClick is a prop that we made to generalize the use of this button