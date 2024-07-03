import { useState} from "react";

export default function ScoreKeeperEx({ numPlayers = 3, target = 5 }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    const [hasWinner, setHasWinner] = useState(false);

    const increment = (id) => {
        setScores((oldScores) => {
            const newScores = oldScores.map((score, index) => {
                return index === id ? score + 1 : score;
            });

            // Check if any player has reached the target score
            if (newScores.some(score => score >= target)) {
                setHasWinner(true);
            }

            return newScores;
        });
    };

    const resetScores = () => {
        setScores(new Array(numPlayers).fill(0));
        setHasWinner(false);
    };

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((s, i) => (
                    <div key={i}>
                        <li style={{ height: "3rem" }}>
                            Player{i + 1} : {s}
                            <button style={{marginLeft:"10px"}} onClick={() => increment(i)} disabled={hasWinner}>+1</button>
                            {s >= target && " Winner"}
                        </li>
                    </div>
                ))}
            </ul>
            <button onClick={resetScores}>Reset Scores</button>
        </div>
    );
}
