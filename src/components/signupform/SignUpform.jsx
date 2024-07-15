import { useContext, useState } from "react"
import UsersContext from "../../context/UserContext"
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
       contraseña: ''
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
        <div>Resgistrate como Usuario</div>
        <form onSubmit={(event)=> {onSubmit(event)}}>

            <div>
                <label htmlFor="nombre">Nombre</label>
                <div>
                    <input 
                    type="text"
                    name="nombre"
                    id="nombre"
                    onChange={(event)=> {onChangeData(event)}}
                    required />
                </div>
            </div>

            <div>
                <label htmlFor="apellido">Apellido</label>
                <div>
                    <input 
                    type="text"
                    name="apellido"
                    id="apellido"
                    onChange={(event)=> {onChangeData(event)}}
                    required />
                </div>
            </div>

            <div>
                <label htmlFor="rut">Rut</label>
                <div>
                    <input 
                    type="text"
                    name="rut"
                    id="rut"
                    onChange={(event)=> {onChangeData(event)}}
                    required />
                </div>
            </div>

            <div>
                <label htmlFor="telefono">Telefono</label>
                <div>
                    <input 
                    type="number"
                    name="telefono"
                    id="telefono"
                    onChange={(event)=> {onChangeData(event)}}
                    required />
                </div>
            </div>

            <div>
                <label htmlFor="correo">Correo</label>
                <div>
                    <input 
                    type="text"
                    name="correo"
                    id="correo"
                    onChange={(event)=> {onChangeData(event)}}
                    required />
                </div>
            </div>

            <div>
                <label htmlFor="contraseña">Contraseña</label>
                <div>
                    <input 
                    type="password"
                    name="contraseña"
                    id="contraseña"
                    onChange={(event)=> {onChangeData(event)}}
                    required />
                </div>
            </div>
            
            <div>
                <button type="submit">Registrame</button>
            </div>

        </form>
        </>
    )
    
}