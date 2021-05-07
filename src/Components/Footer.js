export default function Footer(){
    <footer>
        <button className={counterFood > 0 && counterDrink > 0 && counterDessert > 0 ? "no-display" : ""}>Selecione os 3 items<br/> para fechar o pedido</button>
        <button onClick={enviarMensagem} className={counterFood > 0 && counterDrink > 0 && counterDessert > 0 ? "valid" : "valid no-display"}>Finalizar Pedido</button>
    </footer>
}