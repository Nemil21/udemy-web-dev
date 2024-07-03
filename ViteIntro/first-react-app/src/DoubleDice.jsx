// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1
//     const num2 = Math.floor(Math.random() * 3) + 1
//     const result = num1 === num2 ? "You Win!" : "You Lose:("
//     return(
//         <div>
//             <h1>{result}</h1>   
//             <p>Num 1 = {num1}</p>
//             <p>Num 2 = {num2}</p>
//         </div>
//     )
// }

// OPTION 2
// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1
//     const num2 = Math.floor(Math.random() * 3) + 1
//     return(
//         <div>
//             <h1>{num1 === num2 ? "You Win!" : "You Lose:("}</h1>   
//             <p>Num 1 = {num1}</p>
//             <p>Num 2 = {num2}</p>
//         </div>
//     )
// }

//OPTION 3
// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1
//     const num2 = Math.floor(Math.random() * 3) + 1
//     return(
//         <div>
//             <h1>Double Dice</h1>   
//             {num1 === num2 ? <h2>You Win!!</h2> : null}
//             <p>Num 1 = {num1}</p>
//             <p>Num 2 = {num2}</p>
//         </div>
//     )
// }


//OPTION 4
export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1
    const num2 = Math.floor(Math.random() * 3) + 1
    const isWinner = num1 === num2
    const styles = {color: isWinner ? "green" : "red"}

    return(
        <div className="DoubleDice" style={styles}>
            <h1>Double Dice</h1>   
            {isWinner && <h2>You Win!!</h2>}
            <p>Num 1 = {num1}</p>
            <p>Num 2 = {num2}</p>
        </div>
    )
}