import Header from "./Header.js"
import Footer from "./Footer.js"
import Menu from "./Menu.js"

export default function App(){
    const food = [
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Arroz",
            description: "Fonte de carboidratos. Alimento Branco",
            price: "R$ 4,99"
            }, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Feijao",
            description: "Fonte de carboidratos. Alimento Preto",
            price: "R$ 5,99"
            }, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Banana",
            description: "Fonte de carboidratos. Alimento Amarelo",
            price: "R$ 6,99"
            }, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Livro",
            description: "Fonte de carboidratos. Alimento Cinza",
            price: "R$ 7,99"
            }
    ]
    const drinks = [
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Arroz",
            description: "Bebida de carboidratos. Alimento Branco",
            price: "R$ 4,99"
            }, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Feijao",
            description: "Bebida de carboidratos. Alimento Preto",
            price: "R$ 5,99"
            }, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Banana",
            description: "Bebida de carboidratos. Alimento Amarelo",
            price: "R$ 6,99"
            }, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Livro",
            description: "Bebida de carboidratos. Alimento Cinza",
            price: "R$ 7,99"
            }
    ];
    const desserts = [
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Arroz",
            description: "Doce de carboidratos. Alimento Branco",
            price: "R$ 4,99"
            
}, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Feijao",
            description: "Doce de carboidratos. Alimento Preto",
            price: "R$ 5,99"
            
}, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Banana",
            description: "Doce de carboidratos. Alimento Amarelo",
            price: "R$ 6,99"
            
}, 
        {
            image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-soltinho-1200x774.jpg",
            name: "Livro",
            description: "Doce de carboidratos. Alimento Cinza",
            price: "R$ 7,99"
            
}
    ];
    
    return(
        <>
            <Header />

            <Menu step = "Primeiro, seu prato" category = "food" options={food}/>
            <Menu step = "Agora, sua bebida" category = "drinks" options={drinks} />
            <Menu step = "Por fim, sua sobremesa" category = "desserts" options={desserts} />

            <Footer />
        </>
    )
}