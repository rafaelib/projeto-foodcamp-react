import Header from "./Header.js"
import Menu from "./Menu.js"
import React from "react"

export default function App(){

    const [counterFood, setCounterFood] = React.useState(0);
    const [counterDrink, setCounterDrink] = React.useState(0);
    const [counterDessert, setCounterDessert] = React.useState(0);

    function validOrder (){
        alert("Pedido Finalizado com Sucesso");
    }

    const food = [
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Arroz",
            description: "Fonte de carboidratos. Alimento Branco",
            price: "R$ 4,99",
            category: "food"
            }, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Feijao",
            description: "Fonte de carboidratos. Alimento Preto",
            price: "R$ 5,99",
            category: "food"
            }, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Banana",
            description: "Fonte de carboidratos. Alimento Amarelo",
            price: "R$ 6,99",
            category: "food"
            }, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Livro",
            description: "Fonte de carboidratos. Alimento Cinza",
            price: "R$ 7,99",
            category: "food"
            }
    ]
    const drinks = [
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Arroz",
            description: "Bebida de carboidratos. Alimento Branco",
            price: "R$ 4,99",
            category: "drink"
            }, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Feijao",
            description: "Bebida de carboidratos. Alimento Preto",
            price: "R$ 5,99",
            category: "drink"
            }, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Banana",
            description: "Bebida de carboidratos. Alimento Amarelo",
            price: "R$ 6,99",
            category: "drink"
            }, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Livro",
            description: "Bebida de carboidratos. Alimento Cinza",
            price: "R$ 7,99",
            category: "drink"
            }
    ];
    const desserts = [
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Arroz",
            description: "Doce de carboidratos. Alimento Branco",
            price: "R$ 4,99",
            category: "dessert"
            
}, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Feijao",
            description: "Doce de carboidratos. Alimento Preto",
            price: "R$ 5,99",
            category: "dessert"
            
}, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Banana",
            description: "Doce de carboidratos. Alimento Amarelo",
            price: "R$ 6,99",
            category: "dessert"
            
}, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Livro",
            description: "Doce de carboidratos. Alimento Cinza",
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
                <button onClick={validOrder} className={counterFood > 0 && counterDrink > 0 && counterDessert > 0 ? "valid" : "valid no-display"}>Finalizar Pedido</button>
            </footer>
        </>
    )
}