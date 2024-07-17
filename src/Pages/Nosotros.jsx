

import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { ImagenesNosotros, Imagenesabajo } from "../components/ImagenNosotros/ImagenNosotros"
import { NavBar } from "../components/NavBar/Navbar"




export const Nosotros = () => {
    return(
        <>

        <Header/> 
         <NavBar />
         
         
         
         <ImagenesNosotros />

         <hr></hr>

            <p className="parrafoNosotros">Más allá de la simple decoración de un plato,
            las flores pueden ser un ingrediente que, a modo de sazonador,
            puede aportar sutiles sabores y matices. De todas formas,
            si lo pensamos bien, no es nada del otro mundo: primero porque
            son parte de los vegetales que comemos y, además, porque ya consumimos
            flores como alimentos, aunque no nos hayamos percatado… Las alcachofas,
            la coliflor, las alcaparras o el brócoli son, en realidad, flores. 
            Otra flor que nos parece deliciosa es la del calabacín, que se suele comer rellena,
            rebozada y frita. Y en ese caso sí vemos más claramente la forma de flor.
            Pero ¿se pueden comer las rosas, la lavanda, el geranio o los claveles? Pues sí, 
            claro que sí. Esas y otras muchas, siempre que se hayan cultivado expresamente 
            para ese fin y hayan seguido un control específico y un cultivo totalmente ecológico. 
            ¡Que a nadie se le ocurra pegarle un bocado a un ramo de flores de una floristería!</p>
            
            
            <hr></hr>
            <Imagenesabajo />
            
            
            <Footer />


            

            

       
        </>
    )
}

