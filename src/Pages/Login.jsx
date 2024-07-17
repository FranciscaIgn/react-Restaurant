import { Header } from "../components/Header/Header"
import { LoginForm} from "../components/Login/LoginForm"
import { NavBar } from "../components/NavBar/Navbar"

export const Login = () =>{
    return(
        <>
        <NavBar/>
        <Header/>
        <center>
            <LoginForm />
        </center>
        
        </>
    )
}