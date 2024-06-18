import { Routes, Route } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Nosotros } from "../Pages/Nosotros"
import { ErrorPage } from "../Pages/ErrorPage"
import { Platos } from "../Pages/Platos"
import { Postres } from "../Pages/Postres"
import { Reservaciones } from "../Pages/Reservaciones"
import { Bebidas } from "../Pages/Bebidas"


export const RourterApp = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Reservación" element={<Reservaciones />} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/Platos" element={<Platos />} />
        <Route path="/Postres" element={<Postres />} />
        <Route path="/Bebidas" element={<Bebidas />} />
        
        </Routes>
        </>
    )
}