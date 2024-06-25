import { CarouselReservacion } from "../components/Carousel/CarouselReserva"
import { CreateForm } from "../components/Createform/CreateForm"
import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/NavBar/Navbar"





export const Reservaciones = () => {
    return(
        <>
        <NavBar />
        <center>
            
            <CarouselReservacion />
          <h1 className="Reservaciones">R E S E R V A C I O N E S</h1>

          
        
        
         <h4 className="titulo1">Solo se aceptan reservaciones con 24 hrs de anticipación</h4>
         <h4 className="titulo2">Contamos con Estacionamiento</h4>

         <CreateForm />


         <Footer />
        </center> 
        </>
    )
}