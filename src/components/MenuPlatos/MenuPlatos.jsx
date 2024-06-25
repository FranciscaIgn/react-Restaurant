import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImgMenuEstacion from '../../assets/ImgMenuEstacion';
import { Container } from 'react-bootstrap';



export const MenuplatosEstaciones = () =>{
    return (
 <>
   <Container className="Cards">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImgMenuEstacion [0].img} alt={ImgMenuEstacion [0].alt} />
      <Card.Body>
        <Card.Title className='title'>Invierno</Card.Title>
        <Card.Text className='cardtext'>
            Plato de estación <br></br>Crema de zapallo con frijoles blancos 
        </Card.Text>
        <Button className='Button1'>Ver más</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImgMenuEstacion [1].img} alt={ImgMenuEstacion [1].alt} />
      <Card.Body>
        <Card.Title className='title'>Otoño</Card.Title>
        <Card.Text className='cardtext'>
        Plato de estación <br></br> Filete con salsa de champiñones y zapallo
        </Card.Text>
        <Button className='Button1'>Ver más</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImgMenuEstacion [2].img} alt={ImgMenuEstacion [2].alt} />
      <Card.Body>
        <Card.Title className='title'>Primavera</Card.Title>
        <Card.Text className='cardtext'>
          Plato de estación <br></br>Rollitos de papel de arroz con verduras
        </Card.Text>
        <Button className='Button1'>Ver más</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImgMenuEstacion [3].img} alt={ImgMenuEstacion [3].alt} />
      <Card.Body>
        <Card.Title className='title'>Verano</Card.Title>
        <Card.Text className='cardtext'>
          Plato de estación <br></br> espagueti relleno con zapallo italiano 
        </Card.Text>
        <Button className='Button1'>Ver más</Button>
      </Card.Body>
    </Card>
    </Container>
 </>
    )
}


export const MenuTragos = () => {
  return(
    <>
    <Container className="Cards2">
    <Card style={{ width: '18rem' }}>
    <Card.Img  className="coctel1"  variant="top" src={ImgMenuEstacion [4].img} alt={ImgMenuEstacion [4].alt} />
      <Card.Body>
        <Card.Title className='title2'>Coctel</Card.Title>
        <Card.Text className='cardtext'>
             Vinos<br></br>cocteles<br></br>destilados
        </Card.Text>
        <Button className='Button1'>Ver más</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImgMenuEstacion [5].img} alt={ImgMenuEstacion [5].alt} />
      <Card.Body>
        <Card.Title className='title2'>Refrescos</Card.Title>
        <Card.Text className='cardtext'>
        Aguas florales <br></br> Jugos Naturales<br></br>Bebidas
        </Card.Text>
        <Button className='Button1'>Ver más</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImgMenuEstacion [6].img} alt={ImgMenuEstacion [6].alt} />
      <Card.Body>
        <Card.Title className='title2'>Té y Café</Card.Title>
        <Card.Text className='cardtext'>
          Té <br></br> Café<br></br>infusiones
        </Card.Text>
        <Button className='Button1'>Ver más</Button>
      </Card.Body>
    </Card>
    </Container>
    </>
  )
}