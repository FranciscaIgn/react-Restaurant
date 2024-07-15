import { useEffect, useState } from "react"

import { collection, getDocs } from "firebase/firestore"
import { db } from "../../config/Firebase.config"

import { Link } from "react-router-dom"
import { Button, Table } from "react-bootstrap"
import { deleteReserva } from "../../utils/deleteReserva"




export const TablaGetReservacion = () =>{

       const [ Reservas, setReservas] = useState([]) 

      const ReservasCollectionReference = collection(db, 'Reservas')

      const getReservas = async() =>{
        const data = await getDocs(ReservasCollectionReference);
        setReservas(
          data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        )
           
      }

      useEffect(() => {
        getReservas()
      }, [] )


  return(
    <>
       <div className="container">
        <div className="row">
          <div className="col"></div>

          <Table striped bordered hover>
      <thead className="Tabla">
        <tr>
          <th>Reserva</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Telefono</th>
          <th>Fecha</th>
          <th>Comensales</th>
          <th>Acciones</th>
          
        </tr>
      </thead>
      <tbody>
         {
          Reservas.map( Reservas =>(

            <tr key={Reservas.id}>
                <td>{Reservas.id}</td>
                <td>{Reservas.Nombre}</td>
                <td>{Reservas.Correo}</td>
                <td>{Reservas.Telefono}</td>
                <td>{Reservas.Fecha}</td>
                <td>{Reservas.Comensales}</td>
                <td>
                  <Link to={`/Edit/${Reservas.id}`} className="btn btn-warning mx-2 p-2"> 
                  <i className="fa-solid fa-user-pen"></i> </Link>
                
                  <Button className="buttoneliminar mx-2 p-2" onClick={() => {deleteReserva(Reservas.id), getReservas()}}>
                  <i className="fa-solid fa-trash"></i>
                  </Button>
                </td>
            </tr>
          ))
         } 
      </tbody>
    </Table>
        </div>
       </div>
    </>
  )
}