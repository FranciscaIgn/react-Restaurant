import { NavBar } from "../components/NavBar/Navbar"
import { TablaGetReservas } from "../components/TablaReservacion/TablaReservacion"


export const Reservaciones = () => {
    return(
        <>
        <NavBar />
        <h1>R E S E R V A C I O N E S</h1>

       <h4>Solo se aceptan reservaciones con 24 hrs de anticipación</h4>
       <h4>Contamos con Estacionamiento</h4>
       
       <TablaGetReservas />
       
        </>
    )
}