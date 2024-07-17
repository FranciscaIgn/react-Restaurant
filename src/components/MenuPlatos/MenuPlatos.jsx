import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImgMenuEstacion from '../../assets/ImgMenuEstacion';
import { Container } from 'react-bootstrap';
import ImgPostres from '../../assets/ImgPostres';



export const MenuplatosEstaciones = () =>{
    return (
 <>
   <Container className="Cards">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImgMenuEstacion [0].img} alt={ImgMenuEstacion [0].alt} />
      <Card.Body>
        <Card.Title className='title1'>Invierno</Card.Title>
        <Button className='Buttonmenu'>Ver más</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImgMenuEstacion [1].img} alt={ImgMenuEstacion [1].alt} />
      <Card.Body>
        <Card.Title className='title2'>Otoño</Card.Title>
        <Button className='Buttonmenu'>Ver más</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImgMenuEstacion [2].img} alt={ImgMenuEstacion [2].alt} />
      <Card.Body>
        <Card.Title className='title3'>Primavera</Card.Title>
        <Button className='Buttonmenu'>Ver más</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImgMenuEstacion [3].img} alt={ImgMenuEstacion [3].alt} />
      <Card.Body>
        <Card.Title className='title4'>Verano</Card.Title>
        <Button className='Buttonmenu'>Ver más</Button>
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
        <Card.Title className='title5'>Coctel</Card.Title>
        <Card.Text className='cardtext'>
             Vinos<br></br>cocteles<br></br>destilados
        </Card.Text>
        <Button className='Buttontragos'>Ver más</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImgMenuEstacion [5].img} alt={ImgMenuEstacion [5].alt} />
      <Card.Body>
        <Card.Title className='title6'>Refrescos</Card.Title>
        <Card.Text className='cardtext'>
        Aguas florales <br></br> Jugos Naturales<br></br>Bebidas
        </Card.Text>
        <Button className='Buttontragos'>Ver más</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImgMenuEstacion [6].img} alt={ImgMenuEstacion [6].alt} />
      <Card.Body>
        <Card.Title className='title10'>Té y Café</Card.Title>
        <Card.Text className='cardtext'>
          Té <br></br> Café<br></br>infusiones
        </Card.Text>
        <Button className='Buttontragos'>Ver más</Button>
      </Card.Body>
    </Card>
    </Container>
    </>
  )
}

export const MenuPostres = () => {
  return(
    <>
    <Container className="Cards3">
    <Card style={{ width: '18rem' }}>
    <Card.Img  className="coctel1"  variant="top" src={ImgPostres [0].img} alt={ImgPostres [0].alt} />
      <Card.Body>
        <Card.Title className='title7'>tartas</Card.Title>
        
        <Button className='Buttonpostres'>Ver más</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImgPostres [1].img} alt={ImgPostres [1].alt} />
      <Card.Body>
        <Card.Title className='title8'>Helados</Card.Title>
        
        <Button className='Buttonpostres'>Ver más</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ImgPostres [2].img} alt={ImgPostres [2].alt} />
      <Card.Body>
        <Card.Title className='title9'>Mix frutal</Card.Title>
       
        <Button className='Buttonpostres'>Ver más</Button>
      </Card.Body>
    </Card>
    </Container>
    </>
  )
}