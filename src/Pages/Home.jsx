import { Footer } from "../components/Footer/Footer"
import { ImagenesHome } from "../components/ImagenesHome/Imageneshome"
import { NavBar } from "../components/NavBar/Navbar"
import { ImagenLavanda } from "../components/ImagenesHome/Imageneshome"
import { Carouselhome } from "../components/Carousel/Carousel"
import { MenuplatosEstaciones } from "../components/MenuPlatos/MenuPlatos"





export const Home = () => {
    return(
        <>
        <NavBar />
        <ImagenesHome />

        <center>
            <h1 className="Bienvenidos">B I E N V E N I D O S</h1>
            <h4 className="Platosestaciones">Platos de Estación</h4>
         </center>

         <MenuplatosEstaciones />   
            
         <ImagenLavanda />
           

        


        <Carouselhome/>
            
        

        
        <Footer />
        </>
    )
}