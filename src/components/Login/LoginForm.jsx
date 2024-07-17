import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UsersContext from "../../context/userContext/UserContext"


export const LoginForm = () => {

    const navigate = useNavigate()
    
    const UserContext = useContext(UsersContext)

    const {
        loginUser,
        authStatus,
        verifyToken
    } = UserContext

    const [data, setData] = useState({
        correo: '',
        clave: ''
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

        
            <div className="login">
                <h2 className="iniciasesion">Inicia sesión</h2>
                <form onSubmit={(event) => {
                    onSubmitData(event);
                    }}
                    >
                    
                    <div className="contenedorlogin">
                        <label className="correo" htmlFor="correo">Tu correo</label>
                        <input className="correo2"
                        type="email" 
                        name="correo"
                        id="correo"
                        placeholder="tucorreo@gmail.com"
                        onChange={(event) =>{
                            onChangeData(event);
                        }}
                        required
                        />
                    </div>

                    <div className="contenedorlogin2">
                        <label className="clave" htmlFor="clave">Tu contraseña</label>
                        <input className="clave2"
                        type="password"
                        name="clave"
                        id="clave"
                        placeholder="***********"
                        onChange={(event) =>{
                            onChangeData(event);
                        }}
                        required
                        />
                    </div>
                    <div>
                        <button className="buttonlogin" type="submit">Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </>
     );
}