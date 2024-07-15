import { useContext, useEffect, useState } from "react"
import UsersContext from "../../context/UserContext"
import { useNavigate } from "react-router-dom"


export const LoginForm = () =>{

    const navigate = useNavigate()
    
    const UserContext = useContext(UsersContext)

    const {
        loginUser,
        authStatus,
        verifyToken
    } =UserContext

    const [data, setData] = useState({
        correo: '',
        password: ''
    })

    useEffect(() =>{
        verifyToken()
     }, [authStatus, verifyToken] )

     const onChangeData = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
     }

     const onSubmitData = (event) =>{
        event.preventDefault()
        loginUser(data)
        navigate('/')
        
     }


     return (
        <>
            <div>
                <h2>Inicia sesión</h2>
                <form onSubmit={(event) => {onSubmitData(event)}}>
                    
                    <div>
                        <label htmlFor="correo">Tu correo</label>
                        <input 
                        type="email" 
                        name="correo"
                        id="correo"
                        placeholder="tucorreo@gmail.com"
                        onChange={(event) =>{onChangeData(event)} }
                        required/>
                    </div>

                    <div>
                        <label htmlFor="contraseña">Tu contraseña</label>
                        <input 
                        type="password"
                        name="contraseña"
                        id="contraseña"
                        placeholder="***********"
                        onChange={(event) =>{onChangeData(event)} }
                        required
                        />
                    </div>
                    <div>
                        <button type="submit">Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </>
     )
}