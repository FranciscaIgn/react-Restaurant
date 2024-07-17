import ImagenesSueltas from "../../assets/ImagenesSueltas"
import { Image, Container, Card, Button } from "react-bootstrap"



export const ImagenesBlog=() => {
    return (
        <>
         <Image className="imagenflor" src={ImagenesSueltas [8].img} alt={ImagenesSueltas [8].alt} fluid />;
        </>
    )
}

export const Imagen2 = () =>{
    return (
        <>
       
        <Container className="Cardblog">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImagenesSueltas [9].img} alt={ImagenesSueltas [9].alt} />
      <Card.Body>
        <Card.Title className='conserva'>Conservando Flores</Card.Title>
        <Button className='Buttonflor'>Ver más</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImagenesSueltas [10].img} alt={ImagenesSueltas [10].alt} />
      <Card.Body>
        <Card.Title className='comestibles'>No todas las flores son comestibles</Card.Title>
        <Button className='Buttonflores'>Ver más</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImagenesSueltas [11].img} alt={ImagenesSueltas [11].alt} />
      <Card.Body>
        <Card.Title className='limite'>El límite con las flores</Card.Title>
        <Button className='Buttonflor'>Ver más</Button>
      </Card.Body>
    </Card>

    

    </Container>
        </>
    )
}