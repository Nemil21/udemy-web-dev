function handleSubmit(event) {
    event.preventDefault()
    
}
export default function Form() {
    return(
        <form action="" onSubmit={handleSubmit}>
            <button> Submit</button>
        </form>
    )
}