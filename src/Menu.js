import MenuIten from './MenuIten.js'

export default function Menu (props){
    const options = props.options.map((i)=><MenuIten image = {i.image} name={i.name} description={i.description} price={i.price} />)

    return(
        <section>
            <h2>{props.step}</h2>
            <div className="container-menu-itens">
                {options}
            </div>
        </section>
    )
}

