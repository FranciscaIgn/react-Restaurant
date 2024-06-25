import { useState } from "react"

import { collection, addDoc } from "firebase/firestore"
import { db } from "../../config/Firebase.config"
import { useNavigate } from "react-router-dom"

import { CrudForm } from "../CrudForm/CrudForm"




export const CreateForm = () =>{
      
    const [Nombre, setNombre] = useState('')
    const [Correo, setCorreo] = useState('')
    const [Telefono, setTelefono] = useState('')
    const [Fecha, setFecha] = useState('dd-MM-yy')
    const [Comensales, setComensales] = useState('')

    const navigate = useNavigate()

    const ReservasCollectionReference =collection(db, 'Reservas')
     
    const onSubmit = async (event) => {
        event.preventDefault()
        const Reservas = {
            Nombre,
            Correo,
            Telefono,
            Fecha,
            Comensales,
            status: false
        }
        await addDoc( ReservasCollectionReference, Reservas)
        navigate('/Creada')
    }

    return(
        <>
        
        <div className="containerCrud">
            <div className="row">
                <div className="col">
                    

                    
                    <CrudForm 
                    handleSubmit={onSubmit}
                    Nombre={Nombre}
                    setNombre={setNombre}
                    Correo={Correo}
                    setCorreo={setCorreo}
                    Telefono={Telefono}
                    setTelefono={setTelefono}
                    Fecha={Fecha}
                    setFecha={setFecha}
                    Comensales={Comensales}
                    setComensales={setComensales}
                    Button='Enviar'
                
                     />
                    
                         

                </div>
            </div>
        </div>
        
        </>
    )
}