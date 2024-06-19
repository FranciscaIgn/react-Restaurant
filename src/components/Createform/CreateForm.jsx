import { useState } from "react"

import { collection, addDoc } from "firebase/firestore"
import { db } from "../../config/Firebase.config"

import { CrudForm } from "../CrudForm/CrudForm"





export const CreateForm = () => {

    const [Nombre, setNombre] = useState('')
    const [Correo, setCorreo] = useState('')
    const [Telefono, setTelefono] = useState('')
    const [fechaFormateada, setFechaFormateada] = useState('')
    const [Comensales, setComensales] = useState('')
    
    const ReservasCollectionReference = collection(db, 'Reservas')

    const onSubmit = async (event) => {
        event.preventDefault()
        const Reservas ={
            Nombre,
            Correo,
            Telefono,
            fechaFormateada,
            Comensales
        }
        await addDoc( ReservasCollectionReference, Reservas)
    }

return(
    <>
    <div className="container">
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
                    fechaformateada={fechaFormateada}
                    setFechaFormateada={setFechaFormateada}
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