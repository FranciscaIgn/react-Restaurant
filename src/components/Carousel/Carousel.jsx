import Carousel from 'react-bootstrap/Carousel';
import ImgCarousel from '../../assets/ImgCarousel';

export const Carouselhome = () => {
    return (
        <>
    <Carousel>
    
      <Carousel.Item interval={2000}>
      <img className='ImagenesHome' src={ImgCarousel[0].img} alt={ImgCarousel[0].alt} />
      <img className='ImagenesHome' src={ImgCarousel[1].img} alt={ImgCarousel[1].alt} />
      <img className='ImagenesHome' src={ImgCarousel[2].img} alt={ImgCarousel[2].alt} />

      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className='ImagenesHome' src={ImgCarousel[4].img} alt={ImgCarousel[4].alt} />
      <img className='ImagenesHome' src={ImgCarousel[3].img} alt={ImgCarousel[3].alt} />
      <img className='ImagenesHome' src={ImgCarousel[5].img} alt={ImgCarousel[5].alt} />

      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img  className='ImagenesHome' src={ImgCarousel[6].img} alt={ImgCarousel[6].alt} />
      <img  className='ImagenesHome' src={ImgCarousel[7].img} alt={ImgCarousel[7].alt} />
      <img  className='ImagenesHome' src={ImgCarousel[8].img} alt={ImgCarousel[8].alt} />

      </Carousel.Item>
    </Carousel>
        </>
    )
    
}