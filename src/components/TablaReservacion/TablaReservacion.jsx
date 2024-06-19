import { useEffect, useState } from "react"

import {collection, getDocs, } from 'firebase/firestore'
import { db } from '../../config/Firebase.config'
import { Table } from "react-bootstrap"


export const TablaGetReservas = () => {

    const [ Reservas, setReservas ] = useState([]);

     const ReservasCollectionReference = collection(db, 'Reservas') 

     const getReservas = async() => {
        const data = await  getDocs(ReservasCollectionReference)
        setReservas(
            data.docs.map((doc) =>({...doc.data(), id: doc.id}))
        )
     }
     
    useEffect(()=> {
          getReservas()
    }, [])
     


    return (
      <>
        <div className="Container4">
            <div className="Row">
                <div className="col"></div>
                <Table striped bordered hover>
            <thead>
            <tr>
             <th>Nombre</th>
             <th>Correo</th>
             <th>Telefono</th>
             <th>Fecha</th>
             <th>Comensales</th>
             
            </tr>
      </thead>
      <tbody>
      
{
    Reservas.map( reserva => {
        const fecha = new Date(reserva.Fecha.seconds * 1000);
        const fechaFormateada = fecha.toLocaleDateString();
 
        return (
            <tr key={reserva.id}>
               
                <th>{reserva.Nombre}</th>
                <th>{reserva.Correo}</th>
                <th>{reserva.Telefono}</th>
                <th>{fechaFormateada}</th>
                <th>{reserva.Comensales}</th>
            </tr>
        )
    })
}

      </tbody>
    </Table>
                
            </div>

        </div>
  </>
    )
}

