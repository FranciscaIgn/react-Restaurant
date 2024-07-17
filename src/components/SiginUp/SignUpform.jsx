import { useContext, useState } from "react"
import UsersContext from "../../context/userContext/UserContext"
import { useNavigate } from "react-router-dom"



export const SignUpform = () =>{

    const navigate = useNavigate()

    const UserContext = useContext(UsersContext)

    const { signupUser } = UserContext


    const [data, setData] = useState({
       nombre: '',
       apellido:'',
       rut: '',
       telefono: '',
       correo: '',
       clave: ''
    })

    const onChangeData = (event) => {
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        signupUser(data)
        navigate('/')      
        
    }
    return(
        <>
        <div className="resgistro">Resgistrate como Usuario</div>
        <form className="formularioregistro" onSubmit={(event) => {onSubmit(event)}}>

            <div className="iniciales">
                <label className="nombre" htmlFor="nombre">Nombre</label>
                <div>
                    <input className="contenedorinfo"
                    type="text"
                    name="nombre"
                    id="nombre"
                    onChange={(event)=> {onChangeData(event)}}
                    required />
                </div>
            </div>

            <div className="iniciales" >
                <label className="apellido" htmlFor="apellido">Apellido</label>
                <div>
                    <input className="contenedorinfo"
                    type="text"
                    name="apellido"
                    id="apellido"
                    onChange={(event)=> {onChangeData(event)}}
                    required />
                </div>
            </div>

            <div className="iniciales">
                <label className="rut" htmlFor="rut">Rut</label>
                <div>
                    <input className="contenedorinfo"
                    type="text"
                    name="rut"
                    id="rut"
                    onChange={(event)=> {onChangeData(event)}}
                    required />
                </div>
            </div>

            <div className="iniciales">
                <label className="telefono" htmlFor="telefono">Telefono</label>
                <div>
                    <input className="contenedorinfo"
                    type="text"
                    name="telefono"
                    id="telefono"
                    onChange={(event)=> {onChangeData(event)}}
                    required />
                </div>
            </div>

            <div className="iniciales">
                <label className="email" htmlFor="correo">Correo</label>
                <div>
                    <input className="contenedorinfo"
                    type="email"
                    name="correo"
                    id="correo"
                    onChange={(event)=> {onChangeData(event)}}
                    required />
                </div>
            </div>

            <div className="iniciales">
                <label className="contraseña" htmlFor="clave">Contraseña</label>
                <div>
                    <input className="contenedorinfo"
                    type="password"
                    name="clave"
                    id="clave"
                    onChange={(event)=> {onChangeData(event)}}
                    required />
                </div>
            </div>
            
            <div>
                <button className="buttonregistro" type="submit">Registrame</button>
            </div>

        </form>
        </>
    )
    
}