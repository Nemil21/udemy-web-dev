import RentalPropListItem from "./RentalPropListItem"
export default function RentalPropList({properties}){
    return(
        <div style={{display: "flex"}}>
            {properties.map(p => (
                <RentalPropListItem key={p.id} property={p} />
            ) 
            )
            }
        </div>

    )
}