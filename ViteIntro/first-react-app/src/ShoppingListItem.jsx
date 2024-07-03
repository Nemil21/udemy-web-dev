import PropTypes from 'prop-types'
export default function ShoppingListItem({item}){
    const styles = { textDecoration: item.purchased ? "line-through grey" : null, 
    color: item.purchased ? "grey" : "red"
  }
    return (
        <li key={item.id} style={styles}>
            {item.quantity} {item.item}{item.quantity > 1 ? "s" : ""}</li>
    )
}

// We can define prop types but these days their popularity is decreasing. we use a package by facebook which comes preinstalled by vite called prop-types we import it and define as follows:  

ShoppingListItem.propTypes = {
    item: PropTypes.string,
    quantity: PropTypes.number,
    purchased: PropTypes.bool
}