import { Header } from "../components/Header/Header"
import { NavBar } from "../components/NavBar/Navbar"
import { SignUpform } from "../components/SiginUp/SignUpform"

export const SignUp = () =>{
    return(
        <>
        <NavBar/>
        <Header/>
        <center>
            <SignUpform/>
        </center>
        
        </>
    )
}