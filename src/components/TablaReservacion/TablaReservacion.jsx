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
    }, [Reservas])
     


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
            Reservas.map( Reservas => {
                
                

                <tr key={Reservas.id}>
                    <th>{Reservas.id}</th>
                    <th>{Reservas.Nombre}</th>
                    <th>{Reservas.Correo}</th>
                    <th>{Reservas.Telefono}</th>
                    <th>{Reservas.Fecha}</th>
                    <th>{Reservas.Comensales}</th>
                </tr>
})
       }     
      </tbody>
    </Table>
                
            </div>

        </div>
  </>
    );
}