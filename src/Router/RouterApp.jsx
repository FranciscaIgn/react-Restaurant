import { Routes, Route } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Nosotros } from "../Pages/Nosotros"
import { ErrorPage } from "../Pages/ErrorPage"
import { Platos } from "../Pages/Platos"
import { Postres } from "../Pages/Postres"
import { Reservaciones } from "../Pages/Reservaciones"
import { Bebidas } from "../Pages/Bebidas"
import { ReservacionCreada } from "../Pages/ReservaciónCreada"
import { EditPage } from "../Pages/Editpage/Editpage"
import { Header } from "../components/Header/Header"
import { SignUp } from "../Pages/SignUp"
import { Login } from "../Pages/Login"
import { UserPage } from "../Pages/UsersPage"
import { Blog } from "../Pages/Blog"
import { Flores } from "../Pages/Flores"






export const RourterApp = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Reservacion" element={<Reservaciones />} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/Platos" element={<Platos />} />
        <Route path="/Postres" element={<Postres />} />
        <Route path="/Bebidas" element={<Bebidas />} />
        <Route path="/Creada" element={<ReservacionCreada />} />
        <Route path="/Edit/:id" element={<EditPage/>} />
        <Route path="/" element={<Header/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/usuarios" element={<UserPage/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Flores" element={<Flores/>}/>
            
        
        
        </Routes>
        </>
    )
}