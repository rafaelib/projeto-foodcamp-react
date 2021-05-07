import Header from "./Header.js"
import Menu from "./Menu.js"
import React from "react"

export default function App(){

    const [counterFood, setCounterFood] = React.useState(0);
    const [counterDrink, setCounterDrink] = React.useState(0);
    const [counterDessert, setCounterDessert] = React.useState(0);

    function enviarMensagem(){
        const celular = "5521965670919";  
        let texto = `Você finalizou seu pedido`;
        texto = window.encodeURIComponent(texto);
        window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto);
      }

    const food = [
        {image: "imagens/sunomono.jpg",
            name: "Sunomono",
            description: "Descrição do prato numero 1",
            price: "R$ 24,99",
            category: "food" 
            }, 
        {
            image: "imagens/guioza.jpg",
            name: "Guioza",
            description: "Descrição do prato numero 2",
            price: "R$ 25,99",
            category: "food"
            }, 
        {
            image: "imagens/harumaki.jpg",
            name: "Harumaki",
            description: "Descrição do prato numero 3",
            price: "R$ 26,99",
            category: "food"
            }, 
        {
            image: "imagens/missoshiru.jpg",
            name: "Missoshiru",
            description: "Descrição do prato numero 4",
            price: "R$ 27,99",
            category: "food"
            }
    ]
    const drinks = [
        {
            image: "imagens/aojiru.jpg",
            name: "Aojiru",
            description: "Descrição da bebida numero 1",
            price: "R$ 14,99",
            category: "drink"
            }, 
        {
            image: "imagens/pocari.jpg",
            name: "Pocari",
            description: "Descrição da bebida numero 2",
            price: "R$ 15,99",
            category: "drink"
            }, 
        {
            image: "imagens/genmaicha.jpg",
            name: "Genmaicha",
            description: "Descrição da bebida numero 3",
            price: "R$ 16,99",
            category: "drink"
            }, 
        {
            image: "imagens/melon-soda1.jpg",
            name: "Melon Soda",
            description: "Descrição da bebida numero 4",
            price: "R$ 17,99",
            category: "drink"
            }
    ];
    const desserts = [
        {
            image: "imagens/warabi.jpg",
            name: "Warabi",
            description: "Descrição da sobremesa numero 1",
            price: "R$ 4,99",
            category: "dessert"
            
}, 
        {
            image: "imagens/wagashi.jpg",
            name: "Wagashi",
            description: "Descrição da sobremesa numero 2",
            price: "R$ 5,99",
            category: "dessert"
            
}, 
        {
            image: "imagens/daifuku.jpg",
            name: "Daifuku",
            description: "Descrição da sobremesa numero 3",
            price: "R$ 6,99",
            category: "dessert"
            
}, 
        {
            image: "imagens/dorayaki.jpg",
            name: "Dorayaki",
            description: "Descrição da sobremesa numero 4",
            price: "R$ 7,99",
            category: "dessert"
}
    ];
    
    return(
        <>
            <Header />

            <Menu counterDessert={counterDessert} setCounterDessert={setCounterDessert} counterDrink={counterDrink} setCounterDrink={setCounterDrink} counterFood={counterFood} setCounterFood={setCounterFood} step = "Primeiro, seu prato" category = "food" options={food}/>
            <Menu counterDessert={counterDessert} setCounterDessert={setCounterDessert} counterFood={counterFood} setCounterFood={setCounterFood} counterDrink={counterDrink} setCounterDrink={setCounterDrink} step = "Agora, sua bebida" category = "drinks" options={drinks} />
            <Menu counterFood={counterFood} setCounterFood={setCounterFood} counterDrink={counterDrink} setCounterDrink={setCounterDrink} counterDessert={counterDessert} setCounterDessert={setCounterDessert}  step = "Por fim, sua sobremesa" category = "desserts" options={desserts} />

            <footer>
                <button className={counterFood > 0 && counterDrink > 0 && counterDessert > 0 ? "no-display" : ""}>Selecione os 3 items<br/> para fechar o pedido</button>
                <button onClick={enviarMensagem} className={counterFood > 0 && counterDrink > 0 && counterDessert > 0 ? "valid" : "valid no-display"}>Finalizar Pedido</button>
            </footer>
        </>
    )
}