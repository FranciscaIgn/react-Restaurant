import { Container } from "react-bootstrap";
import ImagenesSueltas from "../../assets/ImagenesSueltas"
import Image from 'react-bootstrap/Image';

export const ImagenesNosotros = () => {
    return (
        <>
        <center>
        
        <Image className="Campo" src={ImagenesSueltas [0].img} alt={ImagenesSueltas [0].alt} fluid />;

        </center>
        
        </>
    )
}
export const Imagenesabajo = () => {
    return (
        <>
        <Container className="Container">
        <img className="Restaurant1" src={ImagenesSueltas [1].img} alt={ImagenesSueltas [1].alt}  />
        <img className="restaurant2" src={ImagenesSueltas [2].img} alt={ImagenesSueltas [2].alt}  />
        <img className="restaurant3" src={ImagenesSueltas [3].img} alt={ImagenesSueltas [3].alt}  />
        <img className="restaurant4" src={ImagenesSueltas [4].img} alt={ImagenesSueltas [4].alt}  />
        <img className="restaurant5" src={ImagenesSueltas [5].img} alt={ImagenesSueltas [5].alt}  />
        <img className="restaurant6" src={ImagenesSueltas [6].img} alt={ImagenesSueltas [6].alt}  />
        </Container>
        
        </>
    )
}