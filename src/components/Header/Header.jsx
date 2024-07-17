import { useContext } from "react"
import { Link } from "react-router-dom"
import UsersContext from "../../context/userContext/UserContext"






export const Header = () => {
    
   const UserContext = useContext(UsersContext)

   const { authStatus, userData, logout } = UserContext

    return(
        <>
            <nav>
               
            <div>
                   
                   { 
                      authStatus ?(
                      <>
                      <div className="containerdatos">
                        <Link className="write3" to='/'>
                         {userData.nombre} {userData.apellido}
                        </Link>

                        <Link 
                        className="write4" 
                        to='/login'
                        onClick={() => {logout()}}>
                        Cerras sesión
                        </Link>
                      </div>
                      </>
                      ):(
                      <>
                      <div className="containerwrite">
                    <Link className="write1" to='/signup'>Resgístrate</Link>
                    <Link className="write2" to='/login'>Inicia sesión</Link>
                  
                    </div>
                      </>
                    

                    

                ) }

                    
  
            </div>
            </nav>
        </>
    )
}