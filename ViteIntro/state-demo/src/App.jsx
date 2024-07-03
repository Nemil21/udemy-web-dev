import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import ScoreKeeperEx from './ScoreKeeperEx'
import Die from './Die'
import Dice from './Dice'
import LuckyN from './LuckyN'
import { sum } from './utils'
import Box from './Box'
import BoxGrid from './BoxGrid'
function App() {
  const lessThan4 = (dice)=>{
    return sum(dice) < 4
  }
  const allSameValue = (dice)=>{
    return dice.every((v)=> v === dice[0])
  }

  return (
    <>
      {/* <Box />
      <Box />
      <Box /> */}
      <BoxGrid  />
      {/* <Counter /> */}
      {/* <Dumbo /> */}
      {/* <ScoreKeeper />  */}
      {/* <EmojiClicker /> */}
      {/* <ScoreKeeperEx numPlayers={2} target={5}/> */}
      
      {/* <Dice dice={[3,5,1]} color={"green"}/>
      <Dice dice={[3,6,4]}/> */}
      
      {/* <LuckyN winCheck={lessThan4} title={"Roll less than 4"}/>
      <LuckyN numDice={3} winCheck={allSameValue} title={"Roll same numbers"}/> */}
    </>
  )
}

export default App
