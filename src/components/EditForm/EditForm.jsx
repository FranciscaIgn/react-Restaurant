import { doc, getDoc, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { db } from "../../config/Firebase.config"
import { CrudForm } from "../CrudForm/CrudForm"





export const EditForm = () => {
    
    const [Nombre, setNombre] = useState('')
    const [Correo, setCorreo] = useState('')
    const [Telefono, setTelefono] = useState('')
    const [Fecha, setFecha] = useState('dd-MM-yy')
    const [Comensales, setComensales] = useState(0)

    const { id } = useParams()
    const navigate = useNavigate()

    const updateReservas = async(id) =>{
        const Reservas = await getDoc(doc(db, 'Reservas',  id))

        if(Reservas.exists()){
            setNombre(Reservas.data().Nombre)
            setCorreo(Reservas.data().Correo)
            setTelefono(Reservas.data().Telefono)
            setFecha(Reservas.data().Fecha)
            setComensales(Reservas.data().Comensales)
        } else {
            console.log('No pudimos enconrar la reserva que buscas :(')
        }
            
    }

    const onUpdate = async (event) =>{
        event.preventDefault()
        const Reservas =doc(db, 'Reservas', id)

        const data = {
            Nombre,
            Correo,
            Telefono,
            Fecha,
            Comensales
        }
        await updateDoc(Reservas, data)
        navigate('/Creada')
    }

    useEffect(() => {
        updateReservas(id)
    }, [])
 
        return (
        
         <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Editar reservacion</h2>

                    
                    <CrudForm
                    handleSubmit={onUpdate}
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
                    Button='Editar'
                     />
                    
                         

                </div>
            </div>
        </div>
        
    )
}