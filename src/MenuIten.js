export default function MenuIten (props){
    return(
        <div className="menu-iten">
            <img src={props.image} alt=""/>
            <span className="name">{props.name}</span>
            <span className="description">{props.description}</span>
            <span className="price">{props.price}</span>
            <div className="counter"></div>
        </div>
        )
}
