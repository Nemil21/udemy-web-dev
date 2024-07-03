export default function ListPicker({values}){
    const randomInd = Math.floor(Math.random()* values.length)
    const randElement = values[randomInd]
    return(
        <div>
            <p>THe list of values: {values}</p>
            <p>Randomly selected value: {randElement}</p>
        </div>
    )
}