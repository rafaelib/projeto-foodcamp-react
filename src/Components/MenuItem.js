import React from "react"

export default function MenuItem (props){
    
    const [qtd, setQtd] = React.useState(0);
    const [selectedFlag, setSelectedFlag] = React.useState(false);
    const {counterFood, setCounterFood, counterDrink, setCounterDrink, counterDessert, setCounterDessert } = props;

    function selectItem(){
        if(!selectedFlag){
            setSelectedFlag(true);
            if(props.category==="food"){
                setCounterFood(counterFood + 1)
            }
            else if(props.category==="drink"){
                setCounterDrink(counterDrink + 1)
            }
            else if(props.category==="dessert"){
                setCounterDessert(counterDessert + 1)
            }
            setQtd(1);
        }
    }

    function decreaseOrder(e){
        if(qtd>1){
            e.stopPropagation();
            setQtd(qtd-1);
        }else{
            e.stopPropagation();
            setQtd(0);
            setSelectedFlag(false);
            if(props.category==="food"){
                setCounterFood(counterFood - 1)
            }
            else if(props.category==="drink"){
                setCounterDrink(counterDrink - 1)
            }
            else if(props.category==="dessert"){
                setCounterDessert(counterDessert - 1)
            }
        }
    }

    function increaseOrder(e){
        e.stopPropagation();
        setQtd(qtd+1);
    }
    
    return(
        <div onClick={selectItem} className={selectedFlag ? "menu-item selected" : "menu-item"}>
            <img src={props.image} alt=""/>
            <span className={counterFood === "a" ? "name selected" : "name"}>{props.name}</span>
            <span className="description">{props.description}</span>
            <span className="price">{props.price}</span>
            <div className={selectedFlag ? "counter" : "counter no-display"}>
                <ion-icon onClick={(e)=>(decreaseOrder(e))} name="remove-outline" color="danger"></ion-icon>
                <span>{qtd}</span>
                <ion-icon onClick={(e)=>(increaseOrder(e))} name="add-outline" color="primary"></ion-icon>   
            </div>
        </div>
        )
}
