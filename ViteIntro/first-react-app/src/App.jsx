import './App.css'
import Dog from './Dog'
import Greeter from './Greeter'
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import SlotMachine from './SlotMachine';
import ShoppingList from './ShoppingList';
import RentalPropList from './RentalPropList';
import Clicker from './Clicker'
import Form from './Form';
import Counter from './Counter';
import Toggler from './Toggler';
import ToggleCounter from './ToggleCounter';
import ColorBoxes from './ColorBoxes';
const data = [
  {id: 1, item: "apple", quantity: 12, purchased: true},
  {id: 2, item: "bread", quantity: 2, purchased: false},
  {id: 3, item: "milk", quantity: 1, purchased: true},
  {id: 4, item: "banana", quantity: 3, purchased: false}
];
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
function App() {


  return (
    <div>
      {/* <Greeter person="Nemil" from="Nemil" />
      <Greeter person="Maitri" from="Nemil" />
      <Greeter person="Dharmik" from="Nemil" />
      <Greeter person="Bhailu" from="Jati reje" />
      <Greeter  /> */}
      {/* <ListPicker values={[1,2,3,4,5]}/>
      <ListPicker values={["a", "b", "c"]}/> */}
      
      {/* <Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={10}/>
      <Die /> */}
      {/* <Heading color="teal" text="Welcome" fontSize="40px"/>
      <Heading   text="Welcome" fontSize="40px"/>
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors={["red","blue","green", "pink"]}/>
      <ColorList colors={["grey","olive","orangered", "slategrey"]}/> */}
      {/* <SlotMachine val1={"🍒"} val2={"🍒"} val3={"🍒"}/>
      <SlotMachine val1={"🍒"} val2={"🍌"} val3={"🍒"}/> */}
      {/* <ShoppingList items={data}/> */}
      {/* <RentalPropList properties={properties} /> */}
      {/* <Clicker buttonText={"Please Click Me"} message={"Button was clicked!"}/> */}
      {/* <Form /> */}
      {/* <Counter />  */}
      {/* <ToggleCounter /> */}
      <ColorBoxes colors={[
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "black",
        "white",
      ]}/>
    </div>
  );
}

export default App
