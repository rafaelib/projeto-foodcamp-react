import Menu from './Menu.js'

export default function App(){
    const arraySections = ["Primeiro, seu prato", "Agora, sua bebida", "Por fim, sua sobremesa"]
    const sections = arraySections.map((iten) => (<Menu step={iten}></Menu>))
    
    return(
        <>
            <header>
                <h1>FoodCamp</h1>
                <p>Sua comida em seis minutos</p>
            </header>

            {sections}
        
            <footer>
                <button>Selecione os 3 itens<br/> para fechar o pedido</button>
            </footer>
        </>
    )
}