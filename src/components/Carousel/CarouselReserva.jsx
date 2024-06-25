import Carousel from 'react-bootstrap/Carousel';
import ImgCarousel from '../../assets/ImgCarousel';

export const CarouselReservacion = () => {
    return (
        <>
    <Carousel className='Carousel'>
    
      <Carousel.Item interval={2000}>
      <img className='ImagenesHome' src={ImgCarousel[0].img} alt={ImgCarousel[0].alt} />
      <img className='ImagenesHome' src={ImgCarousel[1].img} alt={ImgCarousel[1].alt} />
      

      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className='ImagenesHome' src={ImgCarousel[4].img} alt={ImgCarousel[4].alt} />
      <img className='ImagenesHome' src={ImgCarousel[3].img} alt={ImgCarousel[3].alt} />
     

      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img  className='ImagenesHome' src={ImgCarousel[6].img} alt={ImgCarousel[6].alt} />
      <img  className='ImagenesHome' src={ImgCarousel[7].img} alt={ImgCarousel[7].alt} />
     

      </Carousel.Item>
    </Carousel>
        </>
    )
    
}