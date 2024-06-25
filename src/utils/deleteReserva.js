import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../config/Firebase.config"




export const deleteReserva =async(id) =>{
    const ReservasDoc = doc(db, 'Reservas', id)
    await deleteDoc(ReservasDoc)
}