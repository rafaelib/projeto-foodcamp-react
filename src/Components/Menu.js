import MenuItem from './MenuItem.js'
import React from "react"

export default function Menu (props){
    
    const options = props.options.map((i)=><MenuItem counterDessert={props.counterDessert} setCounterDessert={props.setCounterDessert} counterDrink={props.counterDrink} setCounterDrink={props.setCounterDrink}  counterFood={props.counterFood} setCounterFood={props.setCounterFood} image = {i.image} name={i.name} description={i.description} price={i.price} category={i.category}/>)

    return(
        <>
            <section>
                <h2>{props.step}</h2>
                <div className="container-menu-items">
                    {options}
                </div>
            </section>
        </>
    )
}

