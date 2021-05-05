import MenuIten from './MenuIten.js'

export default function Menu (props){
    const arrayMenuItens = 
[
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

    const menuItens = arrayMenuItens.map((iten) => (<MenuIten image = {iten.image} name = {iten.name} 
    description = {iten.description} price = {iten.price}></MenuIten>)) 


    return(
        <section>
            <h2>{props.step}</h2>
            <div className="container-menu-itens">
                {menuItens}
            </div>
        </section>
    )
}

