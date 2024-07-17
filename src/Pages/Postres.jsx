
import { NavBar } from "../components/NavBar/Navbar"
import { MenuPostres } from "../components/MenuPlatos/MenuPlatos"

export const Postres = () => {
    return (
        <>
        <NavBar />
        <center>
             <h1 className="PostresName">P O S T R E S</h1>
             
        </center>
        <MenuPostres/>
       
        </>
    )
}