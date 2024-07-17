

import { Footer } from "../components/Footer/Footer"
import { Imagen2, ImagenesBlog } from "../components/ImagenesBlog/ImagenesBlog"
import { NavBar } from "../components/NavBar/Navbar"


export const Blog = () => {
    return (
        <>
        <NavBar/>
        <center>
             <h1 className="titleblog">B L O G</h1>
       
        

        <h2 className="Blog">En esta sección podrás revisar nuestras actividades
            y mucha información sobre el mundo de las plantas y 
            flores comestibles
        </h2>
        <h1 className="Cometeelmundo"> Comete el mundo</h1>
        </center>
        <ImagenesBlog className="imagenflor" to='/Flores' />

        <Imagen2/>


        <Footer />
        

        </>
    )
}