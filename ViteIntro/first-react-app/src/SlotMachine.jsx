export default function SlotMachine({val1, val2, val3}){
    const isWinner = val1 === val2 && val2 === val3 
    const styles = {color: isWinner ? "green" : "red"}
    const winText = <div> <h3>You Win!</h3> <h4>Congrats!!</h4> </div>
    const loseText = <h3>You Lose</h3>
    return(
        <div>
            <h1>Slot Machine</h1>
            <h2>{val1} | {val2} | {val3}</h2>
            <div style={styles}>{isWinner ? winText : loseText}</div>
        </div>
        
    )

}