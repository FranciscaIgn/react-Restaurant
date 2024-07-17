import { NavBar } from "../components/NavBar/Navbar"
import { MenuplatosEstaciones } from "../components/MenuPlatos/MenuPlatos"

export const Platos = () => {
    return(
        <>
        <NavBar />
        <center>
        <h1 className="Platos">P L A T O S</h1>
        </center>
        
        <MenuplatosEstaciones />

        <hr className="separacion"></hr>
        
            <p className="ParrafoPlatos">La carta es tan cambiante como las flores que la integran.
            A cada flor, su estación. Por eso, te damos un consejo: 
            si quieres vivir una experiencia gastronómica auténtica, 
            ahora es el momento.</p>
            <hr className="separacion"></hr>

           
       
            
        </>
    )
}