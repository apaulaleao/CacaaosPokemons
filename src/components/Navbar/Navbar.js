import './Navbar.css';


const Navbar =(props)=>{
    return(
        <div className='barra'>
            <h1 className ='barra__titulo'>Encontre Pokemons</h1>
            <form onSubmit ={props.onSubmit} className ='barra__form'>
                <input type='text' placeholder='Digite o nome..' required/>
                <input type='submit' value ='Procurar'/>
            </form>
        </div>
    )
}

export default Navbar;