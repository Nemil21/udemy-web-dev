import { useState } from "react";
import {v4 as uuid} from "uuid"
import ShoppingListForm from "./ShoppingListForm";
export default function ShoppingList(){
    const [items, setItems] = useState([
        {id: uuid(), product: "Bananas", quantity:8},
        {id: uuid(), product: "Apples", quantity:5}
    ]);
    const addItem = (item)=>{
        setItems((currItems)=>{
            return [...currItems, {...item, id: uuid()}]
        })
    }
    return(
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((item)=>{
                    return <li key={item.id}> {item.product} - {item.quantity}</li>
                })}
            </ul>
            <ShoppingListForm addItem={addItem} />
        </div>
    )

}