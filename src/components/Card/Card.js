import './Card.css';

const Card = (props)=> (
    <>
    <div className ='card'>
        <h2>{props.nome}</h2>
    </div>
    <img 
    className ='image' 
    src={props.imagem}
    alt= {props.nome}
    />
    </>
)
export default Card;
