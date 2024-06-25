
import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { db } from "../config/Firebase.config";

import { doc, deleteDoc } from "firebase/firestore";
 
 export const deleteReservacion = () => {

    const { id } = useParams();
    console.log(id)
 
    useEffect(() => {

        if (id) {

            const deleteReserva = async (id) => {

                try {

                    const ReservasDoc = doc(db, 'Reservas', id);

                    await deleteDoc(ReservasDoc);

                    console.log(`Reservación con ID ${id} eliminada exitosamente.`);

                } catch (error) {

                    console.error("Error al eliminar la reservación:", error);

                }

            };
 
            deleteReserva(id);

        }

    }, [id]);
 
    return (

        <div>

            <h2>Eliminando Reservación...</h2>

        </div>

    );

};
 




    
