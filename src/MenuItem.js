import React from "react"

export default function MenuItem (props){

    const [qtd, setQtd] = React.useState(0);
    const [selectedFlag, setSelectedFlag] = React.useState(false);
    
    function selectItem(){
        if(!selectedFlag){
            setSelectedFlag(true);
            setQtd(1);
            console.log(props.name); // REMOVER DEPOIS
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
        }
    }

    function increaseOrder(e){
        e.stopPropagation();
        setQtd(qtd+1);
    }
    
    return(
        <div onClick={selectItem} className={selectedFlag ? "menu-item selected" : "menu-item"}>
            <img src={props.image} alt=""/>
            <span className="name">{props.name}</span>
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
