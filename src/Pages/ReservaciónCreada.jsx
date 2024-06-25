import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/NavBar/Navbar"
import { TablaGetReservacion } from "../components/TablaReservacion/TablaGetReservacion"


export const ReservacionCreada = () => {
    return (

        <>
        <NavBar/>
        <h2>Tu reservación se ha realizado con éxito </h2>
        <TablaGetReservacion />
        <Footer/>
        </>
    )
}