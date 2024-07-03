
export default function Clicker({message, buttonText}) {
    function handleClick(){
        return alert(message)
    }
    return(
        <div>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}